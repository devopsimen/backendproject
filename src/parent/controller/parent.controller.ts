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
import { CreateParentDto } from '../dto/create-parent.dto';
import { UpdateParentDto } from '../dto/update-parent.dto';
import { Parent } from '../entities/parent.entity';
import { ParentService } from '../service/parent.service';

@Controller('parents')
export class ParentController {
  constructor(private readonly parentService: ParentService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createParentDto: CreateParentDto): Promise<Parent> {
    return await this.parentService.create(createParentDto);
  }

  @Get()
  async findAll(@Query('email') email?: string): Promise<Parent[]> {
    if (email) {
      const parent = await this.parentService.findByEmail(email);
      return parent ? [parent] : [];
    }
    return await this.parentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Parent> {
    return await this.parentService.findOne(id);
  }

  @Get(':id/with-children')
  async findWithChildren(@Param('id', ParseIntPipe) id: number): Promise<Parent> {
    return await this.parentService.findWithChildren(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateParentDto: UpdateParentDto,
  ): Promise<Parent> {
    return await this.parentService.update(id, updateParentDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.parentService.remove(id);
  }
}