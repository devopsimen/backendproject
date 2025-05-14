import { 
  Controller, 
  Get, 
  Post, 
  Put, 
  Delete, 
  Body, 
  Param, 
  ParseIntPipe, 
  HttpStatus, 
  HttpCode,
  Query
} from '@nestjs/common';
import { CreateStudentDto } from '../dto/create-student.dto';
import { UpdateStudentDto } from '../dto/update-student.dto';
import { Student } from '../entities/student.entity';
import { StudentService } from '../services/student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return await this.studentService.create(createStudentDto);
  }

  @Get()
  async findAll(
    @Query('email') email?: string,
    @Query('studentId') studentId?: number,
    @Query('classId') classId?: number,
  ): Promise<Student[]> {
    if (email) {
      const student = await this.studentService.findByEmail(email);
      return student ? [student] : [];
    }
    
    if (studentId) {
      const student = await this.studentService.findByStudentId(studentId);
      return student ? [student] : [];
    }
    
    if (classId) {
      return await this.studentService.findByClass(classId);
    }
    
    return await this.studentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Student> {
    return await this.studentService.findOne(id);
  }

  @Get(':id/with-courses')
  async findWithCourses(@Param('id', ParseIntPipe) id: number): Promise<Student> {
    return await this.studentService.findWithCourses(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    return await this.studentService.update(id, updateStudentDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.studentService.remove(id);
  }
}