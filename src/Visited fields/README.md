# Visited fields (campos visitados)

#### Dado que nuestra función de validación se ejecuta en cada pulsación de tecla contra el formulario completo values , nuestro errors objeto contiene todos los errores de validación en un momento dado. En nuestro componente, solo verificamos si existe un error y luego se lo mostramos inmediatamente al usuario. Esto es incómodo ya que vamos a mostrar mensajes de error para los campos que el usuario aún no ha visitado. La mayoría de las veces, solo queremos mostrar el mensaje de error de un campo después de que nuestro usuario termine de escribir en ese campo<br></br>Al igual que errors y values, Formik realiza un seguimiento de los campos que se han visitado. Almacena esta información en un objeto llamado **touched**<br></br>Las claves de touched son los **nombres de campo** y los valores de touched son booleanos true/ false.<br></br>Para aprovechar touched, pasamos **formik.handleBlur** al prop de cada entrada **onBlur.** Esta función funciona de manera similar formik.handleChange en el sentido de que usa el name atributo para determinar qué campo actualizar.

<ol>
    <li>agregamos la prop onBlur con el valor onBlur={formik.handleBlur} para el seguimiento del campo visitado</li>
    <li>validamos si el input ha sido visitado mediante formik.touched.nombre y si contiene errores</li>
</ol>