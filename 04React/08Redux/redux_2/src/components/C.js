import React, { Component } from 'react'
import { connect } from 'react-redux';

class C extends Component {
  render() {
    return (
      <div>
        C, a = {this.props.a}, b = {this.props.b}
        <button onClick={this.props.incrementX}>Increment X</button>        
        <button onClick={this.props.incrementY}>Increment Y</button>        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  a: state.reducer2.a,
  b: state.reducer2.b
});

const mapDispatchToProps = (dispatch) => ({
  incrementX: () => dispatch({ type: 'INCREMENT_X' }),
  incrementY: () => dispatch({ type: 'INCREMENT_Y' })
});


export default connect(mapStateToProps, mapDispatchToProps)(C);
