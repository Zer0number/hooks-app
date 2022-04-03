import { useState, useEffect } from "react"
import { Route, Link } from "react-router-dom"

// function Person(props){
//     return(
//         <div className="modal fade" id="person-modal">
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

function People(){
    const [people, setPeople] = useState([]);
    const url = "https://swapi.dev/api/people"

    useEffect(() => {
        async function fetchPeople(){
            const response = await fetch(url)
            const people = await response.json()
            setPeople(people.results)
        }
        fetchPeople()
    }, [])
    
    return(
        <main>
            <div className="container">
                <div className="row mt-4">
                    {people.map(p => (
                        <div key={p.name} className="col-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <ul>
                                        <li><h3>{p.name}</h3></li>
                                        <li>Height: {p.height}</li>
                                        <li>Mass: {p.mass}</li>
                                        <li>Hair Color: {p.hair_color}</li>
                                        <li>Eye Color: {p.eye_color}</li>
                                        <li>Gender: {p.gender}</li>
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

export default People