import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserLoginDto } from '../dto/user-login.dto';
import { VerifyEmailDto } from '../dto/verify-email.dto';
import { IUserInfo } from '../interfaces/IUserInfo';

@Controller('users')
export class UsersController {
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    console.log(dto);
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    console.log(dto);
    return dto.signupVerifyToken;
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    console.log(dto);
    return 'hello world';
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<IUserInfo> {
    console.log(userId);
    return {
      id: '1',
      name: 'nwnp',
      email: 'ujmn0418@gmail.com',
    };
  }
}
