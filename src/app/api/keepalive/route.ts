import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Supabase 무료 플랜은 1주일 접속이 없으면 일시정지된다(2026-11 실제로 멈춰 문의가 모두 실패).
// Vercel Cron(vercel.json)이 매일 한 번 이 주소를 불러 깨워 둔다.
export const dynamic = 'force-dynamic';

export async function GET() {
  const { error } = await supabase
    .from('inquiries')
    .select('id', { count: 'exact', head: true });

  if (error) {
    console.error('Supabase keepalive 실패:', error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
