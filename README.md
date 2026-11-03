# Distritos SV

Librería para consultar la división político-administrativa de **El Salvador**, permitiendo obtener departamentos, municipios y distritos mediante sus códigos de facturacion electronica.

## Instalación

```bash
npm install distritos-sv
```

o

```bash
yarn add distritos-sv
```

## Importación

```ts
import {
  listaDepartamentos,
  listaMunicipios,
  listDistritos,
  buscarDepartamento,
  buscarMunicipio,
  buscarDistrito,
  formatearDireccion,
} from "distritos-sv";
```

---

# API

## `listaDepartamentos()`

Obtiene la lista de departamentos.

### Retorna

```ts
{
  valores: string;
  codigo: string;
}[]
```

### Ejemplo

```ts
const departamentos = listaDepartamentos();

console.log(departamentos);
```

Resultado:

```ts
[
  {
    valores: "San Salvador",
    codigo: "06",
  },
];
```

---

## `listaMunicipios(codigoDepartamento)`

Obtiene todos los municipios pertenecientes a un departamento.

### Parámetros

| Nombre             | Tipo   | Descripción              |
| ------------------ | ------ | ------------------------ |
| codigoDepartamento | string | Código del departamento. |

### Retorna

```ts
{
  valores: string;
  codigo: string;
}[]
```

### Ejemplo

```ts
const municipios = listaMunicipios("06");
```

---

## `listDistritos(codigoDepartamento, codigoMunicipio)`

Obtiene todos los distritos de un municipio.

### Parámetros

| Nombre             | Tipo   | Descripción              |
| ------------------ | ------ | ------------------------ |
| codigoDepartamento | string | Código del departamento. |
| codigoMunicipio    | string | Código del municipio.    |

### Retorna

```ts
{
  valores: string;
  codigo: string;
}[]
```

### Ejemplo

```ts
const distritos = listDistritos("06", "14");
```

---

## `buscarDepartamento(codigoDepartamento)`

Busca un departamento por su código.

### Parámetros

| Nombre             | Tipo   |
| ------------------ | ------ |
| codigoDepartamento | string |

### Retorna

```ts
{
  codigo: string;
  valores: string;
}
```

Si no existe devuelve:

```ts
{
  codigo: "0",
  valores: "No especificado",
}
```

### Ejemplo

```ts
const departamento = buscarDepartamento("06");
```

---

## `buscarMunicipio(codigoDepartamento, codigoMunicipio)`

Busca un municipio.

### Parámetros

| Nombre             | Tipo   |
| ------------------ | ------ |
| codigoDepartamento | string |
| codigoMunicipio    | string |

### Retorna

```ts
{
  codigo: string;
  valores: string;
}
```

Si no existe devuelve:

```ts
{
  codigo: "0",
  valores: "No especificado",
}
```

### Ejemplo

```ts
const municipio = buscarMunicipio("06", "14");
```

---

## `buscarDistrito(codigoDepartamento, codigoMunicipio, codigoDistrito)`

Busca un distrito.

### Parámetros

| Nombre             | Tipo   |
| ------------------ | ------ |
| codigoDepartamento | string |
| codigoMunicipio    | string |
| codigoDistrito     | string |

### Retorna

```ts
{
  codigo: string;
  valores: string;
}
```

Si no existe devuelve:

```ts
{
  codigo: "0",
  valores: "No especificado",
}
```

### Ejemplo

```ts
const distrito = buscarDistrito("06", "14", "01");
```

---

## `formatearDireccion(codigoDepartamento, codigoMunicipio, codigoDistrito)`

Convierte los códigos de ubicación en una dirección legible.

### Parámetros

| Nombre             | Tipo   |
| ------------------ | ------ |
| codigoDepartamento | string |
| codigoMunicipio    | string |
| codigoDistrito     | string |

### Retorna

```ts
string
```

### Ejemplo

```ts
const direccion = formatearDireccion("06", "14", "01");

console.log(direccion);
```

Resultado:

```txt
San Salvador, San Salvador Centro, San Salvador
```

---

# Ejemplo completo

```ts
import {
  listaDepartamentos,
  listaMunicipios,
  listDistritos,
  buscarDepartamento,
  buscarMunicipio,
  buscarDistrito,
  formatearDireccion,
} from "distritos-sv";

const departamentos = listaDepartamentos();

const municipios = listaMunicipios("06");

const distritos = listDistritos("06", "14");

const departamento = buscarDepartamento("06");

const municipio = buscarMunicipio("06", "14");

const distrito = buscarDistrito("06", "14", "01");

const direccion = formatearDireccion("06", "14", "01");
```

---

# Licencia

MIT
