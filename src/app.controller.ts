import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {};

  @Get('/story')
  getStory(@Req() req: Request, @Res() res: Response): void {
    return this.appService.getStory(req, res);
  }

  @Post('/signup')
  postSignup(@Req() req: Request, @Res() res: Response): void {
    return this.appService.postSignup(req, res);
  };

  @Post('/nickname/check')
  postNicknameCheck(@Req() req: Request, @Res() res: Response): void {
    return this.appService.postNicknameCheck(req, res);
  };
};