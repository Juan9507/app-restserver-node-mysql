import Usuario from "../models/usuario"

export const existeUsuarioPorId = async(id: number) => {

    const existeUsuario = await Usuario.findByPk(id);
    if ( !existeUsuario ){
        throw new Error(`No existe un usuario con el id ${id}`);
    }
}

export const existeEmailUsuario = async(email: String) => {
    const existeEmail = await Usuario.findOne({
        where: {
            email: email
        }
    })

    if( existeEmail ){
        throw new Error(`Ya existe un usuario con este email ${email}`);    
    }
}