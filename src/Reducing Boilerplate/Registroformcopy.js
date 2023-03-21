import { Formik } from 'formik'
 import * as Yup from 'yup';

export const Registroformcopy = () => {

    const formik = useFormik({
        initialValues:{ 
            nombre:'',
            email:'',
            password:''
        },
        onSubmit:(values)=>{
            console.log("Datos: ",values)
        },
        //validate,
        validationSchema: Yup.object({
            nombre: Yup.string().required('requerido!'),
            email:Yup.string().email('Un email valido').required('requerido!'),
            password:Yup.string().required('requerido!')
        })
    })

    console.log(formik.touched)
  return (
    <>
    <form onSubmit={formik.handleSubmit} style={{width:'50%'}}>
        <div>
        <div className="mb-3">
            <input placeholder="Nombre" 
            name="nombre" 
            {...formik.getFieldProps('nombre')}
            type="text" 
            className="form-control" 
            id="nombre" />
            {formik.touched.nombre && formik.errors.nombre ? <div style={{color:'red',fontSize:'10px'}}>{formik.errors.nombre}</div>: null}
        </div>
        </div>
        <div className="mb-3">
            <input placeholder='email' 
            nombre="email" 
            type="email" 
            className="form-control" 
            {...formik.getFieldProps('email')}
            id="email"/>
            {formik.touched.email && formik.errors.email ? <div style={{color:'red',fontSize:'10px'}}>{formik.errors.email}</div>: null}
        </div>
        <div className="mb-3">
            <input type="password" 
            name="password" 
            placeholder='password' 
            className="form-control" 
            {...formik.getFieldProps('password')}
            id="password"/>
            {formik.touched.password && formik.errors.password ? <div style={{color:'red',fontSize:'10px'}}>{formik.errors.password}</div>: null}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}
