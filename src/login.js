import { Component } from "react";

class Login extends Component {
  state = {
    fetchData: false,
    data: [],
    loading: false,
    counter: 0,
  };

  updateloading() {
    let { counter, ...state } = this.state;
    if (counter < 1) {
      this.setState({ ...this.state, loading: true, counter: 1 });
    }
    setTimeout(() => {
      const newData = Array.from(new Array(10));

      console.log("mj", newData);
      this.setState({
        ...this.state,
        fetchData: false,
        loading: false,
        counter: 0,
      });
    }, 2000);
  }

  componentDidUpdate() {
    this.updateloading();

    console.log(this.state);
  }

  func2() {
    let myarr = [1, 2, 3];
    myarr.map((item, index) => <div>{item}</div>);
  }

  render() {
    return (
      <h1>
        <h1>hello</h1>
        <button
          className="btn-blue"
          onClick={() => {
            this.setState({
              ...this.state,
              fetchData: true,
              data: ["data1", "data2", "data3"],
            });
          }}
        >
          fetch data
        </button>

        {this.state.loading && this.state.fetchData ? (
          <div>loading...</div>
        ) : (
          <div>
            {" "}
            {this.state.data.map((item, index) => {
              console.log(item, index);
              return <div key={index + "mojde"}>{item} </div>;
            })}
          </div>
        )}
      </h1>
    );
  }
}

export default Login;
