import { Injectable } from '@nestjs/common';
import { CreateRocketDto } from './dto/create-rocket.dto';
import { UpdateRocketDto } from './dto/update-rocket.dto';
import { RocketsRepository } from './rockets.repository';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class RocketsService {
  constructor (
    private readonly httpService: HttpService,
    private readonly rocketsRepository: RocketsRepository
  ) {}

  async importRocketData() {
    const apiRockets = await lastValueFrom(this.httpService.get('https://api.spacexdata.com/v4/rockets').pipe(
      map((res) => {
        return res.data.map(rockets => ({
          _id: rockets.id,
          name: rockets.name
        }));
      })
    )); 

    const dbRockets = await this.rocketsRepository.findAll({});

    const dbRocketsIds = dbRockets.results.map(obj => obj._id.toString());    

    const newRockets = apiRockets.filter(obj => !dbRocketsIds.includes(obj._id));
      
    return await this.rocketsRepository.bulkCreate(newRockets);
  }

  create(createRocketDto: CreateRocketDto) {
    return this.rocketsRepository.create(createRocketDto);
  }

  findAll() {
    return this.rocketsRepository.findAll({});
  }

  findOne(id: number) {
    return `This action returns a #${id} rocket`;
  }

  update(id: number, updateRocketDto: UpdateRocketDto) {
    return `This action updates a #${id} rocket`;
  }

  remove(id: number) {
    return `This action removes a #${id} rocket`;
  }
}
