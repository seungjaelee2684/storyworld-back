import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, Unique } from 'typeorm';
import { Story } from './story.entity';
import { Episode } from './episode.entity';
import { Character } from './character.entity';

@Entity('users')
@Unique(['id', 'nickname'])
export class User {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  user_id: number;

  @Column()
  id: string;

  @Column()
  password: string;

  @Column()
  nickname: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @OneToMany(() => Story, (story) => story.user)
  stories: Story[];

  @OneToMany(() => Episode, (episode) => episode.user)
  episodes: Episode[];

  @OneToMany(() => Character, (character) => character.user)
  characters: Character[];
}