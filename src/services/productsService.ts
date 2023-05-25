import { Product } from 'src/types/Product';
import { ServiceResponse } from 'src/types/serviceResponse';
import ProductModel from '../database/models/product.model';

type ProductCreationAttributes = Omit<Product, 'id'>;
async function createProduct(productData: ProductCreationAttributes)
  : Promise<ServiceResponse<Product>> {
  const product = await ProductModel.create(productData);

  return { status: 'CREATED', data: product.dataValues };
}

export default { createProduct };
