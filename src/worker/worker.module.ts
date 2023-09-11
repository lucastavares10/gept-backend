import { Module } from '@nestjs/common';
import { FindByEmailWorkerRepository } from '@domain/repositories/worker/findByEmailWorkerRepository';
import { CreateWorkerUseCase } from '@data/usecases/worker/create-worker.usecase';
import { WorkerController } from './worker.controller';
import { WorkerRepository } from '@infra/typeorm/repositories/worker.repository';
import { FindByIdsProjectRepository } from '@domain/repositories/project/findByIdsProjectRepository';
import { ProjectRepository } from '@infra/typeorm/repositories/project.repository';

@Module({
  controllers: [WorkerController],
  providers: [
    {
      provide: CreateWorkerUseCase,
      useFactory: (
        workerRepository: FindByEmailWorkerRepository,
        projectRepository: FindByIdsProjectRepository,
      ) => {
        return new CreateWorkerUseCase(workerRepository, projectRepository);
      },
      inject: [WorkerRepository, ProjectRepository],
    },
  ],
})
export class WorkerModule {}
