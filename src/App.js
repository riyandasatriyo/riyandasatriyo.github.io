/* eslint-disable no-restricted-globals */

import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getPokeSearch,getPokeAbility,getPokeType,getPokeMove} from './components/poke-api'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Stack } from 'react-bootstrap';
import Pokelist from './components/poke-list';


function App() {
  const [Searchs, setSearchs] = useState("");
  const [SearchValue,setSearchValue] = useState("");
  const [PokemonSearch, setPokemonSearch] = useState([]);
  const [PokemonAbility,setPokemonAbility] = useState([]);
  const [PokemonType, setPokemonType] = useState([]);
  const [PokemonMove, setPokemonMove] = useState([]);
  

  const handleClick = () => {
     setSearchValue(Searchs);
     
   }
  
  useEffect (() => {
    getPokeSearch(SearchValue).then((data) => {
      setPokemonSearch(data)
    })
  },[SearchValue])

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

const PokeSearch = () => {
  return (
    <div className="wrapper">
      <h2>You Searched Pokemon :</h2>
          <div className="d-flex justify-content-around">
            <Stack direction="horizontal" gap={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PokemonSearch.id}.png`} />
                <Card.Body>
                  <Card.Title>{PokemonSearch.name}</Card.Title>
                  <Card.Text>
                   
                  </Card.Text>
                  <Button variant="primary">View Detail</Button>
                </Card.Body>
              </Card>
            </Stack>
          </div>
        </div>
        )
}



  
  

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
          <PokeSearch />
        </div>
        <h2>Another Pokemon :</h2>
        <div className="Container">   
           <Pokelist />
        </div>      
    </div>
  );
}

export default App;
