const defaultArticles = [
    {
        title: "McLaren announce signing of Will Courtenay from Red Bull as new Sporting Director",
        content: "McLaren has signed Red Bull’s Head of Strategy, Will Courtenay, as their new Sporting Director. Courtenay, after nearly two decades at Red Bull, will join McLaren in mid-2026. This move is part of McLaren's effort to strengthen its leadership, with Courtenay reporting to Racing Director Randeep Singh. Red Bull has seen several key departures recently, including Adrian Newey and Jonathan Wheatley, and has promoted Verstappen’s race engineer Gianpiero Lambiase to Head of Racing. Courtenay will reunite with Rob Marshall, McLaren’s chief designer.",
        imageUrl: "asset/image/art_1.avif"
    },
    {
        title: "Street circuits ‘cannot hide lack of performance’ says Alonso as Aston Martin lose ground to rivals 13 hours ago",
        content: "Despite finishing eighth in Singapore, Fernando Alonso highlighted Aston Martin's recent struggles and the need for improvement before the next race. After qualifying seventh, Alonso gained four points but acknowledged the team's declining performance compared to top competitors. While Aston Martin has remained competitive, mainly due to Alonso's efforts, other midfield teams like Haas are progressing. Alonso emphasized that the team must continue developing over the remaining races to maintain their position in the standings, where they currently sit fifth with 86 points.",
        imageUrl: "asset/image/art_2.avif"
    },
    {
        title: "Wolff brands Singapore Grand Prix ‘a really painful, painful evening’ as he admits Mercedes just ‘too slow’",
        content: "Toto Wolff reflected on a challenging race for Mercedes in Singapore, where George Russell finished fourth and Lewis Hamilton dropped to sixth after a bold but misjudged strategy. Mercedes started Hamilton on soft tyres, hoping for an advantage at the start, but the high rear tyre degradation led to him falling back. Hamilton's early pit stop also left him vulnerable to fresher-tyre runners, like Oscar Piastri and Charles Leclerc. Wolff admitted the team misread the race and acknowledged their car’s struggles on hot tracks. Both drivers suffered from heat-related issues post-race, but they are fine now. Mercedes looks forward to upcoming upgrades for the Austin race to improve their performance.",
        imageUrl: "asset/image/art_3.avif"
    },
    {
        title: "'He’s just a great guy' – Verstappen opens up on friendship with Ricciardo as doubts over his F1 future swirl",
        content: "Max Verstappen praised Daniel Ricciardo, calling him a 'great guy' and fast driver amid uncertainty about Ricciardo’s F1 future after the Singapore GP. Speculation grows that Red Bull junior Liam Lawson could replace Ricciardo, who has struggled against teammate Yuki Tsunoda in 2024. Ricciardo, emotional after the race, hinted it could be his final F1 appearance. Despite their past rivalry, Verstappen and Ricciardo remain close friends from their Red Bull days.",
        imageUrl: "asset/image/art_4.avif"
    }
];
localStorage.setItem('articles', JSON.stringify(defaultArticles));

const defaultDrivers = [
    { title: 'Max Verstappen', image: 'asset/image/dr_1.avif' },
    { title: 'Lando Norris', image: 'asset/image/dr_2.avif' },
    { title: 'Charles Leclerc', image: 'asset/image/dr_3.avif' },
    { title: 'Oscar Piastri', image: 'asset/image/dr_4.avif' },
    { title: 'Carlos Sainz', image: 'asset/image/dr_5.avif' },
    { title: 'Lewis Hamilton', image: 'asset/image/dr_6.avif' }
];
localStorage.setItem('drivers', JSON.stringify(defaultDrivers));

const defaultImages = [
    { title: 'Monaco Grand Prix', src: 'asset/image/tr_1.jpeg', content: "The Monaco Grand Prix is one of the most prestigious races in Formula 1, held annually in the streets of Monte Carlo. With a length of 3.337 kilometers (2.075 miles) and a single DRS zone, the track offers a unique and demanding challenge for drivers. The circuit's iconic harbor backdrop and narrow streets contribute to its legendary status. The total capacity of the Monaco Grand Prix is approximately 33,000 spectators." },
    { title: 'Silverstone Circuit', src: 'asset/image/tr_2.jpeg', content: "Silverstone Circuit, located in Northamptonshire, England, is a historic venue with a length of 5.891 kilometers (3.66 miles) and two DRS zones. Known for its high-speed corners and challenging layout, Silverstone has been a staple on the Formula 1 calendar since 1948. Its historical significance and role as the host of the British Grand Prix have solidified its place as a fan favorite. The total capacity of Silverstone Circuit is approximately 145,000 spectators." },
    { title: 'Circuit de Spa-Francorchamps', src: 'asset/image/tr_3.jpeg', content: "Circuit de Spa-Francorchamps, located in Stavelot, Belgium, is a legendary track renowned for its high-speed corners, challenging elevation changes, and iconic Raidillon corner. With a total capacity of approximately 70,000 spectators, it's one of the largest-capacity circuits on the Formula 1 calendar. The Belgian Grand Prix, held at Spa, is a popular event known for its unpredictable weather and exciting racing action. The circuit has a length of 7.004 kilometers (4.352 miles) and features three DRS zones, providing ample opportunities for overtaking and exciting racing." },
    { title: 'Circuit Gilles Villeneuve', src: 'asset/image/tr_4.jpeg', content: "Named after the Canadian Formula 1 legend, Circuit Gilles Villeneuve is located in Montreal. With a length of 4.361 kilometers (2.712 miles) and two DRS zones, the track's island layout, challenging wall sections, and hairpin turn make it a popular and exciting venue. The circuit has a capacity of approximately 90,000 spectators." },
    { title: 'Circuit de Barcelona-Catalunya', src: 'asset/image/tr_5.jpeg', content: "Circuit de Barcelona-Catalunya, located in Montmeló, Spain, is a versatile track with a length of 4.675 kilometers (2.905 miles) and two DRS zones. Known for its variety of corners, high-speed straights, and challenging final sector, it's a popular venue for testing and development, as well as hosting the Spanish Grand Prix. The circuit has a capacity of approximately 140,000 spectators." },
    { title: 'Autodromo Nazionale Monza', src: 'asset/image/tr_6.jpeg', content: "Autodromo Nazionale Monza, located in Monza, Italy, is one of the most historic circuits on the Formula 1 calendar. With a length of 5.793 kilometers (3.597 miles) and two DRS zones, the circuit is known for its high-speed Parabolica corner, long straights, and significance as the home of the Italian Grand Prix. Monza has a capacity of approximately 110,000 spectators." },
    { title: 'Hungaroring', src: 'asset/image/tr_7.jpeg', content: "Hungaroring, located in Mogyoród, Hungary, is a challenging track with a length of 4.381 kilometers (2.722 miles) and two DRS zones. Known for its tight corners and demanding layout, it's often known for producing exciting races. The Hungarian Grand Prix has a capacity of approximately 85,000 spectators." }
];
localStorage.setItem('images', JSON.stringify(defaultImages));

const defaultTeams = [
    { title: 'Team Mclaren', image: 'asset/image/t_1.jpeg' },
    { title: 'Team Red Bull', image: 'asset/image/t_2.jpeg' },
    { title: 'Team Ferrari', image: 'asset/image/t_3.jpeg' },
    { title: 'Team Mercedes', image: 'asset/image/t_4.jpeg' },
    { title: 'Team Aston Martin', image: 'asset/image/t_5.jpeg' }
];
localStorage.setItem('teams', JSON.stringify(defaultTeams));

const defaultVideos = [
    { title: '2024 Singapore Grand Prix', videoUrl: 'https://www.youtube.com/watch?v=slCskHrI_Vg&t=25s&pp=ygUJZm9ybXVsYSAx', thumbnailUrl: 'asset/image/hi_1.webp' },
    { title: '2024 Azerbaijan Grand Prix', videoUrl: 'https://www.youtube.com/watch?v=7ynDOY1PR74&t=17s&pp=ygUUZm9ybXVsYSAxIGhpZ2hsaWdodHM%3D', thumbnailUrl: 'asset/image/hi_2.webp' },
    { title: '2024 Canadian Grand Prix', videoUrl: 'https://www.youtube.com/watch?v=dLw1ao4-Akk&t=83s&pp=ygUUZm9ybXVsYSAxIGhpZ2hsaWdodHM%3D', thumbnailUrl: 'asset/image/hi_3.webp' },
    { title: '2024 Miami Grand Prix', videoUrl: 'https://www.youtube.com/watch?v=9wiQqcKUahc&pp=ygUUZm9ybXVsYSAxIGhpZ2hsaWdodHM%3D', thumbnailUrl: 'asset/image/hi_4.webp' },
    { title: '2024 Monaco Grand Prix', videoUrl: 'https://www.youtube.com/watch?v=aeCI0ObFY8M&t=10s&pp=ygUUZm9ybXVsYSAxIGhpZ2hsaWdodHM%3D', thumbnailUrl: 'asset/image/hi_5.webp' },
];
localStorage.setItem('videos', JSON.stringify(defaultVideos));
