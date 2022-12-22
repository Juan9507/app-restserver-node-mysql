"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
const db_validators_1 = require("../helpers/db-validators");
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const router = (0, express_1.Router)();
router.get('/', usuario_controller_1.getUsuarios);
router.get('/:id', [
    (0, express_validator_1.check)('id').custom(db_validators_1.existeUsuarioPorId),
    validar_campos_1.default
], usuario_controller_1.getUsuario);
router.post('/', [
    (0, express_validator_1.check)('email', 'El email no es valido').isEmail(),
    (0, express_validator_1.check)('email').custom(db_validators_1.existeEmailUsuario),
    validar_campos_1.default
], usuario_controller_1.postUsuario);
router.put('/:id', [
    (0, express_validator_1.check)('id').custom(db_validators_1.existeUsuarioPorId),
    (0, express_validator_1.check)('email', 'El email no es valido').optional().isEmail(),
    (0, express_validator_1.check)('email').custom(db_validators_1.existeEmailUsuario).optional(),
    validar_campos_1.default
], usuario_controller_1.putUsuario);
router.delete('/:id', [
    (0, express_validator_1.check)('id').custom(db_validators_1.existeUsuarioPorId),
    validar_campos_1.default
], usuario_controller_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.route.js.map