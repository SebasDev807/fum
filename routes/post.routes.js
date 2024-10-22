import { Router } from 'express';
import { deletePost, findAllPaginated, findById, submitPost, updatePost } from '../controllers/post.controller.js';

//TODO: Hacer rutas del post y sus validaciones


const postRouter = Router();

postRouter.post('/', [/*validaciones aqui*/],submitPost);
postRouter.get('/', [/*validaciones aqui*/],findAllPaginated);
postRouter.get('/:id', [/*validaciones aqui*/],findById);
postRouter.put('/:id', [/*validaciones aqui*/],updatePost);
postRouter.delete('/:id', [/*validaciones aqui*/],deletePost);

export default postRouter;
/*
[POST] - submitPost - crear un post, title y text son obligatorios
[DELETE] - deletePost - eliminar un post - validar id de mongo
[PUT] - updatePost - actualizar un post - validar id de mongo
[GET] - findById - obtener por id - validar id de mongo
[GET] -findAllPaginated - validar que limit sea un numero
*/
