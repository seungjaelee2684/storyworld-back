import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { StoryService } from '../service/story.service';
import { Request, Response } from 'express';
import { StoryAllFindDto } from 'src/dto/story.dto';
import { Story } from 'src/entity/story.entity';

@Controller()
export class StoryController {
  constructor(private readonly appService: StoryService) {};

  @Get('/stories/:userId/get')
  getStory(@Param('userId') userId: number): Promise<{ data: Story[] }> {
    return this.appService.getStory(userId);
  };
};