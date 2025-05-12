import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { EpisodeService } from '../service/episode.service';
import { Request, Response } from 'express';

@Controller()
export class EpisodeController {
  constructor(private readonly appService: EpisodeService) {};

  @Get('/episode')
  getEpisode(@Req() req: Request, @Res() res: Response): void {
    return this.appService.getEpisode(req, res);
  };
};