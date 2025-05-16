import { destinations } from "@/utils/constants";

const FavoriteDestinations = () => {
  return (
    <section className="bg-[#f8fbff] py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-600">Điểm đến yêu thích</h2>
        <p className="text-gray-500 mt-2">
          Tour du lịch Trong nước với OH!Travel. Hành hương đầu xuân – Tận hưởng bản sắc Việt.
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-6 hover:text-blue-500">
        {destinations?.map((item, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow    cursor-pointer   hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-52 object-cover opacity-75 hover:opacity-100 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
              <h3 className="font-bold text-base hover:text-blue-500">{item.name}</h3>
              <p className="text-sm">Đã có {item.visitors} lượt khách</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FavoriteDestinations;
