import { Controller, FileTypeValidator, MaxFileSizeValidator, Param, ParseFilePipe, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadService } from './file-upload.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('files')
export class FileUploadController {
    constructor(private readonly FileUploadService:FileUploadService){}
    @Post("uploadImage/:id")
    @UseGuards(AuthGuard)
    @UseInterceptors(FileInterceptor("file"))
    async uploadImage(
        @Param("id") productId:string,
        @UploadedFile(
            new ParseFilePipe({
                validators:[
                   new MaxFileSizeValidator({
                    maxSize:200000,
                    message:"file is to large >:C"
                   }),
                   new FileTypeValidator({
                    fileType:/(jpg|jpeg|png|webp)$/,

                   })
                ]
            })
        ) file: Express.Multer.File,

    ){
        
        return await this.FileUploadService.uploadImage(file,productId)
    }

}
