import { Formik,Form,Field,ErrorMessage } from 'formik'
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
            <Field placeholder="Nombre" 
            name="nombre" 
            type="text" 
            className="form-control" 
            id="nombre" />
            <ErrorMessage name="nombre"></ErrorMessage>
        </div>
        </div>
        <div className="mb-3">
            <Field placeholder='email' 
            nombre="email" 
            type="email" 
            className="form-control" 
            id="email"/>
            <ErrorMessage name="email"></ErrorMessage>
        </div>
        <div className="mb-3">
            <Field type="password" 
            name="password" 
            placeholder='password' 
            className="form-control" 
            id="password"/>
            <ErrorMessage name="password"></ErrorMessage>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </Form>
    </Formik>
  )
}
