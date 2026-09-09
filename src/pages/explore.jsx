import React from 'react'
import './explore.css'


const destinations = [
  {
    name: "Goa",
    image: "/goa.png",
    price: "₹4,999",
    link: "/destination/goa"
  },
  {
    name: "Paris",
    image: "/paris.png",
    price: "₹39,999",
    link: "/destination/paris"
  },
  {
    name: "Bali",
    image: "/bali.png",
    price: "₹29,999",
    link: "/destination/bali"
  },
  {
    name: "Dubai",
    image: "/dubai.png",
    price: "₹24,999",
    link: "/destination/dubai"
  },
  {
    name: "Manali",
    image: "/manali.png",
    price: "₹7,999",
    link: "/destination/manali"
  },
  {
    name: "London",
    image: "/london.png",
    price: "₹44,999",
    link: "/destination/london"
  },
  {
    name: "Tokyo",
    image: "/tokyo.png",
    price: "₹49,999",
    link: "/destination/tokyo"
  },
  {
    name: "New York",
    image: "/newyork.png",
    price: "₹54,999",
    link: "/destination/new-york"
  },
  {
    name: "Switzerland",
    image: "/switzerland.png",
    price: "₹59,999",
    link: "/destination/switzerland"
  },
  {
    name: "Maldives",
    image: "/maldives.png",
    price: "₹34,999",
    link: "/destination/maldives"
  },
  {
    name: "Singapore",
    image: "/singapore.png",
    price: "₹27,999",
    link: "/destination/singapore"
  },
  {
    name: "Thailand",
    image: "/thailand.png",
    price: "₹19,999",
    link: "/destination/thailand"
  },
  {
    name: "Amsterdam",
    image: "/amsterdam.png",
    price: "₹42,999",
    link: "/destination/amsterdam"
  },
  {
    name: "Venice",
    image: "/venice.png",
    price: "₹46,999",
    link: "/destination/venice"
  },
  {
    name: "Santorini",
    image: "/santorini.png",
    price: "₹52,999",
    link: "/destination/santorini"
  },
  {
    name: "Sydney",
    image: "/sydney.png",
    price: "₹57,999",
    link: "/destination/sydney"
  },
  {
    name: "Kerala",
    image: "/kerala.png",
    price: "₹8,999",
    link: "/destination/kerala"
  },
  {
    name: "Jaipur",
    image: "/jaipur.png",
    price: "₹6,999",
    link: "/destination/jaipur"
  },
  {
    name: "Agra",
    image: "/agra.png",
    price: "₹5,999",
    link: "/destination/agra"
  },
  {
    name: "Rishikesh",
    image: "/rishikesh.png",
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

              <button className="exploreCardBook">
                Book Now →
              </button>
            </div>

          </div>

        ))}
      </div>

    </></div>
  )
}

export default Explore
