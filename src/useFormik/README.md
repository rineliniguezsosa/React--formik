# useFormik hook

#### este hook gestiona el state del formulario

<ol>
    <li>Importaremos el hook useFormik</li>
    <li>creamos la variable formik el cual tendra la referencia del hook useFormik,useFormik no es más que un objeto en el cual estableceremos el state inicial de los inputs del formulario </li>
    <li>definimos la prop initialValues para inicializar el state de los inputs</li>
    <li>cada propiedad definida dentro de useFormik debe de coincidir con la prop name de los inputs html establecidos</li>
    <li>definimos la prop onChange={formik.handleChange} para el rastreo o cambio de los inputs</li>
    <li>definimos la prop value={formik.values.nombredelinput} para actualizar el valor del input</li>
</ol>

```js
import { useFormik } from 'formik' //1)

export const Registroform = () => {
    const formik = useFormik({ //2)
        initialValues:{ //3)
            nombre:'', //4)
            email:'',  //4)
            password:'' //4)
        }
    })

    console.log(formik.values)
  return (
    <>
    <form style={{width:'50%'}}>
        <div className="mb-3">
            <input placeholder="Nombre" 
            name="nombre" //4)
            onChange={formik.handleChange} //5)
            value={formik.values.nombre} //6) 
            type="text" 
            className="form-control" 
            id="nombre" />
        </div>
        <div className="mb-3">
            <input placeholder='email' 
            name="email" //4)
            type="email" 
            className="form-control" 
            onChange={formik.handleChange} //5)
            value={formik.values.email} //6)
            id="email"/>
            
        </div>
        <div className="mb-3">
            <input type="password" 
            name="password"//4)
            placeholder='password' 
            className="form-control" 
            onChange={formik.handleChange} //5)
            value={formik.values.password} //6)
            id="password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}

```