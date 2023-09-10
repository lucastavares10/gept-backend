import { Module } from '@nestjs/common';
import { PrismaModule } from '@infra/prisma/prisma.module';
import { BcryptModule } from '@infra/bcrypt/bcrypt.module';
import { JwtTokenModule } from '@infra/jwt-token/jwt-token.module';

@Module({
  imports: [PrismaModule, BcryptModule, JwtTokenModule],
})
export class InfraModule {}
