# validacion de formulario

#### Formik realiza un seguimiento de los values si no tambíen de los mensaje de validacion y error,para agregar validación personalizada formik acepta la funcion **validate** el cual pasaremos al hook useFormik()

<ol>
    <li>pasamos la funcion personalizada validate al useFormik,la función validate se ejecuta en cada pulsación de tecla</li>
    <li>definimos la funcion validate y le pasamos el argumento values</li>
    <li>creamos el objeto errors y retornamos el objeto errors</li>
     <li>validamos los valores de entrada y almacenamos en el objeto errors los mensajes de errores</li>
     <li>agregamos el mensaje de error</li>
</ol>