
import React from 'react';
import Product from './Product.jsx';
import Form from './Form.jsx';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = JSON.parse( localStorage.getItem('react-cart') ) || {
      data:
      [
        {
          "id":0,
          "name":"JavaScript: The Definitive Guide, 6th Edition",
          "release": "September 2010",
          "amount": 1,
          "price":"2.99"
        },
        {
          "id":1,
          "name":"Ruby on Rails: Up and Running",
          "release": "March 2007",
          "amount": 1,
          "price":"30.99"
        },
        {
          "id":2,
          "name":"MongoDB: The Definitive Guide",
          "release": "Januar 2019",
          "amount": 1,
          "price":"99.99"
        },
                {
          "id":3,
          "name":"Linux Cookbook",
          "release": "Februar 2009",
          "amount": 1,
          "price":"24.99"
        },

      ],
      total: 0,
      // set initial form value
      form: {}
    }
    this.updateItem = this.updateItem.bind(this);
  }

  onChange = (field, value) => {
    // local copy of state
    let data = { ...this.state.form };
    // create form object with id of input
    data[field] = value
    // sync to state and to LC
    this.setState({ form: data })
    localStorage.setItem('react-cart', JSON.stringify(this.state));
  }

  updateItem = (item, index) => {
    var data = this.state.data

    if ( index === "like" ) {
        data[item.props.data.id].liked = !data[item.props.data.id].liked 
      }
    else if (index)
      data[item.props.data.id].amount++
    else if (data[item.props.data.id].amount > 0)
      data[item.props.data.id].amount--

    this.state.total = data.map((item, index, array)=> item.price * item.amount).reduce((a, b) => a + b, 0);
    this.setState(this.state)
    localStorage.setItem('react-cart', JSON.stringify(this.state));

  }
  render() {
    return (
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul className="list-group mb-3">

              {this.state.data.map((person, i) => <Product updateItem={this.updateItem} key = {i} data = {person} />)}

              <li className="list-group-item d-flex justify-content-between lh-condensed">
                Total: <span className="font-weight-bold">{this.state.total.toFixed(2)} $ </span>
              </li>

            </ul>

            <form className="card p-2">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Promo code"/>
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">Redeem</button>
                </div>
              </div>
            </form>
            
          </div>

          { /* Form needs data on load and the change handler */ }
          <Form data={this.state.form} onChange={this.onChange} />

        </div>
    );
  }
}
export default CheckoutForm;
