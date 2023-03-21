import { useFormik } from 'formik'
 import * as Yup from 'yup';

export const Registroform = () => {

    // const validate = (values) =>{
    //       let errors = {}
        
    //       if(!values.nombre){
    //           errors.nombre = "El nombre es requerido"
    //       }
          
    //       return errors
    // }

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
            email:Yup.string().email('Un email valido').required('requerido!')
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
            onChange={formik.handleChange} 
            value={formik.values.nombre} 
            onBlur={formik.handleBlur}
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
            onChange={formik.handleChange} 
            value={formik.values.email}
            id="email"/>
        </div>
        <div className="mb-3">
            <input type="password" 
            name="password" 
            placeholder='password' 
            className="form-control" 
            onChange={formik.handleChange} 
            value={formik.values.password}
            id="password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}
