# Animals REST API

A TypeScript Express.js application with MVC architecture for managing animals.

## Project Structure

```
src/
├── controllers/     # Request handlers
├── services/        # Business logic
├── routes/          # API endpoints
├── types/           # TypeScript interfaces
├── db/              # JSON database
└── server.ts        # Main server file
```

## Features

- **TypeScript** with modern ES2020 features
- **MVC Architecture** (Model-View-Controller)
- **Functional Programming** style (no classes)
- **JSON File Storage** for simplicity
- **REST API** with full CRUD operations
- **Search functionality** across multiple fields

## API Endpoints

### Animals

- `GET /api/animals` - Get all animals
- `GET /api/animals/:id` - Get animal by ID
- `POST /api/animals` - Create new animal
- `PUT /api/animals/:id` - Update animal
- `DELETE /api/animals/:id` - Delete animal
- `GET /api/animals/search?q=query` - Search animals

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
npm start
```

## Data Model

```typescript
interface Animal {
  id: string;
  name: string;
  species: string;
  age: number;
  weight: number;
  color: string;
  createdAt: Date;
  updatedAt: Date;
}
```

## Example Usage

### Create Animal

```bash
curl -X POST http://localhost:3000/api/animals \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Simba",
    "species": "Lion",
    "age": 3,
    "weight": 150,
    "color": "Golden"
  }'
```

### Get All Animals

```bash
curl http://localhost:3000/api/animals
```

### Search Animals

```bash
curl "http://localhost:3000/api/animals/search?q=lion"
```
