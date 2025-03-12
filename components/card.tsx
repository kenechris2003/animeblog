
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
        <div key={post.id} className="flex flex-col mx-auto p-5 gap-5 mb-5 mt-5 ml-5 mr-5 w-64 h-fit border-gray-500 shadow-xl rounded-2xl justify-between items-center">
            <img src={post.imageUrl} alt={post.name} className="w-fit h-fit object-cover" />
            <div className="text-black"> {post.name}</div>
            <div className="text-black">{post.content}</div>
        </div>
    );
}