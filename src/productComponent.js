import { Component } from "react";
class ProductComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
   const {name,desc,src,price,...props}=this.props
    return (
      <div className="card w-96 bg-base-100 shadow-xl" {...props}>
        <figure>
          <img className="imgc"
            src={src}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{desc}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-success">{parseInt(price).toFixed(3)}</button>
            <button className="btn btn-primary">Buy now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductComponent;
