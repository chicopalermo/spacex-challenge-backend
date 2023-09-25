import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { LaunchesModule } from './launches/launches.module';
import { RocketsModule } from './rockets/rockets.module';
import * as Joi from 'joi';

@Module({
  imports: [
    DbModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGO_URI: Joi.string().required(),
        PORT: Joi.number().required()
      })
    }),
    LaunchesModule,
    RocketsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
