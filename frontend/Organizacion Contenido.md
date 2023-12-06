# Administrado

## Hoteles

### Filtros

- ubicacion (pais, provincia, ciudad).
- categoria (numero de estresllas).
- nombre (nombre del hotel)
- encargado (documento)

### Ordenar por

- categoria (estrellas).
- alfabetico.
- estado logico (baja o alta).

### Contenido (listado hotel)

- nombre
- categoria (estrellas)
- ubicacion (pais, provincia, ciudad).

#### Hotel (Pagina)

| Dato      | Contenido                               | ABM |
| --------- | --------------------------------------- | --- |
| Base      | nombre                                  | M   |
| Categoria | nombre, numero de estrellas             | M   |
| Ubicacion | pais, provincia, ciudad, calle y numero | M   |
| Encargado | nombre, epellido                        | AB  |
| Fechas    | fecha de afiliacion                     |     |

**_Listados_**

| Dato         | Contenido                  | ABM |
| ------------ | -------------------------- | --- |
| Habitaciones | numero, piso y tipo        | ABM |
| Tipos        | nombre, capacidad y precio | ABM |
| Vendedores   | nombre y apellido          | AB  |
| Paqutes      |                            | ABM |
| Tempordas    |                            | ABM |
| Alquileres   | **_Consultar_**            |     |

## Vendedores

### Filtros

- hotel (nombre).
- vendedor (nombre, documento).

### Ordenar por

- alfabetico
- estado logico (baja o alta)

### Contenido (listado vendedor)

- nombre y apellido
- hoteles asignados (numero)

### Vendedor (Pagina)

| Dato      | Contenido                                       | ABM |
| --------- | ----------------------------------------------- | --- |
| Base      | nombre, apellido, documento y tipo de documento | M   |
| Ubicacion | pais, provincia, ciudad, calle y numero         | M   |

**_Listados_**

| Dato    | Contenido | ABM |
| ------- | --------- | --- |
| Hoteles | nombre    | AB  |
