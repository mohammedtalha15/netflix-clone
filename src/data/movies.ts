export interface Movie {
    id: number;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl?: string;
    duration: string;
    genre: string[];
    year: number;
    maturityRating: string;
    cast: string[];
    match: number;
}

export const movies: Movie[] = [
    {
        id: 1,
        title: "Stranger Things",
        description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
        thumbnailUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&q=80",
        duration: "4 Seasons",
        genre: ["Sci-Fi", "Horror", "Drama"],
        year: 2016,
        maturityRating: "TV-14",
        cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"],
        match: 98
    },
    {
        id: 2,
        title: "The Crown",
        description: "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
        thumbnailUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
        duration: "6 Seasons",
        genre: ["Drama", "Historical", "Biography"],
        year: 2016,
        maturityRating: "TV-MA",
        cast: ["Claire Foy", "Olivia Colman", "Imelda Staunton"],
        match: 95
    },
    {
        id: 3,
        title: "Wednesday",
        description: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and enemies — at Nevermore Academy.",
        thumbnailUrl: "https://images.unsplash.com/photo-1509248961895-dd3f53dda69e?w=800&q=80",
        duration: "1 Season",
        genre: ["Comedy", "Mystery", "Fantasy"],
        year: 2022,
        maturityRating: "TV-14",
        cast: ["Jenna Ortega", "Gwendoline Christie", "Riki Lindhome"],
        match: 97
    },
    {
        id: 4,
        title: "Money Heist",
        description: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
        thumbnailUrl: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80",
        duration: "5 Seasons",
        genre: ["Crime", "Thriller", "Drama"],
        year: 2017,
        maturityRating: "TV-MA",
        cast: ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño"],
        match: 94
    },
    {
        id: 5,
        title: "Squid Game",
        description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
        thumbnailUrl: "https://images.unsplash.com/photo-1634157703702-3c124b455499?w=800&q=80",
        duration: "2 Seasons",
        genre: ["Thriller", "Drama", "Action"],
        year: 2021,
        maturityRating: "TV-MA",
        cast: ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-jun"],
        match: 99
    },
    {
        id: 6,
        title: "The Witcher",
        description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
        thumbnailUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
        duration: "3 Seasons",
        genre: ["Fantasy", "Action", "Adventure"],
        year: 2019,
        maturityRating: "TV-MA",
        cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
        match: 93
    },
    {
        id: 7,
        title: "Breaking Bad",
        description: "A high school chemistry teacher diagnosed with lung cancer turns to manufacturing and selling methamphetamine to secure his family's future.",
        thumbnailUrl: "https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?w=800&q=80",
        duration: "5 Seasons",
        genre: ["Crime", "Drama", "Thriller"],
        year: 2008,
        maturityRating: "TV-MA",
        cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
        match: 99
    },
    {
        id: 8,
        title: "Dark",
        description: "A family saga with a supernatural twist, set in a German town where the mysterious disappearance of two children exposes relationships among four families.",
        thumbnailUrl: "https://images.unsplash.com/photo-1507499739999-097706ad8914?w=800&q=80",
        duration: "3 Seasons",
        genre: ["Sci-Fi", "Mystery", "Drama"],
        year: 2017,
        maturityRating: "TV-MA",
        cast: ["Louis Hofmann", "Oliver Masucci", "Jördis Triebel"],
        match: 96
    },
    {
        id: 9,
        title: "Peaky Blinders",
        description: "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
        thumbnailUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
        duration: "6 Seasons",
        genre: ["Crime", "Drama"],
        year: 2013,
        maturityRating: "TV-MA",
        cast: ["Cillian Murphy", "Helen McCrory", "Paul Anderson"],
        match: 95
    },
    {
        id: 10,
        title: "Ozark",
        description: "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.",
        thumbnailUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80",
        duration: "4 Seasons",
        genre: ["Crime", "Drama", "Thriller"],
        year: 2017,
        maturityRating: "TV-MA",
        cast: ["Jason Bateman", "Laura Linney", "Julia Garner"],
        match: 94
    },
    {
        id: 11,
        title: "Black Mirror",
        description: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
        thumbnailUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
        duration: "6 Seasons",
        genre: ["Sci-Fi", "Drama", "Thriller"],
        year: 2011,
        maturityRating: "TV-MA",
        cast: ["Various"],
        match: 92
    },
    {
        id: 12,
        title: "Narcos",
        description: "The true story of Colombia's infamous drug cartels and the real-life agents who devoted their lives to fighting them.",
        thumbnailUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
        duration: "3 Seasons",
        genre: ["Crime", "Drama", "Biography"],
        year: 2015,
        maturityRating: "TV-MA",
        cast: ["Wagner Moura", "Pedro Pascal", "Boyd Holbrook"],
        match: 91
    },
    {
        id: 13,
        title: "The Queen's Gambit",
        description: "In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction.",
        thumbnailUrl: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=80",
        duration: "Limited Series",
        genre: ["Drama"],
        year: 2020,
        maturityRating: "TV-MA",
        cast: ["Anya Taylor-Joy", "Bill Camp", "Moses Ingram"],
        match: 97
    },
    {
        id: 14,
        title: "You",
        description: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        thumbnailUrl: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&q=80",
        duration: "4 Seasons",
        genre: ["Thriller", "Drama", "Crime"],
        year: 2018,
        maturityRating: "TV-MA",
        cast: ["Penn Badgley", "Victoria Pedretti", "Elizabeth Lail"],
        match: 89
    },
    {
        id: 15,
        title: "House of Cards",
        description: "A ruthless politician will stop at nothing to conquer Washington, D.C., in this Emmy and Golden Globe-winning political drama.",
        thumbnailUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80",
        duration: "6 Seasons",
        genre: ["Political", "Drama", "Thriller"],
        year: 2013,
        maturityRating: "TV-MA",
        cast: ["Kevin Spacey", "Robin Wright", "Michael Kelly"],
        match: 88
    },
    {
        id: 16,
        title: "Mindhunter",
        description: "In the late 1970s, two FBI agents expand criminal science by delving into the psychology of murder and getting uneasily close to all-too-real killers.",
        thumbnailUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
        duration: "2 Seasons",
        genre: ["Crime", "Drama", "Thriller"],
        year: 2017,
        maturityRating: "TV-MA",
        cast: ["Jonathan Groff", "Holt McCallany", "Anna Torv"],
        match: 96
    },
    {
        id: 17,
        title: "Bridgerton",
        description: "Wealth, lust, and betrayal set against the backdrop of Regency Era England, seen through the eyes of the powerful Bridgerton family.",
        thumbnailUrl: "https://images.unsplash.com/photo-1615715616181-6ba85d724137?w=800&q=80",
        duration: "3 Seasons",
        genre: ["Drama", "Romance"],
        year: 2020,
        maturityRating: "TV-MA",
        cast: ["Nicola Coughlan", "Luke Newton", "Claudia Jessie"],
        match: 90
    },
    {
        id: 18,
        title: "The Umbrella Academy",
        description: "A dysfunctional family of adopted sibling superheroes reunite to solve the mystery of their father's death and the threat of an impending apocalypse.",
        thumbnailUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&q=80",
        duration: "4 Seasons",
        genre: ["Sci-Fi", "Action", "Comedy"],
        year: 2019,
        maturityRating: "TV-14",
        cast: ["Elliot Page", "Tom Hopper", "Robert Sheehan"],
        match: 93
    }
];

export const featuredMovie: Movie = {
    id: 100,
    title: "Glass Onion: A Knives Out Mystery",
    description: "World-famous detective Benoit Blanc heads to Greece to peel back the layers of a mystery involving a new cast of colorful suspects.",
    thumbnailUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&q=80",
    duration: "2h 19m",
    genre: ["Mystery", "Comedy", "Crime"],
    year: 2022,
    maturityRating: "PG-13",
    cast: ["Daniel Craig", "Edward Norton", "Janelle Monáe"],
    match: 97
};

export const categories = [
    { id: "trending", title: "Trending Now", movies: movies.slice(0, 6) },
    { id: "top10", title: "Top 10 in Your Country Today", movies: movies.slice(0, 10), isTop10: true },
    { id: "action", title: "Action & Adventure", movies: movies.slice(6, 12) },
    { id: "continue", title: "Continue Watching for User", movies: movies.slice(3, 9) },
    { id: "mylist", title: "My List", movies: movies.slice(10, 16) },
    { id: "newreleases", title: "New Releases", movies: movies.slice(2, 8) },
    { id: "dramas", title: "Critically Acclaimed Dramas", movies: movies.slice(8, 14) },
    { id: "thriller", title: "Suspenseful Thrillers", movies: movies.slice(4, 10) },
];
