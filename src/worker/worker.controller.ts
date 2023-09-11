import { CreateWorkerUseCase } from '@data/usecases/worker/create-worker.usecase';
import { CreateWorkerDto } from '@infra/dtos/worker/create-worker.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('worker')
export class WorkerController {
  constructor(private readonly createWorkerUseCase: CreateWorkerUseCase) {}

  @Post()
  create(@Body() createWorkerDto: CreateWorkerDto) {
    return this.createWorkerUseCase.execute(createWorkerDto);
  }

  // @Get()
  // findAll() {
  //   return this.workerService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.workerService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateWorkerDto: UpdateWorkerDto) {
  //   return this.workerService.update(+id, updateWorkerDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.workerService.remove(+id);
  // }
}
