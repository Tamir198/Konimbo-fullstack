import fs from 'fs/promises';
import path from 'path';
import { Animal, CreateAnimalDto, UpdateAnimalDto } from '../types/animal';

const dbPath = path.join(__dirname, '../db/animals.json');

const readDb = async (): Promise<{ animals: Animal[] }> => {
  try {
    const data = await fs.readFile(dbPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return { animals: [] };
  }
};

const writeDb = async (data: { animals: Animal[] }): Promise<void> => {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
};

const animalService = {
  async getAllAnimals(): Promise<Animal[]> {
    const db = await readDb();
    return db.animals;
  },

  async getAnimalById(id: string): Promise<Animal | null> {
    const db = await readDb();
    return db.animals.find((animal) => animal.id === id) || null;
  },

  async createAnimal(animalData: CreateAnimalDto): Promise<Animal> {
    const db = await readDb();
    const newAnimal: Animal = {
      id: Date.now().toString(),
      ...animalData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    db.animals.push(newAnimal);
    await writeDb(db);
    return newAnimal;
  },

  async updateAnimal(
    id: string,
    updateData: UpdateAnimalDto
  ): Promise<Animal | null> {
    const db = await readDb();
    const animalIndex = db.animals.findIndex((animal) => animal.id === id);

    if (animalIndex === -1) return null;

    db.animals[animalIndex] = {
      ...db.animals[animalIndex],
      ...updateData,
      updatedAt: new Date(),
    };

    await writeDb(db);
    return db.animals[animalIndex];
  },

  async deleteAnimal(id: string): Promise<boolean> {
    const db = await readDb();
    const animalIndex = db.animals.findIndex((animal) => animal.id === id);

    if (animalIndex === -1) return false;

    db.animals.splice(animalIndex, 1);
    await writeDb(db);
    return true;
  },

  async searchAnimals(query: string): Promise<Animal[]> {
    const db = await readDb();
    const lowercaseQuery = query.toLowerCase();

    return db.animals.filter(
      (animal) =>
        animal.name.toLowerCase().includes(lowercaseQuery) ||
        animal.species.toLowerCase().includes(lowercaseQuery) ||
        animal.color.toLowerCase().includes(lowercaseQuery)
    );
  },
};

export default animalService;
