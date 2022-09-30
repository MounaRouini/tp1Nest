import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { ToDoModuleModule } from './to-do-module/to-do-module.module';

@Module({
  imports: [PremierModule, ToDoModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
