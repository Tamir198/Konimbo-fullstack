'use server';

import { animalService } from '@/services/animalService';

export async function getAnimals() {
  try {
    const animals = await animalService.getAllAnimals();
    return { success: true, data: animals };
  } catch (error) {
    console.error('Failed to fetch animals on server:', error);
    return { success: false, error: 'Failed to fetch animals' };
  }
}
