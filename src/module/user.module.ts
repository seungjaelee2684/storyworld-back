import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "src/controller/user.controller";
import { User } from "src/entity/user.entity";
import { UserService } from "src/service/user.service";
import { AuthModule } from "./auth.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        AuthModule
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService], // 필요시
})
export class UserModule { };