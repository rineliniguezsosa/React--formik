# validacion de formulario

#### Formik realiza un seguimiento de los values si no tambíen de los mensaje de validacion y error,para agregar validación personalizada formik acepta la funcion **validate** el cual pasaremos al hook useFormik()

<ol>
    <li>pasamos la funcion personalizada validate al useFormik,la función validate se ejecuta en cada pulsación de tecla</li>
    <li>definimos la funcion validate y le pasamos el argumento values</li>
    <li>creamos el objeto errors y retornamos el objeto errors</li>
     <li>validamos los valores de entrada y almacenamos en el objeto errors los mensajes de errores</li>
     <li>agregamos el mensaje de error</li>
</ol>

```js
import { useFormik } from 'formik'

export const Registroform = () => {

    const validate = (values) =>{ //2)
          let errors = {} //3)
        
          if(!values.nombre){ //4)
              errors.nombre = "El nombre es requerido"
          }
          
          return errors //3)
    }

    const formik = useFormik({ 
        initialValues:{ 
            nombre:'',
            email:'',
            password:''
        },
        onSubmit:(values)=>{
            console.log("Datos: ",values)
        },
        validate //1)
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
            {formik.errors.nombre ? <div style={{color:'red',fontSize:'10px'}}>{formik.errors.nombre}</div>: null}
            // 5)
        </div>
        </div>
        
    </form>
    </>
  )
}

```