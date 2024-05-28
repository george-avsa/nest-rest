import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './task.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.task.findMany();
  }

  create(dto: CreateTaskDto) {
    return this.prisma.task.create({
      data: dto,
    });
  }

  async toggleCompleted(id: string) {
    const toggledTask = await this.prisma.task.findUnique({
      where: {
        id: +id,
      },
    });

    if (!toggledTask) throw new NotFoundException('Task not found');

    return this.prisma.task.update({
      where: {
        id: toggledTask.id,
      },
      data: {
        isCompleted: !toggledTask.isCompleted,
      },
    });
  }

  async delete(id: string) {
    const deleteTask = await this.prisma.task.delete({
      where: {
        id: +id,
      },
    });

    return deleteTask;
  }

  async changeName(id: string, dtoName: CreateTaskDto) {
    const updatedTask = await this.prisma.task.update({
      where: {
        id: +id,
      },
      data: {
        name: dtoName.name,
      },
    });

    return updatedTask;
  }
}
