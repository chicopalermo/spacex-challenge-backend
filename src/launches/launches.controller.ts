import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LaunchesService } from './launches.service';
import { CreateLaunchDto } from './dto/create-launch.dto';
import { UpdateLaunchDto } from './dto/update-launch.dto';

@Controller('launches')
export class LaunchesController {
  constructor(private readonly launchesService: LaunchesService) {}

  @Post()
  create(@Body() createLaunchDto: CreateLaunchDto) {
    return this.launchesService.create(createLaunchDto);
  }

  @Get()
  findAll() {
    return this.launchesService.findAll();
  }

  @Get('/import')
  import() {
    return this.launchesService.importLaunchData()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.launchesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLaunchDto: UpdateLaunchDto) {
    return this.launchesService.update(+id, updateLaunchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.launchesService.remove(+id);
  }
}
