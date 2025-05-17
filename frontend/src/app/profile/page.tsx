"use client";
import ChangePassword from "@/component/users/ChangePassword";
import PersonalInfo from "@/component/users/PersonalInfo";
import MyPosts from "@/component/users/MyPosts";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { menuProfiles } from "@/utils/constants";

type Tab = "info" | "password" | "posts" | "create";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<Tab>("info");
  const user = useAuthStore((state) => state.user);
   
  return (
    <div className="max-w-screen-lg mx-auto min-h-screen mt-[100px] bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-72 sticky bg-white shadow-lg p-6 flex flex-col items-center rounded-r-3xl">
        <img
          src="/avatar.jpg"
          alt="Avatar"
          className="w-24 h-24 rounded-full shadow mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          {user?.username}
        </h2>
        <nav className="w-full space-y-2">
          {menuProfiles?.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key as Tab)}
              className={`w-full text-left px-4 py-2 rounded-xl transition ${
                activeTab === item.key
                  ? "bg-blue-600 text-white shadow"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          {activeTab === "info" && <PersonalInfo  />}
          {activeTab === "password" && <ChangePassword />}
          {activeTab === "posts" && user && <MyPosts user={user} />}
          {activeTab === "create" && (
            <div className="text-gray-500">Chức năng tạo bài viết sẽ được cập nhật sau.</div>
          )}
        </div>
      </main>
    </div>
  );
}
