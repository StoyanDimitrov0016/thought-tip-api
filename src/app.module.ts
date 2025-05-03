import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SegmentationModule } from './segmentation/segmentation.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    SegmentationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
