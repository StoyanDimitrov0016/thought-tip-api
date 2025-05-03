import { Test, TestingModule } from '@nestjs/testing';
import { SegmentationRepository } from './segmentation.repository';

describe('SegmentationRepository', () => {
  let provider: SegmentationRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SegmentationRepository],
    }).compile();

    provider = module.get<SegmentationRepository>(SegmentationRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
