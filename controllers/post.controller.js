import { request, response } from 'express';
//Importa el modelo que creaste..


//TODO: Realizar logica de controladores.


/*
*   -Se debe recibir el titulo y el texto de la solicitud(req)
*   -Asociar el id del usuario que creo el post
*   -Guardar el post en la db 
*   -Responder al cliente(res) un codigo 201,
*   -Responder en el cuerpo de la respuesta: { message: 'created', post}
 */
export const submitPost = (req = request, res = response) => {
    //codigo aquí
}

/*
*   -Buscar y eliminar un post por su _id
*   -Si no se encuentra el recurso retornar => status:404, {Message: Post not Found}
*   -si el _id del usuario no es igual al _id del usuario del post, retornar => status:401, {You can't delete this}
*   -si todo sale bien retornar => 200 => { message: 'Post deleted.'}
 */
export const deletePost = (req = request, res = response) => {
    //codigo aquí
}

/*
*   -Recibir un en la body de la solicitud(req) text y title
*   -Buscar y actualizar con la data del body un post por su _id
*   -Si no se encuentra el recurso retornar => status:404, {Message: Post not Found}
*   -si el _id del usuario no es igual al _id del usuario del post, retornar => status:401, {You can't update this}
*   -si todo sale bien retornar => 200 => { message: 'Post updated.', post}
 */
export const updatePost = (req = request, res = response) => {
    //codigo aquí
}

/*
*   -Recibir un los parametros de la url el id
*   -Buscar un post por su _id
*   -Si no se encuentra el recurso retornar => status:404, {Message: Post not Found}
*   -si todo sale bien retornar => 200 => {post}
*   -extra: cambiar findById por findByTerm y hacer una busqueda flexible
*           que permita buscar por cualquier termino de busqueda
 */
export const findById = (req = request, res = response) => {
    //codigo aquí
}

/*
 *  -Recibir limit de la query de la url, el valor debe ser entero
 *  -Traer los registros con un limite de lo que se contenga limit
 *  -extra: añadir una segunda query llamada offset que establece el indice en el cual empieza a traer 
 *          los registros
 */

export const findAllPaginated = (req = request, res = response) => {
    //codigo aquí
}

