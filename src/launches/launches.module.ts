import { Module } from '@nestjs/common';
import { LaunchesService } from './launches.service';
import { LaunchesController } from './launches.controller';
import { HttpModule } from '@nestjs/axios';
import { DbModule } from 'src/db/db.module';
import { LaunchDocument, LaunchSchema } from './models/launch.schema';
import { LaunchesRepository } from './launches.repository';

@Module({
  imports: [
    HttpModule,
    DbModule,
    DbModule.forFeature([{ name: LaunchDocument.name, schema: LaunchSchema}])
  ],
  controllers: [LaunchesController],
  providers: [LaunchesService, LaunchesRepository]
})
export class LaunchesModule {}
