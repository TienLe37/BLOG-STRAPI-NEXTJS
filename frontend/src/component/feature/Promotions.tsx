import { deals } from "@/utils/constants";

const Promotions = () => {

  return (
    <section className="bg-[#f8fbff] py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-600">Ưu đãi</h2>
        <p className="text-gray-500 text-base mt-2">
          Khuyến mãi, giảm giá và ưu đãi đặc biệt dành riêng cho bạn
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {deals?.map((deal, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={deal.image}
              alt={deal.alt}
              className="w-full h-[240px] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promotions;
