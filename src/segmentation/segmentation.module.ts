import { Module } from '@nestjs/common';
import { SegmentationService } from './segmentation.service';
import { SegmentationController } from './segmentation.controller';
import { SegmentationRepository } from './segmentation.repository';

@Module({
  providers: [SegmentationService, SegmentationRepository],
  controllers: [SegmentationController],
})
export class SegmentationModule {}
