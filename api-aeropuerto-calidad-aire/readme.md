---
description: Test 1
---

# ReadMe

El objetivo de este proyecto es desarrollar una API en GraphQL para gestionar registros de calidad del aire en los aeropuertos de diferentes ciudades. Utilizaremos Deno, Apollo Server, MongoDB y 2 APIs externas de API Ninjas.

**Herramientas Utilizadas**

* **Deno**: Entorno de ejecución seguro para JavaScript y TypeScript.
* **Apollo Server**: Plataforma para crear un servidor GraphQL.
* **MongoDB**: Base de datos NoSQL para almacenamiento de datos.
* **fetch**: Para realizar solicitudes HTTP a las APIs externas.

## Estructura del Proyecto&#x20;

```plaintext
deno-air-quality-api/
├── .env                     # Archivo de variables de entorno
│   Contiene las claves de API y la URL de conexión a MongoDB.
├── deno.json                # Configuración de tareas y dependencias
│   Define las tareas comunes y las dependencias de NPM.
├── main.ts                  # Punto de entrada principal de la aplicación
│   Configura y lanza el servidor de Apollo.
├── schemas/
│   └── schema.ts            # Esquema de GraphQL
│       Define los tipos y las consultas de GraphQL.
├── resolvers/
│   ├── query.ts             # Resolvers para las consultas de GraphQL
│   │   Contiene las funciones que responden a las consultas de GraphQL.
│   └── mutation.ts          # Resolvers para las mutaciones de GraphQL (si es necesario)
│       Contiene las funciones que responden a las mutaciones de GraphQL.
├── models/
│   └── contact.ts           # Modelo de Mongoose para contactos (si es necesario)
│       Define el esquema y el modelo de datos para los contactos.
└── utils/
    └── api.ts               # Funciones para interactuar con las APIs externas
        Contiene las funciones para realizar solicitudes a las APIs externas.
```
