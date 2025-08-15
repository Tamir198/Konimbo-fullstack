export interface Animal {
  id: string;
  name: string;
  species: string;
  age: number;
  weight: number;
  color: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateAnimalDto {
  name: string;
  species: string;
  age: number;
  weight: number;
  color: string;
}

export interface UpdateAnimalDto {
  name?: string;
  species?: string;
  age?: number;
  weight?: number;
  color?: string;
}
