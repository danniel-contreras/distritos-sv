import { divisionPolitica } from './data';

/** Valor por defecto cuando un código no existe en la división política. */
const noEspecificado = (): { codigo: string; valores: string } => ({
  codigo: '0',
  valores: 'No especificado',
});

/**
 * Obtiene la lista de departamentos disponibles.
 *
 * @returns {Array<{ valores: string; codigo: string }>} Arreglo de objetos
 * que contiene el nombre del departamento y su código correspondiente.
 */
export const listaDepartamentos = (): { valores: string; codigo: string }[] =>
  divisionPolitica.map((departamento) => ({
    valores: departamento.departamento,
    codigo: departamento.codigo,
  }));

/**
 * Obtiene la lista de municipios pertenecientes a un departamento.
 *
 * @param {string} codigoDepartamento Código del departamento.
 * @returns {Array<{ valores: string; codigo: string }>} Arreglo de objetos con
 * el nombre del municipio y su código. Si el departamento no existe, retorna
 * un arreglo vacío.
 */
export const listaMunicipios = (
  codigoDepartamento: string
): { valores: string; codigo: string }[] => {
  const departamento = divisionPolitica.find(
    (item) => item.codigo === codigoDepartamento
  );

  if (!departamento) return [];

  return departamento.municipios.map((municipio) => ({
    valores: municipio.municipio,
    codigo: municipio.codigo,
  }));
};

/**
 * Obtiene la lista de distritos pertenecientes a un municipio de un departamento.
 *
 * @param {string} codigoDepartamento Código del departamento.
 * @param {string} codigoMunicipio Código del municipio.
 * @returns {Array<{ valores: string; codigo: string }>} Arreglo de objetos con
 * el nombre del distrito y su código. Si el departamento o el municipio no
 * existen, retorna un arreglo vacío.
 */
export const listDistritos = (
  codigoDepartamento: string,
  codigoMunicipio: string
): { valores: string; codigo: string }[] => {
  const departamento = divisionPolitica.find(
    (item) => item.codigo === codigoDepartamento
  );

  if (!departamento) return [];

  const municipio = departamento.municipios.find(
    (item) => item.codigo === codigoMunicipio
  );

  if (!municipio) return [];

  return municipio.distritos.map((distrito) => ({
    valores: distrito.distrito,
    codigo: distrito.codigo,
  }));
};

/**
 * Busca un departamento por su código.
 *
 * @param {string} codigoDepartamento Código del departamento.
 * @returns {{ codigo: string; valores: string }} Objeto con el código y nombre
 * del departamento. Si no se encuentra, retorna un objeto con el valor
 * predeterminado `{ codigo: "0", valores: "No especificado" }`.
 */
export const buscarDepartamento = (
  codigoDepartamento: string
): { codigo: string; valores: string } => {
  const departamento = divisionPolitica.find(
    (item) => item.codigo === codigoDepartamento
  );

  if (!departamento) return noEspecificado();

  return { codigo: departamento.codigo, valores: departamento.departamento };
};

/**
 * Busca un municipio por el código de departamento y el código de municipio.
 *
 * @param {string} codigoDepartamento Código del departamento.
 * @param {string} codigoMunicipio Código del municipio.
 * @returns {{ codigo: string; valores: string }} Objeto con el código y nombre
 * del municipio. Si el departamento o el municipio no existen, retorna un
 * objeto con el valor predeterminado
 * `{ codigo: "0", valores: "No especificado" }`.
 */
export const buscarMunicipio = (
  codigoDepartamento: string,
  codigoMunicipio: string
): { codigo: string; valores: string } => {
  const departamento = divisionPolitica.find(
    (item) => item.codigo === codigoDepartamento
  );

  if (!departamento) return noEspecificado();

  const municipio = departamento.municipios.find(
    (item) => item.codigo === codigoMunicipio
  );

  if (!municipio) return noEspecificado();

  return { codigo: municipio.codigo, valores: municipio.municipio };
};

/**
 * Busca un distrito por el código de departamento, municipio y distrito.
 *
 * @param {string} codigoDepartamento Código del departamento.
 * @param {string} codigoMunicipio Código del municipio.
 * @param {string} codigoDistrito Código del distrito.
 * @returns {{ codigo: string; valores: string }} Objeto con el código y nombre
 * del distrito. Si el departamento, municipio o distrito no existen, retorna
 * un objeto con el valor predeterminado
 * `{ codigo: "0", valores: "No especificado" }`.
 */
export const buscarDistrito = (
  codigoDepartamento: string,
  codigoMunicipio: string,
  codigoDistrito: string
): { codigo: string; valores: string } => {
  const departamento = divisionPolitica.find(
    (item) => item.codigo === codigoDepartamento
  );

  if (!departamento) return noEspecificado();

  const municipio = departamento.municipios.find(
    (item) => item.codigo === codigoMunicipio
  );

  if (!municipio) return noEspecificado();

  const distrito = municipio.distritos.find(
    (item) => item.codigo === codigoDistrito
  );

  if (!distrito) return noEspecificado();

  return { codigo: distrito.codigo, valores: distrito.distrito };
};

/**
 * Formatea una dirección a partir de los códigos de departamento, municipio y distrito.
 *
 * @param {string} codigoDepartamento Código del departamento.
 * @param {string} codigoMunicipio Código del municipio.
 * @param {string} codigoDistrito Código del distrito.
 * @returns {string} Cadena con la dirección formateada en el orden:
 * departamento, municipio y distrito.
 */
export const formatearDireccion = (
  codigoDepartamento: string,
  codigoMunicipio: string,
  codigoDistrito: string
): string => {
  const departamento = buscarDepartamento(codigoDepartamento);
  const municipio = buscarMunicipio(codigoDepartamento, codigoMunicipio);
  const distrito = buscarDistrito(
    codigoDepartamento,
    codigoMunicipio,
    codigoDistrito
  );

  return `${departamento.valores}, ${municipio.valores}, ${distrito.valores}`;
};
