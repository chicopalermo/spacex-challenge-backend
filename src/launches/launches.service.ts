import { Injectable, Query } from '@nestjs/common';
import { CreateLaunchDto } from './dto/create-launch.dto';
import { UpdateLaunchDto } from './dto/update-launch.dto';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import { LaunchDocument } from './models/launch.schema';
import { LaunchesRepository } from './launches.repository';
import { CommonQueriesDto } from 'src/common/dto/queries.dto';

@Injectable()
export class LaunchesService {
  constructor(
    private readonly httpService: HttpService,
    private readonly launchesRepository: LaunchesRepository
  ) {}

  async importLaunchData() {
    const apiLaunches = await lastValueFrom(this.httpService.get('https://api.spacexdata.com/v5/launches').pipe(
      map((res) => {
        return res.data.map(launch => ({
          _id: launch.id,
          name: launch.name,
          flight_number: launch.flight_number,
          launch_date: launch.date_utc,
          rocket: launch.rocket,
          success: launch.success,
          reused_cores: launch.cores[0].reused,
          logo: launch.links?.patch.small,
          youtube_id: launch.links.youtube_id
        }));
      })
    )); 

    const dbLaunches = await this.launchesRepository.findAll({});

    const dbLaunchesIds = dbLaunches.results.map(obj => obj._id.toString());    

    const newLaunches = apiLaunches.filter(obj => !dbLaunchesIds.includes(obj._id));
      
    return await this.launchesRepository.bulkCreate(newLaunches);
  }

  create(createLaunchDto: CreateLaunchDto) {
    return this.launchesRepository.create(createLaunchDto);
  }

  findAll() {
    return this.launchesRepository.findAll({});
  }

  findAllPaged(queries: CommonQueriesDto) {
    return this.launchesRepository.findAllPaged(queries);
  }

  findOne(id: number) {
    return `This action returns a #${id} launch`;
  }

  update(id: number, updateLaunchDto: UpdateLaunchDto) {
    return `This action updates a #${id} launch`;
  }

  remove(id: number) {
    return `This action removes a #${id} launch`;
  }
}
