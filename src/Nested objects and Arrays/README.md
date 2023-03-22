# Nested objects and arrays

#### podemos anidar objetos y arrays en nuestro initialValues


### EJEMPLO NESTED OBJECTS
```js
import { Formik,Form,Field,ErrorMessage } from 'formik'
 import * as Yup from 'yup';

export const Registroformcopy = () => {
    const initialValues = {
        nombre:'',
        email:'',
        password:'',
        redessociales:{ //1)Nested objects
            facebook:'',
            twitter:'',
        }
    }

    const onSubmit = (values)=> {
        console.log("Datos: ",values)
    }

    const validationSchema = Yup.object({
        nombre: Yup.string().required('requerido!'),
        email:Yup.string().email('Un email valido').required('requerido!'),
        password:Yup.string().required('requerido!'),
        redessociales: Yup.object().shape({
            facebook:Yup.string().email('Un email valido').required('requerido!'),
            twitter:Yup.string().email('Un email valido').required('requerido!'),
            //validaciones nested objects
        })
    })
    
    //console.log()
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    <Form  style={{width:'50%'}}>
        <div>
        <div className="mb-3">
            <Field placeholder="Nombre" 
            name="nombre" 
            type="text" 
            className="form-control" 
            id="nombre" />
            <ErrorMessage component="span" style={{color:'red',fontSize:'10px'}} name="nombre"/>
        </div>
        </div>
        <div className="mb-3">
            <Field placeholder='email' 
            name="email" 
            type="email" 
            className="form-control" 
            id="email"/>
            <ErrorMessage component="span" style={{color:'red',fontSize:'10px'}} name="email"/>
        </div>
        <div className="mb-3">
            <Field type="password" 
            name="password" 
            placeholder='password' 
            className="form-control" 
            id="password"/>
            <ErrorMessage component="span" style={{color:'red',fontSize:'10px'}} name="password"/>
        </div>
        <div className="mb-3">
            <Field type="email" 
            name="redessociales.facebook" 
            placeholder='facebook' 
            className="form-control" 
            id="facebook"/>
            <ErrorMessage component="span" style={{color:'red',fontSize:'10px'}} name="redessociales.facebook"/>
            // FIELD NESTED OBJECT
        </div>
        <div className="mb-3">
            <Field type="email" 
            name="redessociales.twitter" 
            placeholder='twitter' 
            className="form-control" 
            id="twitter"/>
            <ErrorMessage component="span" style={{color:'red',fontSize:'10px'}} name="redessociales.twitter"/>
            // FIELD NESTED OBJECT
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </Form>
    </Formik>
  )
}

```