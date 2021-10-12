import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductModule } from './product/product.module';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProductModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, UserModule],
})
export class AppModule {}
