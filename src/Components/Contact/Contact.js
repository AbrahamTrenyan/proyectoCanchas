import mapa from "../../img/mapa.png"
const Contact = () => {
    return (
        <><div className="row" style={{ color: "#000066", backgroundColor: "#FAFFFA" }}>
            <div className="col-6" style={{ marginLeft: "50px" }}>
                <form>
                    <h2 style={{ marginTop: "50px" }}> Contacto </h2>
                    <div className="form-group mt-5">
                        <label for="exampleFormControlInput1">Direccion de email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                    </div>
                    <div className="mt-4">
                        <label for="nombre">Nombre</label>
                        <input className="form-control" type="text" id="nombre" placeholder=""></input>
                    </div>
                    <div className="form-group mt-4">
                        <label for="exampleFormControlTextarea1"> Mensaje </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="button" class="btn btn-success mt-4">Enviar</button>
                </form>
            </div>
            <div className="col-5">
                <h2 style={{ marginTop: "50px", marginBottom: "50px" }}>Dónde estamos?</h2>
                <img src={mapa} style={{ width: "100%", marginBottom: "50px" }} />
            </div>
        </div>
        </>
    );
}

export default Contact;