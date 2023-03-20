# Manejando el envio del formulario

#### formik gestiona metodos auxiliares el que nos interesa es handleSubmit,handleSubmit es un controlador para el envio de formulario

<ol>
    <li>Agregamos el evento onSubmit en donde ejecutaremos el metodo formik.handleSubmit para enviar los datos del formulario
    </li>
    <li>agregamos la prop onSubmit el cual devolvera una fucnion donde recibira values como los datos enviados del formulario</li>
</ol>


```js
import { useFormik } from 'formik'

export const Registroform = () => {
    const formik = useFormik({ 
        initialValues:{ 
            nombre:'',
            email:'',
            password:''
        },
        onSubmit:(values)=>{
            console.log("Datos: ",values)
        }
    })

    console.log(formik.values)
  return (
    <>
    <form onSubmit={formik.handleSubmit} style={{width:'50%'}}>
       
    </form>
    </>
  )
}

```