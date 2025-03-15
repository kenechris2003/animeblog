import Card from "./card";

const posts = [
    { 
        id: 1, 
        name: "Attack on Titan: The Final Season", 
        category: "Anime", 
        imageUrl: '/aot_final_season.png', 
        content: "The epic conclusion to the Attack on Titan saga is here! Join Eren, Mikasa, and Armin as they face the ultimate battle for freedom. This season dives deep into the complexities of war,......" 
    },
    { 
        id: 2, 
        name: "Top 10 Anime of 2025", 
        category: "Anime", 
        imageUrl: "/top_10_anime.png", 
        content: "From action-packed adventures to heartfelt dramas, 2025 has been an incredible year for anime. Our list of the top 10 anime showcases the best of what this year has to offer......." 
    },
    { 
        id: 3, 
        name: "Demon Slayer: Swordsmith Village Arc", 
        category: "Anime", 
        imageUrl: "/demon_slayer.png", 
        content: "Tanjiro and his friends continue their journey in the Swordsmith Village Arc, where they face new challenges and uncover hidden secrets. This arc introduces powerful new demons......" 
    },
    { 
        id: 4, 
        name: "The Rise of Isekai Anime", 
        category: "Anime", 
        imageUrl: "/isekai_rise.png", 
        content: "Isekai anime continues to dominate the industry, captivating audiences with its unique premise of transporting characters to fantastical worlds. But what makes this genre so popular?....." 
    },
    { 
        id: 5, 
        name: "Studio Ghibli's Timeless Classics", 
        category: "Anime", 
        imageUrl: "/studio_ghibli.png", 
        content: "From Spirited Away to My Neighbor Totoro, Studio Ghibli's films have captured the hearts of fans worldwide. This article celebrates the magic of Studio Ghibli,......." 
    },
    { 
        id: 6, 
        name: "Jujutsu Kaisen: Shibuya Incident Arc", 
        category: "Anime", 
        imageUrl: "/jujutsu_kaisen.png", 
        content: "The Shibuya Incident Arc brings high stakes and emotional moments to Jujutsu Kaisen. This arc is a game-changer, with intense battles, shocking revelations, and heartbreaking losses.,......." 
    },
    { 
        id: 7, 
        name: "Anime Conventions 2025: What to Expect", 
        category: "Events", 
        imageUrl: "/anime_conventions.png", 
        content: "Get ready for the biggest anime conventions of 2025! From cosplay competitions to exclusive panels, here's everything you need to know. This year's conventions promise to be bigger and better than ever,......" 
    },
    { 
        id: 8, 
        name: "The Evolution of Anime Openings", 
        category: "Anime", 
        imageUrl: "/anime_openings.png", 
        content: "Anime openings have come a long way over the years, evolving from simple title sequences to elaborate showcases of animation and music. This article explores the history of anime openings,....." 
    },
    { 
        id: 9, 
        name: "Chainsaw Man: The Hype is Real", 
        category: "Anime", 
        imageUrl: "/chainsaw_man.png", 
        content: "Chainsaw Man has taken the anime world by storm, and for good reason. This dark and thrilling series pushes the boundaries of storytelling, blending intense action with emotional depth......." 
    },
    { 
        id: 10, 
        name: "Anime Soundtracks That Defined a Generation", 
        category: "Music", 
        imageUrl: "/anime_soundtracks.png", 
        content: "From Cowboy Bebop's jazz to Your Name's emotional ballads, these anime soundtracks have left a lasting impact on fans. This article celebrates the music that has defined a generation...." 
    }
];

export default function Content() {
    const id = {};
    return (
        <div className="bg-white w-5xl flex flex-col max-w-8xl h-fit mx-auto rounded-xl items-center justify-center px-4 sm:px-6 lg:px-8 pt-8 -mt-25">
            <h1 className="text-center p-5 font-extrabold text-black lg:text-4xl text-6xl">Blog Highlights</h1>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 p-5'>
                {posts.map((post) => (
                    <Card key={post.id} post={post} />
                ))}
            </div>
            
        </div>

        
        
    );
}