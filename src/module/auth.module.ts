import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'mysecretkey',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  exports: [JwtModule], // ✅ 다른 모듈에서 사용 가능하도록 export
})
export class AuthModule {};