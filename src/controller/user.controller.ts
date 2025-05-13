import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { Request, Response } from 'express';
import { UserLoginDto, UserSignupDto } from 'src/dto/user.dto';
import { User } from 'src/entity/user.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags()
@Controller('user')
export class UserController {
  constructor(private readonly appService: UserService) {};

  @Post('/login')
  postLogin(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.appService.postLogin(req, res);
  };

  @Post('/signup')
  postSignup(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.appService.postSignup(req, res);
  };
};