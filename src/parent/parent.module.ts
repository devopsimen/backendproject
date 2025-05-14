import { Module } from '@nestjs/common';
import { ParentController } from './controller/parent.controller';
import { ParentService } from './service/parent.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parent } from './entities/parent.entity';

@Module({
  controllers: [ParentController],
  providers: [ParentService],
  imports:[TypeOrmModule.forFeature([Parent])],
  exports:[ParentService]
})
export class ParentModule {}
