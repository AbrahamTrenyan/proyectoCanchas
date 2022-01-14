import axios from "axios"
import { useEffect, useState } from "react"
import { Toaster, toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from "react-loader-spinner";
const Voley = () => {
    const [voley, setVoley] = useState([])
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
        axios.get('https://apipdtc.herokuapp.com/voley')
            .then((api) => {
                setVoley(api.data)
            })
    }, [])
    return (
        <div style={{ color: "#000066"}}>
            <Toaster />
            <div className="container">
                <h1>Canchas de Voley</h1>
            </div>
            {voley.length > 0 ?
                <div>
                    {voley.map((cancha) => (
                        <div className="card container mb-4" key={cancha.id}>
                            <h5 class="card-title">
                                {cancha.nombre}
                            </h5>
                            <div className="row">
                                <img src={cancha.url_imagen} className="col-4" />
                                <div className="card-body col-6">
                                    <h5 className="card-text">Cancha techada: {cancha.techo === true ? <>Sí</> : <>No</>}</h5>
                                    {cancha.horarios.map((reserva) => (<button type="button" className={` ${reservas.includes(`${reserva.id}${reserva.hora}`) ? "btn-secondary m-2" : "btn-outline-secondary m-2"}`}style={{ height: "30px", width: "90px" }} key={reserva.id} onClick={() => reservar(reserva)}>{reserva.hora}</button>))}
                                </div>
                                {/*  <button type="button" className="btn btn-success col-2" style={{ height: "40px", width: "80px", marginTop: '220px', marginRight: "20px" }}>Reservar</button> */}
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
    );
}

export default Voley;