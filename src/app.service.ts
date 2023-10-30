import { Injectable } from '@nestjs/common';
import { RocketsService } from './rockets/rockets.service';
import { LaunchesService } from './launches/launches.service';

@Injectable()
export class AppService {
  constructor(
    private readonly rocketsService: RocketsService,
    private readonly launchesService: LaunchesService,
  ){}

  async importData() {
    await this.rocketsService.importRocketData();
    await this.launchesService.importLaunchData();
  }
}
