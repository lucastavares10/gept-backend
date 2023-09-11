import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

//infra modules
import { InfraModule } from '@infra/infra.module';

//api modules
import { AuthenticationModule } from './authentication/authentication.module';
import { WorkerModule } from './worker/worker.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    InfraModule,
    AuthenticationModule,
    WorkerModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
