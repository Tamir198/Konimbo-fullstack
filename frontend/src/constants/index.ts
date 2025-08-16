export const FORM_VALIDATION = {
  MIN_NAME_LENGTH: 2,
  MIN_SPECIES_LENGTH: 2,
  MIN_COLOR_LENGTH: 2,
  MIN_AGE: 0,
  MAX_AGE: 100,
  MIN_WEIGHT: 0.1,
  MAX_WEIGHT: 1000,
} as const;

export const ERROR_MESSAGES = {
  NAME_REQUIRED: 'Name is required',
  NAME_MIN_LENGTH: 'Name must be at least 2 characters',
  SPECIES_REQUIRED: 'Species is required',
  SPECIES_MIN_LENGTH: 'Species must be at least 2 characters',
  AGE_MIN: 'Age must be 0 or greater',
  AGE_MAX: 'Age must be 100 or less',
  WEIGHT_MIN: 'Weight must be greater than 0',
  WEIGHT_MAX: 'Weight must be 1000kg or less',
  COLOR_REQUIRED: 'Color is required',
  COLOR_MIN_LENGTH: 'Color must be at least 2 characters',
  ANIMAL_CREATE_FAILED: 'Failed to create animal. Please try again.',
  ANIMAL_FETCH_FAILED: 'Failed to fetch animals',
  ANIMAL_NOT_FOUND: 'Animal Not Found',
  ANIMAL_NOT_FOUND_MESSAGE: "The animal you're looking for doesn't exist.",
  NO_ANIMALS_FOUND: 'No animals found.',
  LOADING: 'Loading...',
  TRY_AGAIN: 'Try Again',
} as const;

export const SUCCESS_MESSAGES = {
  ANIMAL_CREATED: 'Animal created successfully!',
} as const;

export const TEXT = {
  ANIMALS_LIST_TITLE: '🐾 Animals List',
  SEARCH_AND_FILTER: 'Search & Filter',
  SEARCH_ANIMALS: 'Search Animals',
  SEARCH_PLACEHOLDER: 'Search by name, species, color, or age...',
  CLEAR_SEARCH: 'Clear Search',
  CLEAR_ALL_FILTERS: 'Clear All Filters',

  SPECIES: 'Species',
  COLOR: 'Color',
  AGE_RANGE: 'Age Range',
  SORT_BY: 'Sort By',

  ALL_SPECIES: 'All Species',
  ALL_COLORS: 'All Colors',
  ALL_AGES: 'All Ages',
  SELECT_OPTION: 'Select an option...',

  SORT_NAME: 'Name',
  SORT_AGE: 'Age',
  SORT_WEIGHT: 'Weight',

  AGE_0_5: '0-5 years',
  AGE_6_10: '6-10 years',
  AGE_11_15: '11-15 years',
  AGE_16_PLUS: '16+ years',

  VIEW_DETAILS: 'View Details',
  EDIT: 'Edit',

  ANIMAL_INFORMATION: 'Animal Information',
  ADDITIONAL_DETAILS: 'Additional Details',
  BACK_TO_ANIMALS_LIST: '← Back to Animals List',

  ADD_NEW_ANIMAL: '🐾 Add New Animal',
  ANIMAL_NAME: 'Animal Name',
  ANIMAL_NAME_PLACEHOLDER: 'Enter animal name',
  SPECIES_PLACEHOLDER: 'Enter species (e.g., Lion, Elephant)',
  AGE_YEARS: 'Age (years)',
  WEIGHT_KG: 'Weight (kg)',
  COLOR_PLACEHOLDER: 'Enter color description',
  CANCEL: 'Cancel',
  CREATE_ANIMAL: 'Create Animal',
  CREATING: 'Creating...',

  NAME: 'Name:',
  SPECIES_LABEL: 'Species:',
  AGE_LABEL: 'Age:',
  WEIGHT_LABEL: 'Weight:',
  COLOR_LABEL: 'Color:',
  ID: 'ID:',
  YEARS_OLD: 'years old',
  KG: 'kg',
} as const;
