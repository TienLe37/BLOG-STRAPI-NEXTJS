import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-screen-xl container mx-auto px-4 py-8 text-gray-800 mt-[100px]">
      <nav className="text-xl text-gray-400 mb-4">
        <a href="/" className="hover:text-blue-500">Trang chủ</a> &gt; Giới thiệu
      </nav>

      <h1 className="text-xl font-bold mb-6">Giới thiệu</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Lời ngỏ</h2>
        <p className="mb-2">
          Lời đầu tiên, Công ty cổ phần OH!Travel xin gửi lời chào trân trọng và kính chúc Quý khách hàng và Quý đối tác luôn dồi dào sức khỏe, thành công trong cuộc sống.
          Lữ hành OH!Travel không ngừng lớn mạnh trở thành một trong 10 hãng lữ hành hàng đầu của ngành du lịch Việt Nam.
        </p>
        <p>
          Đồng thời, lĩnh vực kinh doanh ngày càng được mở rộng: cung cấp vé máy bay, đặt phòng khách sạn, dịch vụ vận chuyển, tổ chức sự kiện (M.I.C.E), Free & Easy, Visa...
          OH!Travel đã có chi nhánh tại Hà Nội, Đà Nẵng, TP. HCM, Cần Thơ và mạng lưới đại lý khắp cả nước.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Tầm nhìn và sứ mệnh</h2>
        <p>
          Luôn phấn đấu để giữ vững vị trí là một trong những công ty du lịch hàng đầu của Việt Nam và khu vực.
          Với nguồn lực dồi dào, kinh nghiệm và uy tín, OH!Travel nỗ lực mang đến cho khách hàng những sản phẩm du lịch giá trị nhất.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Triết lý kinh doanh</h2>
        <p>
          Lữ hành OH!Travel luôn coi trọng ý thức trách nhiệm của doanh nghiệp đối với cộng đồng và môi trường,
          phát triển các sản phẩm và hoạt động kinh doanh trên tiêu chí hài hòa lợi ích doanh nghiệp với cộng đồng, xã hội.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">4. Giá trị cốt lõi</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Tuân thủ các cam kết chất lượng đã công bố với khách hàng.</li>
          <li>Xem chất lượng là tiêu chí định hướng và hoạt động kinh doanh cốt lõi.</li>
          <li>Tiên phong trong việc đổi mới, mang đến những sản phẩm du lịch độc đáo và hấp dẫn.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">5. Hành trình phát triển cùng phương châm CHẤT LƯỢNG TIÊN PHONG</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Với hoạt động kinh doanh ban đầu là tổ chức các chương trình du lịch cho du khách nước ngoài vào tham quan Việt Nam và từng bước thử nghiệm các chương trình đưa du khách Việt Nam đi du lịch nước ngoài, dịch vụ vận chuyển, visa… Sau đó, Lữ hành OH!Travel là một trong những công ty du lịch đầu tiên của Việt Nam phát triển thị trường du lịch nước ngoài và nhanh chóng nằm trong top 4 hãng lữ hành có lượng khách du lịch nước ngoài cao nhất. </li>
          <li>Đồng thời, Lữ hành OH!Travel cũng đẩy mạnh thị trường du lịch trong nước và tổ chức được những đoàn khách lớn từ vài trăm lên đến hàng ngàn người. Doanh nghiệp đã khai thác mạnh thị trường du lịch MICE - loại hình du lịch kết hợp hội nghị, hội thảo và hiện nay đang là mũi nhọn trong định hướng kinh doanh của Lữ hành OH!Travel.</li>
          <li>Là một trong những doanh nghiệp đầu tiên xây dựng hệ thống Quản lý chất lượng dịch vụ chuyên nghiệp, Lữ hành OH!Travel không ngừng đầu tư và nâng cấp quy trình tổ chức trước, trong và sau tour chuyên nghiệp. Với slogan CHẤT LƯỢNG TIÊN PHONG cùng 4 cam kết chất lượng, đã trở thành tôn chỉ trong mọi hoạt động của Công ty:</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
