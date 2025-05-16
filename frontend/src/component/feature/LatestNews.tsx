import { newsList } from "@/utils/constants";

const LatestNews = () => {
  return (
    <section className="bg-white py-16 cursor-pointer">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-600">Tin tức mới nhất</h2>
        <p className="text-gray-500 mt-2">
          Tour du lịch Trong nước với OH!Travel. Hành hương đầu xuân – Tận hưởng bản sắc Việt.
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {newsList?.map((item, index) => (
          <div
            key={index}
            className=" bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative overflow-hidden">
                <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover transform group-hover:scale-105 transition duration-500"
                />
            </div>
            <div className="p-4">
              <h3 className="text-md font-semibold text-gray-800 leading-tight mb-2">
                {item.title}
              </h3>
              <div className="flex items-center text-sm text-gray-500 mb-2 space-x-2">
                <span>📅 {item.date}</span>
                <span>👤 {item.author}</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-3">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
