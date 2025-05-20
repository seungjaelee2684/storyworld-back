import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { Episode } from '../entity/episode.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class EpisodeService {
  constructor(
    @InjectRepository(Episode)
    private episodeRepository: Repository<Episode>,
    private readonly jwtService: JwtService
  ) {};

  async postCreateEpisode(story_id: number, req: Request, res: Response): Promise<void> {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).send({ message: 'Not Authorization' });
      return;
    };

    const token = authHeader.replace('Bearer ', '').trim();
    const { title, main_text, character_list } = req.body;

    try {
      const decoded = this.jwtService.verify(token);
      const user_id = decoded.user_id;

      const newStory = this.episodeRepository.create({ user_id, story_id, title, main_text, character_list });
      await this.episodeRepository.save(newStory);

      res.status(200).send({ message: '성공적으로 추가되었습니다.' });
    } catch (error) {
      res.status(401).send({ message: 'Authorization Error' });
    };
  };

  getEpisode(req: Request, res: Response): void {
    res.json({id:"id"});
  };
};