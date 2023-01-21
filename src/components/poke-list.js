import { useEffect, useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getPokeList} from './poke-api'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Stack } from 'react-bootstrap';

const Pokelist = () => {
    const [PokemonLists, setPokemonLists] = useState([]);
    
    useEffect (() => {
        getPokeList().then((results) => {
          setPokemonLists(results)
        })
      },[])

      return PokemonLists.map((pokemon, i) =>{
        return(
          <div key={i}>
            <div className="wrapper">
              <div className="d-flex justify-content-around">
                <Stack direction="horizontal" gap={3}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`} />
                    <Card.Body>
                      <Card.Title>{pokemon.name}</Card.Title>
                      <Card.Text>
                        
                      </Card.Text>
                      <Button variant="primary">View Detail</Button>
                    </Card.Body>
                  </Card>
                </Stack>
              </div>
            </div>
          </div>
      )
      })
}

export default Pokelist;