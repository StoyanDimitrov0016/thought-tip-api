import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SegmentationModule } from './segmentation/segmentation.module';

@Module({
  imports: [SegmentationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
