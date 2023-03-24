import { Formik,Form,Field,ErrorMessage,FieldArray } from 'formik'
 import * as Yup from 'yup';

export const Registroformcopy = () => {
    const initialValues = {
        nombre:'',
        email:'',
        password:'',
        redessociales:['']
    }

    const onSubmit = (values,onSubmitProps)=> {
        console.log("Datos: ",values)
        onSubmitProps.resetForm() //reset form
    }

    const validationSchema = Yup.object({
        nombre: Yup.string().required('requerido!'),
        email:Yup.string().email('Un email valido').required('requerido!'),
        password:Yup.string().required('requerido!'),
        // redessociales: Yup.array().of(
        //     Yup.string().email('Un email valido').required('requerido!'),
        //     Yup.string().email('Un email valido').required('requerido!')
        // )
    })
    
    //console.log()
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {formik => {
        console.log(formik)
     return (
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
            <FieldArray  
            name="redessociales" 
            >
                {formikProps =>{
                    const {push,remove,form} = formikProps
                    const {values} = form
                    const { redessociales } = values
                    console.log("formulario",formik)
                    return (
                        <>
                            {redessociales.map((redessociales,index)=>(
                                <div key={index} className="mb-3">
                                     <Field type="email" 
                                            name={`redessociales[${index}]`}
                                            placeholder='redes sociales' 
                                            className="form-control" 
                                    />
                                    {index > 0 && (
                                        <button onClick={()=> remove(index)}>-</button>
                                    )}
                                    <button onClick={()=> push('')}>+</button>
                                </div>
                            ))} 
                        </>    
                    )
                    }

                }
            </FieldArray>
            <ErrorMessage component="span" style={{color:'red',fontSize:'10px'}} name="redessociales[0]"/>
        </div>
        <button disabled={!formik.isValid || formik.isSubmitting} type="submit" className="btn btn-primary">Submit</button>
        
    </Form>
    )}}
    </Formik>
  )
}
