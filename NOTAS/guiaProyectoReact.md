# Protocolo de trabajo en React (personal)

1. Definir esquema de dependencia de componentes dentro de la app

2. Inicializar proyecto
   
`npx create-react-app appname` 

3. Depurar carpetas dejando solo lo que necesito (de momento)
   
-puclic: solo dejo index.html

-src: elimino todo.

-lo demás lo dejo como está

4. En src creo:   
   -index.j, App.js y  
   -carpeta *components* y dentro pongo tantos componentes como tenga mi proyecto.  

5. creo el código base en cada uno de los ficheros   
   **index.js**

   ```javascript
   import React from "react";
   import ReactDOM from "react-dom/client";
   import App from "./App"

   const el = document.getElementById('root')
   const root=ReactDOM.createRoot(el)

   root.render(<App />)
   ``` 
   **App.js** Aplica para el resto de componentes

   ```javascript
   function App() {
     return (
       <></>
     );
   }

   export default App;
   ```
   6. Importo los componentes que necetitaré (opcional puede irse haciendo en la marcha)

   ## Uso de States

   Siempre que una variable cambia dentro del componente debo importar el Hook *useState*

   ```Javascript
   import { useState } from "react";

   function MyComponent(){
     const [state,setState] = useState('')

     return(
        <></>
     )
   }
   ```
   Las funciones que manejan las modificaciones de cada estado se generan dentro del propio componente.  
   En caso de que haya necesidad de pasarle al padre esa variable del estado (para que otro componente la utilice), en el padre debe haber una *funcion* la cual debo pasar como *parámetro* al hijo y desde el hijo invocarla.

   Ejemplo

   ### Componente padre App
   ```Javascript
   function App(){

   const editBookById = ()=>{
     /*contenido de la funcion*/
   }
   return (
      <BookList onEdit={editBookById}  />
    );
      }
   ```
### Componente hijo.
La variable state: *title* se "envia" a través de la funccion *onEdit* al padre App donde es procesada

   ```javascript
    import { useState } from 'react'

    function ChildComponent({onEdit}){
    const [title, setTitle] = useState('')

    const handleSubmit = ()=>{
        onEdit(title)
    }

     return(
        <form onSubmit={handleSubmit}>
          <input />
        </form>
     )


   }
   ```
   Y es el padre quien lo envia a traves de una propiedad a otro componente hijo si fuera necesario.  
   Si fuera el componente nieto y no uno hijo el que fuera a utilizar la variable pues paso la misma funcion del hijo al nieto y así sucesivamente.

   ## JSON Server
  Librería de Javascript para lograr que los datos que vaya generando dentro de la aplicacion persistan en la misma luego de recargar la pagina.

  1. Abrir segundo terminal (importante)
  `npm install json-server`

  2. Crear fichero db.js en la raiz del proyecto
   Aqu'i se va a almacenar los abjetos que se vayan generando en la app
   ```javascript
   {
    'books':[]
   }
   ```
3. En package.json localizo la zona *Debug* y agrego:
   
   `"server": "json-server -p 3001 --watch db.json ",`

Justo debajo de *"start"*. Quedaría

```Javascript
  "scripts": {
    "start": "react-scripts start",
    /******/
    "server": "json-server -p 3001 --watch db.json ",
    /******/
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  ```
  Puedo elegir cualquier puerto de los siguientes: 2998, 2999, 3000, 3001, 3002, exceptuando en el que está corriendo la App con React

4. Correr server en el segundo terminal, el primer terminal debe estar corriendo el *npm start* de React
   `npm run server`

5. Tener instalado en VSCode *rest client* para poder hacer peticiones directamente dentro del editor de código
6. Instalar Axios en el proyecto  
   `npm install axios` 

Mediante axios se harán los HTTP request al db.json  

7. Ejemplos concretos de peteciones que puedo hacer:
   
   Import Axios en cualquier archivo en el que vaya a utilizar las peticiones.  

  `import axios from 'axios'`
   
   El propio JSON server genera id's para mis objetos

*GET* Obtiene la lista inicial del contenido almacenado en db.js . Llamarlo mediante *useEffect* ver detalles más adelante
```Javascript
    const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };
   ```
*POST* Add elemento al arreglo
```Javascript
const createBook = async (title) => {
    const respons = await axios.post("http://localhost:3001/books", { title });
    const updatedBooks = [...books, respons.data];
    setBooks(updatedBooks);
  };

```

*PUT* Modifica valor para un id dado
   ```javascript
   const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    console.log(response);
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
   ```
*DELETE* Elimina objeto del array almacenado en db.js
```javascript
const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
   ```

## UseEffect para cargar por los datos que tengo almacenadosuna vez que se renderiza mi app por primera vez

`import { useEffect } from "react"`

Dentro del componente invocar el llamado con la siguiente estructura:

```javascript
   useEffect(() => {
    fetchBooks();
  }, []);
```

El primer argumento es una **funcion** y el segundo indica **cdo se ejecuta dicha funcion**:

- **[ ]**: se ejecuta una unica vez al levantar la app pero no lo vuelve a hacer. Valido para cargar los valores que tengo almacenados una primera vez.
- **sin segundo argumento**: Se llama despues de cada renderizado
- **[count]**: se ejecuta siempre que la variable count (o cualquier otra que se especifique dentro de de los corchetes)


## Hook useContext

Permite crear una instancia que almacena todas las funciones que controlan variables que necesitan varios componentes a la vez. de esta forma se hacen accesibles directamente por el componente sin necesidad de pasarse la funcion mediante props  
Esto no sustituye las props, se utilizan estrategicamente para aquellas funciones globales, en algunos casos va a seguir siendo necesario transferirse variables mediante props.

1. Crear Carpeta dentro de *src* llamada *context*
2. Dentro crear file *name.js* name simple ej books, person, etc.  
   
   ```javascript
   import axios from "axios";
   /*import useState de ser necesario*/

   const BooksContext = createContext();
    
   function Provider({ children }) {
    /*const [state, setState] = useState('')*/
    /*codigo de funciones*/

    return( 
        <BooksContext.Provider value={valueToShare}>
          {children}
        </BooksContext.Provider>;
     )
    }

   export { Provider };
   export default BooksContext;

   ```

 Agregar las funciones que defina que van a estar en esta instancia y declarar el *valueToShare*

```javascript
//Add al principio
import { createContext, useState } from "react";
//-------------------------------------------------
//Add dentro de la funcion Provider
    const [books, setBooks] = useState([]);

     const fetchBooks = async () => {
     };

     const createBook = async (title) => {
     };

     const editBookById = async (id, newTitle) => {

     };

     const deleteBookById = async (id) => {
     };

   const valueToShare = {
     books,
     fetchBooks,
     createBook,
     editBookById,
     deleteBookById,
   };
```

De esta forma en cada componente hijo puedo llamar a los valores y las funciones directamente, que estén aquí definidas 

3. En *index.js* tengo que hacer modigicaciones ya que *Provider* estará por encima de App.js

- `import { Provider } from "./context/book";`

- modificar 
  ```javascript
    root.render(
    <div>
      <Provider >
        <App />
      </Provider>
    </div>
  );
  ```

4. En los componentes donde vaya a utilizar funciones definidas en *Context*
   ```javascript
       import { useContext } from "react";
       import BooksContext from "./context/book";
   ```

   - Llamar a la funcion dentro del componente:
  
     ```Javascript
      const { createBook } = useContext('BookContext')
      ```
    ya puedo llamar a la funcion *createBook()* y utilizarla dentro del componente como si la hubiera definido ahí


  Cambios que necesito hacer en mi proyecto si lo estoy restructurando para utilizar *context*:

  1.En App.js 
  - Quitar las funciones que ahora se administrarán desde *Provider*
  - Quitar useState si ya no lo necesito
  - Quitar los valores que paso mediante las props a los componentes en caso que corresponda.
  - Importar elementos necesarios. siguiendo ejemplo:
   
  ```javascript
    import { useContext } from "react";
    import BooksContext from "./context/book";
    ```
  - cargar los datos iniciales que se mostrarán en la app, en este caso el listado de books

```javascript
  const { fetchBooks } = useContext(BooksContext);
```
2. En los diferentes componentes
   -Importar los elementos que necesite.
   -quetar las props que ya no vaya a utilizar 
   -Llamar directamente a las funciones con la sintaxis te use context
   -Revisar donde quiera que haya llamado a la funcion mediante la *prop* y esta vez hacerlo con la función directamente.
   