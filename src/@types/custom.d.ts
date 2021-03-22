declare module '*.svg'

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SidebarProps {
  selectedGenreId: number; 
  updateSelectedGenreId: (currentNum: number) => void;
  updateSelectedGenre: (currentGenre: GenreResponseProps) => void;
}

interface ContentProps {
  selectedGenre: GenreResponseProps;
  selectedGenreId: number;
}