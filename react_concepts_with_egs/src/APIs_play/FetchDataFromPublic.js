import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';

function FetchDataFromPublic() {
    let [pokemonData, setPokemonData] = useState([])
    //  To get data from local file put the data in public folder.
    useEffect(() => {
        // present in public folder
        axios.get('pokemon.json')
            .then(res => {
                console.log("ff", res, res.data);
                setPokemonData(res.data.pokemon)
            })
            .catch(e => console.warn(e))
    }, []);
    return (
        <Fragment >
            <h2> Way 1, from local file</h2>
            <table border='1' style={{ width: '100%' }}>
                <tbody>
                    <tr>
                        <th>S.No.</th>
                        <th>Poekmon ID</th>
                        <th>name</th>
                        <th>egg</th>
                        <th>img<br />height</th>
                        <th>spawn_chance (out of 1) <hr /> spawn_time</th>
                    </tr>
                    {pokemonData.map((individualPokemonDetail, pos) => {
                        return (
                            <tr key={pos}>
                                <td style={{ padding: 5 }}>{individualPokemonDetail.id}</td>
                                <td style={{ padding: 5 }}>{individualPokemonDetail.num}</td>
                                <td style={{ padding: 5 }}>{individualPokemonDetail.name}</td>
                                <td style={{ padding: 5 }}>{individualPokemonDetail.egg}</td>
                                <td style={{ padding: 5 }}><img width='100' height='100' alt={"Pokemon " + individualPokemonDetail.name} src={individualPokemonDetail.img}></img><br />{individualPokemonDetail.height}</td>
                                <td><strong>{individualPokemonDetail.spawn_chance}<hr />{individualPokemonDetail.spawn_time}</strong></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Fragment>
    )
}

export default FetchDataFromPublic;