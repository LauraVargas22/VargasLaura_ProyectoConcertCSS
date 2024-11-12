# MUSIC CONCERT
## Descripción:
Este proyecto consiste en el desarrollo de una aplicación de eventos de música que permite a los usuarios conocer algunos eventos musicales, visualizando información detallada sobre ellos, para así poder acceder a los tickets de cada uno de los eventos. El proyecto se puede visualizar a través del siguiente link: 

Para la elaboración de este proyecto se tuvo en en cuenta el diseño propuesto en figma https://www.figma.com/community/file/1243768936820156796/evento-event-mobile-app, así mismo como los siguientes requerimientos:
- La aplicación debe ser completamente navegable y responsiva, con un diseño visual atractivo y consistente. Las secciones principales deben permitir al usuario buscar (simulado con redirecciones) eventos, ver detalles, y realizar la compra de entradas sin problemas.
- Estructura clara del proyecto, con código bien comentado y fácil de entender, siguiendo buenas prácticas de HTML, CSS y JavaScript. La lógica debe estar bien modularizada.
- Gestión de versiones del código en el desarrollo, usando conventional commits.
## Características:
### Cover
De acuerdo con lo anterior, en primer lugar se desarrolló un cover de la aplicación, usando flexbox en cada uno de los elementos, en este se encuentra un botón de redireccionamiento hacia la página principal de la aplicación.
```
<a class="button__start" href="/index.html">Start</a>
```
### Home
En home se puede encontrar en primer lugar un botón de notificaciones, para lo cual se implementó el siguiente código: https://codepen.io/dcode-software/pen/KKgpKog, el cual se adaptó al diseño realizando cambios en la posición del mismo dentro de la página, dicho botón se importó desde google fonts.

Durante todo el proyecto se usó la función clamp() dentro de las hojas de estilo, la cual permite modificar el tamaño de la letra de acuerdo al tamaño de la pantalla, lo anterior se puede encontrar en: https://developer.mozilla.org/en-US/docs/Web/CSS/clamp, un ejemplo de su uso en el proyecto fue: 
```
font-size: clamp(1.2rem, -3.6rem + 10vw, 2.8rem);
```
_Donde 1.2rem es el font-size mínimo en pantallas con un viewport mínimo de 380 px y 2.8rem el máximo font-size en pantallas con un viewport máximo de 1024px, dentro de estos dos valores se evalua la pendiente, lo cual permite el cambio acorde del font-size con el tamaño de la pantallas._

Para el desarrollo de la barra de búsqueda se hizo uso de JavaScript, en base en el siguiente código https://www.facebook.com/photo/?fbid=122161474010048970&set=pcb.122161474094048970
Este se adaptó de acuerdo a los datos de búsqueda esperados de la siguiente manera: 
```
const SearchList = [
    "Trending Events",
    "Events Near You",
    "Music Concert",
    "coldplay",
    "Muse", 
    "One Direction",
];
```

Para el menú de categorías, las cartas de eventos en tendencia y eventos cerca de usted se usó como guía el siguiente carrusel https://codepen.io/jruel/pen/zYYgKGX cambiando la información dentro de cada una de las partes de esta manera:
```
.barra {
    display: flex;
    flex-direction: row;
    height: 6.25rem;
    margin-left: 2%;
    overflow-x: scroll;

    & > .barra__item {
        flex: 1;
        min-width: fit-content;
        margin: 0.9rem;
    }
}

.barra::-webkit-scrollbar {
    display: none;
}
```
Esto con el fin de especificar la medida de cada item dentro del carrusel, así mismo se implementó _display: none_ Lo anterior con el fin de eliminar el scrollbar de cada uno de los carruseles y modificar el estilo del scrollbar de la página.
```
body::-webkit-scrollbar {
    width: 0.3rem;
}

body::-webkit-scrollbar-thumb {
    background: linear-gradient(#42275a, #734b6d);
    border-radius: 1rem;
}
```
Cada uno de los títulos de las cartas de presentación tiene el respectivo redireccionamiento a la página de details acordé con el evento seleccionado.
```
<a class="title__info" href="details/event1.html">Coldplay: Music of the Spheres</a>
```
### Details:
Se aplicó el diseño a las páginas de details, teniendo en cuenta que se tenía un botón de regreso superior el cual redirecciona al usuario a la página principal, esto se realizó por medio del siguiente código:
```
<button onclick="window.location.href='../index.html'" type="button" class="icon-button">
    <span class="material-symbols-outlined">arrow_back_ios</span>
</button>
```
En esta página se puso como header una imagen acorde al evento, y un cuadro de texto el cual se posiciona sobre la parte inferior de la imágen, este cuadro de texto contiene información sobre el evento y fotos de perfil las cuales tienen posicionamiento específico y el uso de z-index para la superposición de estás
```
.profile3 {
    width: 4rem;
    height: 4rem;
    z-index: 3;
    position: relative;
    left: -2rem;
}
```
Esto con el fin que visualice de la siguiente manera:
![alt text](/images/image.png)

En cada uno de los eventos se encuentra un texto descriptivo el cual tiene un botón de Read More… , donde al hacer hover en la descripción despliega el texto que se encuentra oculto eliminando la altura:
```
  .description__text {
    margin-bottom: 1.25rem;
    font-size: clamp(1.2rem, 0.5778rem + 1.7778vw, 2rem);
    margin: 0 2rem;
    text-align: justify;
    line-height: 1.5;
  }

  .description:hover {
    max-height: none;
    overflow: visible;
  }
```
En la parte inferior se encuentra, el mapa de la ubicación del lugar del evento, el cual redirecciona al usuario a la página se Google Maps:
```
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.4475252998236!2d54.60293177463109!3d24.469946160774036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4586238307c7%3A0x1c5f17a631904450!2sYas%20Marina%20Circuit%20-%20Yas%20Island%20-%20Abu%20Dhabi%20-%20Emiratos%20%C3%81rabes%20Unidos!5e0!3m2!1ses!2sco!4v1731194850061!5m2!1ses!2sco" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
```
Así mismo, cuenta con un botón de redireccionamiento a la página tickets a la respectiva sección donde se encuentra el ticket del evento de preferencia:
```
<a class="ticket" href="./ticket1.html#section2">Buy Ticket</a>
```
En la página de tickets, encontramos un carrusel con los tickets de cada uno de los eventos, los cuales cuentan con imagen descriptiva del evento y algunos datos relevantes sobre el evento, en la parte inferior se puede encontrar un código de barras realizado con JavaScript usando JsBarcode
https://parzibyte.me/blog/2019/08/19/codigos-barras-javascript-jsbarcode/
En este caso se seleccionó el método de SVG de esta manera:
En primer lugar, se hace uso de la etiqueta SVG en html:
```
<svg id="barcode"></svg>
```
Así mismo, se descarga la libreria JsBarcode https://cdn.jsdelivr.net/npm/jsbarcode@3.11.0/dist/JsBarcode.all.min.js , la cual se incluyó en el script así:
```
<script src="../barcode/JsBarcode.all.min.js"></script>
```
Posteriormente, se modificó el diseño del código de barras:
```
<script type="text/javascript">
    JsBarcode("#barcode", "123461234", {
        format: "codabar",
        lineColor: "#000000",
        width: 4,
        height: 40,
        displayValue: false,
    });
</script>
```

Por medio de este proyecto se hizo uso de HTML y CSS puro, así mismo se implementó JavaScript.


