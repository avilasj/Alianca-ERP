import { Test, TestingModule } from '@nestjs/testing';
import { GarantiasController } from './garantias.controller';

describe('GarantiasController', () => {
  let controller: GarantiasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GarantiasController],
    }).compile();

    controller = module.get<GarantiasController>(GarantiasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
