// TODO: Crea el modelo del Post
/*
 Crea el modelo que sera mapeado en la base de datos,
 pista: importa Schema y model de mongoose y haz algo con 
 ellos

 1. Atributos del modelo:
 title: Debe ser String, no nulo
 text: Debe ser String, minimo: 16 caracteres, maximo 5000 caracteres 
 createdAt: fecha de publicacion del post
 updatedAt: fecha de actualizacion del post
 user: id asociado al usuario, haz una relacion, pista: 'ref',
 modulo : debe ser disponible uno de estos ['CIENCIAS', 'ADMINISTRACION', 'MATEMATICAS'], plus: crea un modelo para modulos y haz la relación

 2.Oculta el _id, _v  y updatedAt

 3. Exporta el modelo


 consejos:

 - Puedes hacer las tablas de createdAt y updatedAt automaticamente
 haciendo uso de la propiedad timestamps.

 - Revisa los otros archivos, hay mucho de lo que necesitas, NO COPIES Y PEGUES, haz un esfuerzo honesto


 */