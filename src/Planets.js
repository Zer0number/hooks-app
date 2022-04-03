import { useState, useEffect } from "react"
import { Route, Link } from "react-router-dom"

// function Planet(props){
//     return(
//         <div className="modal fade" id="planet-modal">
//             <div className="modal-dialog">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <button className="btn-close" onClick={() => props.history.goBack()}></button>
//                     </div>
//                     <div className="modal-body">
//                         <ul>
//                             <li>Name: {props.name}</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

function Planets(){
    const [planets, setPlanets] = useState([]);
    const url = "https://swapi.dev/api/planets"

    useEffect(() => {
        async function fetchPlanets(){
            const response = await fetch(url)
            const planets = await response.json()
            setPlanets(planets.results)
        }
        fetchPlanets()
    }, [])
    
    return(
        <main>
            <div className="container">
                <div className="row mt-4">
                    {planets.map(p => (
                        <div key={p.name} className="col-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <ul>
                                        <li><h3>{p.name}</h3></li>
                                        <li>Climate: {p.climate}</li>
                                        <li>Gravity: {p.gravity}</li>
                                        <li>Terrain: {p.terrain}</li>
                                        <li>Population: {p.population}</li>
                                        <li>Rotation Period: {p.rotation_period}</li>
                                        <li>Orbital Period: {p.orbital_period}</li>
                                    </ul> 
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <Route path="/people/:id" component={Person}></Route> */}
                </div>
            </div>
        </main>
    )
}

export default Planets