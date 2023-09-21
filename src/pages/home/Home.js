import React, { createContext,useState } from 'react'
import { Container } from 'react-bootstrap'
import Cards from '../../components/Cards'
import '../../styles/home.css'

export const cartContext = createContext()
const Home = () => {
  const [sabad, setSabad] = useState([]);

  return (
    <cartContext.Provider value={[sabad, setSabad]}>
    <Container fluid className='home'>
      <header>
        <div className='cart' >
          Cart<span>{sabad.length}</span>
        </div>
      </header>
        <main>
            <section className='card-box'>
                <Cards/>
            </section>
        </main>
    </Container>
    </cartContext.Provider>
  )
}

export default Home