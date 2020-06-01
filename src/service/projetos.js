import { http } from './config'

export default{

  listar:() =>{
    return http.get()
  },

  salvar : ( projeto ) => {
    return  http.post( 'add' , projeto )
  },

  delete: (projeto) => {
    return http.delete('remove', {data: projeto})
  }

}