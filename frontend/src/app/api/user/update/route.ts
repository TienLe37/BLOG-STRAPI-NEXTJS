import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function PUT(req: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  const body = await req.json();
  const userId = body.id;
  if (!token) {
    return NextResponse.json({ error: 'Chưa đăng nhập' }, { status: 401 });
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json({ error: data.error?.message || 'Lỗi' }, { status: res.status });
    }

    return NextResponse.json({ message: 'Cập nhật thành công', data });
  } catch (err) {
    return NextResponse.json({ error: 'Lỗi server' }, { status: 500 });
  }
}
