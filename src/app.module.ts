import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaterbrandModule } from './waterbrand/waterbrand.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { WaterBrand } from './waterbrand/entities/waterbrand.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'ls-ec3cf2622c477164fd649319d251bcffbc0f7ab7.cjq3ivmixgfe.ap-northeast-2.rds.amazonaws.com',
      port: 3306,
      username: 'dbmasteruser',
      password: '!antmd5228^',
      database: 'nestbackend',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    WaterbrandModule,
  ],
})
export class AppModule {}
