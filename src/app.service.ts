import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';

type postSignupReqType = {
  id: string,
  password: string
};

@Injectable()
export class AppService {
  postSignup(req: Request, res: Response): void {
    const { id, password } = req.body;
  };
};
