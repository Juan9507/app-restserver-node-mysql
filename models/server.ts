import  express  from "express";

/* * as userRoutes ( se le coloca un alias global) - si solo existe una unica exportacion 
se le deja solo el nombre */
import userRoutes from '../routes/usuario.route' 
import cors from 'cors'
import db from "../db/connection";

/**
 * Clase  para levantar el servidor de express
 */
class Server {

    private app: express.Application; // definir de que tipo es el atributo
    private port: string; // definir el puerto a usar
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express(); // inicializar express
        this.port = process.env.PORT || '8080';

        this.dbConnection();  
        this.middlewares();

        // definir mis rutas
        this.routes();

    }

    // Metodo para estar en la escucha del servidor de express
    listen(){
        this.app.listen( this.port, () =>{
            console.log('Servidor corriendo en puerto ' + this.port);
        } )
    }

    async dbConnection(){
        try {

            await db.authenticate()
            console.log('Database online')
            
        } catch (error) {
            throw new Error( error as string);
            
        }
    }

    // Son funciones que se ejecutan antes que otros procedimientos
    middlewares() {
        
        // CORS
        this.app.use( cors() )

        // Lectura del body
        this.app.use( express.json() )

        // Carpeta publica
        this.app.use( express.static('public') )
    }

    // Metodo para definir los end point, mideware que usa el path y la ruta a cual apuntar
    routes(){

        this.app.use( this.apiPaths.usuarios, userRoutes )

    }

}

export default Server;