import card1 from "../../Assets/service-assets/card1.png";
import card2 from "../../Assets/service-assets/card2.png";
import card3 from "../../Assets/service-assets/card3.png";
import card4 from "../../Assets/service-assets/card4.png";
import card5 from "../../Assets/service-assets/card5.png";
import card6 from "../../Assets/service-assets/card6.png";
import card7 from "../../Assets/service-assets/card7.png";


const cards = [
  {
    id: 1,
    title: "Custom Web Design",
    description:
      "We create visually stunning, user-friendly websites tailored to your brand's identity and business goals.",
    image: card1,
  },
  {
    id: 2,
    title: "Responsive Design",
    description:
      "Our responsive designs ensure your website looks great on all devices, providing an optimal viewing experience.",
    image: card2,
  },
  {
    id: 3,
    title: "E-Commerce Solutions",
    description:
      "We offer comprehensive e-commerce solutions, from product management to secure payment gateways, for a smooth shopping experience.",
    image: card3,
  },
  {
    id: 4,
    title: "Search Engine Optimization (SEO)",
    description:
      "Boost your website's visibility with our SEO services, designed to improve search rankings and drive organic traffic.",
    image: card4,
  },
  {
    id: 5,
    title: "Content Management Systems (CMS)",
    description:
      "Manage your website easily with our CMS solutions, specializing in platforms like WordPress for hassle-free content updates.",
    image: card5,
  },
  {
    id: 6,
    title: "WordPress Development",
    description:
      "We specialize in custom WordPress solutions, including theme and plugin development, ensuring your site is dynamic, SEO-friendly, and easy to manage.",
    image: card6,
  },
  {
    id: 7,
    title: "Strapi",
    description:
      "Strapi is an open-source headless CMS for building scalable, customizable, and API-driven digital experiences.",
    image: card7,
  },
];

const Cards = () => {
  return (
    <div className="container mx-auto px-[10%] bg-[white] py-8">
      <h2 className="text-3xl font-bold text-center text-black mb-12">
        Powerful IT Solutions For Your Business Success
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.1] transition-scale duration-600  transition-shadow duration-300"
          >
            <img
              src={card.image.src} 
              alt={card.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
