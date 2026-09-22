import React from 'react'
import './explore.css'
import { Link } from 'react-router-dom'


const destinations = [
  {
    name: "Goa",
    image: "/goa.webp",
    price: "₹4,999",
    link: "/destination/goa"
  },
  {
    name: "Paris",
    image: "/paris.webp",
    price: "₹39,999",
    link: "/destination/paris"
  },
  {
    name: "Bali",
    image: "/bali.webp",
    price: "₹29,999",
    link: "/destination/bali"
  },
  {
    name: "Dubai",
    image: "/dubai.webp",
    price: "₹24,999",
    link: "/destination/dubai"
  },
  {
    name: "Manali",
    image: "/manali.webp",
    price: "₹7,999",
    link: "/destination/manali"
  },
  {
    name: "London",
    image: "/london.webp",
    price: "₹44,999",
    link: "/destination/london"
  },
  {
    name: "Tokyo",
    image: "/tokyo.webp",
    price: "₹49,999",
    link: "/destination/tokyo"
  },
  {
    name: "New York",
    image: "/newyork.webp",
    price: "₹54,999",
    link: "/destination/newyork"
  },
  {
    name: "Switzerland",
    image: "/switzerland.webp",
    price: "₹59,999",
    link: "/destination/switzerland"
  },
  {
    name: "Maldives",
    image: "/maldives.webp",
    price: "₹34,999",
    link: "/destination/maldives"
  },
  {
    name: "Singapore",
    image: "/singapore.webp",
    price: "₹27,999",
    link: "/destination/singapore"
  },
  {
    name: "Thailand",
    image: "/thailand.webp",
    price: "₹19,999",
    link: "/destination/thailand"
  },
  {
    name: "Amsterdam",
    image: "/amsterdam.webp",
    price: "₹42,999",
    link: "/destination/amsterdam"
  },
  {
    name: "Venice",
    image: "/venice.webp",
    price: "₹46,999",
    link: "/destination/venice"
  },
  {
    name: "Santorini",
    image: "/santorini.webp",
    price: "₹52,999",
    link: "/destination/santorini"
  },
  {
    name: "Sydney",
    image: "/sydney.webp",
    price: "₹57,999",
    link: "/destination/sydney"
  },
  {
    name: "Kerala",
    image: "/kerala.webp",
    price: "₹8,999",
    link: "/destination/kerala"
  },
  {
    name: "Jaipur",
    image: "/jaipur.webp",
    price: "₹6,999",
    link: "/destination/jaipur"
  },
  {
    name: "Agra",
    image: "/agra.webp",
    price: "₹5,999",
    link: "/destination/agra"
  },
  {
    name: "Rishikesh",
    image: "/rishikesh.webp",
    price: "₹6,499",
    link: "/destination/rishikesh"
  }
]

const Explore = () => {
  return (
    <div><>
      <div className="exploreCards">
        {destinations.map((destination) => (

          <div className="exploreCard">
            <div className="exploreCardImage">
              <h3>{destination.name}</h3>
              <img
                className="image"
                src={destination.image}
                alt={destination.name}
              />
            </div>

            <div className="exploreCardInfo">
              <div className="exploreCardPrices">
                <p>Starting at</p>
                <h4>{destination.price}</h4>
              </div>

              <Link to={destination.link} className="exploreCardBook">
                Book Now →
              </Link>
            </div>

          </div>

        ))}
      </div>

    </></div>
  )
}

export default Explore