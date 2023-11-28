import React from 'react';
import ProductCardMedium from '../ProductCardMedium/ProductCardMedium';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import BreadcrumbItem from '../Breadcrumb/BreadcrumbItem';
import { PaginatedItems } from '../Pagination/Pagination';
import { product } from '../../utils/constants';

const Catalog: React.FC<{
	id?: number;
	name?: string;
	originPrice?: number;
	salesPrice?: number;
	discount?: number;
	url?: string;
}> = () => {
	return (
		<>
			<section className='catalog'>
				<Breadcrumb currentPlace='Apple IPhone'>
					<BreadcrumbItem
						breadcrumbText='Смартфоны'
						breadcrumbPath='/categories'
					/>
				</Breadcrumb>
				<div className='catalog__container-big'>
					<h1 className='catalog__title'>Apple IPhone</h1>
					<div className='catalog__container'>
						<ul className='catalog__collection'>
							<li className='catalog__models'>
								<a className='catalog__model-link' href=''>
									Модель
								</a>
								<ul className='catalog__models'>
									<li className='catalog__model'>
										<a className='catalog__model-link' href=''>
											IPhone 15
										</a>
									</li>
									<li className='catalog__model'>
										<a className='catalog__model-link' href=''>
											IPhone 15 Pro
										</a>
									</li>
									<li className='catalog__model'>
										<a className='catalog__model-link' href=''>
											IPhone 15 Pro Max
										</a>
									</li>
									<li className='catalog__model'>
										<a className='catalog__model-link' href=''>
											IPhone 15 Plus
										</a>
									</li>
									<li className='catalog__model'>
										<a className='catalog__model-link' href=''>
											IPhone 14
										</a>
									</li>
									<li className='catalog__model'>
										<a className='catalog__model-link' href=''>
											IPhone 14 Pro
										</a>
									</li>
									<li className='catalog__model'>
										<a className='catalog__model-link' href=''>
											IPhone 14 Pro Max
										</a>
									</li>
									<li className='catalog__model'>
										<a className='catalog__model-link' href=''>
											IPhone 14 Plus
										</a>
									</li>
								</ul>
							</li>
							<ul className='catalog__models'>
								<a className='catalog__model-link' href=''>
									Другие модели
								</a>
							</ul>
						</ul>
						<ul className='catalog__rendered-list'>
							<PaginatedItems
								itemsPerPage={12}
								items={product.map((product) => (
									<ProductCardMedium
										key={product.id}
										name={product.name}
										originPrice={product.originPrice}
										salesPrice={product.salesPrice}
										discount={product.discount}
										url={''}
									/>
								))}
							/>
						</ul>
					</div>
				</div>
			</section>
			;
		</>
	);
};

export default Catalog;
