import { 
    IsEmail, 
    IsNotEmpty, 
    IsOptional, 
    IsString, 
    IsNumber, 
    IsDate, 
    IsPositive,
    Min,
    Max 
  } from 'class-validator';
  import { Type } from 'class-transformer';
  
  export class CreateStudentDto {
    @IsNotEmpty()
    @IsString()
    studentId: string;
  
    @IsNotEmpty()
    @IsString()
    firstName: string;
  
    @IsNotEmpty()
    @IsString()
    lastName: string;
  
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
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
  
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(12)
    grade: number;
  
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    classId: number;
  
    @IsOptional()
    @IsNumber()
    @IsPositive()
    parentId?: number;
  }