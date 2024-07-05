import { Injectable } from '@nestjs/common'
import { CreateAuthDto } from './dto/create-auth.dto'
import { PrismaService } from 'src/providers/prisma/prisma.service'

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  create(createAuthDto: CreateAuthDto) {
    const user = this.prisma.user.create({
      data: {
        uid: 'abscdhhc-237hdhd',
        firstName: createAuthDto.userName,
      },
    })
    return user
  }
}
