import { IsMongoId } from 'class-validator';

export class IdParamReqDto {
  @IsMongoId()
  id: string;
}
