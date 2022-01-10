  
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

let count = 0

const ProductCard = (props) => {
    const {eachProduct} = props
    const {brandName,date,discription,image,price,productName,time,city,states} = eachProduct
      const event = new Date(date)
      const dates = event.getDate()
      const month = event.getMonth()
      const year = event.getFullYear()
      const fullDate = `${dates}-${month}-${year}`
       
    return(
        <li className='product-list-container'>
            <div className="product-image-details-container">
                <img src={image} alt="product-image" className="product-image"/>
                <div className="product-image-details-container-content">
                    <h1 className="product-name">{productName}</h1>
                    <p className="brand-name">{brandName}</p>
                    <p className="price">Rs {price}/-</p>
                </div>
            </div>
            <div className='location-date-container'>
                <p className="location">{city}, {states}</p>
                <p className="date">Date: <span>{fullDate}</span></p>
            </div>
            <p className="discription">{discription}</p>
       </li> 
    )
}

export default ProductCard