/// <reference types="multer" />
import { FileUploadRepository } from './file-upload.repository';
import { Products } from 'src/entities/products.entity';
import { Repository } from 'typeorm';
export declare class FileUploadService {
    private readonly fileUploadRepository;
    private readonly productsRepository;
    constructor(fileUploadRepository: FileUploadRepository, productsRepository: Repository<Products>);
    uploadImage(file: Express.Multer.File, productId: string): Promise<Products>;
}
