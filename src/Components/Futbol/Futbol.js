import axios from "axios"
import { useEffect, useState } from "react"
import { Toaster, toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from "react-loader-spinner";
const Futbol = () => {
    const [futbol, setFutbol] = useState([])
    const reservas = []
    const reservar = (CanchayHora) => {
        reservas.push(CanchayHora)
        localStorage.setItem("reserva", JSON.stringify(reservas))
        toast.success("Su reserva ha sido realizada con éxito!", {
            position: "top-center",
            autoClose: 10000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
    useEffect(() => {
        axios.get('https://apipdtc.herokuapp.com/futbol')
            .then((api) => {
                setFutbol(api.data)
            })
    }, [])
    return (
        <div>
            <div style={{ color: "#000066" }}>
                <Toaster />
                <div className="container">
                    <h1>Canchas de Fútbol</h1>
                </div>
                {futbol.length > 0 ?
                    <div>
                        {futbol.map((cancha) => (
                            <div className="card container mb-4" key={cancha.id}>
                                <div className="row">
                                    <img src={cancha.url_imagen} className="col-4 m-1" />
                                    <div className="card-body col-6">
                                        <h4 class="card-title">
                                            {cancha.nombre}
                                        </h4>
                                        <h5 className="card-title mb-4">Cantidad de jugadores: {cancha.jugadores}</h5>
                                        <h5 className="card-text">Cancha techada: {cancha.techo === true ? <>Sí</> : <>No</>}</h5>
                                        {cancha.horarios.map((reserva) => (<button type="button" className={` ${reservas.includes(`${reserva.hora}`) ? "btn-secondary m-2" : "btn-outline-secondary m-2"}`} style={{ height: "30px", width: "90px" }} key={reserva.id} onClick={() => reservar(reserva)}>{reserva.hora}</button>))}
                                    </div>
                                    {/* <button type="button" className="btn btn-success col-2" style={{ height: "40px", width: "80px", marginTop: '220px', marginRight: "20px" }}>Reservar</button> */}
                                </div>

                            </div>
                        ))}
                    </div>
                    :
                    <div className="container d-flex justify-content-center">
                        <Oval arialLabel="loading-indicator" />
                    </div>
                }
            </div>
        </div>
    );
}

export default Futbol;