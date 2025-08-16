import { Request, Response } from 'express';
import animalService from '../services/animalService';
import { Animal, CreateAnimalDto, UpdateAnimalDto } from '../types/animal';

export const getAllAnimals = async (
  req: Request,
  res: Response
): Promise<Animal[]> => {
  try {
    const animals = await animalService.getAllAnimals();
    res.json(animals);
    return animals;
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch animals' });
    throw error;
  }
};

export const getAnimalById = async (
  req: Request,
  res: Response
): Promise<Animal | null> => {
  try {
    const { id } = req.params;
    const animal = await animalService.getAnimalById(id);

    if (!animal) {
      res.status(404).json({ error: 'Animal not found' });
      return null;
    }

    res.json(animal);
    return animal;
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch animal' });
    throw error;
  }
};

export const createAnimal = async (
  req: Request,
  res: Response
): Promise<Animal> => {
  try {
    const animalData: CreateAnimalDto = req.body;
    const newAnimal = await animalService.createAnimal(animalData);
    res.status(201).json(newAnimal);
    return newAnimal;
  } catch (error) {
    res.status(500).json({ error: 'Failed to create animal' });
    throw error;
  }
};

export const updateAnimal = async (
  req: Request,
  res: Response
): Promise<Animal | null> => {
  try {
    const { id } = req.params;
    const updateData: UpdateAnimalDto = req.body;
    const updatedAnimal = await animalService.updateAnimal(id, updateData);

    if (!updatedAnimal) {
      res.status(404).json({ error: 'Animal not found' });
      return null;
    }

    res.json(updatedAnimal);
    return updatedAnimal;
  } catch (error) {
    res.status(500).json({ error: 'Failed to update animal' });
    throw error;
  }
};

export const deleteAnimal = async (
  req: Request,
  res: Response
): Promise<boolean> => {
  try {
    const { id } = req.params;
    const deleted = await animalService.deleteAnimal(id);

    if (!deleted) {
      res.status(404).json({ error: 'Animal not found' });
      return false;
    }

    res.status(204).send();
    return true;
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete animal' });
    throw error;
  }
};

export const searchAnimals = async (
  req: Request,
  res: Response
): Promise<Animal[]> => {
  try {
    const { q } = req.query;

    if (!q || typeof q !== 'string') {
      res.status(400).json({ error: 'Search query is required' });
      throw new Error('Search query is required');
    }

    const animals = await animalService.searchAnimals(q);
    res.json(animals);
    return animals;
  } catch (error) {
    res.status(500).json({ error: 'Failed to search animals' });
    throw error;
  }
};
