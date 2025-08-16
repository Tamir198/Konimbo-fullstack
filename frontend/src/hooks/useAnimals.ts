import { useQuery } from '@tanstack/react-query';
import { animalService } from '@/services/animalService';

export const useAnimals = () => {
  const {
    data: animals = [],
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ['animals'],
    queryFn: animalService.getAllAnimals,
  });

  return {
    animals,
    loading,
    error: error?.message || null,
  };
};
