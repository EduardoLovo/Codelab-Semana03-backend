import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product & {}>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Product & {})[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product & {}>;
    update(id: number, updateProductDto: UpdateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product & {}>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
}
