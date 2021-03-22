import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import {useState} from 'react';

import './styles/global.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  
  const updateSelectedGenreId = (currentNum: number) => {
    setSelectedGenreId(currentNum)
   }

  const updateSelectedGenre = (currentGenre: GenreResponseProps) => {
    setSelectedGenre(currentGenre)
   }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar 
       selectedGenreId={selectedGenreId} 
       updateSelectedGenreId={updateSelectedGenreId} 
       updateSelectedGenre={updateSelectedGenre}
      />
      <Content 
       selectedGenre={selectedGenre} 
       selectedGenreId={selectedGenreId}
      />
    </div>
  )
} 