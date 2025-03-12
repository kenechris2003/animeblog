import Card from "./card";

const post = [
  { id: 1, name: "Laptop", price: 999.99, category: "Electronics", imageUrl: '/img_2.png', content: "When we last spoke to you, we filled you in on some of our early pre-orders for the month of March – well, now it’s time to square the circle and talk you through the rest of our March 2025 plans! Let’s waste no time in getting right to it. Mar 10, 2025Andy Hanley" },
  { id: 2, name: "Smartphone", price: 799.99, category: "Electronics", imageUrl: "/img_2.png", content: "When we last spoke to you, we filled you in on some of our early pre-orders for the month of March – well, now it’s time to square the circle and talk you through the rest of our March 2025 plans! Let’s waste no time in getting right to it. Mar 10, 2025Andy Hanley" },
  { id: 3, name: "Headphones", price: 199.99, category: "Electronics", imageUrl: "/img_2.png", content: "When we last spoke to you, we filled you in on some of our early pre-orders for the month of March – well, now it’s time to square the circle and talk you through the rest of our March 2025 plans! Let’s waste no time in getting right to it. Mar 10, 2025Andy Hanley" },
  { id: 4, name: "Coffee Maker", price: 49.99, category: "Home Appliances", imageUrl: "/img_2.png", content: "When we last spoke to you, we filled you in on some of our early pre-orders for the month of March – well, now it’s time to square the circle and talk you through the rest of our March 2025 plans! Let’s waste no time in getting right to it. Mar 10, 2025Andy Hanley" },
  { id: 5, name: "Blender", price: 29.99, category: "Home Appliances", imageUrl: "/img_2.png", content: "When we last spoke to you, we filled you in on some of our early pre-orders for the month of March – well, now it’s time to square the circle and talk you through the rest of our March 2025 plans! Let’s waste no time in getting right to it. Mar 10, 2025Andy Hanley" },
  { id: 6, name: "Running Shoes", price: 89.99, category: "Footwear", imageUrl: "/img_2.png", content: "When we last spoke to you, we filled you in on some of our early pre-orders for the month of March – well, now it’s time to square the circle and talk you through the rest of our March 2025 plans! Let’s waste no time in getting right to it. Mar 10, 2025Andy Hanley" },
  { id: 7, name: "Jacket", price: 129.99, category: "Clothing", imageUrl: "/img_2.png", content: "When we last spoke to you, we filled you in on some of our early pre-orders for the month of March – well, now it’s time to square the circle and talk you through the rest of our March 2025 plans! Let’s waste no time in getting right to it. Mar 10, 2025Andy Hanley" },
  { id: 8, name: "Watch", price: 249.99, category: "Accessories", imageUrl: "/img_2.png", content: "When we last spoke to you, we filled you in on some of our early pre-orders for the month of March – well, now it’s time to square the circle and talk you through the rest of our March 2025 plans! Let’s waste no time in getting right to it. Mar 10, 2025Andy Hanley" },
  { id: 9, name: "Smartwatch", price: 199.99, category: "Electronics", imageUrl: "/img_2.png", content: "When we last spoke to you, we filled you in on some of our early pre-orders for the month of March – well, now it’s time to square the circle and talk you through the rest of our March 2025 plans! Let’s waste no time in getting right to it. Mar 10, 2025Andy Hanley" },
  { id: 10, name: "Book", price: 14.99, category: "Books", imageUrl: "/img_2.png", content: "When we last spoke to you, we filled you in on some of our early pre-orders for the month of March – well, now it’s time to square the circle and talk you through the rest of our March 2025 plans! Let’s waste no time in getting right to it. Mar 10, 2025Andy Hanley" }
];

export default function Content() {
    return (
        <div className="bg-white w-5xl flex flex-col max-w-8xl h-fit mx-auto rounded-xl items-center justify-center px-4 sm:px-6 lg:px-8 pt-8 -mt-25">
            <h1 className="text-center p-5 text-4xl font-extrabold text-black">Blog Highlights</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5'>
                {post.map((post) => (
                    <Card key={post.id} post={post} />
                ))}
            </div>
            
        </div>
        
    );
}