import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StoryController } from "src/controller/story.controller";
import { Story } from "src/entity/story.entity";
import { StoryService } from "src/service/story.service";
import { AuthModule } from "./auth.module";

@Module({
    imports: [TypeOrmModule.forFeature([Story]), AuthModule],
    controllers: [StoryController],
    providers: [StoryService],
    exports: [StoryService], // 필요시
})
export class StoryModule { };