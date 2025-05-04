import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { IdParamReqDto } from '../common/DTOs/id-param.request.dto.ts';
import { GetTopicsQueryDto } from './DTOs/request/query/get-topics-query.dto';
import { GetTagsQueryDto } from './DTOs/request/query/get-tags-query.dto';
import { CreateCategoryReqDto } from './DTOs/request/body/create-category-body.dto';
import { CreateTopicReqDto } from './DTOs/request/body/create-topic-body.dto';
import { CreateTagReqDto } from './DTOs/request/body/create-tag-body.dto';
import { SegmentationService } from './segmentation.service.js';

// TODO: integrate Swagger
// TODO: integrate caching
@Controller('segmentation')
export class SegmentationController {
  constructor(private readonly service: SegmentationService) {}

  @Get('categories')
  async getCategories() {
    return this.service.getCategories();
  }

  @Get('categories/:id')
  async getCategory(@Param() param: IdParamReqDto) {
    return this.service.getCategory(param.id);
  }

  @Post('categories')
  async createCategory(@Body() data: CreateCategoryReqDto) {
    return this.service.createCategory(data);
  }

  @Get('topics')
  async getTopics(@Query() query: GetTopicsQueryDto) {
    return this.service.getTopics(query.categoryId);
  }

  @Get('topics/:id')
  async getTopic(@Param() param: IdParamReqDto) {
    return this.service.getTopic(param.id);
  }

  @Post('topics')
  async createTopic(@Body() data: CreateTopicReqDto) {
    return this.service.createTopic(data);
  }

  @Get('tags')
  async getTags(@Query() query: GetTagsQueryDto) {
    return this.service.getTags(query.topicId);
  }

  @Get('tags/:id')
  async getTag(@Param() param: IdParamReqDto) {
    return this.service.getTag(param.id);
  }

  @Post('tags')
  async createTag(@Body() data: CreateTagReqDto) {
    return this.service.createTag(data);
  }
}
