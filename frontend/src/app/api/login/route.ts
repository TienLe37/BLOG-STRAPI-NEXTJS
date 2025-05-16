import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json(); // Đảm bảo bạn có dòng này
  const { identifier, password } = body;
  if (!identifier || !password) {
    return NextResponse.json(
      { error: 'Thiếu thông tin đăng nhập' },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: data.error?.message || 'Sai thông tin' },
        { status: 401 }
      );
    }

    return NextResponse.json({ jwt: data.jwt, user: data.user });
  } catch (err) {
    return NextResponse.json({ error: 'Lỗi hệ thống' }, { status: 500 });
  }
}
