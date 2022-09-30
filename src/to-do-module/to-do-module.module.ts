import { Module } from '@nestjs/common';
import { ToDoModuleController } from './to-do-module.controller';

@Module({
  controllers: [ToDoModuleController]
})
export class ToDoModuleModule {}
