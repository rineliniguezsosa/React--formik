# Field component

#### por defecto es un input elemento html,podemos eliminar la reduccion de codigo repetitivo {...formik.getFieldProps('')} ya que el componente Field establece las propiedades onChange,onBlur y value por defecto

<ol>
    <li>importamos el component Field</li>
    <li>cambiamos los elementos input por el componente Field</li>
</ol>


```js
import { Formik,Form,Field } from 'formik' //1)
 import * as Yup from 'yup';

export const Registroformcopy = () => {
    const initialValues = {
        nombre:'',
        email:'',
        password:''
    }

    const onSubmit = (values)=> {
        console.log("Datos: ",values)
    }

    const validationSchema = Yup.object({
        nombre: Yup.string().required('requerido!'),
        email:Yup.string().email('Un email valido').required('requerido!'),
        password:Yup.string().required('requerido!')
    })
    
    console.log(formik.touched)
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    <Form  style={{width:'50%'}}>
        <div>
        <div className="mb-3">
            <Field placeholder="Nombre" //2)
            name="nombre" 
            type="text" 
            className="form-control" 
            id="nombre" />
            {formik.touched.nombre && formik.errors.nombre ? <div style={{color:'red',fontSize:'10px'}}>{formik.errors.nombre}</div>: null}
        </div>
        </div>
        <div className="mb-3">
            <Field placeholder='email' //2)
            nombre="email" 
            type="email" 
            className="form-control" 
            id="email"/>
            {formik.touched.email && formik.errors.email ? <div style={{color:'red',fontSize:'10px'}}>{formik.errors.email}</div>: null}
        </div>
        <div className="mb-3">
            <Field type="password" //2)
            name="password" 
            placeholder='password' 
            className="form-control" 
            id="password"/>
            {formik.touched.password && formik.errors.password ? <div style={{color:'red',fontSize:'10px'}}>{formik.errors.password}</div>: null}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </Formik>
  )
}
```