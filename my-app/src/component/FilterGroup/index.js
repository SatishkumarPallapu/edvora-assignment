import "./index.css"

const FilterGroup = (props) => {
    const {products,changeSortByProductHandler,changeSortByStateHandler,changeSortByCityHandler} = props

    const onChangeSortByProduct = (event) => {
        console.log(event.target.value)
        changeSortByProductHandler(event.target.value);
    }

    const onChangeSortByState = (event) => {
        console.log(event.target.value)
        changeSortByStateHandler(event.target.value);
    }

    const onChangeSortByCity = (event) => {
        console.log(event.target.value)
        changeSortByCityHandler(event.target.value);
    }

    return(
         <div className="dropdown-container">
             <h1 className="filter-header" >Filters</h1>
                <hr/>
            <select className="select" onChange={onChangeSortByProduct}>
                {products.map(eachProduct => 
                <option key={eachProduct.date}
                value={eachProduct.productName}>{eachProduct.productName}</option>)}
            </select>
                    <br/>
            <select onChange={onChangeSortByCity}>
                {products.map(eachProduct => 
                <option key={eachProduct.date}
                value={eachProduct.city}>{eachProduct.city}</option>)}
            </select>
                    <br/>
            <select onChange={onChangeSortByState}>
                {products.map(eachProduct => 
                <option key={eachProduct.date}
                value={eachProduct.states}>{eachProduct.states}</option>)}
            </select>

         </div>
    )
}

export default FilterGroup