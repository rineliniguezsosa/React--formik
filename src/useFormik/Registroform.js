import { useFormik } from 'formik'

export const Registroform = () => {
    const formik = useFormik({ //definimos el hook useFormik para gestionar el state del formulario
        initialValues:{ //inicializamos los valores de los inputs nombre,email mediante la prop initialValues
            nombre:'',
            email:'',
            password:''
        }
    })
  return (
    <>
    <form style={{width:'50%'}}>
        <div className="mb-3">
            <input placeholder="Nombre" name="nombre" type="text" className="form-control" id="nombre" />
        </div>
        <div className="mb-3">
            <input placeholder='email' nombre="email" type="email" className="form-control" id="email"/>
        </div>
        <div className="mb-3">
            <input type="password" name="password" placeholder='password' className="form-control" id="password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}
