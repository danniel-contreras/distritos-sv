/**
 * División político-administrativa de El Salvador: departamentos, municipios
 * y distritos con los códigos que usa la facturación electrónica.
 */

export interface Distrito {
  distrito: string;
  codigo: string;
}

export interface Municipio {
  municipio: string;
  codigo: string;
  distritos: Distrito[];
}

export interface Departamento {
  departamento: string;
  codigo: string;
  municipios: Municipio[];
}

export const divisionPolitica: Departamento[] = [
  {
    departamento: "Otro (Para extranjeros)",
    codigo: "00",
    municipios: [
      {
        municipio: "Otro (Para extranjeros)",
        codigo: "00",
        distritos: [
          { distrito: "Otro (Para extranjeros)", codigo: "0" },
        ],
      },
    ],
  },
  {
    departamento: "Ahuachapán",
    codigo: "01",
    municipios: [
      {
        municipio: "AHUACHAPAN NORTE",
        codigo: "13",
        distritos: [
          { distrito: "ATIQUIZAYA", codigo: "3" },
          { distrito: "EL REFUGIO", codigo: "5" },
          { distrito: "SAN LORENZO", codigo: "9" },
          { distrito: "TURÍN", codigo: "12" },
        ],
      },
      {
        municipio: "AHUACHAPAN CENTRO",
        codigo: "14",
        distritos: [
          { distrito: "AHUACHAPÁN", codigo: "1" },
          { distrito: "APANECA", codigo: "2" },
          { distrito: "CONCEPCIÓN DE ATACO", codigo: "4" },
          { distrito: "TACUBA", codigo: "11" },
        ],
      },
      {
        municipio: "AHUACHAPAN SUR",
        codigo: "15",
        distritos: [
          { distrito: "GUAYMANGO", codigo: "6" },
          { distrito: "JUJUTLA", codigo: "7" },
          { distrito: "SAN FRANCISCO MENÉNDEZ", codigo: "8" },
          { distrito: "SAN PEDRO PUXTLA", codigo: "10" },
        ],
      },
    ],
  },
  {
    departamento: "Santa Ana",
    codigo: "02",
    municipios: [
      {
        municipio: "SANTA ANA NORTE",
        codigo: "14",
        distritos: [
          { distrito: "MASAHUAT", codigo: "6" },
          { distrito: "METAPÁN", codigo: "7" },
          { distrito: "STA ROSA GUACHI", codigo: "11" },
          { distrito: "TEXISTEPEQUE", codigo: "13" },
        ],
      },
      {
        municipio: "SANTA ANA CENTRO",
        codigo: "15",
        distritos: [
          { distrito: "SANTA ANA", codigo: "10" },
        ],
      },
      {
        municipio: "SANTA ANA ESTE",
        codigo: "16",
        distritos: [
          { distrito: "COATEPEQUE", codigo: "2" },
          { distrito: "EL CONGO", codigo: "4" },
        ],
      },
      {
        municipio: "SANTA ANA OESTE",
        codigo: "17",
        distritos: [
          { distrito: "CANDELARIA DE LA FRONTERA", codigo: "1" },
          { distrito: "CHALCHUAPA", codigo: "3" },
          { distrito: "EL PORVENIR", codigo: "5" },
          { distrito: "SAN ANTONIO PAJONAL", codigo: "8" },
          { distrito: "SAN SEBASTIÁN SALITRILLO", codigo: "9" },
          { distrito: "STGO D LA FRONT", codigo: "12" },
        ],
      },
    ],
  },
  {
    departamento: "Sonsonate",
    codigo: "03",
    municipios: [
      {
        municipio: "SONSONATE NORTE",
        codigo: "17",
        distritos: [
          { distrito: "JUAYÚA", codigo: "7" },
          { distrito: "NAHUIZALCO", codigo: "8" },
          { distrito: "SALCOATITÁN", codigo: "10" },
          { distrito: "STA C MASAHUAT", codigo: "13" },
        ],
      },
      {
        municipio: "SONSONATE CENTRO",
        codigo: "18",
        distritos: [
          { distrito: "SONSONATE", codigo: "15" },
          { distrito: "SONZACATE", codigo: "16" },
          { distrito: "NAHULINGO", codigo: "9" },
          { distrito: "SAN ANTONIO DEL MONTE", codigo: "11" },
          { distrito: "SANTO DOMINGO GUZMÁN", codigo: "14" },
        ],
      },
      {
        municipio: "SONSONATE ESTE",
        codigo: "19",
        distritos: [
          { distrito: "IZALCO", codigo: "6" },
          { distrito: "ARMENIA", codigo: "2" },
          { distrito: "CALUCO", codigo: "3" },
          { distrito: "SAN JULIÁN", codigo: "12" },
          { distrito: "CUISNAHUAT", codigo: "4" },
          { distrito: "STA I ISHUATAN", codigo: "5" },
        ],
      },
      {
        municipio: "SONSONATE OESTE",
        codigo: "20",
        distritos: [
          { distrito: "ACAJUTLA", codigo: "1" },
        ],
      },
    ],
  },
  {
    departamento: "San Salvador",
    codigo: "06",
    municipios: [
      {
        municipio: "SAN SALVADOR NORTE",
        codigo: "20",
        distritos: [
          { distrito: "AGUILARES", codigo: "1" },
          { distrito: "EL PAISNAL", codigo: "5" },
          { distrito: "GUAZAPA", codigo: "6" },
        ],
      },
      {
        municipio: "SAN SALVADOR OESTE",
        codigo: "21",
        distritos: [
          { distrito: "APOPA", codigo: "2" },
          { distrito: "NEJAPA", codigo: "9" },
        ],
      },
      {
        municipio: "SAN SALVADOR ESTE",
        codigo: "22",
        distritos: [
          { distrito: "ILOPANGO", codigo: "7" },
          { distrito: "SAN MARTIN", codigo: "13" },
          { distrito: "SOYAPANGO", codigo: "17" },
          { distrito: "TONACATEPEQUE", codigo: "18" },
        ],
      },
      {
        municipio: "SAN SALVADOR CENTRO",
        codigo: "23",
        distritos: [
          { distrito: "AYUTUXTEPEQUE", codigo: "3" },
          { distrito: "MEJICANOS", codigo: "8" },
          { distrito: "SAN SALVADOR", codigo: "14" },
          { distrito: "CUSCATANCINGO", codigo: "4" },
          { distrito: "CIUDAD DELGADO", codigo: "19" },
        ],
      },
      {
        municipio: "SAN SALVADOR SUR",
        codigo: "24",
        distritos: [
          { distrito: "PANCHIMALCO", codigo: "10" },
          { distrito: "ROSARIO DE MORA", codigo: "11" },
          { distrito: "SAN MARCOS", codigo: "12" },
          { distrito: "SANTO TOMAS", codigo: "16" },
          { distrito: "STG TEXACUANGOS", codigo: "15" },
        ],
      },
    ],
  },
  {
    departamento: "La Libertad",
    codigo: "05",
    municipios: [
      {
        municipio: "LA LIBERTAD NORTE",
        codigo: "23",
        distritos: [
          { distrito: "QUEZALTEPEQUE", codigo: "12" },
          { distrito: "SAN MATÍAS", codigo: "16" },
          { distrito: "SAN P TACACHICO", codigo: "17" },
        ],
      },
      {
        municipio: "LA LIBERTAD CENTRO",
        codigo: "24",
        distritos: [
          { distrito: "SAN JUAN OPICO", codigo: "15" },
          { distrito: "CIUDAD ARCE", codigo: "2" },
        ],
      },
      {
        municipio: "LA LIBERTAD OESTE",
        codigo: "25",
        distritos: [
          { distrito: "COLON", codigo: "3" },
          { distrito: "JAYAQUE", codigo: "7" },
          { distrito: "SACACOYO", codigo: "13" },
          { distrito: "TEPECOYO", codigo: "21" },
          { distrito: "TALNIQUE", codigo: "19" },
        ],
      },
      {
        municipio: "LA LIBERTAD ESTE",
        codigo: "26",
        distritos: [
          { distrito: "ANTGO CUSCATLÁN", codigo: "1" },
          { distrito: "HUIZÚCAR", codigo: "6" },
          { distrito: "NUEVO CUSCATLÁN", codigo: "10" },
          { distrito: "SN J VILLANUEVA", codigo: "14" },
          { distrito: "ZARAGOZA", codigo: "22" },
        ],
      },
      {
        municipio: "LA LIBERTAD COSTA",
        codigo: "27",
        distritos: [
          { distrito: "CHILTIUPAN", codigo: "5" },
          { distrito: "JICALAPA", codigo: "8" },
          { distrito: "LA LIBERTAD", codigo: "9" },
          { distrito: "TAMANIQUE", codigo: "18" },
          { distrito: "TEOTEPEQUE", codigo: "20" },
        ],
      },
      {
        municipio: "LA LIBERTAD SUR",
        codigo: "28",
        distritos: [
          { distrito: "COMASAGUA", codigo: "4" },
          { distrito: "SANTA TECLA", codigo: "11" },
        ],
      },
    ],
  },
  {
    departamento: "Chalatenango",
    codigo: "04",
    municipios: [
      {
        municipio: "CHALATENANGO NORTE",
        codigo: "34",
        distritos: [
          { distrito: "LA PALMA", codigo: "12" },
          { distrito: "CITALÁ", codigo: "4" },
          { distrito: "SAN IGNACIO", codigo: "25" },
        ],
      },
      {
        municipio: "CHALATENANGO CENTRO",
        codigo: "35",
        distritos: [
          { distrito: "NVA CONCEPCIÓN", codigo: "16" },
          { distrito: "TEJUTLA", codigo: "33" },
          { distrito: "LA REINA", codigo: "13" },
          { distrito: "AGUA CALIENTE", codigo: "1" },
          { distrito: "DULCE NOM MARÍA", codigo: "8" },
          { distrito: "EL PARAÍSO", codigo: "10" },
          { distrito: "SAN FERNANDO", codigo: "22" },
          { distrito: "SAN FRANCISCO MORAZÁN", codigo: "24" },
          { distrito: "SAN RAFAEL", codigo: "31" },
          { distrito: "SANTA RITA", codigo: "32" },
        ],
      },
      {
        municipio: "CHALATENANGO SUR",
        codigo: "36",
        distritos: [
          { distrito: "CHALATENANGO", codigo: "7" },
          { distrito: "ARCATAO", codigo: "2" },
          { distrito: "AZACUALPA", codigo: "3" },
          { distrito: "COMALAPA", codigo: "5" },
          { distrito: "CONCEPCIÓN QUEZALTEPEQUE", codigo: "6" },
          { distrito: "EL CARRIZAL", codigo: "9" },
          { distrito: "LA LAGUNA", codigo: "11" },
          { distrito: "LAS VUELTAS", codigo: "14" },
          { distrito: "NOMBRE DE JESUS", codigo: "15" },
          { distrito: "NUEVA TRINIDAD", codigo: "17" },
          { distrito: "OJOS DE AGUA", codigo: "18" },
          { distrito: "POTONICO", codigo: "19" },
          { distrito: "SAN ANT LA CRUZ", codigo: "20" },
          { distrito: "SAN ANT RANCHOS", codigo: "21" },
          { distrito: "SAN FRANCISCO LEMPA", codigo: "23" },
          { distrito: "SAN I LABRADOR", codigo: "26" },
          { distrito: "SAN J CANCASQUE", codigo: "27" },
          { distrito: "SN MIG MERCEDES", codigo: "30" },
          { distrito: "SAN JOSE FLORES", codigo: "28" },
          { distrito: "SAN LUIS CARMEN", codigo: "29" },
        ],
      },
    ],
  },
  {
    departamento: "Cuscatlán",
    codigo: "07",
    municipios: [
      {
        municipio: "CUSCATLAN NORTE",
        codigo: "17",
        distritos: [
          { distrito: "SUCHITOTO", codigo: "15" },
          { distrito: "SAN J GUAYABAL", codigo: "9" },
          { distrito: "ORAT CONCEPCIÓN", codigo: "6" },
          { distrito: "SAN B PERULAPIA", codigo: "7" },
          { distrito: "SAN P PERULAPÁN", codigo: "10" },
        ],
      },
      {
        municipio: "CUSCATLAN SUR",
        codigo: "18",
        distritos: [
          { distrito: "COJUTEPEQUE", codigo: "2" },
          { distrito: "SAN RAF CEDROS", codigo: "11" },
          { distrito: "CANDELARIA", codigo: "1" },
          { distrito: "MONTE SAN JUAN", codigo: "5" },
          { distrito: "EL CARMEN", codigo: "3" },
          { distrito: "SAN CRISTÓBAL", codigo: "8" },
          { distrito: "STA C MICHAPA", codigo: "14" },
          { distrito: "SAN RAMON", codigo: "12" },
          { distrito: "EL ROSARIO", codigo: "4" },
          { distrito: "STA C ANALQUITO", codigo: "13" },
          { distrito: "TENANCINGO", codigo: "16" },
        ],
      },
    ],
  },
  {
    departamento: "Cabañas",
    codigo: "09",
    municipios: [
      {
        municipio: "CABAÑAS ESTE",
        codigo: "11",
        distritos: [
          { distrito: "SENSUNTEPEQUE", codigo: "6" },
          { distrito: "VICTORIA", codigo: "8" },
          { distrito: "DOLORES", codigo: "9" },
          { distrito: "GUACOTECTI", codigo: "2" },
          { distrito: "SAN ISIDRO", codigo: "5" },
        ],
      },
      {
        municipio: "CABAÑAS OESTE",
        codigo: "10",
        distritos: [
          { distrito: "ILOBASCO", codigo: "3" },
          { distrito: "TEJUTEPEQUE", codigo: "7" },
          { distrito: "JUTIAPA", codigo: "4" },
          { distrito: "CINQUERA", codigo: "1" },
        ],
      },
    ],
  },
  {
    departamento: "La Paz",
    codigo: "08",
    municipios: [
      {
        municipio: "LA PAZ OESTE",
        codigo: "23",
        distritos: [
          { distrito: "CUYULTITÁN", codigo: "1" },
          { distrito: "OLOCUILTA", codigo: "5" },
          { distrito: "SAN JUAN TALPA", codigo: "11" },
          { distrito: "SAN LUIS TALPA", codigo: "13" },
          { distrito: "SAN PEDRO MASAHUAT", codigo: "15" },
          { distrito: "TAPALHUACA", codigo: "20" },
          { distrito: "SN FCO CHINAMEC", codigo: "9" },
        ],
      },
      {
        municipio: "LA PAZ CENTRO",
        codigo: "24",
        distritos: [
          { distrito: "EL ROSARIO", codigo: "2" },
          { distrito: "JERUSALÉN", codigo: "3" },
          { distrito: "MERCED LA CEIBA", codigo: "4" },
          { distrito: "PARAÍSO OSORIO", codigo: "6" },
          { distrito: "SN ANT MASAHUAT", codigo: "7" },
          { distrito: "SAN EMIGDIO", codigo: "8" },
          { distrito: "SAN JUAN TEPEZONTES", codigo: "12" },
          { distrito: "SN LUIS LA HERR", codigo: "22" },
          { distrito: "SAN MIGUEL TEPEZONTES", codigo: "14" },
          { distrito: "SAN PEDRO NONUALCO", codigo: "16" },
          { distrito: "STA MA OSTUMA", codigo: "18" },
          { distrito: "STGO NONUALCO", codigo: "19" },
        ],
      },
      {
        municipio: "LA PAZ ESTE",
        codigo: "25",
        distritos: [
          { distrito: "SAN J NONUALCO", codigo: "10" },
          { distrito: "SAN R OBRAJUELO", codigo: "17" },
          { distrito: "ZACATECOLUCA", codigo: "21" },
        ],
      },
    ],
  },
  {
    departamento: "La Unión",
    codigo: "14",
    municipios: [
      {
        municipio: "LA UNION NORTE",
        codigo: "19",
        distritos: [
          { distrito: "ANAMOROS", codigo: "1" },
          { distrito: "BOLÍVAR", codigo: "2" },
          { distrito: "CONCEP DE OTE", codigo: "3" },
          { distrito: "EL SAUCE", codigo: "6" },
          { distrito: "LISLIQUE", codigo: "9" },
          { distrito: "NUEVA ESPARTA", codigo: "11" },
          { distrito: "PASAQUINA", codigo: "12" },
          { distrito: "POLORÓS", codigo: "13" },
          { distrito: "SAN JOSE", codigo: "15" },
          { distrito: "SANTA ROSA LIMA", codigo: "16" },
        ],
      },
      {
        municipio: "LA UNION SUR",
        codigo: "20",
        distritos: [
          { distrito: "CONCHAGUA", codigo: "4" },
          { distrito: "EL CARMEN", codigo: "5" },
          { distrito: "INTIPUCÁ", codigo: "7" },
          { distrito: "LA UNIÓN", codigo: "8" },
          { distrito: "MEANG DEL GOLFO", codigo: "10" },
          { distrito: "SAN ALEJO", codigo: "14" },
          { distrito: "YAYANTIQUE", codigo: "17" },
          { distrito: "YUCUAIQUÍN", codigo: "18" },
        ],
      },
    ],
  },
  {
    departamento: "Usulután",
    codigo: "11",
    municipios: [
      {
        municipio: "USULUTAN NORTE",
        codigo: "24",
        distritos: [
          { distrito: "STGO DE MARÍA", codigo: "21" },
          { distrito: "ALEGRÍA", codigo: "1" },
          { distrito: "BERLÍN", codigo: "2" },
          { distrito: "MERCEDES UMAÑA", codigo: "11" },
          { distrito: "JUCUAPA", codigo: "9" },
          { distrito: "EL TRIUNFO", codigo: "5  " },
          { distrito: "ESTANZUELAS", codigo: "7" },
          { distrito: "SN BUENAVENTURA", codigo: "16" },
          { distrito: "NUEVA GRANADA", codigo: "12" },
        ],
      },
      {
        municipio: "USULUTAN ESTE",
        codigo: "25",
        distritos: [
          { distrito: "USULUTÁN", codigo: "23" },
          { distrito: "JUCUARÁN", codigo: "10" },
          { distrito: "SAN DIONISIO", codigo: "17" },
          { distrito: "CONCEP BATRES", codigo: "4" },
          { distrito: "SANTA MARÍA", codigo: "20" },
          { distrito: "OZATLÁN", codigo: "13" },
          { distrito: "TECAPÁN", codigo: "22" },
          { distrito: "SANTA ELENA", codigo: "18" },
          { distrito: "CALIFORNIA", codigo: "3" },
          { distrito: "EREGUAYQUÍN", codigo: "6" },
        ],
      },
      {
        municipio: "USULUTAN OESTE",
        codigo: "26",
        distritos: [
          { distrito: "JIQUILISCO", codigo: "8" },
          { distrito: "PTO EL TRIUNFO", codigo: "14" },
          { distrito: "SAN AGUSTÍN", codigo: "15" },
          { distrito: "SAN FCO JAVIER", codigo: "19" },
        ],
      },
    ],
  },
  {
    departamento: "San Vicente",
    codigo: "10",
    municipios: [
      {
        municipio: "SAN VICENTE NORTE",
        codigo: "14",
        distritos: [
          { distrito: "APASTEPEQUE", codigo: "1" },
          { distrito: "SANTA CLARA", codigo: "4" },
          { distrito: "SAN ILDEFONSO", codigo: "7" },
          { distrito: "SN EST CATARINA", codigo: "6" },
          { distrito: "SAN SEBASTIÁN", codigo: "9" },
          { distrito: "SAN LORENZO", codigo: "8" },
          { distrito: "SANTO DOMINGO", codigo: "5" },
        ],
      },
      {
        municipio: "SAN VICENTE SUR",
        codigo: "15",
        distritos: [
          { distrito: "SAN VICENTE", codigo: "10" },
          { distrito: "GUADALUPE", codigo: "2" },
          { distrito: "VERAPAZ", codigo: "13" },
          { distrito: "TEPETITÁN", codigo: "12" },
          { distrito: "TECOLUCA", codigo: "11" },
          { distrito: "SAN CAY ISTEPEQ", codigo: "3" },
        ],
      },
    ],
  },
  {
    departamento: "San Miguel",
    codigo: "12",
    municipios: [
      {
        municipio: "SAN MIGUEL NORTE",
        codigo: "21",
        distritos: [
          { distrito: "CIUDAD BARRIOS", codigo: "2" },
          { distrito: "SESORI", codigo: "19" },
          { distrito: "NVO EDÉN S JUAN", codigo: "11" },
          { distrito: "SAN GERARDO", codigo: "14" },
          { distrito: "SAN LUIS REINA", codigo: "16" },
          { distrito: "CAROLINA", codigo: "1" },
          { distrito: "SAN ANT D MOSCO", codigo: "13" },
          { distrito: "CHAPELTIQUE", codigo: "4" },
        ],
      },
      {
        municipio: "SAN MIGUEL CENTRO",
        codigo: "22",
        distritos: [
          { distrito: "SAN MIGUEL", codigo: "17" },
          { distrito: "COMACARÁN", codigo: "3" },
          { distrito: "ULUAZAPA", codigo: "20" },
          { distrito: "MONCAGUA", codigo: "9" },
          { distrito: "QUELEPA", codigo: "12" },
          { distrito: "CHIRILAGUA", codigo: "6" },
        ],
      },
      {
        municipio: "SAN MIGUEL OESTE",
        codigo: "23",
        distritos: [
          { distrito: "CHINAMECA", codigo: "5" },
          { distrito: "NUEVA GUADALUPE", codigo: "10" },
          { distrito: "LOLOTIQUE", codigo: "8" },
          { distrito: "SAN JORGE", codigo: "15" },
          { distrito: "SAN RAF ORIENTE", codigo: "18" },
          { distrito: "EL TRANSITO", codigo: "7" },
        ],
      },
    ],
  },
  {
    departamento: "Morazán",
    codigo: "13",
    municipios: [
      {
        municipio: "MORAZAN NORTE",
        codigo: "27",
        distritos: [
          { distrito: "ARAMBALA", codigo: "1" },
          { distrito: "CACAOPERA", codigo: "2" },
          { distrito: "CORINTO", codigo: "3" },
          { distrito: "EL ROSARIO", codigo: "7" },
          { distrito: "JOATECA", codigo: "10" },
          { distrito: "JOCOAITIQUE", codigo: "11" },
          { distrito: "MEANGUERA", codigo: "14" },
          { distrito: "PERQUÍN", codigo: "16" },
          { distrito: "SAN FERNANDO", codigo: "18" },
          { distrito: "SAN ISIDRO", codigo: "20" },
          { distrito: "TOROLA", codigo: "24" },
        ],
      },
      {
        municipio: "MORAZAN SUR",
        codigo: "28",
        distritos: [
          { distrito: "CHILANGA", codigo: "4" },
          { distrito: "DELIC DE CONCEP", codigo: "5" },
          { distrito: "EL DIVISADERO", codigo: "6" },
          { distrito: "GUALOCOCTI", codigo: "8" },
          { distrito: "GUATAJIAGUA", codigo: "9" },
          { distrito: "JOCORO", codigo: "12" },
          { distrito: "LOLOTIQUILLO", codigo: "13" },
          { distrito: "OSICALA", codigo: "15" },
          { distrito: "SAN CARLOS", codigo: "17" },
          { distrito: "SAN FCO GOTERA", codigo: "19" },
          { distrito: "SAN SIMÓN", codigo: "21" },
          { distrito: "SENSEMBRA", codigo: "22" },
          { distrito: "SOCIEDAD", codigo: "23" },
          { distrito: "YAMABAL", codigo: "25" },
          { distrito: "YOLOAIQUÍN", codigo: "26" },
        ],
      },
    ],
  },
];
