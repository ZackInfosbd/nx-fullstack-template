import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { add } from '@bestwrist/sample-lib'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): number {
    console.log(add(1, 2))

    return add(1, 2)
  }
}
