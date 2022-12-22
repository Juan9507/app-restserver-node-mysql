import { Request, Response } from "express";
import Usuario from '../models/usuario';


// metodo para las acciones cuando se hace una peticion get (obtener todos los usuarios)
export const getUsuarios = async(req: Request, res: Response ) => {

    const usuarios = await Usuario.findAll();

    res.json({ usuarios });

}

// metodo para las acciones cuando se hace una peticion get con id (obtener solo un usuario)
export const getUsuario = async(req: Request, res: Response ) => {

    const { id }  = req.params;

    const usuario = await Usuario.findByPk(id)

    res.json(usuario)

}

// metodo para las acciones cuando se hace una peticion pst (crear un usuario)
export const postUsuario = async(req: Request, res: Response ) => {

    const { body }  = req

    try {

        const usuario = Usuario.build(body)
        await usuario.save()

        res.json( usuario )

    } catch( error ){
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

// metodo para las acciones cuando se hace una peticion put (actualizar un usuario)
export const putUsuario = async(req: Request, res: Response ) => {

    const { id } = req.params;
    const { body }  = req;

    try {

        const usuario = await Usuario.findByPk(id)
        await usuario?.update( body )
      
        res.json( usuario )

    } catch( error ){
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

}

// metodo para las acciones cuando se hace una peticion delete (eliminar un usuario "cambia el estado a false")
export const deleteUsuario = async(req: Request, res: Response ) => {

    const { id } = req.params;

    try {

        const usuario = await Usuario.findByPk(id)
        await usuario?.update({ estado: false})
      
        res.json( usuario )

    } catch( error ){
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

}