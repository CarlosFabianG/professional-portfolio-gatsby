---
path: "decisiones-tecnicas-al-iniciar-proyecto"
date: 2020-08-07
title: "Decisiones técnicas al iniciar un proyecto"
excerpt: "Cómo decidí el Stack para construir mi portfolio y blog"
---

Creo que hay ciertos hitos en la carrera de todo desarrollador. Son esos momentos que significan subir un importante peldaño en el camino. Un antes y un después. Un punto de inflexión.

 El primer *Hello World* que lograste imprimir en la pantalla de tu computadora.

 Cuando consigues tu primer empleo. 

Cuando corriges el primer bug basado en el conocimiento de como funcionan las cosas. 

Cuando dejas de ser junior para convertirte en senior. 

A la par de estos momentos uno que es menos mencionado pero también muy importante es cuando decides que es hora de construir un portafolio o website profesional en donde puedas mostrar tu perfil y los proyectos personales que has hecho con tanta pasión.

El portafolio es para el desarrollador lo que la sala de exposición galería es para un artista. ¿Qué son la obras de un artista si no tiene un lugar donde las pueda exponer?

Con eso en mi mente tome el desarrollo como sí e tratara de un proyecto serio. 

El en el stack de tecnologías que usaría para mostrarle al mundo, y,  potenciales reclutadores y start-ups lo que puedo hacer. 

En el caso de un sitio personal es una decisión  de gusto y preferencia. Por algo es tu sitio profesional que refleja algo de ti. 

Pero también debe ser una decisión técnica que sea acorde al objetivo principal de tu sitio. 

Al conceptualizar este proyecto yo tenia claras tres cosas:

- Mi sitio web profesional tenía que ser una SPA porque estamos ya entrados en pleno siglo XXI.
- No usaría frameworks o librerías externas para los estilos.
- El sitio tenía que tener un blog para exponer mis aprendizajes, pensamientos e ideas al mundo.

Aquí fue donde surgió la primera disyuntiva.

Ya de antemano sabía que las Single Page Application tienen la desventaja de no ser **SEO** *friendly*, es decir no son la mejor opción cuando buscas posicionarte de manera orgánica en buscadores como google. Para un blog esto es crucial, quieres que la mayor cantidad de personas te lean y tener un buen posicionamiento en los resultados de búsqueda es clave para lograr este objetivo. 

No quiero tener y mantener un blog nada mas por que si. En realidad quiero que sea un lugar donde pueda compartir conocimiento con la comunidad. Para lograr esto la comunidad que busca un tema determinado tiene que encontrarlo y mi tarea es facilitar ese proceso. 

Sin embargo, quería usar **React**, ya que es el primer biblioteca/framework que aprendí por lo que le tengo una estima especial. 

Ante esta disyuntiva encontré la solución para lo que quería lograr, más adelante te contare de esta genial tecnología pero primero me gustaría hablar un poco de los estilos. 

### Estilos

No es ningun secreto que la parte de maquetacion y estilos en CSS puede ser un poco tediosa, y en algunos casos hasta dolorosa. Es por eso que cada vez más desarrolladores hacen uso de frameworks o librerías de estilos como bootstrap, Bulma, Materilize, etc. Nos ayudan a desarrollar nuestros estilos más rápidos y traen por defecto el comportamiento *responsive.* Son de gran ayuda cuando tenemos que hacer un proyecto rápido. Sin embargo, todo lo bueno que nos proporcionan tiene un costo. Y, ciertas desventajas. 

El costo para ti como desarrollador es que te mal acostumbra a usarlos y depender de ellos en exceso. Recuerdo que en una entrevista técnica que tuve me comentaron que los candidatos desistían del proceso para una vacante de Frontend cuando se les indicaba que para su prueba técnica de maquetación no podían usar ninguna librería de estilos.  

Es cierto que no es necesario re inventar el hilo negro y ayudarte de todas las herramientas que tengas a la mano para incrementar tu productividad como desarrollador. 

Pero también creo que  es indispensable como desarrollador Frontend que tengas buenas habilidades de maquetación. Y mas al inicio de tu proceso de aprendizaje. Buenas bases de maquetación en HTML y CSS nunca te estorbarán.  

La desventaja de usar alguna librería de estilos es que el resultado puede ser muy genérico. Por ejemplo, con cierto ojo para el detalle puedes saber cuando un website usa bootstrap en su interior o materialize, por ejemplo. Y, personalizar y sobre escribir mucho los estilos de una librería puede ser frustrante. 

Todo eso te quita flexibilidad para replicar cualquier estilo creado por el equipo de diseño. Y el equipo de diseño se puede ver también limitado. Lo cual para el espíritu de un equipo creativo no es muy bueno. 

El framework relativamente nuevo Twilwind CSS promete aliviar estos problemas pero ya hablaremos del el en otra ocasión.  

En mi portafolio yo quería tener control total de los estilos por lo que decidí no usar ningún tipo de librería con estilos ya preestablecidos. 

No culpo a los desarrolladores Frotend que solo usan librerías porque la verdad es que CSS como lenguaje de estilos en cascada se ha quedado un poco atrás. 

Afortunadamente existen los pre procesadores que añaden funcionalidades a nuestro viejo amigo CSS otorgándole esteroides para hacernos la vida más fácil. 

SASS fue mi primera opción: ya tengo tiempo utilizándolo y me parece genial. Es más fácil controlar la complejidad propia de CSS a medida que crecen los proyectos. Puedes usar variables, funciones. reutilizar bloques de código. Digamos que se acerca más a un lenguaje de programación. 

Pero al tener total libertad en el desarrollo de este proyecto quería aprovechar para  aprender y poner en práctica algo nuevo. 

Pensé en Stylus que es otro pre procesador de CSS que es más complejo pero con mas funcionalidades que SASS. Pero como iba a usar React como mi tecnología base llegó a mi radar una tendencia que esta tomando bastante fuerza en el mundo del desarrollo Frontend: **CSS-IN-JS**.

### **CSS in JavaScript**

Imagina escribir **CSS** en un archivo de JavaScript y tener acceso a los estilos con JavaScript sin necesidad de manipular el DOM. Y, también tener los estilos de tus compenses en el mismo archivo en donde se encuentra el HTML y la lógica. Así como se hace en Vue. 

Bueno con CSS in JavaScript se pretente tener todas estas ventas disponibles en React. 

La librería más conocida de css in js es Style Components. 

Así que me decidí por **Styled Components.** 

En un futuro post explicaré las funcionalidades y características que use en este proyecto. 

### **React JS**

Me gusta React por su flexibilidad. En esta flexibilidad radica que sea una librería y no un framework. Es por lo que muchas personas lo aman. Y otras no tanto. 

En lo personal lo que mas me gusta de React es que es Javascript. No tienes que usar directrices como en Vue o Angular. Por ejemplo para iterar un array usas un método de Javascript .map.

Con JSX que te permite combinar el layout de html con Javascript te permite tener claridad de que estas haciendo y en donde. 

### **La solución - Uniendo todas las partes**

La solución la encontré en Gatsby JS, que es un framework basado en React para construir aplicaciones y sitios web muy rápidos. Si desarrollas en React seguramente ya has visto a Gatsby en acción ya que la documentación oficial de React [http://reactjs.org](http://reactjs.org) esta hecha con este framework. El hecho de que el equipo de React haya decidido hacer su documentación con esta tecnología es muestra de la fiabilidad y ventajas que tiene para generar sitios estáticos.  

Durante el bootcamp de Iron Hack México escuché por primer vez hablar de Gatsby ya que uno mis instructores Lead tiene un curso en Platzi en donde enseña a construir un sitio de e-commerce con esta tecnología. 

Después de clases me dirigí al curso y ví la introducción para saber que era y para que se usaba. 

Cuando estaba buscando una solución ya lo tenia en mente. 

Una vez escuche que es importante investigar y conocer sobre las tecnologías en el ecosistema para tener contexto de lo que puedes usar si llegaras a necesitarlo. 

**Utilizar una nueva tecnología** 

Para aprender Gatsby sobre la marcha en el desarrollo de mi proyecto me apoye en dos herramientas, la documentación oficial que puedes encontrar aquí: [https://www.gatsbyjs.org](https://www.gatsbyjs.org/). Al momento solo esta en ingles.  El curso de platzi que imparte uno de mis teachers en IronHack*.* 

En el siguiente post hablaré más en específico sobre Gatsby JS y sus características técnicas para que tengas un contexto sobre la herramienta, despertémoslos el interés de aprender a usarla e implementarla en un proyecto.