import { Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { EpisodeService } from '../service/episode.service';
import { Request, Response } from 'express';

@Controller()
export class EpisodeController {
  constructor(private readonly appService: EpisodeService) {};

  @Post('/episode/create/:story_id')
  postCreateEpisode(@Param() story_id: number, @Req() req: Request, @Res() res: Response): Promise<void> {
    return this.appService.postCreateEpisode(story_id, req, res);
  };

  @Get('/episodes')
  getEpisode(@Req() req: Request, @Res() res: Response): void {
    return this.appService.getEpisode(req, res);
  };
};