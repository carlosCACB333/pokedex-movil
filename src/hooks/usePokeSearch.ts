import axios from 'axios';
import { useEffect, useState } from 'react';
import { PokeResponse, SimplePoke } from '../interfaces/pokeInterface';
const ImgUrl =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const usePokeSearch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokes, setPokes] = useState<SimplePoke[]>([]);

  const loadPokes = async () => {
    setIsLoading(true);
    const res = await axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=2000',
    );
    setPokes(
      res.data.results.map(poke => {
        const urlSplit = poke.url.split('/');
        const id = urlSplit[urlSplit.length - 2];
        return { ...poke, id, picture: ImgUrl + id + '.png' };
      }),
    );

    setIsLoading(false);
  };

  useEffect(() => {
    loadPokes();
  }, []);

  return { isLoading, pokes };
};
export default usePokeSearch;
