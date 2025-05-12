import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, Unique, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Episode } from './episode.entity';
import { Character } from './character.entity';

@Entity('stories')
@Unique(['title'])
export class Story {
  @PrimaryGeneratedColumn({ name: 'story_id' })
  storyId: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column()
  title: string;

  @Column({ name: 'sub_title', nullable: true })
  subTitle?: string;

  @Column({ default: '기타' })
  genre: string;

  @Column({ length: 1000, nullable: true })
  description?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.stories, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Episode, (episode) => episode.story)
  episodes: Episode[];

  @OneToMany(() => Character, (character) => character.story)
  characters: Character[];
}