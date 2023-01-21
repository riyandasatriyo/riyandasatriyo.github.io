/* eslint-disable no-restricted-globals */

import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getPokeAbility,getPokeType,getPokeMove} from './components/poke-api'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Stack } from 'react-bootstrap';
import Pokelist from './components/Poke-list';
import PokeSearch from './components/poke-search';


function App() {
  const [Searchs, setSearchs] = useState("");
  const [SearchValue,setSearchValue] = useState("");
  const [PokemonAbility,setPokemonAbility] = useState([]);
  const [PokemonType, setPokemonType] = useState([]);
  const [PokemonMove, setPokemonMove] = useState([]);
  

  const handleClick = () => {
     setSearchValue(Searchs);
     
   }
  


  useEffect(() =>{
    getPokeAbility(SearchValue).then((abilities) =>{
      setPokemonAbility(abilities)
    })
  },[SearchValue])

  useEffect(() =>{
    getPokeType(SearchValue).then((types) =>{
      setPokemonType(types)
    })
  },[SearchValue])

  useEffect(() =>{
    getPokeMove(SearchValue).then((moves) =>{
      setPokemonMove(moves)
    })
  },[SearchValue])
console.log(PokemonAbility)




  
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Poke Finder</h1>
          <Stack direction="horizontal" gap={3}>
            <Form.Control
              className="search" 
              type="text" 
              placeholder="Search by Name or Pokemon ID...."
              value = {Searchs}
              onChange={(event) => {
                setSearchs(event.target.value)
                event.preventDefault()
              }}
              />
            <Button type="submit" variant="primary" onClick={handleClick} >Search</Button>
          </Stack>
      </header>
      
        <div className="Container">
          <PokeSearch Search={SearchValue}/>
        </div>
        <h2>Another Pokemon :</h2>
        <div className="Container">   
           <Pokelist />
        </div>      
    </div>
  );
}

export default App;
