import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { CategoriesRepository } from './categories.repository';
import { Categories } from '../entities/categories.entity';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let mockCategoriesRepository:Partial <CategoriesRepository>
  const  MockCategories = [
    {
    id:"dc760c34-6fd7-4821-b26d-7b10b7b1ee42",
    name: "teclado",
  },
  {
    id:"dc760c34-6fd7-4821-b26d-7b10b7b1ee41",
    name: "mouse",
  }
]

  beforeEach(async () => {


    mockCategoriesRepository = {

        getCategories:()=>Promise.resolve(MockCategories as Partial<Categories[]>),
        addCategories:()=>Promise.resolve("Categories added" as string)
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesService,
        {
            provide:CategoriesRepository,
            useValue:mockCategoriesRepository
        }
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('addCategories() should return a string', async () => {
    
    expect(await service.addCategories()).toEqual("Categories added")
  });
  it('getCategories() should return an array type categories ', async () => {
    
    expect(await service.getCategories()).toEqual(MockCategories)
    const categories = await service.getCategories()
    
    expect(categories[0].name).toEqual("teclado")
  });
});
