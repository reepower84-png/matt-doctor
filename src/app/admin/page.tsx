'use client';

import { useState, useEffect } from 'react';

interface Inquiry {
  id: number;
  name: string;
  phone: string;
  message: string;
  status: '대기중' | '연락완료' | '상담완료';
  created_at: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
        fetchInquiries();
      } else {
        const data = await response.json();
        setAuthError(data.error || '로그인에 실패했습니다.');
      }
    } catch {
      setAuthError('서버 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchInquiries = async () => {
    try {
      const response = await fetch('/api/inquiries');
      if (response.ok) {
        const data = await response.json();
        setInquiries(data);
      }
    } catch (error) {
      console.error('Failed to fetch inquiries:', error);
    }
  };

  const updateStatus = async (id: number, status: string) => {
    try {
      const response = await fetch('/api/inquiries', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status }),
      });

      if (response.ok) {
        fetchInquiries();
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const deleteInquiry = async (id: number) => {
    if (!confirm('정말 이 문의를 삭제하시겠습니까?')) return;

    try {
      const response = await fetch(`/api/inquiries?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchInquiries();
      }
    } catch (error) {
      console.error('Failed to delete inquiry:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case '대기중':
        return 'bg-yellow-100 text-yellow-800';
      case '연락완료':
        return 'bg-blue-100 text-blue-800';
      case '상담완료':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      const interval = setInterval(fetchInquiries, 30000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">관리자 로그인</h1>
            <p className="text-gray-600 mt-2">매트박사 어드민</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                placeholder="비밀번호를 입력하세요"
                required
              />
            </div>

            {authError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {authError}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-200 ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isLoading ? '로그인 중...' : '로그인'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            매트박사 관리자 페이지
          </h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            로그아웃
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-sm text-gray-500">전체 문의</div>
            <div className="text-3xl font-bold text-gray-900">
              {inquiries.length}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-sm text-gray-500">대기중</div>
            <div className="text-3xl font-bold text-yellow-600">
              {inquiries.filter((i) => i.status === '대기중').length}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-sm text-gray-500">연락완료</div>
            <div className="text-3xl font-bold text-blue-600">
              {inquiries.filter((i) => i.status === '연락완료').length}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-sm text-gray-500">상담완료</div>
            <div className="text-3xl font-bold text-green-600">
              {inquiries.filter((i) => i.status === '상담완료').length}
            </div>
          </div>
        </div>

        {/* Inquiries Table */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">문의 목록</h2>
            <button
              onClick={fetchInquiries}
              className="text-blue-600 hover:text-blue-800 font-medium text-sm"
            >
              새로고침
            </button>
          </div>

          {inquiries.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              접수된 문의가 없습니다.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      접수일시
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      이름
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      전화번호
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      상담문의
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      상태
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      관리
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {inquiries.map((inquiry) => (
                    <tr key={inquiry.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(inquiry.created_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {inquiry.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {inquiry.phone}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                        <div className="truncate" title={inquiry.message}>
                          {inquiry.message}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={inquiry.status}
                          onChange={(e) =>
                            updateStatus(inquiry.id, e.target.value)
                          }
                          className={`text-sm font-medium rounded-full px-3 py-1 border-0 cursor-pointer ${getStatusColor(
                            inquiry.status
                          )}`}
                        >
                          <option value="대기중">대기중</option>
                          <option value="연락완료">연락완료</option>
                          <option value="상담완료">상담완료</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => deleteInquiry(inquiry.id)}
                          className="text-red-600 hover:text-red-800 font-medium"
                        >
                          삭제
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
