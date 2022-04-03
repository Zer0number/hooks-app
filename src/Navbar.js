// import { Component } from "react";
import { NavLink } from 'react-router-dom'

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="ms-5 nav-item">
                            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="ms-5 nav-item">
                            <NavLink to="/people/" className="nav-link" activeClassName="active">People</NavLink>
                        </li>
                        <li className="ms-5 nav-item">
                            <NavLink to="/planets/" className="nav-link" activeClassName="active">Planets</NavLink>
                        </li>
                        <li className="ms-5 nav-item">
                            <NavLink to="/starships/" className="nav-link" activeClassName="active">Starships</NavLink>
                        </li>
                        <li className="ms-5 nav-item">
                            <NavLink to="/vehicles/" className="nav-link" activeClassName="active">Vehicles</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

// class Navbar extends Component{
//     constructor(props){
//         super(props)
//     }

//     render(){
//         return(
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid">
//                     <button className="navbar-toggler">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse">
//                         <ul className="navbar-nav">
//                             <li className="ms-5 nav-item">
//                                 <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
//                             </li>
//                             <li className="ms-5 nav-item">
//                                 <NavLink to="/people/" className="nav-link" activeClassName="active">People</NavLink>
//                             </li>
//                             <li className="ms-5 nav-item">
//                                 <NavLink to="/planets/" className="nav-link" activeClassName="active">Planets</NavLink>
//                             </li>
//                             <li className="ms-5 nav-item">
//                                 <NavLink to="/starships/" className="nav-link" activeClassName="active">Starships</NavLink>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         )
//     }
// }

export default Navbar