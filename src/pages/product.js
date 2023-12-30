import { Component } from "react";
import Header from "../header";
import { productData } from "../constant/productData";
import ProductComponent from "../productComponent";
class ProductPage extends Component {
  state = { data: productData };
  filterProduct(flag) {
    if (flag) {
      this.setState({
        data: productData.filter((item) => item.name === "Samsung"),
      });
    } else {
      this.setState({
        data: productData,
      });
    }
  }
  render() {
    const { data, ...state } = this.state;
    return (
      <div>
        <Header />
        <input
          className="yy"
          type="checkbox"
          onChange={(e) => {
            this.filterProduct(e.target.checked);
            console.log(e.target.checked);
          }}
        />
        <div className="flex mt-4">
          {data.map((item, index) => {
            console.log(item.name);
            return (
              <ProductComponent
                className="mydata"
                name={item.name}
                desc={item.desc}
                src={item.src}
                price={item.price}
                key={item.id}
                {...item}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductPage;
