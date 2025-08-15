import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Animals REST API',
      version: '1.0.0',
      description:
        'A TypeScript Express.js API for managing animals with full CRUD operations',
      contact: {
        name: 'API Support',
        email: 'support@example.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        Animal: {
          type: 'object',
          required: ['name', 'species', 'age', 'weight', 'color'],
          properties: {
            id: {
              type: 'string',
              description: 'Unique identifier for the animal',
            },
            name: {
              type: 'string',
              description: 'Name of the animal',
            },
            species: {
              type: 'string',
              description: 'Species of the animal',
            },
            age: {
              type: 'number',
              description: 'Age of the animal in years',
            },
            weight: {
              type: 'number',
              description: 'Weight of the animal in kg',
            },
            color: {
              type: 'string',
              description: 'Color of the animal',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Creation timestamp',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Last update timestamp',
            },
          },
        },
        CreateAnimalDto: {
          type: 'object',
          required: ['name', 'species', 'age', 'weight', 'color'],
          properties: {
            name: {
              type: 'string',
              description: 'Name of the animal',
            },
            species: {
              type: 'string',
              description: 'Species of the animal',
            },
            age: {
              type: 'number',
              description: 'Age of the animal in years',
            },
            weight: {
              type: 'number',
              description: 'Weight of the animal in kg',
            },
            color: {
              type: 'string',
              description: 'Color of the animal',
            },
          },
        },
        UpdateAnimalDto: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Name of the animal',
            },
            species: {
              type: 'string',
              description: 'Species of the animal',
            },
            age: {
              type: 'number',
              description: 'Age of the animal in years',
            },
            weight: {
              type: 'number',
              description: 'Weight of the animal in kg',
            },
            color: {
              type: 'string',
              description: 'Color of the animal',
            },
          },
        },
        Error: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              description: 'Error message',
            },
            message: {
              type: 'string',
              description: 'Additional error details',
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts'],
};

export const specs = swaggerJsdoc(options);
