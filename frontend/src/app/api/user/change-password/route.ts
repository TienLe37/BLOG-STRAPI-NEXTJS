import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  const body = await req.json();
  console.log(body);
//   const { currentPassword, newPassword, confirmPassword } = body;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/change-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword: body.currentPassword,
          password: body.newPassword,
          passwordConfirmation: body.confirmPassword,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { message: data.error?.message || 'Thất bại' },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: 'Đổi mật khẩu thành công' });
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
