import { ArgsType, Field, Int } from '@nestjs/graphql';

export type WaterBrand = {
  id: string;
  name: string;
  image_url: string;
  purchase_link: string;
  company: string;
  price: number;
};

export type WaterBrandInput = {
  name: string;
  image_url: string;
  purchase_link: string;
  company: string;
  price: number;
};

export type WaterBrandResponse = {
  result: string;
  msg: string;
};
