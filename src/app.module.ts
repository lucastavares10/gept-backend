import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

//configuration files
import application from '@config/application.config';
import security from '@config/security.config';

//modules
import { InfraModule } from '@infra/infra.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [application, security],
      isGlobal: true,
    }),
    InfraModule,
    AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
