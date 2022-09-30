import { Test, TestingModule } from '@nestjs/testing';
import { ToDoModuleController } from './to-do-module.controller';

describe('ToDoModuleController', () => {
  let controller: ToDoModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToDoModuleController],
    }).compile();

    controller = module.get<ToDoModuleController>(ToDoModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
