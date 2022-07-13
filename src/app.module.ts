import { Module } from '@nestjs/common';
import { BrandModule } from './brand/brand.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './configs/typeorm.config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { SourceModule } from './source/source.module';
import { MappingModule } from './mapping/mapping.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    BrandModule,
    SourceModule,
    MappingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
