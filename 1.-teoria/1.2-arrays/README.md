---
description: TypeScript
---

# 1.2 ARRAYS

#### Modificación de Arrays en TypeScript

Los arrays son estructuras de datos fundamentales en JavaScript y TypeScript. A continuación, veremos cómo modificar y trabajar con arrays utilizando varios métodos.

**Creación y Modificación Básica**

```typescript
let numeros: number[] = [1, 2, 3, 4, 5];
numeros.push(6); // Añadir al final: [1, 2, 3, 4, 5, 6]
numeros.pop(); // Eliminar del final: [1, 2, 3, 4, 5]
numeros.shift(); // Eliminar del inicio: [2, 3, 4, 5]
numeros.unshift(0); // Añadir al inicio: [0, 2, 3, 4, 5]
```

**Iteración y Transformación**

1.  **forEach**: Ejecuta una función proporcionada una vez por cada elemento del array.

    ```typescript
    let numeros: number[] = [1, 2, 3, 4, 5];
    numeros.forEach((num) => {
      console.log(num);
    });
    ```
2.  **map**: Crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array.

    ```typescript
    let cuadrados = numeros.map((num) => num * num); // [1, 4, 9, 16, 25]
    ```
3.  **filter**: Crea un nuevo array con todos los elementos que pasen la prueba implementada por la función proporcionada.

    ```typescript
    let pares = numeros.filter((num) => num % 2 === 0); // [2, 4]
    ```

**Búsqueda y Validación**

1.  **find**: Devuelve el primer elemento del array que cumpla con la condición proporcionada.

    ```typescript
    let encontrado = numeros.find((num) => num > 3); // 4
    ```
2.  **some**: Comprueba si al menos un elemento del array cumple con la condición proporcionada.

    ```typescript
    let algunPar = numeros.some((num) => num % 2 === 0); // true
    ```
3.  **every**: Comprueba si todos los elementos del array cumplen con la condición proporcionada.

    ```typescript
    let todosPares = numeros.every((num) => num % 2 === 0); // false
    ```

**Ordenación y Manipulación de Elementos**

1.  **sort**: Ordena los elementos del array y devuelve el array ordenado.

    ```typescript
    let desordenados = [3, 1, 4, 1, 5, 9];
    desordenados.sort((a, b) => a - b); // [1, 1, 3, 4, 5, 9]
    ```
2.  **reverse**: Invierte el orden de los elementos de un array.

    ```typescript
    let invertidos = numeros.reverse(); // [5, 4, 3, 2, 1]
    ```
3.  **includes**: Comprueba si un array contiene un elemento específico.

    ```typescript
    let contieneTres = numeros.includes(3); // true
    ```
4.  **indexOf**: Devuelve el primer índice en el que un elemento dado se puede encontrar en el array, o -1 si no está presente.

    ```typescript
    let indiceTres = numeros.indexOf(3); // 2
    ```

#### Resumen

**Iteración y Transformación**

* **forEach**: Itera sobre cada elemento.
* **map**: Transforma cada elemento en uno nuevo.
* **filter**: Filtra elementos basándose en una condición.

**Búsqueda y Validación**

* **find**: Encuentra el primer elemento que cumple una condición.
* **some**: Verifica si al menos un elemento cumple una condición.
* **every**: Verifica si todos los elementos cumplen una condición.

**Ordenación y Manipulación de Elementos**

* **sort**: Ordena los elementos.
* **reverse**: Invierte el orden de los elementos.
* **includes**: Verifica la presencia de un elemento.
* **indexOf**: Encuentra el índice de un elemento.

