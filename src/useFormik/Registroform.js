import { useFormik } from 'formik'

export const Registroform = () => {

    const validate = (values) =>{
          let errors = {}
        
          if(!values.nombre){
              errors.nombre = "El nombre es requerido"
          }
          
          return errors
    }
    
    const formik = useFormik({ //definimos el hook useFormik para gestionar el state del formulario
        initialValues:{ //inicializamos los valores de los inputs nombre,email mediante la prop initialValues
            nombre:'',
            email:'',
            password:''
        },
        onSubmit:(values)=>{
            console.log("Datos: ",values)
        },
        validate
    })

    console.log(formik.errors)
  return (
    <>
    <form onSubmit={formik.handleSubmit} style={{width:'50%'}}>
        <div>
        <div className="mb-3">
            <input placeholder="Nombre" 
            name="nombre" 
            onChange={formik.handleChange} 
            value={formik.values.nombre} 
            type="text" 
            className="form-control" 
            id="nombre" />
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
