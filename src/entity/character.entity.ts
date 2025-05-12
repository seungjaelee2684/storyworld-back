import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Story } from './story.entity';

@Entity('characters')
export class Character {
  @PrimaryGeneratedColumn({ name: 'character_id' })
  characterId: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'story_id' })
  storyId: number;

  @Column()
  name: string;

  @Column({ type: 'int', default: 0 })
  gender: number;

  @Column({ type: 'int', default: 0 })
  age: number;

  @Column({ nullable: true })
  location?: string;

  @Column({ nullable: true })
  occupation?: string;

  @Column({ name: 'trait_list', type: 'json', nullable: true })
  traitList?: any;

  @Column({ nullable: true, type: 'varchar', length: 1000 })
  personality?: string;

  @Column({ name: 'background_story', type: 'text', nullable: true })
  backgroundStory?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.characters, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Story, (story) => story.characters, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'story_id' })
  story: Story;
}