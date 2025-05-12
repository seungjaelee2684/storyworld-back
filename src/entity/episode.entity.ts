import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Story } from './story.entity';

@Entity('episodes')
export class Episode {
  @PrimaryGeneratedColumn({ name: 'episode_id' })
  episodeId: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'story_id' })
  storyId: number;

  @Column()
  title: string;

  @Column({ name: 'main_text', type: 'text' })
  mainText: string;

  @Column({ name: 'character_list', type: 'json', nullable: true })
  characterList?: any;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.episodes, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Story, (story) => story.episodes, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'story_id' })
  story: Story;
}