import { Injectable } from '@nestjs/common';
import { CreateRocketDto } from './dto/create-rocket.dto';
import { UpdateRocketDto } from './dto/update-rocket.dto';
import { RocketsRepository } from './rockets.repository';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class RocketsService {
  constructor (
    private readonly httpService: HttpService,
    private readonly rocketsRepository: RocketsRepository
  ) {}

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
