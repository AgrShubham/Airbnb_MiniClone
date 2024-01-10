import Navbar from "./components/Navbar"
import Main from "./components/Main"
import data from "./data"
import Card from "./components/Card"
import Footer from "./components/Footer"

export default function App() {
  const cards= data.map(item=>
    {
      return(
      <Card
      key={item.id}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
      />
)
    })

  return (
    <div>
        <Navbar/>
        <Main />
        <section className="card-container">
          {cards }
        </section>
        <Footer/>
    </div>
  )
}

