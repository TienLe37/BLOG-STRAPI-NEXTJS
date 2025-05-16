// app/profile/page.tsx

import Image from 'next/image';

export default function ProfilePage() {
  const user = {
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    avatar: '/avatar.jpg',
    bio: 'Tôi là một người yêu du lịch, thích khám phá những vùng đất mới.',
    joinedDate: 'Tháng 5, 2024',
    posts: [
      { id: 1, title: 'Khám phá Đà Lạt', slug: '/tours/da-lat' },
      { id: 2, title: 'Phượt Hà Giang', slug: '/tours/ha-giang' },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
        <Image
          src={user.avatar}
          width={120}
          height={120}
          alt="Avatar"
          className="rounded-full shadow-md"
        />
        <h1 className="text-2xl font-semibold mt-4">{user.name}</h1>
        <p className="text-gray-500">{user.email}</p>
        <p className="text-sm text-gray-600 mt-2 text-center">{user.bio}</p>
        <p className="text-xs text-gray-400 mt-1">Tham gia từ: {user.joinedDate}</p>

        <div className="w-full mt-6">
          <h2 className="text-xl font-semibold mb-2">Bài viết của bạn</h2>
          <ul className="space-y-2">
            {user.posts.map((post) => (
              <li key={post.id}>
                <a
                  href={post.slug}
                  className="text-blue-600 hover:underline"
                >
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex gap-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600">
            Chỉnh sửa
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600">
            Đăng xuất
          </button>
        </div>
      </div>
    </div>
  );
}
