export interface PokeResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
export interface SimplePoke {
  id: string;
  url: string;
  name: string;
  picture: string;
  color?: string;
}
