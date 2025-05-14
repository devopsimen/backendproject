import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

import { AuthModule } from './auth/auth.module';
import { ParentModule } from './parent/parent.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:"localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "education",
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, 
    }),

    
    UserModule,


    AuthModule,ParentModule,StudentModule

    
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
