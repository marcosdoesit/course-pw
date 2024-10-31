import { Pool } from 'pg';

const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'zombie',
  password: 'pwd123',
  port: 5432,
};

export const runQuery = async (query: string) => {
  try {
    const pool = new Pool(dbConfig);
    const client = await pool.connect();
    const result = await client.query(query);
    console.log(result.rows);
  } catch (error) {
    console.error('Error running pg query:', error);
  }
};

