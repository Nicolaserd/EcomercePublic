import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import * as fs from 'fs';
import { marked } from 'marked';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  async getReadme(@Res() res: Response) {
    try {

      if (fs.existsSync("readme.html")) {
        // Si existe, simplemente leemos y enviamos su contenido
        const htmlContent = fs.readFileSync("readme.html", 'utf8');
        res.send(htmlContent);
      } else {
        // Si no existe, leemos el README.md, lo convertimos a HTML y lo guardamos como README.html
        const readmeContent = fs.readFileSync('readme.md', 'utf8');
        const htmlContent = await marked(readmeContent);
        fs.writeFileSync("readme.html", htmlContent);
        res.send(htmlContent);
      }
     
    } catch (error) {
      console.error('Error al leer el archivo README.md:', error);
      res.status(500).send('Error interno del servidor');
    }
  }


}
