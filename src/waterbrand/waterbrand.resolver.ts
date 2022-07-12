import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class WaterbrandResolver {
    @Query(() => Boolean)
    users(@Args('bool') bool: boolean): boolean {
        return bool;
    }
}
