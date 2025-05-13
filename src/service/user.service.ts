import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { UserLoginDto } from 'src/dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) { };

  async postLogin(req: Request, res: Response): Promise<void> {
    const { id, password } = req.body;
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) throw new UnauthorizedException('존재하지 않는 아이디입니다.');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException("비밀번호가 다릅니다.");

    const payload = { loginId: user.id, user_id: user.user_id };
    const accessToken = this.jwtService.sign(payload);
    
    res.send({ message: '로그인에 성공하였습니다.', status: 201, token: accessToken });
  };

  async postSignup(req: Request, res: Response): Promise<void> {
    const { id, password, nickname } = req.body;

    const idCheck = await this.userRepository.findOne({ where: [{ id }] });
    const nicknameCheck = await this.userRepository.findOne({ where: [{ nickname }] });

    if (idCheck) throw new ConflictException('이미 존재하는 아이디입니다.');
    if (nicknameCheck) throw new ConflictException('이미 존재하는 닉네임입니다.');

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.userRepository.create({ id, password: hashedPassword, nickname });
    await this.userRepository.save(user);

    res.send({ message: '회원가입이 완료되었습니다.', status: 201 });
  };
};
