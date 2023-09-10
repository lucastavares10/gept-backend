import {
  FindWorkerLoginRepository,
  FindWorkerLoginRepositoryParams,
  FindWorkerLoginRepositoryResult,
} from '@domain/repositories/authentication/findWorkerLoginRepository';
import { PrismaService } from '@infra/prisma/prisma.service';

export class WorkerRepository implements FindWorkerLoginRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findWorkerLogin(
    data: FindWorkerLoginRepositoryParams,
  ): Promise<FindWorkerLoginRepositoryResult> {
    return await this.prismaService.worker.findUnique({
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        accessLevel: true,
        position: true,
        phone: true,
      },
      where: {
        email: data.email,
      },
    });
  }
}
