import { 
    IsEmail, 
    IsOptional, 
    IsString, 
    IsNumber, 
    IsDate, 
    IsPositive,
    Min,
    Max 
  } from 'class-validator';
  import { Type } from 'class-transformer';
  
  export class UpdateStudentDto {
    @IsOptional()
    @IsString()
    studentId?: string;
  
    @IsOptional()
    @IsString()
    firstName?: string;
  
    @IsOptional()
    @IsString()
    lastName?: string;
  
    @IsOptional()
    @IsEmail()
    email?: string;
  
    @IsOptional()
    @Type(() => Date)
    @IsDate()
    dateOfBirth?: Date;
  
    @IsOptional()
    @IsString()
    phoneNumber?: string;
  
    @IsOptional()
    @IsString()
    address?: string;
  
    @IsOptional()
    @IsNumber()
    @Min(1)
    @Max(12)
    grade?: number;
  
    @IsOptional()
    @IsNumber()
    @IsPositive()
    classId?: number;
  
    @IsOptional()
    @IsNumber()
    @IsPositive()
    parentId?: number;
  }