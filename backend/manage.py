"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "api.settings")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc

    # Cargar todos los datos de prueba si el comando es 'loaddata_all'
    if sys.argv[1] == "loaddata_all":
        # Se deben colocar en el orden segun quien necesita a quien
        # Ejemplo hotel tiene direccion por lo tanto ubicacion(pais,provincia,ciudad,direccion) tiene que ir antes
        fixture_dirs = ["ubicacion", "hotel", "persona"]
        for dir in fixture_dirs:
            print(f"Cargando datos desde {dir}/fixtures/data.json")
            execute_from_command_line(
                ["manage.py", "loaddata", f"{dir}/fixtures/data.json"]
            )
    else:
        execute_from_command_line(sys.argv)


if __name__ == "__main__":
    main()
