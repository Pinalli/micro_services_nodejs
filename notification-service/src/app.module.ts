import { Module } from '@nestjs/common';
import { AppController } from './infra/app.controller';
import { HttpModule } from './http.module';
import { PrismaService } from './prisma.service';
//decorator
@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
