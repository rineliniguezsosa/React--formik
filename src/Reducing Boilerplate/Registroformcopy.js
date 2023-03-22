import { Formik,Form,Field,ErrorMessage } from 'formik'
 import * as Yup from 'yup';

export const Registroformcopy = () => {
    const initialValues = {
        nombre:'',
        email:'',
        password:'',
        redessociales:{
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
        <button type="submit" className="btn btn-primary">Submit</button>
    </Form>
    </Formik>
  )
}
