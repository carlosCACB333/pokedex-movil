import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { PokeDetails } from '../interfaces/pokeDetailsInterface';

const usePokeFull = (id: string) => {
  const [pokemon, setPokemon] = useState<PokeDetails>({} as PokeDetails);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadPoke = useCallback(async (idx: string) => {
    setIsLoading(true);
    const url = 'https://pokeapi.co/api/v2/pokemon/' + idx;
    const res = await axios.get<PokeDetails>(url);
    setPokemon(res.data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    loadPoke(id);
  }, [loadPoke, id]);

  return { isLoading, pokemon };
};

export default usePokeFull;
