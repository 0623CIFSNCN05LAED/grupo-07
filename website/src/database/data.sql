-- Técnicas
INSERT INTO techniques (id, type) VALUES
('1', 'Óleo'),
('2', 'Vinilo'),
('3', 'Acrílico');

-- Artistas
INSERT INTO artists (id, first_name, last_name, nacionality) VALUES
('4', 'Darío', 'Parejas', 'argentino'),
('5', 'Andrea', 'Basmagi', 'argentina'),
('6', 'Daniel', 'Pena', 'peruano'),
('7', 'Juan', 'Miceli', 'argentino');

INSERT INTO roles (id, type) VALUES
(16, 'admin'),
(17, 'usuario');

-- Productos
INSERT INTO products (id, title, creation_date, description, price, on_sale, new, featured, img, technique_id, artist_id) VALUES 
(8, '¿Qué sabe el alma del pez?', '2019-01-01', 'Descripción del producto 1', 135700, 1, 0, 0, '/images/obra1.jpg', '1', '5'),
(9, '16 horas', '2020-01-01', 'Descripción del producto 2', 78000, 0, 1, 0, '/images/obra2.jpg', '1', '5'),
(10, 'Abaut Me', '2022-01-01', 'Esta es una obra de collage de 28x35cm, realizada con acrílico, marcador, grafito y cartón sobre paspartú.', 78000, 1, 0, 0, '/images/obra3.jpg', '2', '4'),
(11, 'Abstracción Contemple', '2021-01-01', 'Producción del artista argentino Daniel Penna, artista multipremiado.', 155000, 0, 0, 1, '/images/obra4.jpg', '1', '6'),
(12, 'Abstracción Doble', '2022-01-01', 'Producción del artista argentino Daniel Penna, artista multipremiado.', 97000, 0, 0, 1, '/images/obra5.jpg', '1', '6'),
(13, 'De Nuestras Bocas Solo Sale la Verdad', '2021-01-01', 'Esta obra de arte, de 30x40cm, es una exploración íntima del espacio y la forma. Realizada con tinta sobre papel, la pieza juega con la luz y la sombra para crear profundidad y textura. Su tamaño compacto invita al espectador a acercarse y sumergirse en los detalles finos y las sutilezas de la tinta.', 65000, 0, 1, 0,'/images/obra6.jpg', '1', '4'),
(14, 'La gracia de Atenea y Zeus que truena sórdido', '2020-01-01', 'Desde antaño proponemos como humanos la línea, ponemos el cuerpo, la mancha y le sumamos protagonistas. Pasar la línea del papel a la tela cambiando formato, dimensiones, materiales y tratando de mantener los mismos impulsos. El collage me ayudó a trabajar mejor la abstracción en este mundo utópico, espacio que origina su particular paisaje a partir de la irracionalidad y el azar propio del subconsciente colectivo. A través de espacio, los objetos se presentan como medio de transporte único en la tela. Es el elemento común a todos y, a partir de él, se extraen una serie cualidades como un paisaje de un sueño.', 843500, 1, 0, 1, '/images/obra7.jpg', '2', '5'),
(15, 'De Nuestras Bocas Solo Sale la Verdad II', '2023-01-01', 'Esta obra de arte es una impresionante pieza creada con la técnica de tinta sobre papel. Con un tamaño de 35x50 cm, captura la atención con su delicada y detallada ejecución', 120000, 0, 1, 0, '/images/obra8.jpg', '1', '4');
