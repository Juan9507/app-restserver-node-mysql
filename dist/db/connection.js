"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
/**
 * Se crea la instancia de Sequilize y como primer argumento de pasa el
 * nombre de la base de datos
 * de segundo de le pasa el nombre de usuario ej: root
 * de tercero la contraseña
 * por ultimo un objeto de configuracion
 */
const db = new sequelize_1.Sequelize('node', 'root', '0709', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        scopes: {
            excludeCreatedAtUpdateAt: {
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            }
        },
        timestamps: false
    }
});
exports.default = db;
//# sourceMappingURL=connection.js.map