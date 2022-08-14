import {Link} from 'react-router-dom'

const ProductItem = ({item}) => {

  return (
    <div className='ProductItem'>
        <img src={item.image}/>
        <div className="content">
        {/* <h3> Product id: {item.id}</h3> */}
        <h5> {item.model}</h5>
        <h5> {item.price} $</h5>
        <Link className='btn' to={{ pathname: "/detail/"  + item.id
        }} > Detail   </Link>
        </div>
    </div> 

  )
}

export default ProductItem

