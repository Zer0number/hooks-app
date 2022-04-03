import { useState, useEffect } from "react"
import { Route, Link } from "react-router-dom"

// function Vehicle(props){
//     return(
//         <div className="modal fade" id="vehicle-modal">
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

function Vehicles(){
    const [vehicles, setVehicles] = useState([]);
    const url = "https://swapi.dev/api/vehicles"

    useEffect(() => {
        async function fetchVehicles(){
            const response = await fetch(url)
            const vehicles = await response.json()
            setVehicles(vehicles.results)
        }
        fetchVehicles()
    }, [])
    
    return(
        <main>
            <div className="container">
                <div className="row mt-4">
                    {vehicles.map(p => (
                        <div key={p.name} className="col-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <ul>
                                        <li><h3>{p.name}</h3></li>
                                        <li>Model: {p.model}</li>
                                        <li>Class: {p.vehicle_class}</li>
                                        <li>Manufacturer: {p.manufacturer}</li>
                                        <li>Speed: {p.max_atmosphering_speed}</li>
                                        <li>Crew: {p.crew}</li>
                                        <li>Passengers: {p.passengers}</li>
                                        <li>Cargo: {p.cargo_capacity}Kg</li>
                                        <li>Supplies: {p.consumables}</li>
                                        <li>Cost: {p.cost_in_credits} credits</li>
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

export default Vehicles