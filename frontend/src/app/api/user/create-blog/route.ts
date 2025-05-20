import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const date = formData.get("date") as string;
    const image = formData.get("image") as File | null;
    const userId = formData.get("userId") as string;

    let imageId = null;

    if (image && typeof image === "object") {
      const imgBuffer = await image.arrayBuffer();
      const blob = new Blob([imgBuffer], { type: image.type });

      const uploadForm = new FormData();
      uploadForm.append("files", blob, image.name);

      const uploadRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
        body: uploadForm,
      });

      const uploadData = await uploadRes.json();
      if (uploadRes.ok) {
        imageId = uploadData[0]?.id;
      } else {
        console.error("❌ Upload ảnh thất bại:", uploadData);
        return NextResponse.json({ error: "Lỗi khi upload ảnh" }, { status: 500 });
      }
    }

    const postRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          title,
          description,
          date,
          ...(imageId && { image: imageId }),
          user: parseInt(userId),
        },
      }),
    });

    const postData = await postRes.json();
    
    if (!postRes.ok) {
      console.error("❌ Tạo bài viết thất bại:", postData);
      return NextResponse.json({ error: "Lỗi khi tạo bài viết" }, { status: 500 });
    }

    return NextResponse.json(postData);
  } catch (err) {
    console.error("❌ Lỗi server:", err);
    return NextResponse.json({ error: "Lỗi server khi tạo bài viết" }, { status: 500 });
  }
}
