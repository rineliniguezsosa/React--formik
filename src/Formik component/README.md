# FORMIK COMPONENT

#### El componente Formik es el remplazo de el hook useFormik() y ahora el componente Formik recibira mediante props onSubmit,validationSchema y initialValues

<ol>
    <li>importamos el componente Formik</li>
    <li>agregamos el componente Formik</li>
    <li>creamos el objeto initialValues para establecer el state de los inputs</li>
    <li>creamos la funcion onSubmit para el enviado de datos del formulario</li>
    <li>creamos el objeto validationSchema para la validacion del formulario</li>
    <li>pasamos initialValues,onSubmit y validationSchema como props al componente Formik</li>
</ol>

```js
import { Formik } from 'formik' //1)
 import * as Yup from 'yup';

export const Registroformcopy = () => {
    const initialValues = { //3)
        nombre:'',
        email:'',
        password:''
    }

    const onSubmit = (values)=> { //4)
        console.log("Datos: ",values)
    }

    const validationSchema = Yup.object({ //5)
        nombre: Yup.string().required('requerido!'),
        email:Yup.string().email('Un email valido').required('requerido!'),
        password:Yup.string().required('requerido!')
    })
    
    console.log(formik.touched)
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}> 
    // 6)
    <form onSubmit={formik.handleSubmit} style={{width:'50%'}}>
       

    </form>
    </Formik> //2)
  )
}

```