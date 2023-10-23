import { Module } from '@nestjs/common';
import * as path from 'path';
import * as glob from 'glob';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [],
  controllers: glob
    .sync(path.join(__dirname + '/controllers/**/*.controller.{ts,js}'))
    .map((file) => require(file))
    .map((object) => object[Object.keys(object)[0]]),

  providers: glob
    .sync(path.join(__dirname + '/services/**/*.service.{ts,js}'))
    .map((file) => require(file))
    .map((object) => object[Object.keys(object)[0]]),
})
export class AppModule { }
