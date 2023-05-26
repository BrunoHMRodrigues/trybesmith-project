import { Product } from 'src/types/Product';
import { ServiceResponse } from 'src/types/serviceResponse';
import ProductModel, {
  ProductInputtableTypes,
  ProductSequelizeModel,
} from '../database/models/product.model';

// type ProductCreationAttributes = Omit<Product, 'id'>;
export type ProductResponseAttributes = Omit<Product, 'orderId'>;

async function createProduct(productData: ProductInputtableTypes)
  : Promise<ServiceResponse<ProductResponseAttributes>> {
  const product = await ProductModel.create(productData);

  const { orderId, ...productDataValues } = product.dataValues;

  return { status: 'CREATED', data: productDataValues };
}

async function getAllProducts(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const products = await ProductModel.findAll();

  return { status: 'SUCCESS', data: products };
}

export default { createProduct, getAllProducts };
