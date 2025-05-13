import { Request } from "express";

export class UserLoginDto {
    id: string;
    password: string;
};

export class UserSignupDto {
    id: string;
    password: string;
    nickname: string;
};

export interface AuthenticatedRequest extends Request {
    user: {
        user_id: number;
        loginId: string;
    };
};