import slugify from "slugify";

 export const features = [
    {
      title: 'Các Thông Tin Tour Mới Nhất',
      description: 'Luôn cập nhật các thông tin mới nhất, đầy đủ nhất về các tour tốt nhất hiện nay',
      image: '/tour.png',
    },
    {
      title: 'Chuyên Gia Tư Vấn Chi Tiết Nhất',
      description: 'Các tư vấn chuyên gia luôn sẵn sàng tư vấn tận tâm chi tiết tốt nhất',
      image: '/avatar.jpg',
    },
    {
      title: 'Các Khuyến Mại & Giá Luôn Tốt Nhất',
      description: 'Các deal & chương trình promotion được cập nhật mới nhất với giá tốt nhất cho bạn',
      image: '/avatar-3.png',
    },
  ];

export const deals = [
    {
      title: 'Welcome to Quảng Bình',
      image: 'https://bizweb.dktcdn.net/100/489/447/themes/912592/assets/m_banner_1_1.jpg?1743654439525',
      alt: 'Welcome to Quảng Bình',
    },
    {
      title: 'Hello Hong Kong',
      image: 'https://bizweb.dktcdn.net/100/489/447/themes/912592/assets/m_banner_1_2.jpg?1743654439525',
      alt: 'Hello Hong Kong',
    },
    {
      title: 'Khám phá Tây Bắc',
      image: 'https://bizweb.dktcdn.net/100/489/447/themes/912592/assets/m_banner_1_3.jpg?1743654439525',
      alt: 'Khám phá Tây Bắc',
    },
  ];
export const destinations = [
  {
    name: 'Hà Nội',
    visitors: '176,072',
    image: 'https://bizweb.dktcdn.net/thumb/large/100/489/447/themes/912592/assets/cate_1.jpg?1743654439525',
  },
  {
    name: 'Đà Nẵng',
    visitors: '86,712',
    image: 'https://bizweb.dktcdn.net/thumb/large/100/489/447/themes/912592/assets/cate_2.jpg?1743654439525',
  },
  {
    name: 'Đà Lạt',
    visitors: '24,5218',
    image: 'https://bizweb.dktcdn.net/thumb/large/100/489/447/themes/912592/assets/cate_3.jpg?1743654439525',
  },
  {
    name: 'Phú Quốc',
    visitors: '54,321',
    image: 'https://bizweb.dktcdn.net/thumb/large/100/489/447/themes/912592/assets/cate_4.jpg?1743654439525',
  },
  {
    name: 'Châu Á',
    visitors: '38,632',
    image: 'https://bizweb.dktcdn.net/thumb/large/100/489/447/themes/912592/assets/cate_5.jpg?1743654439525',
  },
  {
    name: 'Châu Mỹ',
    visitors: '24,832',
    image: 'https://bizweb.dktcdn.net/thumb/large/100/489/447/themes/912592/assets/cate_6.jpg?1743654439525',
  },
  {
    name: 'Châu Âu',
    visitors: '35,482',
    image: 'https://bizweb.dktcdn.net/thumb/large/100/489/447/themes/912592/assets/cate_7.jpg?1743654439525',
  },
  {
    name: 'Châu Úc',
    visitors: '14,321',
    image: 'https://bizweb.dktcdn.net/thumb/large/100/489/447/themes/912592/assets/cate_8.jpg?1743654439525',
  },
];

export const newsList = [
  {
    title: 'Du hành ngược thời gian tại làng dân gian Naganeupseong Hàn Quốc',
    date: '8/05/2025',
    author: 'Lê Văn Tiến',
    image: 'https://bizweb.dktcdn.net/100/489/447/articles/6-1.jpg?v=1688305324900',
    description:
      'Với lịch sử gần 700 năm, ngôi làng pháo đài Naganeupseong của Hàn Quốc khiến người ta ngỡ ngàng bởi thời gian dường như ngừng lại ở nơi đây...',
  },
  {
    title: 'Cắm trại ở Chư Nam ngắm thiên đường mây ở độ cao',
    date: '9/05/2025',
    author: 'Lê Văn Tiến',
    image: 'https://bizweb.dktcdn.net/100/489/447/articles/5.jpg?v=1688305387470',
    description:
      'Đỉnh Chư Nam Gia Lai là địa điểm dừng chân hấp dẫn thu hút những người đam mê trekking, khám phá thiên nhiên và cắm trại...',
  },
  {
    title: 'Kinh nghiệm cắm trại trên núi Bà Đen Tây Ninh cuối tuần siêu trải nghiệm',
    date: '11/05/2025',
    author: 'Lê Văn Tiến',
    image: 'https://bizweb.dktcdn.net/100/489/447/articles/4.jpg?v=1688305102097',
    description:
      'Cắm trại núi Bà Đen đang là một trong những hoạt động hấp dẫn được nhiều bạn trẻ quan tâm. Với phong cảnh hùng vĩ, hoang sơ...',
  },
  {
    title: 'Kinh nghiệm cắm trại trên núi Bà Đen Tây Ninh cuối tuần siêu trải nghiệm',
    date: '12/05/2025',
    author: 'Lê Văn Tiến',
    image: 'https://bizweb.dktcdn.net/100/489/447/articles/3.jpg?v=1688304814390',
    description:
      'Cắm trại núi Bà Đen đang là một trong những hoạt động hấp dẫn được nhiều bạn trẻ quan tâm. Với phong cảnh hùng vĩ, hoang sơ...',
  },
];

  export const toSlug = (str: string) => {
    return slugify(str, {
      lower: true,      // chữ thường
      strict: true,     // bỏ ký tự đặc biệt
      locale: 'vi',     // hỗ trợ tiếng Việt tốt hơn
    });
  };