import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
@Injectable()
export class ProductService {
  private counter = 2;
  private products: Product[] = [
    {
      id: 1,
      name: 'producto 1',
      price: 100,
      stock: 10,
      image: '',
    },
    {
      id: 2,
      name: 'producto 2',
      price: 200,
      stock: 20,
      image: '',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((x) => x.id === id);
    if (!product) {
      throw new NotFoundException(`Producto ${id} no encontrado`);
    }
    return product;
  }

  create(payload: any) {
    this.counter += 1;
    const newProduct = {
      id: this.counter,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const exist = this.products.findIndex((x) => x.id === id);
    if (exist < 0) {
      return { message: 'producto no encontrado' };
    }

    this.products[exist] = {
      id: id,
      ...payload,
    };

    return { message: 'producto actualizado', producto: this.products[exist] };
  }

  delete(id: number) {
    const exist = this.products.findIndex((x) => x.id === id);
    if (exist < 0) {
      return { message: 'producto no encontrado' };
    }

    this.products.splice(exist, 1);

    return { message: 'producto eliminado' };
  }
}
