import { Product } from 'src/types/Product';
import { ServiceResponse } from 'src/types/serviceResponse';
import ProductModel from '../database/models/product.model';

type ProductCreationAttributes = Omit<Product, 'id'>;
type ProductResponseAttributes = Omit<Product, 'orderId'>;
async function createProduct(productData: ProductCreationAttributes)
  : Promise<ServiceResponse<ProductResponseAttributes>> {
  const product = await ProductModel.create(productData);

  const { orderId, ...productDataValues } = product.dataValues;

  return { status: 'CREATED', data: productDataValues };
}

export default { createProduct };
