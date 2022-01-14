import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const NuestrasCanchas = () => {
    const [deportes, setDeportes] = useState([])
    useEffect(() => {
        axios.get('https://apipdtc.herokuapp.com/deportes')
            .then((api) => {
                setDeportes(api.data)
            })
    }, [])
    return (
        <>
            <div className="container mt-2" style={{textAlign:"center"}}>
                <h1>Nuestras Canchas</h1>
            </div>
            {deportes.length > 0 ?
                <div className="d-flex justify-content-center">
                    {deportes.map((sport) => (
                        <div className="carta" >
                            <div className="card m-4" style={{ width: "18rem", height:"25rem"}} key={sport.id}>
                                <Link to={`/${sport.deporte}`}><img className="card-img-top" src={sport.url_imagen}/></Link>
                                <div className="card-body">
                                    <h5 className="card-title">{sport.deporte}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                :
                <p>cargando</p>
            }
        </>
    );
}

export default NuestrasCanchas;