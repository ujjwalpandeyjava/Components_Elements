import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function FetchingAPI() {
    let [data, setData] = useState(() => {
        // console.log("setting data in state 'data'");
        return ([]);
    })
    useEffect(() => {
        /* fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
            .then((response) => response.json())
            .then(res => {
                console.log("Resp - useEffect:", res);
                setData(res.results);
            }); */
        //OR
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(res => {
                console.log("Resp axios:", res.data);
                setData(res.data.results)
            })
            .catch(e => console.error(e))
    }, []);

    return (
        <div className='App'>
            <table border='1' style={{ width: '100%' }}>
                <tbody>
                    <tr>
                        <th>S.no.</th>
                        <th>Name</th>
                        <th>Full details here</th>
                    </tr>
                    {data ? data.map((individualPokemonDetail, pos) => {
                        return (
                            <tr key={pos}>
                                <td style={{ padding: 5 }}>{pos + 1}</td>
                                <td style={{ padding: 5 }}>{individualPokemonDetail.name}</td>
                                <td style={{ padding: 5 }}>{individualPokemonDetail.url}</td>
                            </tr>
                        )
                    }) : <h2>No Pokemon</h2>}
                </tbody>
            </table>
        </div>
    )
}