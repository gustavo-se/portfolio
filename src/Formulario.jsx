import React, {Component} from 'react'

class Formulario extends Component{
    constructor(props){
        super(props)
        this.state = {
            nombre: '',
            correo: ''
        }
        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
    }
    cambiarNombre(e){
        this.setState({
            nombre: e.target.value
        })
    }
    cambiarCorreo(e){
        this.setState({
            correo: e.target.value
        })
    }
    render(){
        return (
            <div className="formulario">
            <form className='p-2 w-50 m-auto'>
                <div className="form-group" >
                    <label for="exampleInputEmail1">Nombre</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    onChange={this.cambiarNombre}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Dirrecion de eMail</label>
                    <input type="email" className="form-control" id="exampleInputPassword1"
                    onChange={this.cambiarCorreo}/>
                </div>
                <button type="submit" className="btn btn-outline-dark">Enviar</button>
            </form>
            <div className="componenteQueCambia m-auto w-50" >
                <h2>{`Hola ${this.state.nombre}` }</h2>
                <span>{`Tu correo es ${this.state.correo}`}</span>
            </div>
            </div>
        )
    }
}
export default Formulario