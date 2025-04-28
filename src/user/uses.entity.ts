import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsersEntity {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    id: string;

    @Column()
    password: string;

    @Column()
    nickname: string;

    @Column()
    created_at: string;
};
