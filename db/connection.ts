import { Sequelize } from 'sequelize' 

/**
 * Se crea la instancia de Sequilize y como primer argumento de pasa el
 * nombre de la base de datos 
 * de segundo de le pasa el nombre de usuario ej: root
 * de tercero la contraseña
 * por ultimo un objeto de configuracion
 */
const db = new Sequelize('node','root', '0709', {
    host: 'localhost', // ubicacion de la base de datos, en este caso es local
    dialect: 'mysql', // La base de datos que se esta usando
    define: { // excluir los campos que crea por defecto sequelize
        scopes: {
            excludeCreatedAtUpdateAt: {
                attributes: { exclude: ['createdAt', 'updatedAt']}
            }
        },
        timestamps: false
    }
} );

export default db;