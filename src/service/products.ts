import  { Products } from "../interface" ;

export const getProducts= async():Promise<Products[]> =>{
    try {
      const response = await fetch(" http://localhost:3000/products ")
     
        if( response.ok){
            const data = await response.json()
            return  data 
        }else{
            throw new Error('Fail conection fetch products')
        }


    } catch (error) {
        throw new Error ('Error en conexcion ')
    }
   }