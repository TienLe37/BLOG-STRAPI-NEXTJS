import { features } from '../../utils/constants';

const HighlightFeatures = () => {

  return (
    <section className="bg-[#f8fbff] py-16">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features?.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-blue-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-center mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-[60px] h-[60px] rounded-full border-4 border-white shadow-md"
              />
            </div>
            <h3 className="text-lg font-bold text-blue-600 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightFeatures;
