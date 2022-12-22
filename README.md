# aplicación de rest server con node js y express utilizando base de datos **mysql** y **ORM** sequelize

## Creación de lo que se necesita

- npm install  "para instalar las despendencias que se requieren en la aplicación"
- .env -> PORT = El numero del puerto que va a correr el servidor.

***

## End Point 

### Nota 
    
    cuando reciben id se pasa por la ruta al final
    eliminar solo actualiza el estado a false

Body -> 
```cs

    {
	    "nombre": "Pablo",
	    "email": "pablo@gmail.com"
    }  

```

|       Nombre              |     Ruta                             |     Body      |   Tipo    |
| ------------------------- | ------------------------------------ | ------------- | --------- |
| consultar usuario         | http://localhost:8080/api/usuarios   |      null     |    GET    |
| consultar usuario con id  | http://localhost:8080/api/usuarios/1 |      null     |    GET    |
| crear usuario             | http://localhost:8080/api/usuarios   |      true     |    POST   |
| actualizar usuario        | http://localhost:8080/api/1          |      true     |    PUT    |
| eliminar usuario          | http://localhost:8080/api/1          |      true     |   DELETE  |







