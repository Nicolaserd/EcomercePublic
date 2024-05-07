import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import * as fs from 'fs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getReadme(@Res() res: Response) {
    const readmeContent = fs.readFileSync('README.md', 'utf8');
    return res.send(readmeContent);
  }


}
