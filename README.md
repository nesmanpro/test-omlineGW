# Prueba técnica

Prueba técnica con Vue.js + TypeScript y TailwindCSS, implementando [DataTables](https://datatables.net/manual/vue) para el manejo de las tablas y [Pinia](https://pinia.vuejs.org) para el control de las *«stores»*.

## :inbox_tray: Instalación

1. Clonar este repositorio.
2. Ejecutar `npm install` sobre el directorio donde se haya clonado este repositorio para instalar los paquetes necesarios (*TypeScript*, *TailwindCSS* y *DataTables*).

## :clipboard: Componentes del proyecto

- OpenableComponent
  - Muestra un modal flotante que puede alojar contenido.
    
- OpenableStore
  - Controla el *«OpenableComponent»*, permitiendo asignarle contenido y manejar su estado.
    
- BannerComponent
  - Muestra una alerta flotante que puede alojar un texto.
    
- BannerStore
  - Controla el *«BannerComponent»*, permitiendo asignarle contenido y manejar su estado.  

## :dart: Objetivos

Para superar esta prueba técnica hay que desarrollar dos formularios (*«CreateForm»* y *«UpdateForm»*) con Vue.js, TypeScript y TailwindCSS para realizar **operaciones CRUD** sobre la base de datos proporcionada. 
Adicionalmente debe existir un botón que permita eliminar individualmente los registros de la tabla.

#### Obligatorios

- Crear una tabla implementando *DataTables*.
- Desarrollar los formularios necesarios en Vue.js + TypeScript, haciendo uso de TailwindCSS siempre que se pueda.
- Cada formulario debe realizar una operación sobre la base de datos proporcionada.

#### Opcionales

- Se debe utilizar el componente *«OpenableComponent»* para mostrar, al menos, un formulario.
- Se debe mostrar el estado de cada operación haciendo uso del componente *«BannerComponent»*, ya sea esta exitosa o fallida.
- Cada operación exitosa debe verse reflejada instantáneamente en el componente donde se haya implementado *DataTables*.

> Se valorará positivamente, por orden de preferencia, las siguientes características:
> 
> - El uso adecuado de TypeScript.
> - La implementación del *«router»* nativo de Vue.js.
> - La creación de un diseño visualmente atractivo.
> - El uso del elemento *«\<Transition\>»*, nativo de Vue.js.

## :outbox_tray: Compartir el resultado

Para compartir la solución a esta prueba técnica se pide que el directorio con los archivos se suba a un repositorio público y se notifique al departamento responsable de la evaluación, adjuntando el enlace al repositorio donde se aloje la solución.

> No es necesario ejecutar el comando _«build»_ sobre el proyecto. En caso de ejecutarse, **debe subirse al repositorio el directorio completo con la solución** a fin de poder evaluar cada archivo manualmente.
> 
> Opcionalmente se puede subir el resultado a *GitHub Pages* para probar la solución en vivo, aunque **no se tendrá en cuenta en la evaluación final**.

## :incoming_envelope: Contacto

Diego Padilla **(preferente)**
<br> Jefe de Departamento
<br> :mailbox: diego.omline@gmail.com

Guerlain Bovas
<br> Director General
<br> :mailbox: omline.website@gmail.com

---


# Technical test

Technical test with Vue.js + TypeScript and TailwindCSS, implements [DataTables](https://datatables.net/manual/vue) to manage tables and [Pinia](https://pinia.vuejs.org) to manage *stores*.

## :inbox_tray: Installation

1. Clone this repository.
2. Run `npm install` on the folder this repository has been cloned to in order to install the necessary packages (*TypeScript*, *TailwindCSS* and *DataTables*).

## :clipboard: Components

- OpenableComponent
  - Displays a floating modal that holds content.
    
- OpenableStore
  - Manages the *OpenableComponent*, its content and its status.
    
- BannerComponent
  - Displays a floating alert that holds content.
    
- BannerStore
  - Manages the *BannerComponent*, its content and its status.

## :dart: Tasks

To successfully pass this technical test, two main forms must be created (*"CreateForm"* and *"UpdateForm"*) with Vue.js, TypeScript and TailwindCSS in order to execute **CRUD operations** on the given database. 
Additionally there must be one button that allows to individually remove any entry from the table.

#### Required

- Create a table using *DataTables*.
- Develop the neccessary forms with Vue.js + TypeScript, using TailwindCSS when possible.
- Each form must execute one CRUD operation on the given database.

#### Optional

- Use the *"OpenableComponent"* to display at least one form.
- Show the status of each CRUD operation using the *BannerComponent*, whether the operation is successful or not.
- The table must be automatically refreshed whenever any CRUD operation is successful.

## :outbox_tray: Share the result

To share the solution to this technical test, the folder with the files must be uploaded to a public repository and the department in charge of the review must be notified, including the link to said repository in the notification.

> It is not required to run the _«build»_ command on the proyect. It case it is run, **the entire folder with all the files must be uploaded**, so that each file can be checked manually.
> 
> Optionally, the result can be uploaded to *GitHub Pages* in order to try the solution live, although **it will not be taken into account for the review**.

## :incoming_envelope: Contact

Diego Padilla **(preferential)**
<br> Team Leader
<br> :mailbox: diego.omline@gmail.com

Guerlain Bovas
<br> CEO
<br> :mailbox: omline.website@gmail.com
