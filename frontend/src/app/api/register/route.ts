import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { username, email, password } = body;

  try {
    // Đăng ký qua Strapi
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log('Kết quả từ Strapi:', data);
    if (!res.ok) {
      return NextResponse.json({ error: data.error?.message || 'Lỗi đăng ký' }, { status: 400 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Lỗi hệ thống' }, { status: 500 });
  }
}
