import axios from "axios";


const baseURL = 'https://fake-api-ashen.vercel.app';


const api = axios.create({
    baseURL: baseURL,
   
  });

  export const obtenerDatos = async (url) => {
    return await axios.get(`${baseURL}${url}`);
}

export const eliminarDatos = async (id) => {
    try {
        const respuesta = await axios.delete(`${baseURL}${id}`)
        console.log(`${baseURL}${id}`)
        // alert('Los datos se han eliminado!',respuesta,`${baseURL}${id}`)
    } catch (error) {
      //  alert('Error al eliminar los datos')
    }
}

export const enviarDatos = async (url, datos) => {
    try {
        const respuesta = await api.post(url, datos); 
        //alert('Datos actualizados correctamente');
       // console.log('Respuesta del servidor:', respuesta.data); 
    } catch (error) {
       // alert('Error al actualizar los datos: ' + error.message); 
    }
}



export const datosActualizar = async (url, datos) => {
    try {
        const respuesta = await api.put(url, datos); 
       // alert('Datos actualizados correctamente');
       // console.log('Respuesta del servidor:', respuesta.data);
    } catch (error) {
        //alert('Error al actualizar los datos: ' + error.message);
    }
}
