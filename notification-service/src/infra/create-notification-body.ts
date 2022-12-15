import { IsNotEmpty, IsUUID, Length } from '../infra/class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipinetId: string;

  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  @IsNotEmpty()
  category: string;
}
