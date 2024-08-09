<h1 align="center">Funcionalidad del proyecto</h1>


## Descripción del proyecto:
Este proyecto fue realizado como un challenge para Alura Latam. Consiste en crear una página web que pueda encriptar y desencriptar texto con algunas restricciones, tales como el uso exclusivo de minúsculas; no se permitirán mayúsculas ni caracteres especiales.

## Funcionalidad:

- Encriptación:

  Las "llaves" de encriptación que utilizaremos son las siguientes:

  La letra "e" es convertida para "enter"
  La letra "i" es convertida para "imes"
  La letra "a" es convertida para "ai"
  La letra "o" es convertida para "ober"
  La letra "u" es convertida para "ufat"

  - Requisitos:

      Debe funcionar solo con letras minúsculas

      No deben ser utilizados letras con acentos ni caracteres especiales

      Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

      - Por ejemplo:
          "gato" => "gaitober"
          gaitober" => "gato"

        La página debe tener campos parainserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.

        El resultado debe ser mostrado en la pantalla.
- Encriptación en marcha
    En la siguiente imagen, se puede ver primero el texto que se va a encriptar. Encerrado en un cuadro, vemos el botón que realizará la acción de encriptar el texto, y encerrado en un círculo, el resultado de la encriptación.
  
    ![Imagen de ejemplo de encriptado](https://github.com/user-attachments/assets/1b688703-5f59-4a60-bf87-19170104c03c)

- Desencriptación:

    De igual forma, se podrán desencriptar los textos encriptados.
  
    ![Texto desencriptado](https://github.com/user-attachments/assets/ea1ab13f-7e01-477f-8acc-bd101c49e130)

    Para este ejemplo, tomamos el mensaje secreto que nos dio Alura Latam para desencriptar y vemos cuál fue el resultado.

- Ejemplo de restricciones:

    En el ejercicio se pedía que los campos de texto solo aceptaran minúsculas, no podían aceptar mayúsculas ni caracteres especiales. Para esto, tomamos nuevamente como ejemplo el mensaje secreto de Alura Latam.

    ![Ejemplo de restricciones](https://github.com/user-attachments/assets/379ce33b-1196-4ec0-9fff-bcf3f6825b25)

    En este ejemplo, podemos ver que no nos deja encriptar el texto y se ilumina de rojo el mensaje que se encuentra debajo de la caja de texto.
