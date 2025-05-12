import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { Story } from '../entity/story.entity';

@Injectable()
export class StoryService {
  constructor(
    @InjectRepository(Story)
    private storyRepository: Repository<Story>,
  ) {};

  async getStory(userId: number): Promise<{ data: Story[] }> {
    const allStory = await this.storyRepository.find();
    return { data: allStory };
  };
};