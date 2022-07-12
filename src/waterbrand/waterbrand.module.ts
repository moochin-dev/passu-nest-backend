import { Module } from '@nestjs/common';
import { WaterbrandResolver } from './waterbrand.resolver';

@Module({
  providers: [WaterbrandResolver]
})
export class WaterbrandModule {}
