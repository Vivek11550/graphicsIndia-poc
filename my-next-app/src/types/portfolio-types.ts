export default interface WordpressProjectCardTypes {
  id: number;
  cardTitle: string;
  cardDiscription: string;
  cardImage?: {
    formats?: {
      thumbnail?: {
        url: string;
      };
    };
  };
  projectlink?: string;
}
