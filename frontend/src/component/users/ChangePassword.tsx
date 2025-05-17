import { useState } from "react";

export default function ChangePassword() {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleChange = () => {
    if (newPass !== confirmPass) {
      alert("Mật khẩu xác nhận không khớp");
      return;
    }

    alert("Yêu cầu đổi mật khẩu đã được gửi!");
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Đổi mật khẩu</h3>
      <div className="space-y-4 max-w-md">
        <input
          type="password"
          placeholder="🔑 Mật khẩu cũ"
          value={oldPass}
          onChange={(e) => setOldPass(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <input
          type="password"
          placeholder="🔐 Mật khẩu mới"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <input
          type="password"
          placeholder="✅ Xác nhận mật khẩu"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow"
          onClick={handleChange}
        >
          Xác nhận
        </button>
      </div>
    </div>
  );
}
