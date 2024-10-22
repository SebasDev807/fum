# FORO UNI-MAYOR(FUM)- API-REST - SEMILLERO PIXEL

## Integrantes
- David Leon
- Juan David Chaves
- Santiago Torres
- Gabriela Orozco
- Alejandro Tosne
- Sebastián Astudillo

## Endpoints

| Método | Endpoint                     | Descripción                        | Cuerpo/Parámetros                    |
|--------|------------------------------|------------------------------------|--------------------------------------|
| POST   | `/api/v1/auth/register`              | Registra un nuevo usuario          | `{ email: string, password: string, username: string }` |
| GET    | `/api/v1/auth/verify/:token`        | Confirma la cuenta del usuario     | `token: string` en los parámetros    |
| POST    | `/api/v1/auth/verify/:token`        | Inicia sesión en la plataforma     | `{email, password}` en los el body   |

## Instrucciones de Inicialización

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/SebasDev807/fum.git


2. **Crear un cluster en Mongo Atlas**

3. **Renombrar .env.template a .env y rellenar las variables de entorno**
 
4. **Iniciar proyecto en desarrollo**
```bash
    yarn dev

