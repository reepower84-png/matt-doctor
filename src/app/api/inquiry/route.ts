import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

interface InquiryInput {
  name: string;
  phone: string;
  message: string;
}

async function sendDiscordNotification(inquiry: InquiryInput & { created_at: string }) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('Discord webhook URL not configured');
    return;
  }

  const embed = {
    title: '새로운 상담 문의가 접수되었습니다!',
    color: 3447003,
    fields: [
      {
        name: '이름',
        value: inquiry.name,
        inline: true,
      },
      {
        name: '전화번호',
        value: inquiry.phone,
        inline: true,
      },
      {
        name: '상담문의',
        value: inquiry.message,
        inline: false,
      },
      {
        name: '접수 시간',
        value: new Date(inquiry.created_at).toLocaleString('ko-KR', {
          timeZone: 'Asia/Seoul',
        }),
        inline: false,
      },
    ],
    footer: {
      text: '매트박사 - 사지말고 고쳐쓰세요!',
    },
    timestamp: inquiry.created_at,
  };

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    });
  } catch (error) {
    console.error('Failed to send Discord notification:', error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('inquiries')
      .insert([
        {
          name,
          phone,
          message,
          status: '대기중',
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: '문의 접수 중 오류가 발생했습니다.' },
        { status: 500 }
      );
    }

    await sendDiscordNotification({
      name,
      phone,
      message,
      created_at: data.created_at,
    });

    return NextResponse.json({ success: true, id: data.id });
  } catch (error) {
    console.error('Error processing inquiry:', error);
    return NextResponse.json(
      { error: '문의 접수 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
