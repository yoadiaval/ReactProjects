# Redux

Es un administrador de *states* que funciona con muchas tecnologías entre ellas React 

Se encarga de administrar todos los estados de una aplicación, 

Si tengo una app con varios componentes y cada uno con *states* diferentes y necesito que,por ejemplo, multiples componetes puedan acceder al mismo estado, puede ser una tare ardua y un caos estructural para la aplicación.

Mediante el ecosistema de Redux puedo centralizar mi app y controlar los estados desde un mismo sitio.

Redux opera entorno a tres elemento principales:

``store``
Objeto de javascript inmutable que almacena todos los *states*. (Estado centralizado) 

Ejemplo básico
```javascript
const store = Redux.createStore(
  (state = 5) => state
);
```

``actions``
cuando en la interfaz se ejecuta un evento que puede ser:
onSubmit(), onClick(), onChange(), onEvent() lo que vamos a querer hacer es ir al *store*  y actualizar el estado y para eso es necesario especificar algo primero llamado *actions* que le va a decir a Redux que accion se va a ejecutar sobre el *store* (o sea si quiero actializar obtener o añadir datos)

Ejemplos de actions 

```javascript
const myAction = {
    type: 'counter/increment', //nombre de la accion a ejecutar
    payload: 20  //dato para el store para q lo tome y actualice el state.
}

```
```javascript
const myAction = {
    type: 'task/create', 
    payload: {title:'some task'}  
}

```
```javascript
const myAction = {
    type: 'task/update', 
    payload: {title:'new title'} 
}

```
```javascript
const myAction = {
    type: 'task/delete', 
    payload: {"id":10}  
}

```

```javascript
const myAction = {
    type: 'task/gettask', 
    payload: {"id":20}  
}

```

```javascript
const myAction = {
    type: 'user/create', 
    payload: {
        "email":"yoannet93@gmail.com", 
        "password": "egerhth"
        }  
}

```

Luego mediante una funcion llamada **dispatch()** enviamos  estos *actions* al *stote*

```javasript
store.dispatch(myAction)
```
La operacion anterior es solo una descripcion de lo que queremos hacer.

LO QUE VAMOS A HACER LO ESPECIFICA *REDUCERS*

``reducers``
*Store* necesita saber como responder a la accion que se le acaba de pasar mediante *dispatch()* y esto estaría a cargo de la funcion *reducer* que es la encargada de modificar el estado
Esta funcion que espera dos parámetros, *el estado actual* para saber que datos tiene la interfaz hasta ese moemento y el *action* para saber que dato debe ejecutar y que datos usar si se trae un payload

Esta es la única funcion de reducers, el nunca llamará a APIs endpoints por ejemplo.

Reducer no debe modificar nunca el state, devolverá uno nuevo

```javascript
function countReducer(state=initialState, action){
    return {
        ...state,
        value: state.value+1
    }
}
return state
```

Trabajar con todo esto suele ser complejo por lo que se recomienda una herramiento de Redux para manejarlo.

``Redux Toolkit``











## tomado de freecodeCamp

---
Se crea y se accede a sus estado de la siguiente forma:

```javascript
const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
const currentState = store.getState()


```





## Redux action. 

Crear y enviar *action* a Redux mediante una funcion (*actionCreator()*)
La acciones se crean tal cual como objetos.

```JAVASCRIPT
const action = {
  type: 'LOGIN'
}

function actionCreator(){
  return action 
}
```

## Enviar accion de Redux

