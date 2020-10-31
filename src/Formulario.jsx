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
        this.volverNombre = this.volverNombre.bind(this)
        this.volverCorreo = this.volverCorreo.bind(this)
    }
    cambiarNombre(){
        this.setState({
            nombre: 'Inserte su nombre'
        })
    }
    cambiarCorreo(){
        this.setState({
            correo: 'Inserte correo de contacto'
        })
    }
    volverNombre(){
        this.setState({
            nombre: ''
        })
    }
    volverCorreo(){
        this.setState({
                correo: ''
        })
    }
    render(){
        return (
            <div className="formulario">
            <form className='p-2 w-50 m-auto'>
                <div className="form-group my-3" >
                    <label for="exampleInputEmail1">Nombre</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    onFocus={this.cambiarNombre} onBlur={this.volverNombre}/>
                    <small className='text-danger'>{`${this.state.nombre}`}</small>
                </div>
                <div className="form-group my-3">
                    <label for="exampleInputPassword1">Dirrecion de eMail</label>
                    <input type="email" className="form-control" id="exampleInputPassword1"
                    onFocus={this.cambiarCorreo} onBlur={this.volverCorreo}/>
                    <small className='text-danger'>{`${this.state.correo}`}</small>
                </div>
                <button type="submit" className="btn btn-outline-dark">Enviar</button>
            </form>
            </div>
        )
    }
}
export default Formulario