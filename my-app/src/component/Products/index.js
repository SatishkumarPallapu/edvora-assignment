

import {Component} from "react"

import ProductCard from "../ProductCard"
import FilterGroup from "../FilterGroup"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap'
import "./index.css"


class Products extends Component{

    state = {
        products: [],
        productName: "",
        state: "",
        city: "",
        isLoading: false
    }

    componentDidMount = () => {
        this.fetchTheProductLists()
    }

    fetchTheProductLists = async () => {
        this.setState({isLoading:true})
        const {productName,state,city} = this.state
        const options = {
            method: "GET"
        }
        const response = await fetch(`https://assessment-edvora.herokuapp.com/?product_name=${productName}&state=${state}&city=${city}` ,options)
        if(response.ok === true){
            const data = await response.json() 

            const filteredData = data.map(eachProduct => ({ 
                brandName: eachProduct.brand_name,
                date: eachProduct.date,
                discription: eachProduct.discription,
                image: eachProduct.image,
                price: eachProduct.price,
                productName: eachProduct.product_name,
                time: eachProduct.time,
                states: eachProduct.address.state,
                city: eachProduct.address.city
            })) 
             
            this.setState({products: filteredData, isLoading:false})
        }
    }

    changeSortByProductHandler = (value) => {
        this.setState({productName: value}, this.fetchTheProductLists)
    }

    changeSortByStateHandler = (value) => {
        this.setState({state: value}, this.fetchTheProductLists)
    }

    changeSortByCityHandler = (value) => {
        this.setState({citty: value}, this.fetchTheProductLists)
    }

    renderTheLoader = () => (
         <div className="loader">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
         </div>
    )

    renderListItems = () => {
        const {products} = this.state
        return (
             <>
             {products.map(eachProduct => 
                <ProductCard eachProduct={eachProduct} key={eachProduct.date}/>)}
             </>
        )
    }

    render(){
        const {products,isLoading} = this.state 
          
        return(
            <div className="main-container">
                <h1 className="org-name d-inline d-md-none">Edvora</h1>
                <div className="filter-container">
                <FilterGroup products={products} 
                            changeSortByProductHandler={this.changeSortByProductHandler} 
                            changeSortByCityHandler={this.changeSortByCityHandler}
                            changeSortByStateHandler={this.changeSortByStateHandler}/>
                </div>
                <div className="products">
                    <h1 className="org-name d-none d-md-block">Edvora</h1>
                    <h3 className="products-header">Products</h3>
                    <h4>Product Name</h4>
                    <hr/>
                    <ul className="products-container">
                         {isLoading? this.renderTheLoader() : this.renderListItems()}             
                    </ul>

                    <h4>Product Name</h4>
                    <hr/>
                    <ul className="products-container">
                    {isLoading? this.renderTheLoader() : this.renderListItems()}             
                    </ul>
                     
                </div>
            </div>
        )
    }
}

export default Products