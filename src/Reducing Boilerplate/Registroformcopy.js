import { Formik,Form,Field,ErrorMessage,FieldArray } from 'formik'
 import * as Yup from 'yup';

export const Registroformcopy = () => {
    const initialValues = {
        nombre:'',
        email:'',
        password:'',
        redessociales:['','']
    }

    const onSubmit = (values)=> {
        console.log("Datos: ",values)
    }

    const validationSchema = Yup.object({
        nombre: Yup.string().required('requerido!'),
        email:Yup.string().email('Un email valido').required('requerido!'),
        password:Yup.string().required('requerido!'),
        redessociales: Yup.array().of(
            Yup.string().email('Un email valido').required('requerido!'),
            Yup.string().email('Un email valido').required('requerido!')
        )
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
            name="redessociales[0]" 
            placeholder='facebook' 
            className="form-control" 
            id="facebook"/>
            <ErrorMessage component="span" style={{color:'red',fontSize:'10px'}} name="redessociales[0]"/>
        </div>
        <div className="mb-3">
            <Field type="email" 
            name="redessociales[1]" 
            placeholder='twitter' 
            className="form-control" 
            id="twitter"/>
            <ErrorMessage component="span" style={{color:'red',fontSize:'10px'}} name="redessociales[1]"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </Form>
    </Formik>
  )
}
