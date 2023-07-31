# Tools

1.  Proptypes  
    `npm install prop-types`

2.  Tailwind  
     https://tailwindcss.com/docs/guides/create-react-app
    Esta es la guia que se utilizó en el proyecto pear incorporar Tailwind pero estaen desuso.

        Existen otras en funcion del empaquetador web (Vite, Next.js, etc) que utilice para inicializar mi proyecto

    https://tailwindcss.com/docs/installation/framework-guides

3.  classNames para gestionar las clases de estilos y hacer varias combinaciones.

    Documentacion:
    https://www.npmjs.com/package/classnames

    `npm install classnames`

    `import className from "classnames"` en el componente donde lo voy a utilizar

    Ver Button.js, ejemplo práctico de uso.

4.  Iconos en react

    https://react-icons.github.io/react-icons/

    `npm install react-icons`

    importar al inicio del componente el icono que voy a estar utilizando, tal y como lo indica la docuentación

5.  UseRef: Hook permite a un componente obtener la referencia que necesita del DOM

    `import { useRef } from "react"`

    ```javascript
    function MyComponent(){
       ...
       const divEl = useRef()
       ...

    return(
       <div ref={divEl}></div>
    )
    }
    ```

6.  Técnicas condicionales

    ` value?.label || "select..."`

    esta instruccion devuelve el primer valor verdadero.
    En este caso:
    El string `"select..."` siempre es verdadeo.  
    `value?.label` devuelve undefined si almacena un valor null, en este caso el primer verdadeo seria `"select...`, de lo contrario se muestra el valor seleccionado.
    -Ver lógica completa en el componente Dopdown.

7. Panel control
    Este panel control no es más que un contenedor reutilizable para no repetir estilos
    se implementa como sigue:

    ```javascript
    import classNames from "classnames";
    function Panel({ children, className, ...rest }) {
      const finalClassNames = classNames(
        "border rounded p-3 shadow bg-white w-full",
        className
      );
      return (
        <div {...rest} className={finalClassNames}>
          {children}
        </div>
      );
    }
    export default Panel;
    ```

    De no utilizar este componente, se repetirían las clases para los estilos y sería mas dificil de leer en el codigo.

    Este componente basicamente devuelve un `div` que envuelve la prop children a las que se le pasan como prop:

    - `ClassName={finalClassNames}`: clases de estilos comunes, mas las que se puedan agregar diferenciadas. -` {...rest}`: con esta instruccion incluyo el resto de las propiedades que quiera pasarle de forma individualizada.

8.  Navigation en React

    puntos positivos:

    - No se pierden las configuraciones de JS cdo cambio de vista.
    - Se trata de mofificar la url y hacer peticiones que muestren en pantalla lo que quiere ver el usuario quitando quellos elementos que estaan y no necesito y poniendo otros.

    Path viene siendo lo que está detras la raiz de mi app ejemplo:
    `myapp.com/dropdown    path:/dropdown`

    `react-app.org/accordion  path:/accordion`

    `localhost:3000/img/preview   path:/img/preview`

    - windows.location.pathname  
      Devuelve el path de mi url

    - PopState para rastrear nagigation inside de app

      `window.addEventListener("popstate", handler);`  
      Este evento controla cada vez que se cambia de un path a otro.
      Esto es util a la hora de que el usuario quiera darle hacia atras a la pagina o hacia adelante as'i puedo saber cdo lo hace y con otro código evitar el comportamiento por default de refrescar la pantalla y mostrar lo que quiera.

      `window.history.pushState({}, '', to); `  
      Actualiza la direccion de la url evitando que se refresque la pagina.

      La idea es cambiar los elementos que muestra mi pantalla en lugar de cambiar ficheros diferentes para mostrarle al usuario una vista diferente, pero si hago esto tengo que hacerle ver al usuario que ha cambiado de página por lo que debo actualizar el path. Esta accion debo hacerla sin que se refresque la pagina de lo contrario no funcionará por eso utilizo esta línea de codigo. 
      
      
9. Route

     En App.js
     Envolver componentes de las paginas en el componente *<Route></Route>* de la siguiente forma

     ```javascript
     <Route path={"/"}>
       <DropdownPage />
     </Route>
     ```

     Código del componente Route.js
     ```javascript
     //este import es de un custom hook que abrevia en código para no tener que importar:
     //-import { useContext } from "react";
    //import NavigationContext from "../context/navigation";
     import useNavigation from "../hooks/use-navigation";

     function Route({ path, children }) {
       const { currentPath } = useNavigation();
      
      //currentPath contiene el path del valor que fue clikado 
      if (path === currentPath) {
         return children;
       }

       return null;
     }

     export default Route;
     ```





     Es quien controla lo que en definitiva debe ir saliento en pantalla. se le pasa como prop el `path` e internamente en el *Route.js* si este path coincide con el que el usuario clickó pues se muestra en pantalla el hijo que en este caso es `<DropdownPage />`.

10.  Modal Page
      se trata de lapagina emergente que sale que bloquea todo el fondo.
      La ilusion de que es otra ventana se la dan los estilos pero para que estos funcionen esimprescindible ubicar el contenedor del modal en una posicion específica dentro del DOM para evitar que cualquier cambio en la configuración de posicionamiento no afecte el comportamiento del modal.
      Para ello se utiliza `React.DOM.createPortal`

      ```javascript
      ReactDOM.createPortal(
        <div>//code...</div>,
        document.querySelector(".modal-container")
      );
      ```

      Este elemento tiene dos argumentos, uno de ellos es ele elemento que queremos posicionar y el otro un selector de clase (posicionado en el index.html justo antes de que cierre el body)

      Notas importantes:

      - Posicionado `fixed` para el modal para que aun cuando se mueva de posicion en el código siga funcionando.
      - Es necesario colocar un useEffect para en caso de que la p'agina tenga contenido como para ser scroll se le impida hacerlo una vez que est'e habilitado el modal
      -

      ```javascript
      useEffect(() => {
        document.body.classList.add("overflow-hidden");
        return () => {
          document.body.classList.remove("overflow-hidden");
        };
      }, []);
      ```

11. Sort of Objects
    
    - Orden ascendente
    ```javascript
       const data=[
        { name: 'Tomato', cost:'10', weight: 5 },
        { name: 'Carrot', cost:'15', weight: 2 },
        { name: 'Onion', cost:'5', weight: 7 }
       ];
       
       //selecciona el criterio de comparacion y lo conecta con la funcion sort
       function getSortValue(vegetable){
        return vegetable.name;
       }

       //permite comparar ya sea numero o string y ya sea ascendientemente o descendientemente 
       data.sort((a,b)=>{
            const valueA = getSortValue(a);
            const valueB = getSortValue(b);

            const reverseOrder = sortOrder==='asc' ? 1 : -1;
            
             if(typeof valueA === 'string'){
              return valueA.localeCompare(valueB) * reverseOrder;
             }else{
              return (valueA - valueB) * reverseOrder
             }

       })
    ```

    - Orden descendente

12. Pasos para hacer un custom Hook para optimizar codigo y no repetir tanto 

   1. Hacer una funcion llamada **'useSomething'**
   2. Encontrar todo el codigo que no sea JSX relacionado con piece of state
   3. cortarlo y pasarlo a la funcion **'useSomething'**
   4. Corregir errores de 'not defined'
   5. En la funcion nueva retornar un objeto con las variables que el componente necesita
   6. Llamar Hook dentro del componente y extraer las variales dentro del mismo para que puedan ser usadas.
   7.  Pasar las variables que se necesitan como argumento para que funcione el hook.
   8.  Renombrar el Hook con algo mas personalizado 


13. **useReducer**
     Explicacion en detalle en libreta

    Se trata de un Hoook alternativo a useState
    -Produce States
    -Cambiando este estado hace que el componente renderice.
    -Muy usado cuando tienes algunas varias of states que tienen una relacion cercana como en el caso de CounterPage
    -useful cuando futuros valores de state dependen del valor actual del estado. 

    `import { useReduce } from React` 

    Definir las variables que van a contener los strings que utilizar'a la funcion reduce para identificar que state esta solicitando modificación 
    ```javascript
    const INCREMENT_COUNT = "increment";
    const SET_VALUE_TO_ADD = "change-value-to-add";
    const DECREMENT_COUNT = "decrement";
    const ADD_VALUE_TO_COUNT = "add_value_to_count";
    ```
    Almacenar los strings en variables no es necesario puedo asignar y comparar dentro de reduce() los strings directamente. La utilizacion de variables previene errores que se puedan cometer a la hora de poner los string en diferentes lugares. Por el contrario si es un error al poner una variable React lo indica automáticamente.

    Accedo a la funcion **reduce()** mediante el *dispatch* pasandole un object action 
    ```javascript
    dispatch({
      type: ADD_VALUE_TO_COUNT,
      payload: value
    })
    ```

    En este caso en payload paso el valor el valor qie quiero adicionar. el dispatch incremento no necesitaria este valor porque solo se trata de incrementar el numero de la variable del *state*  


    Ejemplo de funcion reduce

    ```javascript
    const reducer = (state, action) => {
      switch (action.type) {
        case INCREMENT_COUNT:
          return {
            ...state,
            count: state.count + 1,
          };
        case SET_VALUE_TO_ADD:
          return {
            ...state,
            valueToAdd: action.payload,
          };
        case DECREMENT_COUNT:
          return {
            ...state,
            count: state.count - 1,
          };
          case ADD_VALUE_TO_COUNT:
            return{
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0 

            }
        default:
          return state;
      }
    };

    ```