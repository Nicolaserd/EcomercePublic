import { Module } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileUploadController } from './file-upload.controller';
import { CloudinaryConfig } from 'src/config/cloudinary';
import { FileUploadRepository } from './file-upload.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from 'src/entities/products.entity';

@Module({
  providers: [FileUploadService,CloudinaryConfig,FileUploadRepository],
  controllers: [FileUploadController],
  imports:[TypeOrmModule.forFeature([Products])]
})
export class FileUploadModule {}
