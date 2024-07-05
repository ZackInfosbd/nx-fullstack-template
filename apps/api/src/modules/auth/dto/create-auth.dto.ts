import { IsOptional, IsString } from 'class-validator'

export class CreateAuthDto {
  @IsOptional()
  @IsString()
  userName: string

  @IsString()
  firstName: string
}
