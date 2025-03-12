import React from 'react';
import Card from '../components/card';

const products = [
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics", imageUrl: '/img_2.png' },
    { id: 2, name: "Smartphone", price: 799.99, category: "Electronics", imageUrl: "/img_2.png" },
    { id: 3, name: "Headphones", price: 199.99, category: "Electronics", imageUrl: "/img_2.png" },
    { id: 4, name: "Coffee Maker", price: 49.99, category: "Home Appliances", imageUrl: "/img_2.png" },
    { id: 5, name: "Blender", price: 29.99, category: "Home Appliances", imageUrl: "/img_2.png" },
    { id: 6, name: "Running Shoes", price: 89.99, category: "Footwear", imageUrl: "/img_2.png" },
    { id: 7, name: "Jacket", price: 129.99, category: "Clothing", imageUrl: "/img_2.png" },
    { id: 8, name: "Watch", price: 249.99, category: "Accessories", imageUrl: "/img_2.png" },
    { id: 9, name: "Smartwatch", price: 199.99, category: "Electronics", imageUrl: "/img_2.png" },
    { id: 10, name: "Book", price: 14.99, category: "Books", imageUrl: "/img_2.png" }
];

export default function Page() {
    return (
        <div className=' ml-20 mr-20 justify-center items-center'>
            <h1 className="flex flex-col mx-auto p-5 gap-5 mb-5 mt-5 ml-5 mr-5 bg-amber-400 rounded-2xl justify-center items-center">Product List</h1>
            <div className='grid mx-auto items-center justify-center'>
                {products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}

            </div>
        </div>
    );
}