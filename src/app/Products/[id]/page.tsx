

export default function ProductPage({params}:{params:{id:number}}){

    const {id} = params

    return(<>
    
    <p> {`this is my ${id}`} </p>

    </>)
}