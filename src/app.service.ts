import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';

type postSignupReqType = {
  id: string,
  password: string
};

@Injectable()
export class AppService {
  getStory(req: Request, res: Response): void {
    res.json({id:"id"});
  };

  postSignup(req: Request, res: Response): void {
    const { id, password, nickname } = req.body;
  };

  postNicknameCheck(req: Request, res: Response): void {

  };
};
