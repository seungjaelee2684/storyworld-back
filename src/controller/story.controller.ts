import { Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { StoryService } from '../service/story.service';
import { Request, Response } from 'express';

@Controller()
export class StoryController {
  constructor(private readonly appService: StoryService) {};
 
  @Post('/story/create')
  postCreateStory(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.appService.postCreateStory(req, res);
  };

  @Get('/stories/get')
  getStory(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.appService.getStory(req, res);
  };

  @Get('/story/get/detail/:story_id')
  getDetailStory(@Param() story_id: number, @Req() req: Request, @Res() res: Response): Promise<void> {
    return this.appService.getDetailStory(story_id, req, res);
  };
};