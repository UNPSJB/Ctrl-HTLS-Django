# Backend

Descripción o algo

## Requisitos Previos

- [Python](https://www.python.org/) (Versión X.X)

## Configuración de Entorno

### 1. Accede a la carpeta "backend" dentro del repositorio clonado:

```
cd backend
```

### 2. Crea y activa el entorno virtual

```
python -m venv venv
```

- Activación en sistemas Windows:

```
venv\Scripts\activate
```

- Activación en sistemas Linux o Mac:

```
source venv/bin/activate
```

### 3. Instala las dependencias del proyecto desde el archivo requirements.txt:

```
pip install -r requirements.txt
```

### 4. Configuración de Postgresql

Para configurar el entorno local, se necesita crear un archivo `.env` y añadir las variables de entorno.

```
DATABASE_NAME= nombre de la DB
DATABASE_USER= nombre del Usuario (por defecto siempre es postgres)
DATABASE_PASSWORD= contraseña
DATABASE_HOST= localhost
DATABASE_PORT= puerto (por defecto siempre es 5432)
```

### 5. Crear migraciones

```
python manage.py makemigrations
```

```
python manage.py migrate
```

### 6. Ejecutar el Servidor

```
python manage.py runserver
```

### 7. Crear administrador

```
python manage.py createsuperuser
```

### 7. Crear Hoteles y Habitaciones como admin

Acceder al panel del administrador en la url `http://localhost:8000/admin/`
Utilizar el admin ya creado:

Haz clic en "Hoteles" en la sección "Hotel".

Luego, haz clic en "Agregar" para crear un nuevo hotel. Rellena los detalles requeridos y guarda el registro.

Una vez que hayas creado un hotel, puedes hacer clic en ese hotel para ver los detalles.

Para agregar habitaciones, ve a la sección "Habitaciones" y sigue el mismo proceso que seguiste para crear hoteles.

### 8. Visualizar Hotles y Habitaciones en la vista de la API

Para visualizar los hoteles, acceder a la URL `http://localhost:8000/api/hoteles/`

Para visualizar las habitaciones, acceder a la URL `http://localhost:8000/api/habitaciones/`

Para visualizar los hoteles segun pais, acceder a la URL `http://localhost:8000/api/hoteles/?pais=AR`
`http://localhost:8000/api/hoteles/?pais=BO`
