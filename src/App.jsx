import React from 'react'
import './App.css'
import { action,Originals,HorrorMovies,ComedyMovies, ActionMovies,RomanceMovies,Documentaries } from './urls'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'
import RowPost from './Components/Rowpost/RowPost'


function App() {
  

  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={Originals} title='Netflix Originals'/>
     <RowPost url={action} title='ActionMovies' isSmall/>
     <RowPost url={HorrorMovies} title='HorrorMovies' isSmall/>
     <RowPost url={ComedyMovies} title='ComedyMovies' isSmall/>
     <RowPost url={RomanceMovies} title='RomanceMovies' isSmall/>
     <RowPost url={Documentaries} title='Documentaries' isSmall/>
    </div>
  )
}

export default App
