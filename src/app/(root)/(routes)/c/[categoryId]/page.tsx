'use client';
import data, { type Category, type Product } from '@/data';

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useFormatter } from 'next-intl';
function ProductCard({ id, title, description, image, price }: Product) {
  return (
    <Link href={`/c/${id}`}>
      <Card className="h-full">
        <CardContent className="flex h-full gap-2">
          <Image
            src={image}
            alt={title}
            width={80}
            height={80}
            loading="lazy"
            className="rounded-full"
          />
          <div className="flex flex-col justify-between">
            <p className="mt-2 font-semibold">
              {title}
            </p>
            {
              description && <p className="mt-2 text-xs text-gray-400">{description}</p>
            }
            <p className="mt-2 font-bold">
              ₺{price}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

type Params = {
  params: {
    categoryId: string;
  };
};
export default function CategoryPage({ params }: Params) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const category = data.find(category => category.id === params.categoryId);
    if (!category) {
      return;
    }

    const filteredProducts = category.products;
    setProducts(filteredProducts);
  }, []);

  return (
    <div className="p-4">
      <h4 className="mb-6 text-2xl font-semibold">
        Menü
      </h4>
      <section className="flex flex-col gap-2">
        {
          products.map(product => <ProductCard key={product.id} {...product} />)
        }
      </section>
    </div>
  );
}
