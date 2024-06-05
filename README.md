# Guía para Levantar CommuniBizApp

Esta guía te ayudará a configurar y ejecutar la aplicación React de manera local en tu máquina. Asegúrate de tener Node.js instalado antes de comenzar.

## Instalación de Node.js

Antes de continuar, es necesario tener Node.js instalado en tu sistema. Si no lo tenes instalado, descargarlo e instalarlo desde [Node.js Official Website](https://nodejs.org/).

Se recomienda instalar la version 18.20 - https://nodejs.org/dist/v18.20.2/node-v18.20.2-x64.msi

Antes de comenzar con la configuracion por favor validar que la instalacion de Node.js se ha realizado correctamente en tu sistema.

Ejecuta los siguientes comandos en tu consola.

```bash
node -v
```

```bash
npm -v
```
Deberias poder visualizar las versiones correctamente instaladas en tu sistema.

Ahora si, continua con los siguientes pasos!!

## Configuración de la Aplicación

1. Navega al directorio de la aplicación:

    ```bash
    cd communibiz-app-main
    ```

## Instalación de Dependencias

Una vez que estés en el directorio de la aplicación, instala las dependencias necesarias utilizando npm (Node Package Manager). Ejecuta el siguiente comando:

```bash
npm install
```

Este comando instalará todas las dependencias listadas en el archivo package.json.

## Ejecución de la Aplicación

Después de haber instalado las dependencias, puedes ejecutar la aplicación React localmente. Utiliza el siguiente comando:

```bash
npm start
```

Este comando iniciará un servidor de desarrollo y abrirá la aplicación en tu navegador predeterminado. Si no se abre automáticamente, puedes acceder a la aplicación visitando http://localhost:3000 en tu navegador web.

¡¡Disfruta de la aplicación!!