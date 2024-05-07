//! Archivo de configuración casi siempre es un coy paste ( la estructura va ser la misma )

import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
dotenvConfig({ path: '.env' });
const config = {
  type: 'postgres',
  // host:  `${process.env.DB_HOST}`,
  url: `${process.env.DB_URL}`,
  // port: `${process.env.DB_PORT}` || 5432,
  // username: `${process.env.DB_USER}`,
  // password: `${process.env.DB_PASSWORD}`,
  // database: `${process.env.DB_NAME}`,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: true,
  // dropSchema: true,
  ssl: {
    rejectUnauthorized: false, // Esto puede ser necesario si estás usando certificados autofirmados o no confiables
  },
  

};
export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
