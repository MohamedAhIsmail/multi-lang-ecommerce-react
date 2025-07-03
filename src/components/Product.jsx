function Product({ product, language }) {
  const { title, image, price, description } = product;

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{title[language]}</h2>
        <p className="product-desc">{description[language]}</p>
        <div className="product-footer">
          <span className="product-price">{price} جنيه</span>
          <button className="product-btn">شراء</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
