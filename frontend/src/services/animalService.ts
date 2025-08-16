import api from './api/api';

export interface Animal {
  id: string;
  name: string;
  species: string;
  age: number;
  weight: number;
  color: string;
}

export interface CreateAnimalData {
  name: string;
  species: string;
  age: number;
  weight: number;
  color: string;
}

export interface UpdateAnimalData extends Partial<CreateAnimalData> {
  id: string;
}

export const animalService = {
  async getAllAnimals(): Promise<Animal[]> {
    const response = await api.get('/api/animals');
    return response.data;
  },

  async getAnimalById(id: string): Promise<Animal> {
    const response = await api.get(`/api/animals/${id}`);
    return response.data;
  },

  async createAnimal(animalData: CreateAnimalData): Promise<Animal> {
    const response = await api.post('/api/animals', animalData);
    return response.data;
  },

  async updateAnimal(
    id: string,
    animalData: Partial<CreateAnimalData>
  ): Promise<Animal> {
    const response = await api.put(`/api/animals/${id}`, animalData);
    return response.data;
  },

  async deleteAnimal(id: string): Promise<void> {
    await api.delete(`/api/animals/${id}`);
  },

  async searchAnimals(query: string): Promise<Animal[]> {
    const response = await api.get(
      `/api/animals/search?q=${encodeURIComponent(query)}`
    );
    return response.data;
  },
};

export default animalService;
