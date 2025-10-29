import './styles.css'

export function Produto({ product }) {
    return (
        <div className="productContainer">
            <div className="productInfo">
                <h1>{product.name}</h1>
                <p>R$ {product.price}</p>
            </div>
            <img src={product.url} alt="" />
        </div>
    )
};

