-- Insertar datos en las tablas

-- Técnicas
INSERT INTO techniques (id, type) VALUES
('30727d04-8421-11ee-ab04-0d700ae35706', 'Óleo'),
('30728b78-8421-11ee-ab04-0d700ae35706', 'Vinilo'),
('30728ce0-8421-11ee-ab04-0d700ae35706', 'Acrílico');

-- Artistas
INSERT INTO artists (id, first_name, last_name, nacionality) VALUES
('5b068a64-8422-11ee-ab04-0d700ae35706', 'Darío', 'Parejas', 'argentino'),
('fcf3c742-8422-11ee-ab04-0d700ae35706', 'Andrea', 'Basmagi', 'argentina'),
('fcf3c8c8-8422-11ee-ab04-0d700ae35706', 'Daniel', 'Pena', 'peruano'),
('fcf3c95e-8422-11ee-ab04-0d700ae35706', 'Juan', 'Miceli', 'argentino');

-- Clientes
INSERT INTO clients (id, name, address, email) VALUES
(UUID(), 'Nombre del Cliente', 'Dirección del Cliente', 'correo@cliente.com');

-- Productos
INSERT INTO products (id, title, creation_date, description, price, on_sale, new, img, technique_id, artist_id) VALUES 
(UUID(), '¿Qué sabe el alma del pez?', '2019-01-01', 'Descripción del producto 1', 135700, 1, 0, '/images/product1.jpeg', '30728ce0-8421-11ee-ab04-0d700ae35706', '5b068a64-8422-11ee-ab04-0d700ae35706'),
(UUID(), '16 horas', '2020-01-01', 'Descripción del producto 2', 78000, 0, 1, '/images/product2.jpeg', '30728ce0-8421-11ee-ab04-0d700ae35706', '5b068a64-8422-11ee-ab04-0d700ae35706'),
(UUID(), 'Abaut Me', '2022-01-01', 'Esta es una obra de collage de 28x35cm, realizada con acrílico, marcador, grafito y cartón sobre paspartú.', 78000, 1, 0, '/images/product3.jpeg', '30728b78-8421-11ee-ab04-0d700ae35706', 'fcf3c742-8422-11ee-ab04-0d700ae35706'),
(UUID(), 'Abstracción Contemple', '2021-01-01', 'Producción del artista argentino Daniel Penna, artista multipremiado.', 155000, 0, 0,'/images/obraArte1.jpeg', '30727d04-8421-11ee-ab04-0d700ae35706', 'fcf3c8c8-8422-11ee-ab04-0d700ae35706'),
(UUID(), 'Abstracción Doble', '2022-01-01', 'Producción del artista argentino Daniel Penna, artista multipremiado.', 97000, 0, 0,'/images/product4.jpeg', '30727d04-8421-11ee-ab04-0d700ae35706', 'fcf3c8c8-8422-11ee-ab04-0d700ae35706'),
(UUID(), 'De Nuestras Bocas Solo Sale la Verdad', '2021-01-01', 'Esta obra de arte, de 30x40cm, es una exploración íntima del espacio y la forma. Realizada con tinta sobre papel, la pieza juega con la luz y la sombra para crear profundidad y textura. Su tamaño compacto invita al espectador a acercarse y sumergirse en los detalles finos y las sutilezas de la tinta.', 65000, 0, 1,'/images/product5.jpeg', '30728ce0-8421-11ee-ab04-0d700ae35706', 'fcf3c95e-8422-11ee-ab04-0d700ae35706'),
(UUID(), 'La gracia de Atenea y Zeus que truena sórdido', '2020-01-01', 'Desde antaño proponemos como humanos la línea, ponemos el cuerpo, la mancha y le sumamos protagonistas. Pasar la línea del papel a la tela cambiando formato, dimensiones, materiales y tratando de mantener los mismos impulsos. El collage me ayudó a trabajar mejor la abstracción en este mundo utópico, espacio que origina su particular paisaje a partir de la irracionalidad y el azar propio del subconsciente colectivo. A través de espacio, los objetos se presentan como medio de transporte único en la tela. Es el elemento común a todos y, a partir de él, se extraen una serie cualidades como un paisaje de un sueño.', 843500, 1, 0,'/images/product6.jpeg', '30728b78-8421-11ee-ab04-0d700ae35706', '5b068a64-8422-11ee-ab04-0d700ae35706'),
(UUID(), 'De Nuestras Bocas Solo Sale la Verdad II', '2023-01-01', 'Esta obra de arte es una impresionante pieza creada con la técnica de tinta sobre papel. Con un tamaño de 35x50 cm, captura la atención con su delicada y detallada ejecución', 120000, 0, 1,'/images/product7.jpeg', '30728ce0-8421-11ee-ab04-0d700ae35706', 'fcf3c95e-8422-11ee-ab04-0d700ae35706'),
(UUID(), 'Y el alma huye por los trampolines', '2018-01-01', 'Desde antaño proponemos como humanos la línea, ponemos el cuerpo, la mancha y le sumamos protagonistas. Pasar la línea del papel a la tela cambiando formato, dimensiones, materiales y tratando de mantener los mismos impulsos. El collage me ayudó a trabajar mejor la abstracción en este mundo utópico, espacio que origina su particular paisaje a partir de la irracionalidad y el azar propio del subconsciente colectivo. A través de espacio, los objetos se presentan como medio de transporte único en la tela. Es el elemento común a todos y, a partir de él, se extraen una serie cualidades como un paisaje de un sueño.', 1220500, 1, 0,'/images/product8.png', '30728b78-8421-11ee-ab04-0d700ae35706', '5b068a64-8422-11ee-ab04-0d700ae35706'),
(UUID(), 'El mundo nuevo empieza en cuartos sabios', '2018-01-01', 'Como una sombra girando entre los miedos se alza la luz entre todas las fuerzas. Nos enredan las incertidumbres pero cada día hay que salir a parar la olla por más pandemia que nos aqueja, y sabiendo que puede ser el último día.', 253500, 1, 1,'/images/product9.jpeg', '30728b78-8421-11ee-ab04-0d700ae35706', '5b068a64-8422-11ee-ab04-0d700ae35706');