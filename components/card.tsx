
import Link from 'next/link'
interface Post {
    id: number;
    name: string;
    imageUrl: string;
    content: string;
    
}

interface CardProps {
    post: Post;
}


export default function Card({ post }: CardProps) {

    return (
        <div key={post.id} className="flex flex-col mx-auto p-5 gap-5 mb-5 mt-5 ml-5 mr-5 sm:w-64 h-fit border-gray-500 shadow-xl rounded-2xl justify-between items-center">
          <Link href={`/post/${post.id}`} className='w-full h-auto relative z-0 rounded-lg scale-110 transition-all duration-300 hover:scale-100 mx-10'> <img src={post.imageUrl} alt={post.name} className="w-xl h-2xl sm:w-5xl object-cover rounded-2xl mb-4" /> </Link>  
            <div className="text-black lg:text-sm text-4xl mt-2"> {post.name}</div>
            <div className="text-black lg:text-sm text-4xl">{post.content}</div>
        </div>
    );
}