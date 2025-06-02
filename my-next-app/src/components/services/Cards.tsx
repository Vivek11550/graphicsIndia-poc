// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";

// type CardItem = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
// };

// interface CardImageFormat {
//   url: string;
// }

// interface CardImageFormats {
//   small?: CardImageFormat;
//   [key: string]: CardImageFormat | undefined;
// }

// interface CardIcon {
//   url?: string;
//   formats?: CardImageFormats;
// }

// interface ServiceCard {
//   id: number;
//   title: string;
//   description: string;
//   icon?: CardIcon;
// }

// const Cards = () => {
//   const [cards, setCards] = useState<CardItem[]>([]);

//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/services-cards?populate=*`)
//       .then((response) => response.json())
//       .then((data) => {
//         const cardsArray = data?.data || [];

//         const formattedCards = cardsArray.map((item: ServiceCard) => {
//           const icon = item.icon;
//           const imageUrl = icon?.formats?.small?.url || icon?.url;

//           return {
//             id: item.id,
//             title: item.title || "No Title",
//             description: item.description || "No Description",
//             image: imageUrl
//               ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${imageUrl}`
//               : "https://via.placeholder.com/100",
//           };
//         });

//         setCards(formattedCards);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div className="container mx-auto px-6 py-12">
//       <h2 className="text-3xl font-bold text-center text-black mb-12">
//         Powerful IT Solutions For Your Business Success
//       </h2>
//       <div className="flex flex-wrap justify-center gap-10">
//         {cards.length > 0 ? (
//           cards.map((card) => (
//             <div
//               key={card.id}
//               className="bg-white w-[280px] rounded-2xl shadow-md p-6 text-center hover:shadow-lg hover:-translate-y-1 transition duration-300"
//             >
//               <Image
//                 src={card.image}
//                 alt={card.title}
//                 width={48}
//                 height={48}
//                 className="mx-auto mb-4 rounded-full object-cover"
//               />
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                 {card.title}
//               </h3>
//               <p className="text-sm text-gray-600">{card.description}</p>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-600"></p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cards;

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type CardItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

interface ImageAttributes {
  url: string;
}

interface ImageData {
  attributes: ImageAttributes;
}

interface CardImage {
  data: ImageData | null;
}

interface ServiceCard {
  id: number;
  attributes: {
    title: string;
    description: string;
    image: CardImage;
  };
}

const Cards = () => {
  const [cards, setCards] = useState<CardItem[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/services-cards?populate=*`)
      .then((response) => response.json())
      .then((data) => {
        const cardsArray = data?.data || [];

        const formattedCards = cardsArray.map((item: ServiceCard) => {
          const { id, attributes } = item;
          const { title, description, image } = attributes;

          const imageUrl = image?.data?.attributes?.url;

          return {
            id,
            title: title || "No Title",
            description: description || "No Description",
            image: imageUrl
              ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${imageUrl}`
              : "https://via.placeholder.com/100",
          };
        });

        setCards(formattedCards);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-black mb-12">
        Powerful IT Solutions For Your Business Success
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {cards.length > 0 ? (
          cards.map((card) => (
            <div
              key={card.id}
              className="bg-white w-[280px] rounded-2xl shadow-md p-6 text-center hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={80}
                height={80}
                className="mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600"></p>
        )}
      </div>
    </div>
  );
};

export default Cards;


