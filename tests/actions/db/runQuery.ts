import { dbConfig } from '@config/dbConfig';
import { Pool } from 'pg';

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
