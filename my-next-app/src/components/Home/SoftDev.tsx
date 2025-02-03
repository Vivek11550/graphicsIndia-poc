
"use client";

const SoftDev = () => {
  const services = [
    {
      id: 1,
      title: "Software Development",
      description:
        "We provide custom software development solutions to meet your unique business needs, ensuring scalability, security, and high performance.",
    },
    {
      id: 2,
      title: "UI/UX & Web Design",
      description:
        "We provide custom software development solutions to meet your unique business needs, ensuring scalability, security, and high performance.",
    },
    {
      id: 3,
      title: "WordPress Development",
      description:
        "We provide custom WordPress development solutions to meet your unique business needs, ensuring scalability, security, and high performance.",
    },
    {
      id: 4,
      title: "ERP Solutions",
      description:
        "We design intuitive, user-friendly websites with a focus on seamless user experience and modern, responsive designs that engage visitors.",
    },
  ];

  return (
    <div className="container mx-auto px-64 py-10 bg-white ">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Expertise
      </h2>

      {/* Grid layout for two rows with two columns each */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg p-6 w-[500px] h-[140px] flex flex-col justify-center border-l-4 border-purple-500"
          >
            <h3 className="text-xl font-semibold text-black mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftDev;
