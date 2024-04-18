/// <reference types="multer" />
import { FileUploadService } from './file-upload.service';
export declare class FileUploadController {
    private readonly FileUploadService;
    constructor(FileUploadService: FileUploadService);
    uploadImage(productId: string, file: Express.Multer.File): Promise<import("src/entities/products.entity").Products>;
}
