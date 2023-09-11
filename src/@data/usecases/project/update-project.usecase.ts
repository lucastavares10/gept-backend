import {
  UpdateProject,
  UpdateProjectParams,
  UpdateProjectResult,
} from '@domain/usecases/project/updateProject';
import { UpdateProjectRepository } from '@domain/repositories/project/updateProjectRepository';
import { FindByIdProjectRepository } from '@domain/repositories/project/findByIdProjectRepository';
import { NotFoundException } from '@nestjs/common';

export class UpdateProjectUseCase implements UpdateProject {
  constructor(
    private readonly updateProjectRepository: UpdateProjectRepository,
    private readonly findByIdProjectRepository: FindByIdProjectRepository,
  ) {}

  async execute(params: UpdateProjectParams): Promise<UpdateProjectResult> {
    const project = await this.findByIdProjectRepository.findById({
      id: params.id,
    });

    if (!project) throw new NotFoundException('Projeto não encontrado.');

    const newProject = {
      ...project,
      ...params.newData,
    };

    const result = await this.updateProjectRepository.update({
      id: params.id,
      newData: {
        ...newProject,
      },
    });

    return { updated: result.updated };
  }
}
