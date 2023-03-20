# useFormik hook

#### este hook gestiona el state del formulario

<ol>
    <li>Importaremos el hook useFormik</li>
    <li>creamos la variable formik el cual tendra la referencia del hook useFormik,useFormik no es más que un objeto en el cual estableceremos el state inicial de los inputs del formulario </li>
    <li>cada propiedad definida dentro de useFormik debe de coincidir con la prop name de los inputs html establecidos</li>
    <li>definimos la prop onChange={formik.handleChange} para el rastreo o cambio de los inputs</li>
    <li>definimos la prop value={formik.values.nombredelinput} para actualizar el valor del input</li>
</ol>