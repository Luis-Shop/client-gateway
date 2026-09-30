import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}

	@Post()
	createProduct() {
		return 'Crea un producto';
	}

	@Get()
	findAllProducts() {
		return 'Está función retorna varios productos'
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return `Esta función retorna el producto ${id}`
	}

	@Delete(':id')
	deleteProduct(@Param('id') id: string) {
		return `Esta función elimina el producto ${id}`
	}

	@Patch(':id')
	pacthProduct(@Param('id') id: string, @Body() body: any) {
		return `Esta función actualiza el producto ${id}`
	}
}
