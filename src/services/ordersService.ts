import { ServiceResponse } from '../types/serviceResponse';
import ProductModel from '../database/models/product.model';
import OrderModel, {
//   OrderInputtableTypes,
  OrderSequelizeModel,
} from '../database/models/order.model';

// type ProductCreationAttributes = Omit<Product, 'id'>;
// export type ProductResponseAttributes = Omit<Product, 'orderId'>;

async function getAllOrders(): Promise<ServiceResponse<OrderSequelizeModel[]>> {
  const orders = await OrderModel.findAll({
    include: [{ 
      model: ProductModel,
      attributes: ['id'],
      as: 'productIds',
    }],
    // raw: true,
    nest: true,
  });

  //   const { orderId, ...productDataValues } = product.dataValues;

  return { status: 'SUCCESS', data: orders };
}

export default { getAllOrders };
