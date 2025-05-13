import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, Unique, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Episode } from './episode.entity';
import { Character } from './character.entity';

@Entity('stories')
@Unique(['title'])
export class Story {
  @PrimaryGeneratedColumn({ name: 'story_id' })
  story_id: number;

  @Column({ name: 'user_id' })
  user_id: number;

  @Column()
  title: string;

  @Column({ name: 'sub_title', nullable: true })
  sub_title?: string;

  @Column({ default: '기타', nullable: true })
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