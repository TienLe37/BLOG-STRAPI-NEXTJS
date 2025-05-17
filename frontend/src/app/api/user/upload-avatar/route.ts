import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Lấy JWT từ cookie
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Chưa đăng nhập' }, { status: 401 });
    }

    // Parse FormData từ client
    const formData = await req.formData();

    // Gửi lên Strapi
    const uploadRes = await fetch(`${process.env.STRAPI_API_URL}/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`, 
      },
      body: formData,   
    });

    const data = await uploadRes.json();

    if (!uploadRes.ok) {
      return NextResponse.json({ error: data.error || 'Lỗi upload từ Strapi' }, { status: uploadRes.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Lỗi upload:', error);
    return NextResponse.json({ error: 'Upload thất bại' }, { status: 500 });
  }
}
