import React, { useEffect } from 'react'
import './destination.css'
import { useParams } from "react-router-dom";

const destinations = [
  {
    name: "Goa",
    link: "/destination/goa",
    image: "/goa.webp",
    heroImage: "/goabg.webp",
    title: "Goa: Beyond the Beaches: Discover the Hidden Side of Goa",
    tags: ["BEACHES", "ADVENTURE", "NIGHTLIFE"],

    headline: "More Than Just The Beaches",
    info: "Goa is more than its famous beaches. It is a place where Portuguese heritage, coastal culture, lively streets and a relaxed way of life come together. From the historic streets of Old Goa and centuries-old forts to quiet villages, scenic coastal roads and vibrant nightlife, every part of Goa offers something different. Whether you're looking for a peaceful escape, adventure, great food or nights that refuse to end, Goa has a little bit of everything.",

    experienceTitle: "EXPERIENCE GOA",
    experienceSubtitle: "Something Different Around Every Corner",
    experiences: [
      ["BEACHES", "Sun, sand and coastal sunsets"],
      ["NIGHTLIFE", "Beach clubs, music and late nights"],
      ["ADVENTURE", "Water sports, trekking and more"],
      ["CULTURE", "Portuguese heritage, forts and Old Goa"]
    ],

    packageTitle: "Choose Your Goa Experience",
    packages: [
      ["2D / 1N", "₹4,999", "Perfect for a quick Goa getaway."],
      ["3D / 2N", "₹7,999", "Explore beaches, nightlife and local attractions."],
      ["4D / 3N", "₹10,999", "A complete Goa experience with more time to explore."]
    ]
  },

  {
    name: "Paris",
    link: "/destination/paris",
    image: "/paris.webp",
    heroImage: "/parisbg.webp",
    title: "Paris: Where Every Street Tells a Story",
    tags: ["ROMANCE", "CULTURE", "CUISINE"],

    headline: "More Than Just The Eiffel Tower",
    info: "Paris is a city of timeless streets, grand architecture, artistic traditions and unforgettable food. From charming cafés and historic neighborhoods to world-famous museums and riverside walks, every corner has its own character. Whether you're chasing art, romance, history or simply the feeling of wandering through a beautiful city, Paris offers something memorable.",

    experienceTitle: "EXPERIENCE PARIS",
    experienceSubtitle: "Where Every Street Tells A Story",
    experiences: [
      ["LANDMARKS", "Eiffel Tower, Arc de Triomphe and more"],
      ["ART", "Museums, galleries and artistic heritage"],
      ["CUISINE", "Cafés, bakeries and French cuisine"],
      ["ROMANCE", "Seine walks, sunsets and charming streets"]
    ],

    packageTitle: "Choose Your Paris Experience",
    packages: [
      ["3D / 2N", "₹39,999", "A quick introduction to the highlights of Paris."],
      ["5D / 4N", "₹59,999", "Explore landmarks, museums and local neighborhoods."],
      ["7D / 6N", "₹79,999", "A complete Paris experience at a relaxed pace."]
    ]
  },

  {
    name: "Bali",
    link: "/destination/bali",
    image: "/bali.webp",
    heroImage: "/balibg.webp",
    title: "Bali: Where Island Life Meets Adventure",
    tags: ["BEACHES", "TEMPLES", "ADVENTURE"],

    headline: "More Than Just The Beaches",
    info: "Bali brings together tropical beaches, ancient temples, lush rice terraces and a vibrant local culture. From peaceful villages and mountain landscapes to lively coastal towns, the island offers a balance between relaxation and adventure. Whether you want to slow down or explore something new every day, Bali makes it easy to do both.",

    experienceTitle: "EXPERIENCE BALI",
    experienceSubtitle: "A Journey Through Island Life",
    experiences: [
      ["BEACHES", "Tropical shores, surfing and sunsets"],
      ["TEMPLES", "Ancient temples and spiritual traditions"],
      ["NATURE", "Rice terraces, waterfalls and forests"],
      ["ADVENTURE", "Rafting, trekking and water activities"]
    ],

    packageTitle: "Choose Your Bali Experience",
    packages: [
      ["3D / 2N", "₹24,999", "A short tropical escape covering Bali's highlights."],
      ["5D / 4N", "₹39,999", "Explore beaches, temples and scenic landscapes."],
      ["7D / 6N", "₹54,999", "A complete Bali experience with time to relax and explore."]
    ]
  },

  {
    name: "Dubai",
    link: "/destination/dubai",
    image: "/dubai.webp",
    heroImage: "/dubaibg.webp",
    title: "Dubai: A City Built Beyond Imagination",
    tags: ["LUXURY", "ADVENTURE", "NIGHTLIFE"],

    headline: "More Than Just The Skyscrapers",
    info: "Dubai is a city where futuristic architecture meets traditional markets, desert landscapes and world-class entertainment. Beyond its famous skyline, you can explore old neighborhoods, experience the desert and enjoy a constantly evolving food and nightlife scene. It is a destination built around contrast, energy and endless things to experience.",

    experienceTitle: "EXPERIENCE DUBAI",
    experienceSubtitle: "Where The Extraordinary Feels Normal",
    experiences: [
      ["LUXURY", "Iconic hotels, shopping and experiences"],
      ["DESERT", "Dune safaris, sunsets and desert camps"],
      ["ADVENTURE", "Skydiving, water parks and more"],
      ["NIGHTLIFE", "Rooftop views, music and late nights"]
    ],

    packageTitle: "Choose Your Dubai Experience",
    packages: [
      ["3D / 2N", "₹29,999", "Experience Dubai's iconic attractions in a short trip."],
      ["5D / 4N", "₹44,999", "Explore the city, desert and major attractions."],
      ["7D / 6N", "₹64,999", "A complete Dubai experience with more time to explore."]
    ]
  },

  {
    name: "Manali",
    link: "/destination/manali",
    image: "/manali.webp",
    heroImage: "/manalibg.webp",
    title: "Manali: Into the Heart of the Himalayas",
    tags: ["MOUNTAINS", "ADVENTURE", "NATURE"],

    headline: "More Than Just The Mountains",
    info: "Manali is surrounded by dramatic mountain landscapes, pine forests, rivers and peaceful valleys. It offers everything from quiet escapes and scenic drives to thrilling outdoor adventures. With its combination of nature, local culture and mountain charm, Manali is a destination that feels different in every season.",

    experienceTitle: "EXPERIENCE MANALI",
    experienceSubtitle: "Adventure Meets The Mountains",
    experiences: [
      ["MOUNTAINS", "Snow-covered peaks and scenic valleys"],
      ["ADVENTURE", "Trekking, rafting and outdoor activities"],
      ["NATURE", "Forests, rivers and peaceful landscapes"],
      ["CULTURE", "Local villages, temples and traditions"]
    ],

    packageTitle: "Choose Your Manali Experience",
    packages: [
      ["3D / 2N", "₹6,999", "A quick mountain escape covering the highlights."],
      ["5D / 4N", "₹11,999", "Explore valleys, attractions and adventure activities."],
      ["7D / 6N", "₹16,999", "A relaxed mountain journey with more time to explore."]
    ]
  },

  {
    name: "London",
    link: "/destination/london",
    image: "/london.webp",
    heroImage: "/londonbg.webp",
    title: "London: A City Where History Meets Tomorrow",
    tags: ["HISTORY", "CULTURE", "CITY LIFE"],

    headline: "More Than Just The Landmarks",
    info: "London blends centuries of history with modern city life. From royal landmarks and historic streets to diverse neighborhoods, museums and lively markets, the city constantly shifts between old and new. Every visit offers another side of one of the world's most recognizable cities.",

    experienceTitle: "EXPERIENCE LONDON",
    experienceSubtitle: "Where History Meets Modern Life",
    experiences: [
      ["HISTORY", "Palaces, castles and historic landmarks"],
      ["CULTURE", "Museums, theatre and local neighborhoods"],
      ["CITY LIFE", "Markets, shopping and vibrant streets"],
      ["LANDMARKS", "Big Ben, Tower Bridge and more"]
    ],

    packageTitle: "Choose Your London Experience",
    packages: [
      ["4D / 3N", "₹54,999", "Discover London's most famous landmarks."],
      ["6D / 5N", "₹74,999", "Explore museums, neighborhoods and historic attractions."],
      ["8D / 7N", "₹94,999", "A complete London experience at a relaxed pace."]
    ]
  },

  {
    name: "Tokyo",
    link: "/destination/tokyo",
    image: "/tokyo.webp",
    heroImage: "/tokyobg.webp",
    title: "Tokyo: Where Tradition Moves at the Speed of Tomorrow",
    tags: ["TECHNOLOGY", "CULTURE", "CUISINE"],

    headline: "More Than Just The Neon",
    info: "Tokyo is a city of contrasts where futuristic technology, ancient traditions, quiet temples and energetic neighborhoods exist side by side. From busy streets and incredible food to peaceful gardens and historic districts, Tokyo offers a completely different experience around every corner.",

    experienceTitle: "EXPERIENCE TOKYO",
    experienceSubtitle: "Where Tradition Meets The Future",
    experiences: [
      ["TECHNOLOGY", "Neon streets, gadgets and modern attractions"],
      ["CULTURE", "Temples, traditions and historic districts"],
      ["CUISINE", "Sushi, ramen and endless food choices"],
      ["CITY LIFE", "Shopping, entertainment and nightlife"]
    ],

    packageTitle: "Choose Your Tokyo Experience",
    packages: [
      ["4D / 3N", "₹59,999", "A short introduction to Tokyo's major highlights."],
      ["6D / 5N", "₹84,999", "Explore neighborhoods, culture and Japanese cuisine."],
      ["8D / 7N", "₹1,09,999", "A complete Tokyo experience with more time to discover the city."]
    ]
  },

  {
    name: "New York",
    link: "/destination/newyork",
    image: "/newyork.webp",
    heroImage: "/newyorkbg.webp",
    title: "New York: The City That Never Stops",
    tags: ["CITY LIFE", "CULTURE", "ENTERTAINMENT"],

    headline: "More Than Just The Skyline",
    info: "New York is a city shaped by different cultures, neighborhoods and endless energy. From iconic landmarks and world-class museums to hidden food spots and lively streets, every part of the city has a different personality. It is fast, diverse and constantly moving.",

    experienceTitle: "EXPERIENCE NEW YORK",
    experienceSubtitle: "The City That Never Runs Out Of Stories",
    experiences: [
      ["CITY LIFE", "Skyscrapers, neighborhoods and busy streets"],
      ["CULTURE", "Museums, galleries and diverse communities"],
      ["FOOD", "Global cuisine and iconic local favorites"],
      ["ENTERTAINMENT", "Broadway, music, sports and nightlife"]
    ],

    packageTitle: "Choose Your New York Experience",
    packages: [
      ["4D / 3N", "₹69,999", "Explore New York's iconic landmarks and neighborhoods."],
      ["6D / 5N", "₹99,999", "Experience the city's culture, food and entertainment."],
      ["8D / 7N", "₹1,29,999", "A complete New York experience with more time to explore."]
    ]

  },

  {
    name: "Switzerland",
    link: "/destination/switzerland",
    image: "/switzerland.webp",
    heroImage: "/switzerlandbg.webp",
    title: "Switzerland: Where Every View Feels Unreal",
    tags: ["ALPS", "NATURE", "ADVENTURE"],

    headline: "More Than Just The Alps",
    info: "Switzerland is filled with dramatic mountains, peaceful lakes, charming towns and scenic train journeys. Its landscapes change constantly, from snowy peaks to green valleys and beautiful lakeside cities. Whether you want adventure or a peaceful escape, Switzerland offers both.",

    experienceTitle: "EXPERIENCE SWITZERLAND",
    experienceSubtitle: "A Journey Through The Alps",
    experiences: [
      ["ALPS", "Snowy peaks and breathtaking mountain views"],
      ["NATURE", "Lakes, valleys and peaceful landscapes"],
      ["ADVENTURE", "Skiing, hiking and mountain activities"],
      ["SCENIC", "Beautiful towns and iconic train journeys"]
    ],

    packageTitle: "Choose Your Switzerland Experience",
    packages: [
      ["5D / 4N", "₹89,999", "A quick journey through Switzerland's highlights."],
      ["7D / 6N", "₹1,19,999", "Explore mountains, lakes and charming towns."],
      ["10D / 9N", "₹1,59,999", "A complete Swiss journey across multiple regions."]
    ]
  },

  {
    name: "Maldives",
    link: "/destination/maldives",
    image: "/maldives.webp",
    heroImage: "/maldivesbg.webp",
    title: "Maldives: Escape Into a World of Blue",
    tags: ["ISLANDS", "BEACHES", "LUXURY"],

    headline: "More Than Just The Blue",
    info: "The Maldives is a collection of tropical islands surrounded by clear blue waters and vibrant marine life. Beyond relaxing on the beach, visitors can explore underwater worlds, enjoy water activities and experience peaceful island living. It is the kind of destination where slowing down becomes part of the journey.",

    experienceTitle: "EXPERIENCE MALDIVES",
    experienceSubtitle: "Where The Ocean Becomes Your Playground",
    experiences: [
      ["ISLANDS", "Private islands and peaceful escapes"],
      ["BEACHES", "White sand and crystal-clear waters"],
      ["DIVING", "Coral reefs and vibrant marine life"],
      ["LUXURY", "Resorts, spas and oceanfront experiences"]
    ],

    packageTitle: "Choose Your Maldives Experience",
    packages: [
      ["3D / 2N", "₹34,999", "A short island escape by the ocean."],
      ["5D / 4N", "₹54,999", "Relax, explore the waters and enjoy island life."],
      ["7D / 6N", "₹79,999", "A complete tropical getaway with more time to unwind."]
    ]
  },

  {
    name: "Singapore",
    link: "/destination/singapore",
    image: "/singapore.webp",
    heroImage: "/singaporebg.webp",
    title: "Singapore: Small Island, Endless Possibilities",
    tags: ["MODERN", "CUISINE", "ADVENTURE"],

    headline: "More Than Just A Modern City",
    info: "Singapore combines futuristic architecture, lush green spaces, diverse cultures and some of Asia's most exciting food experiences. Its compact size makes it easy to move between modern attractions, historic neighborhoods and peaceful gardens in a single day.",

    experienceTitle: "EXPERIENCE SINGAPORE",
    experienceSubtitle: "Small Island, Endless Experiences",
    experiences: [
      ["MODERN", "Futuristic architecture and iconic attractions"],
      ["CUISINE", "Street food, hawker centers and global flavors"],
      ["NATURE", "Gardens, parks and green spaces"],
      ["ADVENTURE", "Theme parks, activities and entertainment"]
    ],

    packageTitle: "Choose Your Singapore Experience",
    packages: [
      ["3D / 2N", "₹29,999", "A quick trip through Singapore's major attractions."],
      ["5D / 4N", "₹44,999", "Explore the city, food and cultural neighborhoods."],
      ["7D / 6N", "₹64,999", "A complete Singapore experience with more time to explore."]
    ]
  },

  {
    name: "Thailand",
    link: "/destination/thailand",
    image: "/thailand.webp",
    heroImage: "/thailandbg.webp",
    title: "Thailand: Find Your Own Tropical Adventure",
    tags: ["BEACHES", "CULTURE", "ADVENTURE"],

    headline: "More Than Just The Beaches",
    info: "Thailand offers a mix of tropical islands, historic temples, energetic cities and rich local traditions. From peaceful beaches and island escapes to busy markets and cultural landmarks, the country offers a wide range of experiences for every kind of traveler.",

    experienceTitle: "EXPERIENCE THAILAND",
    experienceSubtitle: "From Islands To Ancient Streets",
    experiences: [
      ["BEACHES", "Tropical islands and beautiful coastlines"],
      ["CULTURE", "Temples, traditions and historic landmarks"],
      ["FOOD", "Street food and famous Thai cuisine"],
      ["ADVENTURE", "Diving, trekking and outdoor activities"]
    ],

    packageTitle: "Choose Your Thailand Experience",
    packages: [
      ["4D / 3N", "₹24,999", "A quick introduction to Thailand's highlights."],
      ["6D / 5N", "₹39,999", "Explore beaches, culture and local experiences."],
      ["8D / 7N", "₹54,999", "A complete Thailand journey across multiple experiences."]
    ]
  },

  {
    name: "Amsterdam",
    link: "/destination/amsterdam",
    image: "/amsterdam.webp",
    heroImage: "/amsterdambg.webp",
    title: "Amsterdam: Canals, Culture and Endless Charm",
    tags: ["CANALS", "CULTURE", "CITY LIFE"],

    headline: "More Than Just The Canals",
    info: "Amsterdam is known for its beautiful canals, but the city has much more to discover. Museums, historic streets, cycling culture, cafés and creative neighborhoods give Amsterdam its distinctive character. It is a city that feels relaxed while still being full of things to explore.",

    experienceTitle: "EXPERIENCE AMSTERDAM",
    experienceSubtitle: "A City Built Around Discovery",
    experiences: [
      ["CANALS", "Scenic waterways and canal-side streets"],
      ["CULTURE", "Museums, art and historic neighborhoods"],
      ["CYCLING", "Explore the city like a local"],
      ["CITY LIFE", "Cafés, markets and lively streets"]
    ],

    packageTitle: "Choose Your Amsterdam Experience",
    packages: [
      ["3D / 2N", "₹44,999", "Discover Amsterdam's essential attractions."],
      ["5D / 4N", "₹64,999", "Explore museums, canals and local neighborhoods."],
      ["7D / 6N", "₹84,999", "A relaxed Amsterdam experience with more time to explore."]
    ]
  },

  {
    name: "Venice",
    link: "/destination/venice",
    image: "/venice.webp",
    heroImage: "/venicebg.webp",
    title: "Venice: A City Floating Through Time",
    tags: ["ROMANCE", "HISTORY", "ART"],

    headline: "More Than Just The Canals",
    info: "Venice is a city unlike any other, built around waterways, historic buildings and winding streets. Beyond the famous canals, visitors can discover quiet squares, beautiful churches, artistic treasures and centuries of history. The best way to experience Venice is simply to wander.",

    experienceTitle: "EXPERIENCE VENICE",
    experienceSubtitle: "Where Every Corner Feels Timeless",
    experiences: [
      ["ROMANCE", "Gondola rides and beautiful sunsets"],
      ["HISTORY", "Historic palaces, bridges and landmarks"],
      ["ART", "Galleries, architecture and artistic heritage"],
      ["CANALS", "Waterways, islands and hidden streets"]
    ],

    packageTitle: "Choose Your Venice Experience",
    packages: [
      ["3D / 2N", "₹49,999", "Discover Venice's iconic sights and canals."],
      ["5D / 4N", "₹69,999", "Explore the city's history, art and hidden streets."],
      ["7D / 6N", "₹89,999", "A relaxed Venetian experience with time to wander."]
    ]
  },

  {
    name: "Santorini",
    link: "/destination/santorini",
    image: "/santorini.webp",
    heroImage: "/santorinibg.webp",
    title: "Santorini: Chasing Sunsets Above the Aegean",
    tags: ["SUNSETS", "ISLANDS", "ROMANCE"],

    headline: "More Than Just The White Walls",
    info: "Santorini is famous for its whitewashed buildings and unforgettable sunsets, but the island has much more to offer. Volcanic landscapes, peaceful villages, beautiful coastlines and local food make it a destination worth exploring beyond its postcard views.",

    experienceTitle: "EXPERIENCE SANTORINI",
    experienceSubtitle: "A Greek Island Made For Wandering",
    experiences: [
      ["SUNSETS", "Famous sunsets over the Aegean Sea"],
      ["ISLANDS", "Clifftop villages and volcanic landscapes"],
      ["ROMANCE", "Scenic walks and intimate experiences"],
      ["CUISINE", "Fresh seafood and Greek flavors"]
    ],

    packageTitle: "Choose Your Santorini Experience",
    packages: [
      ["3D / 2N", "₹54,999", "A short romantic island escape."],
      ["5D / 4N", "₹74,999", "Explore villages, beaches and famous viewpoints."],
      ["7D / 6N", "₹94,999", "A complete Santorini experience at a relaxed pace."]
    ]
  },

  {
    name: "Sydney",
    link: "/destination/sydney",
    image: "/sydney.webp",
    heroImage: "/sydneybg.webp",
    title: "Sydney: Where the City Meets the Sea",
    tags: ["BEACHES", "CITY LIFE", "ADVENTURE"],

    headline: "More Than Just The Harbour",
    info: "Sydney combines a lively city center with beautiful beaches, coastal walks and outdoor experiences. From its famous harbour to relaxed beach neighborhoods, the city offers a balance between urban energy and Australia's natural beauty.",

    experienceTitle: "EXPERIENCE SYDNEY",
    experienceSubtitle: "Where The City Meets The Coast",
    experiences: [
      ["BEACHES", "Surf, sand and beautiful coastal views"],
      ["CITY LIFE", "Harbour landmarks, shopping and entertainment"],
      ["ADVENTURE", "Hiking, surfing and outdoor activities"],
      ["NATURE", "Coastal trails, parks and scenic landscapes"]
    ],

    packageTitle: "Choose Your Sydney Experience",
    packages: [
      ["4D / 3N", "₹69,999", "Explore Sydney's famous landmarks and beaches."],
      ["6D / 5N", "₹94,999", "Experience the city, coast and outdoor attractions."],
      ["8D / 7N", "₹1,19,999", "A complete Sydney experience with more time to explore."]
    ]
  },

  {
    name: "Kerala",
    link: "/destination/kerala",
    image: "/kerala.webp",
    heroImage: "/keralabg.webp",
    title: "Kerala: God's Own Country, Naturally",
    tags: ["BACKWATERS", "NATURE", "CULTURE"],

    headline: "More Than Just The Backwaters",
    info: "Kerala is a destination of peaceful backwaters, green landscapes, coastal towns and rich traditions. From houseboat journeys and hill stations to local food and cultural experiences, Kerala offers a slower and more immersive way to travel.",

    experienceTitle: "EXPERIENCE KERALA",
    experienceSubtitle: "God's Own Country, A Journey Of Its Own",
    experiences: [
      ["BACKWATERS", "Houseboats and peaceful waterways"],
      ["NATURE", "Hills, forests and lush landscapes"],
      ["CULTURE", "Traditions, art and historic communities"],
      ["CUISINE", "Spices, seafood and local flavors"]
    ],

    packageTitle: "Choose Your Kerala Experience",
    packages: [
      ["3D / 2N", "₹7,999", "A quick introduction to Kerala's natural beauty."],
      ["5D / 4N", "₹12,999", "Explore backwaters, hills and local culture."],
      ["7D / 6N", "₹18,999", "A complete Kerala journey across multiple regions."]
    ]
  },

  {
    name: "Jaipur",
    link: "/destination/jaipur",
    image: "/jaipur.webp",
    heroImage: "/jaipurbg.webp",
    title: "Jaipur: Walk Through the Colors of Royalty",
    tags: ["HERITAGE", "ROYALTY", "CULTURE"],

    headline: "More Than Just The Pink City",
    info: "Jaipur is a city filled with grand palaces, historic forts, colorful markets and centuries of royal heritage. Beyond its famous pink streets, visitors can experience traditional crafts, local food and the stories of Rajasthan's past.",

    experienceTitle: "EXPERIENCE JAIPUR",
    experienceSubtitle: "Walk Through The Royal Past",
    experiences: [
      ["HERITAGE", "Forts, palaces and historic architecture"],
      ["ROYALTY", "Royal traditions and grand landmarks"],
      ["CULTURE", "Crafts, music and local traditions"],
      ["FOOD", "Rajasthani flavors and local specialties"]
    ],

    packageTitle: "Choose Your Jaipur Experience",
    packages: [
      ["2D / 1N", "₹4,999", "A quick journey through Jaipur's royal highlights."],
      ["4D / 3N", "₹8,999", "Explore forts, palaces, markets and local culture."],
      ["6D / 5N", "₹13,999", "A deeper Rajasthan experience starting from Jaipur."]
    ]
  },

  {
    name: "Agra",
    link: "/destination/agra",
    image: "/agra.webp",
    heroImage: "/agrabg.webp",
    title: "Agra: Where Love Became a Monument",
    tags: ["HERITAGE", "HISTORY", "ARCHITECTURE"],

    headline: "More Than Just The Taj Mahal",
    info: "Agra is best known for the Taj Mahal, but its history extends far beyond one monument. The city is home to impressive forts, historic streets and architectural treasures that reflect the grandeur of the Mughal era.",

    experienceTitle: "EXPERIENCE AGRA",
    experienceSubtitle: "A Journey Through India's History",
    experiences: [
      ["HERITAGE", "Historic monuments and Mughal landmarks"],
      ["HISTORY", "Stories from India's royal past"],
      ["ARCHITECTURE", "Detailed buildings, gardens and monuments"],
      ["CULTURE", "Local markets, crafts and traditions"]
    ],

    packageTitle: "Choose Your Agra Experience",
    packages: [
      ["2D / 1N", "₹4,499", "Discover the Taj Mahal and major attractions."],
      ["3D / 2N", "₹6,999", "Explore Agra's history, architecture and local culture."],
      ["4D / 3N", "₹9,999", "A relaxed heritage journey through Agra and nearby sights."]
    ]
  },

  {
    name: "Rishikesh",
    link: "/destination/rishikesh",
    image: "/rishikesh.webp",
    heroImage: "/rishikeshbg.webp",
    title: "Rishikesh: Find Adventure Beyond the Rapids",
    tags: ["ADVENTURE", "SPIRITUALITY", "NATURE"],

    headline: "More Than Just The Ganges",
    info: "Rishikesh brings together spiritual traditions, mountain landscapes and outdoor adventure along the Ganges. From peaceful ashrams and riverside views to rafting and trekking, the city offers a rare combination of excitement and calm.",

    experienceTitle: "EXPERIENCE RISHIKESH",
    experienceSubtitle: "Where Adventure Meets Inner Peace",
    experiences: [
      ["ADVENTURE", "River rafting, trekking and outdoor activities"],
      ["SPIRITUALITY", "Yoga, meditation and riverside traditions"],
      ["NATURE", "Mountains, forests and the Ganges"],
      ["CULTURE", "Ashrams, temples and local traditions"]
    ],

    packageTitle: "Choose Your Rishikesh Experience",
    packages: [
      ["2D / 1N", "₹4,999", "A quick escape combining nature and adventure."],
      ["4D / 3N", "₹8,999", "Explore rafting, temples and peaceful riverside spots."],
      ["6D / 5N", "₹13,999", "A complete Rishikesh experience with adventure and relaxation."]
    ]
  }
];

const Destination = () => {
  const { name } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);

  const destination = destinations.find(
    (destination) => destination.link === `/destination/${name}`
  );
  return (
    <>
      <div className="wrapper">
        <div className="destination">
          <div className="section1">
            <img
              src={destination.heroImage}
              alt={destination.name}
              className="destinationHero"
            />

            <div className="heroContent">
              <h1>{destination.title}</h1>

              <div className="heroTags">
                <span>{destination.tags[0]}</span>
                <span>{destination.tags[1]}</span>
                <span>{destination.tags[2]}</span>
              </div>

              <button>Explore Plans</button>
            </div>
          </div>

          <hr />

          <div className="section2">
            <div className="section2Left">
              <img src={`/${destination.name.toLowerCase().replace(" ", "")}1.webp`} alt={destination.name} />
            </div>

            <div className="section2Right">
              <h1 className="about">{destination.name}</h1>

              <h2 className="headline">{destination.headline}</h2>

              <p className="info">
                {destination.info}
              </p>
            </div>
          </div>

          <hr />

          <div className="section3">
            <div className="section3Left">
              <h2>{destination.experienceTitle}</h2>
              <h3>{destination.experienceSubtitle}</h3>

              <div className="experiences">
                {destination.experiences.map((experience) => (
                  <div className="experience" key={experience[0]}>
                    <h4>{experience[0]}</h4>
                    <p>{experience[1]}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="section3Right">
              <img
                src={`/${destination.name.toLowerCase().replace(" ", "")}2.webp`}
                alt={destination.name}
              />
            </div>
          </div>

          <hr />

          <div className="section4">
            <div className="section4Left">
              <img src="/travelglobe.webp" alt="Travel planning" />
            </div>

            <div className="section4Right">
              <h2>EXPLORE PACKAGES</h2>
              <h3>{destination.packageTitle}</h3>

              <div className="packages">
                {destination.packages.map((pkg) => (
                  <div className="package" key={pkg[0]}>
                    <h4>{pkg[0]}</h4>
                    <h5>{pkg[1]}</h5>
                    <p>{pkg[2]}</p>
                    <button>Book Now</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr />

          <div className="section5">
            <img src="/includes.webp" alt="What Wanderly Includes" />
          </div>


        </div>
      </div>
    </>
  )
}

export default Destination