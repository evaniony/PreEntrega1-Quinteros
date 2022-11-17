import { useState, useEffect} from "react"
import { promise } from "../utils/promise"
import { data } from "../utils/data"
import Product from "../components/Product"
import { useParams } from "react-router-dom"

const Products = () =>{
    //el hook me devuelve un array
    //
    const [datos, setDatos] = useState([])
    const {category} = useParams()

    useEffect(() =>{
        if(category ==  undefined){
                promise(2000, data)
                .then(res => setDatos(res))
                .catch(error => console.log(error))
        }else{
                promise(2000, data.filter(item => item.cat == category))
                .then(res => setDatos(res))
                .catch(error => console.log(error))
            }
    }, [category])

    return(
        <>
        {
            datos.map(item =>(
                <Product
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}/>
            ))
        }
        </>
    )
}

export default Products;