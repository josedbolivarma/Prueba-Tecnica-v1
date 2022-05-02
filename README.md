### Creamos nuestro proyecto en React con el comando npx create-react-app.

### Limpiamos la Aplicación
- Archivos que no se utilizan y agregamos los nuevos metadatos que tendrá nuestra apliación.

### Creamos la Barra de Búsqueda
- Encargada posteriormente de la funcionalidad para buscar una locación en el mapa y sus datos climáticos.

### Integración de las API: openWeather y Mapbox
- Creamos nuestra Sweather API usando el endpoint https://openweathermap.org
- Creamos nuestra Mabbox API usando el endpoint https://openweathermap.org
- Creamos una nueva carpeta llamada api que contendrá un archivo con el mismo nombre.
- En este vamos a exportar 2 funciones de tipo get utilizando axios: Definidas para la obtención de datos de cada API.

### Creación del Hook useForm 
- Carpeta Hooks y archivo useForm.js
- Para poder capturar los datos de nuestro login y registro de usuario del componente Login y Register.

### Incorporación de Firebase
- Creación del proyecto en consola de firebase.
- Creación de módulo de autenticación y base de datos con firestore.
- Habilitación de provedores para autenticación de los usuarios.

### Creamos el componente CurrentWeather 
- Encargado de la lógica y envío de datos por medio de redux y sus componentes hijos (Smart-Component).

### Creamos el componente ForecastWeather 
- Contendra el renderizado de nuestra api openWeather para datos climáticos (Dumb-Component)

### Creamos el componente ForecastWeather 
- Componente inteligente encargado de pintar el mapa de Mapbox y que escuchará los cambios de úbicacion con un estado global de redux.

### Creamos el Redux:
-  Estructura de carpetas: reducers, actions, types y store.
-  En cada carpeta creamos un reducer, action y types de archivo extension .js para: Login, Register, SelectedCoord y Travels.

### Enlazamos las API:
- Mapbox: Para los mapas.
- SweatherApp: Para los datos climáticos por geolocalización.

### Creamos el enrutamiento dinámico con react-router-dom:
- AppRoutes: Contener de rutas principales : Privadas y Públicas.
- PublicRouters: Válida mis rutas públicas.
- PrivateRouters: Válida mis rutas privadas.
- DashboardRoute: Contiene todas mis rutas públicas.

### Creación del CRUD con redux y firebase
- Pagina FormTravels.js: que contendrá el registro para la creación planes para nuevos viajes de nuestros usuario.
- Creacion de la carpeta helpers: que contendrá nuestro archivo FileUp.js encargado de subir las imagenes del formulario a nuestro alojamiento en la nube con Cloudinary.
- Página Travels.js: que contendrá la lista de los últimos diez viajes planificados. 

### Incorporación del localstorage para guardar los próximos viajes de nuestros usuarios.

//-------------------------- Deploy --------------------------//

### Deployment

CÓDIGO DEL REPOSITORIO: [GITHUB](https://github.com/josedbolivarma/Prueba-Tecnica-v1)

DESPLIEGUE DEL PROYECTO: [VERCEL](https://prueba-tecnica-v1-4quywvomn-josedbolivarma.vercel.app/).

//-------------------------- Deploy --------------------------//

//-------------------------- Scripts --------------------------//

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
