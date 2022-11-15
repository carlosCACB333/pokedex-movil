import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { PokeResponse, SimplePoke } from '../interfaces/pokeInterface';

const ImgUrl =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
const usePoke = () => {
  const nextPageUrl = useRef<string | undefined>(
    'https://pokeapi.co/api/v2/pokemon?limit=20',
  );
  const [simplePoke, setSimplePoke] = useState<SimplePoke[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadPokes = useCallback(async () => {
    if (nextPageUrl.current) {
      setIsLoading(true);
      const resp = await axios.get<PokeResponse>(nextPageUrl.current);

      nextPageUrl.current = resp.data.next;

      setSimplePoke(state => [
        ...state,
        ...resp.data.results.map(poke => {
          const urlSplit = poke.url.split('/');
          const id = urlSplit[urlSplit.length - 2];
          return { ...poke, id, picture: ImgUrl + id + '.png' };
        }),
      ]);

      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPokes();
  }, [loadPokes]);

  return { simplePoke, isLoading, loadPokes };
};

export default usePoke;
