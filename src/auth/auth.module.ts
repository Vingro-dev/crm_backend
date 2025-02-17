import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from 'src/users/users.module';
import { MailerModule } from 'src/mailer/mailer.module';
import { SessionsModule } from 'src/sessions/sessions.module';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    MailerModule,
    SessionsModule,
    JwtModule.register({
      secret: 'your_secret_key',  // Replace with your secret key
      signOptions: { expiresIn: '7d' },  // Token expires in 1 hour
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule { }
