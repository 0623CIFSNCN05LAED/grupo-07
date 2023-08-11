# grupo-07 | Mercado Arte: E-commerce de Obras de Arte

Introducción
El proyecto "Mercado Arte" es un emocionante e-commerce dedicado a conectar amantes del arte con una amplia selección de obras artísticas. Nuestra plataforma proporcionará un espacio para artistas talentosos de diversas disciplinas para exhibir y vender sus creaciones únicas. Al mismo tiempo, ofrecerá a los compradores una experiencia intuitiva y atractiva para explorar, aprender y adquirir obras de arte que se ajusten a sus gustos y preferencias.

Visión General del Proyecto
"Mercado Arte" tiene como objetivo principal facilitar la compra y venta de obras de arte en línea, promoviendo el trabajo de artistas emergentes y establecidos. Nuestra visión es crear una comunidad vibrante en la que los artistas puedan compartir su pasión con el mundo y los compradores puedan encontrar piezas únicas que les inspiren y enriquezcan sus vidas.
La plataforma permitirá a los artistas exhibir sus obras en galerías virtuales, con información detallada sobre cada pieza y su creador. Los usuarios podrán navegar por una amplia gama de categorías artísticas, que incluirán pintura, escultura, fotografía, arte digital, grabados y más. Además, ofreceremos servicios de impresión y enmarcado para aquellos que deseen adquirir reproducciones de alta calidad.

Arquitectura y Tecnologías
Para desarrollar "Mercado Arte", utilizaremos una arquitectura de aplicaciones web de tres capas: frontend, backend y base de datos. El frontend estará construido utilizando tecnologías como HTML, CSS y JavaScript, y haremos uso de un framework moderno como React para lograr una interfaz de usuario fluida y receptiva.
También utilizaremos herramientas de diseño web como Figma y Canva.





Funcionalidades Principales
1. Registro y Autenticación
Los usuarios podrán crear cuentas en "Mercado Arte" proporcionando información básica y eligiendo una contraseña segura. La autenticación se implementará utilizando técnicas seguras como hash y salting para proteger las contraseñas en la base de datos.
2. Explorar Obras de Arte
La página principal mostrará una lista de obras de arte destacadas, y los usuarios podrán navegar por categorías específicas para descubrir piezas que les interesen. Implementaremos filtros y opciones de ordenamiento para facilitar la búsqueda y la exploración.
3. Detalles de Obras de Arte
Cada obra de arte tendrá una página de detalles con información completa, incluyendo el nombre del artista, descripción, precio, dimensiones, técnica utilizada, entre otros detalles relevantes. Los usuarios podrán ampliar las imágenes para apreciar mejor los detalles de la obra.
4. Carrito de Compras
El sitio web permitirá a los usuarios agregar obras de arte a un carrito de compras y visualizar el resumen de su pedido. El carrito mostrará el total de la compra y permitirá modificar las cantidades de cada obra antes de proceder al pago.
5. Proceso de Compra
Una vez que los usuarios estén satisfechos con su selección, podrán ingresar la información de envío y seleccionar una opción de pago. Se integrarán pasarelas de pago seguras para garantizar transacciones confiables y proteger los datos financieros de los usuarios.
6. Gestión de Perfil de Usuario
Los usuarios registrados tendrán acceso a un panel donde podrán actualizar su información personal y de contacto. Además, podrán revisar el historial de compras y el estado de los pedidos en curso.
7. Panel de Administrador
El panel de administrador será accesible solo para usuarios con privilegios especiales y ofrecerá funcionalidades para gestionar las obras de arte, los artistas, las categorías y el contenido del sitio en general. También proporcionará información sobre el estado de las 

Variables de una Obra de Arte
Para garantizar una representación completa y detallada de cada obra de arte en "Mercado Arte", se definirán varias variables que contendrán información relevante sobre cada pieza. Estas variables se almacenarán en la base de datos y se utilizarán para mostrar la información en la interfaz de usuario y para facilitar la búsqueda y clasificación de las obras.
ID de Obra de Arte:
Un identificador único que se asignará a cada obra de arte en la base de datos. Este ID se utilizará para distinguir cada pieza y facilitar su búsqueda y gestión.
Nombre de la Obra:
El título o nombre de la obra de arte. Será un campo de texto que permitirá a los artistas darle un nombre distintivo a su creación.
Artista:
El nombre del artista responsable de la obra. Este campo estará vinculado a la información del artista en la base de datos.
Descripción:
Un campo de texto donde se proporcionará una descripción detallada de la obra de arte. Los artistas podrán compartir su inspiración, técnica utilizada y cualquier otro detalle relevante.
Categoría:
Esta variable definirá la categoría o tipo de arte al que pertenece la obra (por ejemplo, pintura, escultura, fotografía, etc.). Facilitará la organización y filtrado de las obras en la plataforma.
Precio:
El precio de venta de la obra de arte. Esta variable permitirá a los compradores conocer el costo de la pieza y realizar comparaciones con otras obras.
Dimensiones:
Las dimensiones físicas de la obra, como altura, anchura y profundidad (en el caso de esculturas). Ayudará a los compradores a visualizar el tamaño de la obra.
Técnica Utilizada:
Un campo para describir la técnica o el medio utilizado para crear la obra (por ejemplo, óleo sobre lienzo, acuarela, fotografía digital, etc.).
Año de Creación:
El año en que el artista creó la obra de arte. Esto proporcionará contexto histórico y permitirá a los compradores conocer la antigüedad de la pieza.
Estado de Disponibilidad:
Un indicador para determinar si la obra está actualmente disponible para la venta o si ya ha sido adquirida.
Imagen(es) de la Obra:
Este campo contendrá las imágenes de la obra de arte en diferentes resoluciones para su visualización en la interfaz de usuario.

Modelo de Datos
El modelo de datos para "Mercado Arte" estará estructurado en torno a varias tablas principales, como "Artistas", "Obras de Arte", "Categorías", "Usuarios" y "Pedidos". Estableceremos relaciones adecuadas entre estas tablas para asegurar la integridad de los datos y facilitar las consultas eficientes.

Implementación
El equipo de desarrollo trabajará en estrecha colaboración para llevar a cabo la implementación del proyecto. Dividiremos las tareas de desarrollo en sprints semanales y utilizaremos metodologías ágiles para mantener la flexibilidad y adaptabilidad durante el proceso.
Cada funcionalidad será diseñada, desarrollada y probada de manera incremental para garantizar una integración fluida y una detección temprana de posibles problemas.

Diseño y Experiencia de Usuario
El diseño visual del sitio se centrará en proporcionar una experiencia de usuario atractiva y fácil de usar. Nos esforzaremos por crear una interfaz intuitiva que guíe a los usuarios de manera fluida a través del proceso de búsqueda, selección y compra de obras de arte.
El diseño será responsivo, lo que significa que el sitio se adaptará de manera óptima a diferentes dispositivos y tamaños de pantalla, proporcionando una experiencia consistente en computadoras de escritorio, tabletas y teléfonos móviles.

Despliegue
Una vez completado el desarrollo y las pruebas, procederemos a poner en producción el e-commerce "Mercado Arte". Se configurará un servidor web seguro y se adquirirá un dominio adecuado para el sitio.
El despliegue se realizará en una infraestructura escalable que nos permita gestionar eficientemente el tráfico y adaptarnos a la demanda a medida que el sitio crezca.



Conclusiones
"Mercado Arte" representa una emocionante oportunidad para acercar el arte a una audiencia global, brindando una plataforma para que los artistas puedan exhibir y vender sus obras, y para que los amantes del arte puedan descubrir y adquirir piezas significativas.
Durante el desarrollo de este proyecto, hemos enfrentado diversos desafíos técnicos y creativos, lo que nos ha permitido crecer como programadores y colaboradores en equipo. Estamos orgullosos del resultado obtenido y esperamos que "Mercado Arte" se convierta en un destino destacado para la comunidad artística y los entusiastas del arte.

Integrantes:
	-Agustin Arias
	-Elian Jacobsen
	-Jonathan Gomez
	-Tobias Ramirez
	-Santiago Soto
	-Esteban Aguilar
	-Felipe Bolgar

