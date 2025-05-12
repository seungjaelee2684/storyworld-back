import { Controller, Get, Req, Res } from "@nestjs/common";
import { CharacterService } from "src/service/character.service";
import { Request, Response } from "express";

@Controller()
export class CharacterController {
  constructor(private readonly appService: CharacterService) {};

  @Get('/character')
  getCharacter(@Req() req: Request, @Res() res: Response): void {
    return this.appService.getCharacter(req, res);
  };
};;