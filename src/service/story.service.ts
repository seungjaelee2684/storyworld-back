import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { Story } from '../entity/story.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class StoryService {
  constructor(
    @InjectRepository(Story)
    private storyRepository: Repository<Story>,
    private readonly jwtService: JwtService
  ) {};

  async postCreateStory(req: Request, res: Response): Promise<void> {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).send({ message: 'Not Authorization' });
      return;
    };

    const token = authHeader.replace('Bearer ', '').trim();
    const { title, sub_title, genre, description } = req.body;

    try {
      const decoded = this.jwtService.verify(token);
      const user_id = decoded.user_id;

      const newStory = this.storyRepository.create({ user_id, title, sub_title, genre: genre ? genre : '기타', description });
      await this.storyRepository.save(newStory);

      res.status(200).send({ message: '성공적으로 추가되었습니다.' });
    } catch (error) {
      res.status(401).send({ message: 'Authorization Error' });
    };
  };

  async getStory(req: Request, res: Response): Promise<void> {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).send({ message: 'Not Authorization' });
      return;
    };

    const token = authHeader.replace('Bearer ', '').trim();
    const { page } = req.query;

    try {
      const decoded = this.jwtService.verify(token);
      const user_id = decoded.user_id;

      const allStory = await this.storyRepository.find();
      const storyData = { stories: allStory, isMe: !!user_id };

      res.status(200).send({ message: '조회 완료', data: storyData, page: page });
    } catch (error) {
      res.status(401).send({ message: 'Authorization Error' });
    };
  };

  async getDetailStory(story_id: number, req: Request, res: Response): Promise<void> {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).send({ message: 'Not Authorization' });
      return;
    };

    const token = authHeader.replace('Bearer ', '').trim();
    
    try {
      const decoded = this.jwtService.verify(token);
      const user_id = decoded.user_id;

      const allStory = await this.storyRepository.findOne({ where: { story_id: story_id } });

      res.status(200).send({ message: '조회 완료', data: allStory, auth: !!user_id });
    } catch (error) {
      res.status(401).send({ message: 'Authorization Error' });
    };
  };
};