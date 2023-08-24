export interface MangaInfo {
  data: Info;
}

export interface Info {
  mal_id: number;
  url: string;
  images: { jpg: Image; webp: Image };
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: any[];
  type: string;
  chapters: number;
  volumes: number;
  status: string;
  publishing: boolean;
  published: Published;
  score: number;
  scored: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  authors: Author[];
  serializations: Author[];
  genres: Author[];
  explicit_genres: any[];
  themes: Author[];
  demographics: Author[];
  relations: Relation[];
  external: External[];
}

export interface Author {
  mal_id: number;
  type: Type;
  name: string;
  url: string;
}

export enum Type {
  Anime = 'anime',
  Manga = 'manga',
  People = 'people'
}

export interface External {
  name: string;
  url: string;
}

export interface Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Published {
  from: string;
  to: string;
  prop: Prop;
  string: string;
}

export interface Prop {
  from: From;
  to: From;
}

export interface From {
  day: number;
  month: number;
  year: number;
}

export interface Relation {
  relation: string;
  entry: Author[];
}

export interface Title {
  type: string;
  title: string;
}
