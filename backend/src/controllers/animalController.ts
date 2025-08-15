import { Request, Response } from 'express';
import animalService from '../services/animalService';
import { CreateAnimalDto, UpdateAnimalDto } from '../types/animal';

export const getAllAnimals = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const animals = await animalService.getAllAnimals();
    res.json(animals);
  } catch (error) { 
    res.status(500).json({ error: 'Failed to fetch animals' });
  }
};

export const getAnimalById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const animal = await animalService.getAnimalById(id);

    if (!animal) {
      res.status(404).json({ error: 'Animal not found' });
      return;
    }

    res.json(animal);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch animal' });
  }
};

export const createAnimal = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const animalData: CreateAnimalDto = req.body;
    const newAnimal = await animalService.createAnimal(animalData);
    res.status(201).json(newAnimal);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create animal' });
  }
};

export const updateAnimal = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData: UpdateAnimalDto = req.body;
    const updatedAnimal = await animalService.updateAnimal(id, updateData);

    if (!updatedAnimal) {
      res.status(404).json({ error: 'Animal not found' });
      return;
    }

    res.json(updatedAnimal);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update animal' });
  }
};

export const deleteAnimal = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await animalService.deleteAnimal(id);

    if (!deleted) {
      res.status(404).json({ error: 'Animal not found' });
      return;
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete animal' });
  }
};

export const searchAnimals = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { q } = req.query;

    if (!q || typeof q !== 'string') {
      res.status(400).json({ error: 'Search query is required' });
      return;
    }

    const animals = await animalService.searchAnimals(q);
    res.json(animals);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search animals' });
  }
};
