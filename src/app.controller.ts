import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { Cron } from '@nestjs/schedule';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMessage(@Res() res: Response): Response {
    return res.status(200).json({
      message: "Fullstack Challenge 🏅 - Space X API"
    });
  }

  @Get('/import')
  @Cron('0 0 9 * * *')
  import() {
    return this.appService.importData();
  }
}
