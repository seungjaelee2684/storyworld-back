import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CharacterController } from "src/controller/character.controller";
import { Character } from "src/entity/character.entity";
import { CharacterService } from "src/service/character.service";

@Module({
    imports: [TypeOrmModule.forFeature([Character])],
    controllers: [CharacterController],
    providers: [CharacterService],
    exports: [CharacterService], // 필요시
})
export class CharacterModule { };