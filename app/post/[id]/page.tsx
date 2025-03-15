"use client";

import { useParams } from 'next/navigation';
import Header from "@/components/header";
import Image from 'next/image';

const posts = [
    { 
        id: 1, 
        name: "Attack on Titan: The Final Season", 
        category: "Anime", 
        imageUrl: '/aot_final_season.png', 
        content: "The epic conclusion to the Attack on Titan saga is here! Join Eren, Mikasa, and Armin as they face the ultimate battle for freedom. This season dives deep into the complexities of war, morality, and the cost of survival. With stunning animation by MAPPA and a gripping story that keeps you on the edge of your seat, this season is a must-watch for anime fans. The character development reaches new heights as we see Eren's transformation into a controversial figure, blurring the lines between hero and villain. The intricate plot twists and emotional moments will leave you speechless. This season explores the harsh realities of war, showing how it affects not only the soldiers on the battlefield but also the civilians caught in the crossfire. The themes of freedom, revenge, and sacrifice are woven into every episode, creating a narrative that is as thought-provoking as it is thrilling. Eren's journey from a hopeful young boy to a hardened warrior is both heartbreaking and inspiring, as he grapples with the weight of his decisions and the consequences they bring. \n \n The supporting cast also shines in this season, with Mikasa and Armin stepping into their roles as leaders and protectors. Mikasa's unwavering loyalty to Eren is tested as she begins to question his motives, while Armin's strategic brilliance is put to the ultimate test in the face of overwhelming odds. The dynamic between these characters adds layers of complexity to the story, making every interaction meaningful and impactful. \n\nThe action sequences in this season are nothing short of breathtaking. From the intense battles between the Titans to the high-stakes confrontations between the Survey Corps and their enemies, every scene is meticulously crafted to keep you on the edge of your seat. The animation by MAPPA is a visual masterpiece, capturing the raw emotion and sheer scale of the conflict. The use of lighting, color, and camera angles adds depth and intensity to every frame, making this season a feast for the eyes. \n\nBut it's not just the action that makes this season stand out. The emotional moments hit just as hard, if not harder. The sacrifices made by beloved characters will leave you in tears, while the moments of hope and camaraderie will warm your heart. The intricate storytelling ensures that every plot twist feels earned, keeping you guessing until the very end. \n\nThe world-building in this season is also exceptional, delving deeper into the history and lore of the Titans and the world they inhabit. The revelations about the origins of the Titans and the true nature of the conflict add new layers of depth to the story, making it even more compelling. The political intrigue and moral dilemmas faced by the characters add a sense of realism to the fantastical setting, making it easy to become fully immersed in the story. \n\nWhether you're a long-time fan of the series or new to the world of Attack on Titan, this season delivers an unforgettable experience. It's a fitting conclusion to one of anime's most iconic stories, leaving a lasting impact that will be felt for years to come. Don't miss the breathtaking battles, heart-wrenching sacrifices, and the ultimate resolution to this epic saga. Mar 10, 2025 - AnimeBlog Team" 
    },
    { 
        id: 2, 
        name: "Top 10 Anime of 2025", 
        category: "Anime", 
        imageUrl: "/top_10_anime.png", 
        content: "From action-packed adventures to heartfelt dramas, 2025 has been an incredible year for anime. Our list of the top 10 anime showcases the best of what this year has to offer. Whether you're into epic battles, slice-of-life stories, or mind-bending mysteries, there's something for everyone. Highlights include the return of fan-favorite series like Jujutsu Kaisen and Demon Slayer, as well as groundbreaking new titles that push the boundaries of storytelling and animation. Each entry on this list has been carefully selected based on its impact, popularity, and overall quality. Dive into our detailed breakdown of each anime, complete with plot summaries, character highlights, and why they deserve a spot on this prestigious list. Mar 12, 2025 - AnimeBlog Team" 
    },
    { 
        id: 3, 
        name: "Demon Slayer: Swordsmith Village Arc", 
        category: "Anime", 
        imageUrl: "/demon_slayer.png", 
        content: "Tanjiro and his friends continue their journey in the Swordsmith Village Arc, where they face new challenges and uncover hidden secrets. This arc introduces powerful new demons and showcases breathtaking battles that push the limits of Ufotable's animation prowess. The story delves deeper into the lore of the Demon Slayer Corps, revealing the origins of the Nichirin swords and the sacrifices made by the swordsmiths. Tanjiro's growth as a swordsman and his unwavering determination to protect his loved ones take center stage. The emotional depth of this arc is unparalleled, with moments that will leave you in tears and others that will have you cheering for the heroes. Don't miss this unforgettable chapter in the Demon Slayer saga. Mar 14, 2025 - AnimeBlog Team" 
    },
    { 
        id: 4, 
        name: "The Rise of Isekai Anime", 
        category: "Anime", 
        imageUrl: "/isekai_rise.png", 
        content: "Isekai anime continues to dominate the industry, captivating audiences with its unique premise of transporting characters to fantastical worlds. But what makes this genre so popular? In this in-depth analysis, we explore the evolution of isekai, from its humble beginnings to its current status as a cultural phenomenon. Discover the key elements that define the genre, such as overpowered protagonists, intricate world-building, and the blend of fantasy and reality. We also highlight some of the best isekai anime of all time, including classics like Sword Art Online and Re:Zero, as well as hidden gems that deserve more recognition. Whether you're a die-hard fan or new to the genre, this article offers valuable insights into why isekai anime has captured the hearts of millions. Mar 16, 2025 - AnimeBlog Team" 
    },
    { 
        id: 5, 
        name: "Studio Ghibli's Timeless Classics", 
        category: "Anime", 
        imageUrl: "/studio_ghibli.png", 
        content: "From Spirited Away to My Neighbor Totoro, Studio Ghibli's films have captured the hearts of fans worldwide. This article celebrates the magic of Studio Ghibli, exploring the themes, artistry, and cultural impact of their timeless classics. Learn about the creative genius of Hayao Miyazaki and the studio's commitment to hand-drawn animation, which has set a gold standard for the industry. We delve into the deeper meanings behind their stories, from environmentalism and feminism to the importance of family and self-discovery. Whether you're a long-time fan or discovering Ghibli for the first time, this article offers a comprehensive look at why these films continue to resonate with audiences of all ages. Mar 18, 2025 - AnimeBlog Team" 
    },
    { 
        id: 6, 
        name: "Jujutsu Kaisen: Shibuya Incident Arc", 
        category: "Anime", 
        imageUrl: "/jujutsu_kaisen.png", 
        content: "The Shibuya Incident Arc brings high stakes and emotional moments to Jujutsu Kaisen. This arc is a game-changer, with intense battles, shocking revelations, and heartbreaking losses. Follow Yuji Itadori and his friends as they face their toughest challenges yet, battling powerful curses and uncovering the dark secrets of the Jujutsu world. The animation by MAPPA is nothing short of spectacular, capturing the raw emotion and high-octane action that fans have come to love. This arc also delves deeper into the characters' backstories, adding layers of complexity to their motivations and relationships. If you're a fan of Jujutsu Kaisen, this arc is a must-watch. Mar 20, 2025 - AnimeBlog Team" 
    },
    { 
        id: 7, 
        name: "Anime Conventions 2025: What to Expect", 
        category: "Events", 
        imageUrl: "/anime_conventions.png", 
        content: "Get ready for the biggest anime conventions of 2025! From cosplay competitions to exclusive panels, here's everything you need to know. This year's conventions promise to be bigger and better than ever, with appearances by top voice actors, sneak peeks at upcoming anime, and interactive experiences that bring your favorite series to life. Whether you're a seasoned convention-goer or attending for the first time, our guide has all the tips and tricks you need to make the most of your experience. Don't miss out on the chance to connect with fellow fans and celebrate your love for anime. Mar 22, 2025 - AnimeBlog Team" 
    },
    { 
        id: 8, 
        name: "The Evolution of Anime Openings", 
        category: "Anime", 
        imageUrl: "/anime_openings.png", 
        content: "Anime openings have come a long way over the years, evolving from simple title sequences to elaborate showcases of animation and music. This article explores the history of anime openings, highlighting how they have become an integral part of the viewing experience. From the iconic themes of the 90s to the cinematic masterpieces of today, we examine the trends and innovations that have shaped this art form. Learn about the creative process behind your favorite openings and discover why they play such a crucial role in setting the tone for a series. Mar 24, 2025 - AnimeBlog Team" 
    },
    { 
        id: 9, 
        name: "Chainsaw Man: The Hype is Real", 
        category: "Anime", 
        imageUrl: "/chainsaw_man.png", 
        content: "Chainsaw Man has taken the anime world by storm, and for good reason. This dark and thrilling series pushes the boundaries of storytelling, blending intense action with emotional depth. Follow Denji, a young man who becomes a devil hunter after merging with his pet devil, Pochita. The series explores themes of survival, identity, and the human condition, all while delivering jaw-dropping animation and unforgettable characters. Whether you're a fan of the manga or new to the series, Chainsaw Man is a must-watch. Mar 26, 2025 - AnimeBlog Team" 
    },
    { 
        id: 10, 
        name: "Anime Soundtracks That Defined a Generation", 
        category: "Music", 
        imageUrl: "/anime_soundtracks.png", 
        content: "From Cowboy Bebop's jazz to Your Name's emotional ballads, these anime soundtracks have left a lasting impact on fans. This article celebrates the music that has defined a generation, exploring how soundtracks enhance the storytelling and emotional resonance of anime. Learn about the composers behind your favorite tracks and discover how their work has influenced the industry. Whether you're a music lover or an anime enthusiast, this article offers a deep dive into the world of anime soundtracks. Mar 28, 2025 - AnimeBlog Team" 
    }
];
  

export default function Post() {
    const { id } = useParams();
    const post = posts.find((post) => post.id === parseInt(id as string));

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className='bg-white w-full h-full'>  
            <Header />
            <div className="bg-white w-5xl flex flex-col max-w-8xl h-fit mx-auto rounded-xl items-center justify-center px-4 sm:px-6 lg:px-8 pt-8 -mt-25 pb-10">
                <h1 className="text-4xl font-bold text-black mb-4">{post.name}</h1>
                <img src={post.imageUrl} alt={post.name} className="w-fit h-72 object-cover rounded-2xl mb-4" />
                <div className="mx-8 mt-4 text-black text-xl">
                    {post.content.split('\n').map((line, index) => (
                        <p key={index} className="mb-4">{line}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}