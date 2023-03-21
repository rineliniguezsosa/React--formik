# Reduciendo la repetición

#### Formik devuelve un método llamado formik.getFieldProps() para que sea más rápido conectar las entradas onChange, onBlur, value, checked esto nos servira de gran ayuda para reducir el codigo

<ol>
    <li>agrega el método en el input que tenga las propiedades onChange,onBlur,value y checked para reducir el codigo {...formik.getFieldprops('nameinputfield')}</li>
</ol>