import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAll() {
    return this.taskService.getAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: CreateTaskDto) {
    return this.taskService.create(dto);
  }

  @Patch(':id')
  async toggleCompleted(@Param('id') id: string) {
    return this.taskService.toggleCompleted(id);
  }

  @Patch('/change-name/:id')
  @UsePipes(new ValidationPipe())
  async changeName(@Param('id') id: string, @Body() dto: CreateTaskDto) {
    return this.taskService.changeName(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
