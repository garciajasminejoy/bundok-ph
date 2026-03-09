export interface Hike {
  id: number;
  trailId: number;
  name: string;
  location: string;
  difficulty: string;
  description: string;
  date: Date;
  organizer: string;
  ratings: number;
  isSale: boolean;
}
