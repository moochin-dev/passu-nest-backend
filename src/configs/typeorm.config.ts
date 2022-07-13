import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'ls-ec3cf2622c477164fd649319d251bcffbc0f7ab7.cjq3ivmixgfe.ap-northeast-2.rds.amazonaws.com',
  port: 3306,
  username: 'dbmasteruser',
  password: '!antmd5228^',
  database: 'nestbackend',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  logging: true,
};
