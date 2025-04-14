// types/service-cards.ts

export interface ApiCardImage {
    url?: string;
  }
  
  export interface ApiCardItem {
    id: number;
    attributes: {
      cardTitle?: string;
      cardDiscription?: string;
      cardImage?: {
        data?: {
          attributes?: ApiCardImage;
        };
      };
    };
  }
  
  export interface ApiResponse {
    data: ApiCardItem[];
  }
  
  export interface FormattedCard {
    id: number;
    title: string;
    description: string;
    image: string;
  }
  
  