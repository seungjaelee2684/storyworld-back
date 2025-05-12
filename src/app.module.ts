import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './module/user.module';
import { StoryModule } from './module/story.module';
import { EpisodeModule } from './module/episode.module';
import { CharacterModule } from './module/character.module';
import { AuthModule } from './module/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "mysql",
        host: process.env.DB_HOST || "",
        port: 3306,
        username: process.env.DB_USERNAME || "",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_DATABASE || "",
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // 개발용: true (운영 시 false로)
      })
    }),
    AuthModule,
    UserModule,
    StoryModule,
    EpisodeModule,
    CharacterModule,
  ],
})
export class AppModule { };
