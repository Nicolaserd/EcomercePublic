import { AppService } from './app.service';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getReadme(res: Response): Response<any, Record<string, any>>;
}
