import { Controller, Delete, Get, Param, Patch, Post, Req, Res } from '@nestjs/common';
import { StoryService } from '../service/story.service';
import { Request, Response } from 'express';

@Controller()
export class StoryController {
  constructor(private readonly appService: StoryService) {};
 
  @Post('/story/create')
  postCreateStory(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.appService.postCreateStory(req, res);
  };

  @Patch('/story/update/:story_id')
  patchUpdateStory(@Param() story_id: number, @Req() req: Request, @Res() res: Response): Promise<void> {
    return this.appService.patchStoryUpdate(story_id, req, res);
  };

  @Get('/stories/get')
  getStory(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.appService.getStory(req, res);
  };

  @Get('/story/get/detail/:story_id')
  getDetailStory(@Param() story_id: number, @Req() req: Request, @Res() res: Response): Promise<void> {
    return this.appService.getDetailStory(story_id, req, res);
  };

  @Delete('/story/delete/:story_id')
  deleteStory(@Param() story_id: number, @Req() req: Request, @Res() res: Response): Promise<void> {
    return this.appService.deleteStory(story_id, req, res);
  };
};