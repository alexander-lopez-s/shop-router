const LightningItem = ({ data }) => {
    return (
      <div className="card-container">
        {data.map((item) => (
          <div key={item.id} className="card">
            <img src={item.images[1]} alt={item.title} />
            <p className="product-title">{item.title}</p>
            <p className="description">{item.description}</p>
            <p className="price">€{item.price}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default LightningItem;