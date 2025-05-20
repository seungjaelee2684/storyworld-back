import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EpisodeController } from "src/controller/episode.controller";
import { Episode } from "src/entity/episode.entity";
import { EpisodeService } from "src/service/episode.service";
import { AuthModule } from "./auth.module";

@Module({
    imports: [TypeOrmModule.forFeature([Episode]), AuthModule],
    controllers: [EpisodeController],
    providers: [EpisodeService],
    exports: [EpisodeService], // 필요시
})
export class EpisodeModule { };