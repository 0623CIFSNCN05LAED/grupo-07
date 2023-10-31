INSERT INTO artists (id, first_name, last_name, nacionality)
VALUES
(UUID(), 'Darío', 'Parejas', 'argentino'),
(UUID(), 'Andrea', 'Basmagi', 'argentina'),
(UUID(), 'Daniel', 'Pena', 'peruano'),
(UUID(), 'Juan', 'Miceli', 'argentino');

INSERT INTO technique (id, type)
VALUES
(UUID(), 'Òleo'),
(UUID(), 'Vinilo'),
(UUID(), 'Acrílico');

INSERT INTO products (id, title, creation_date, description, price, on_sale, new, img, technique_id, artist_id)
VALUES 
(UUID(), '¿Qué sabe el alma del pez?', '2019', 'Esta es una obra de arte de 2019, creada con una técnica mixta sobre papel de 250 gramos. Mide 44x55cm sin marco y 53x63cm con un marco de bisel de madera fino negro, passepartout blanco y vidrio.',135700, true, false, '/images/product1.jpeg', 1, 1),
(UUID(), '16 horas', '2020', 'Esta es una obra de arte vibrante y única de 36x50cm, creada con una mezcla de acrílico, óleo pastel, marcador y lápices sobre paspartú.', 78000, false, true, '/images/product2.jpeg', 2, 2),
(UUID(), 'Abaut Me', '2022', 'Esta es una obra de collage de 28x35cm, realizada con acrílico, marcador, grafito y cartón sobre paspartú.', 78000, true, false, '/images/product3.jpeg', 2, 2),
(UUID(), 'Abstracción Contemple', '2021', 'Producción del artista argentino Daniel Penna, artista multipremiado.', 155000, false, false,'/images/obraArte1.jpeg', 1, 3),
(UUID(), 'Abstracción Doble', '2022', 'Producción del artista argentino Daniel Penna, artista multipremiado.', 97000, false, false,'/images/product4.jpeg', 1, 3),
(UUID(), 'De Nuestras Bocas Solo Sale la Verdad', '2021', 'Esta obra de arte, de 30x40cm, es una exploración íntima del espacio y la forma. Realizada con tinta sobre papel, la pieza juega con la luz y la sombra para crear profundidad y textura. Su tamaño compacto invita al espectador a acercarse y sumergirse en los detalles finos y las sutilezas de la tinta.', 65000, false, true,'/images/product5.jpeg', 3, 4),
(UUID(), 'La gracia de Atenea y Zeus que truena sórdido', '2020', 'Desde antaño proponemos como humanos la línea, ponemos el cuerpo, la mancha y le sumamos protagonistas. Pasar la línea del papel a la tela cambiando formato, dimensiones, materiales y tratando de mantener los mismos impulsos. El collage me ayudó a trabajar mejor la abstracción en este mundo utópico, espacio que origina su particular paisaje a partir de la irracionalidad y el azar propio del subconsciente colectivo. A través de espacio, los objetos se presentan como medio de transporte único en la tela. Es el elemento común a todos y, a partir de él, se extraen una serie cualidades como un paisaje de un sueño.', 843500, true, false,'/images/product6.jpeg', 2, 1),
(UUID(), 'De Nuestras Bocas Solo Sale la Verdad II', '2023', 'Esta obra de arte es una impresionante pieza creada con la técnica de tinta sobre papel. Con un tamaño de 35x50 cm, captura la atención con su delicada y detallada ejecución', 120000, false, true,'/images/product7.jpeg', 3, 4),
(UUID(), 'Y el alma huye por los trampolines', '2018', 'Desde antaño proponemos como humanos la línea, ponemos el cuerpo, la mancha y le sumamos protagonistas. Pasar la línea del papel a la tela cambiando formato, dimensiones, materiales y tratando de mantener los mismos impulsos. El collage me ayudó a trabajar mejor la abstracción en este mundo utópico, espacio que origina su particular paisaje a partir de la irracionalidad y el azar propio del subconsciente colectivo. A través de espacio, los objetos se presentan como medio de transporte único en la tela. Es el elemento común a todos y, a partir de él, se extraen una serie cualidades como un paisaje de un sueño.', 1220500, true, false,'/images/product8.png', 2, 1),
(UUID(), 'El mundo nuevo empieza en cuartos sabios', '2023', 'Como una sombra girando entre los miedos se alza la luz entre todas las fuerzas. Nos enredan las incertidumbres pero cada día hay que salir a parar la olla por más pandemia que nos aqueja, y sabiendo que puede ser el último día.', 253500, true, true,'/images/product9.jpeg', 2, 1);

INSERT INTO clients (id, name, address, email)
VALUES
(UUID());

-- INSERT INTO sales (id, sale_date, product_id, client_id)
-- VALUES
-- (UUID());