import path from 'path';

export const getDbPath = (dbName: string): string => {
  return path.join(__dirname, '../db', dbName);
};
