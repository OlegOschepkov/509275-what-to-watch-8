export type Movie = {
  id: number,
  name: string,
  poster?: string,
  alt?: string,
  bgPoster?: string,
  rating?: number,
  description?: string,
  scoresCount?: number,
  director?: string,
  starring?: string[],
  runtime?: number,
  genre?: string,
  released?: number,
  videoLink?: string,
  previewVideoLink?: string,
  previewImg?: string,
  isFavorite?: boolean,
}

export type Movies = Movie[];
