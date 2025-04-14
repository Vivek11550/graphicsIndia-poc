'use client';

import { useState, useEffect } from 'react';
import {
  ApiResponse,
  FormattedCard,
  ApiCardItem,
} from '../../../lib/types/servicepage-types'; 

const Cards = () => {
  const [cards, setCards] = useState<FormattedCard[]>([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/services-cards?populate=*')
      .then((response) => response.json())
      .then((data: ApiResponse) => {
        const cardsArray: ApiCardItem[] = Array.isArray(data?.data) ? data.data : [];

        const formattedCards: FormattedCard[] = cardsArray.map((item) => {
          const attributes = item.attributes || {};
          const imageUrl = attributes.cardImage?.data?.attributes?.url;

          return {
            id: item.id,
            title: attributes.cardTitle || 'No Title',
            description: attributes.cardDiscription || 'No Description',
            image: imageUrl
              ? `http://localhost:1337${imageUrl}`
              : 'https://via.placeholder.com/300',
          };
        });

        setCards(formattedCards);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto px-[10%] bg-[white] py-8">
      <h2 className="text-3xl font-bold text-center text-black mb-12">
        Powerful IT Solutions For Your Business Success
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.length > 0 ? (
          cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.1] transition-scale duration-600 transition-shadow duration-300"
            >
              <img
                src={card.image}
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
          ))
        ) : (
          <p className="text-center text-gray-600">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Cards;
