import { Test, TestingModule } from '@nestjs/testing';
import { GarantiasService } from './garantias.service';

describe('GarantiasService', () => {
  let service: GarantiasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GarantiasService],
    }).compile();

    service = module.get<GarantiasService>(GarantiasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
