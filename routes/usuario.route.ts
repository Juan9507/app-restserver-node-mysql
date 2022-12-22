import { check } from 'express-validator'

import { Router } from 'express'
import { 
    deleteUsuario, 
    getUsuario, 
    getUsuarios, 
    postUsuario,
    putUsuario } 
from '../controllers/usuario.controller';
import { existeEmailUsuario, existeUsuarioPorId } from '../helpers/db-validators';
import validarCampos from '../middlewares/validar-campos';

const router = Router();

router.get('/', getUsuarios);

router.get('/:id', [
    check('id').custom( existeUsuarioPorId ),
    validarCampos
], getUsuario);

router.post('/', [
    check('email','El email no es valido').isEmail(),
    check('email').custom( existeEmailUsuario ),
    validarCampos
], postUsuario);

router.put('/:id', [
    check('id').custom( existeUsuarioPorId ),
    check('email','El email no es valido').optional().isEmail(),
    check('email').custom( existeEmailUsuario ).optional(),
    validarCampos
], putUsuario);

router.delete('/:id',[
    check('id').custom( existeUsuarioPorId ),
    validarCampos
], deleteUsuario);

export default router;