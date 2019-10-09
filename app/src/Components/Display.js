import React, { Component } from "react";
import axios from "axios";
import Mapping from "./Mapping";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      name: "",
      description: "",
      price: 0,
      image: ""
    };
  }

  componentDidMount() {
    this.getAll();
  }

  create = (name, description, price, image) => {
    axios
      .post("/api/products", {
        name: name,
        description: description,
        price: price,
        image_url: image
      })
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => console.log(`this is the create error: ${err}`));
  };

  getOne = id => {
    axios
      .get(`/api/products/${id}`)
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => console.log(`this is the getone error message: ${err}`));
  };

  getAll = () => {
    axios
      .get("/api/products")
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => console.log(`this is the getall error message: ${err}`));
  };

  update = (id, desc) => {
    axios
      .put(`/api/products/${id}/?desc=${desc}`)
      .then(res => {
        console.log(res);
        this.setState({
          products: [...res.data]
        });
      })
      .catch(err => console.log(`this is the update error message: ${err}`));
  };

  delete = id => {
    console.log(id);
    axios
      .delete(`/api/products/${id}`)
      .then(res => {
        console.log(res);
        this.setState({ products: res.data });
      })
      .catch(err => console.log(`this is the delete error message: ${err}`));
  };

  render = () => {
    return (
      <div>
        <Mapping
          products={this.state.products}
          delete={this.delete}
          update={this.update}
          create={this.create}
        />
      </div>
    );
  };
}

export default Display;
