import { Module } from '@nestjs/common';
import { RocketsService } from './rockets.service';
import { RocketsController } from './rockets.controller';
import { HttpModule } from '@nestjs/axios';
import { DbModule } from 'src/db/db.module';
import { RocketDocument, RocketSchema } from './models/rocket.schema';

@Module({
  imports: [
    HttpModule,
    DbModule,
    DbModule.forFeature([{ name: RocketDocument.name, schema: RocketSchema}])
  ],
  controllers: [RocketsController],
  providers: [RocketsService]
})
export class RocketsModule {}
