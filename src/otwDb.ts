import config from './common/config/config';
import mysql, { Pool } from 'mysql2';

class OtwDb {
  private conn: Pool;

  constructor() {
    this.conn = mysql.createPool({
      connectionLimit: 100,
      host: config.DB_HOST,
      user: config.DB_USER,
      password: config.DB_PASS,
      database: config.DB_NAME,
      queueLimit: 100,
      port: parseInt(config.DB_PORT),
    });
  }

  /*  getConnection  */
  public getPool(): Pool {
    return this.conn;
  }
}

export const dbCon = new OtwDb();

export default OtwDb;
