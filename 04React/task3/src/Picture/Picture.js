import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Picture extends Component {
    
    state = {
        url: null,
        key: null
    }

    constructor(props) {
        super(props);
        this.state = {
            url: 'https://picsum.photos/100/100/?image=' + this.props.picsumId,
            key: this.props.imageKey
        }
    }

    componentWillMount = () => {
        console.log('component will mount: ' + this.props.imageKey);
    }

    componentDidMount = () => {
        console.log('component mounted: ' + this.props.imageKey);
    }

    componentWillReceiveProps = (nextProps) => {
        console.log('component will receive props: ' + this.props.imageKey);

        this.setState({
            url: 'https://picsum.photos/100/100/?image=' + nextProps.picsumId,
            key: nextProps.imageKey            
        })
    }

    shouldComponentUpdate = () => {
        console.log('component should update: ' + this.props.imageKey);
        return true;
    }

    componentWillUpdate = () => {
        console.log('component will update: ' + this.props.imageKey);
    }

    componentDidUpdate = () => {
        console.log('component updated: ' + this.props.imageKey);
    }

    componentWillUnmount = () => {
        console.log('component unmounted: ' + this.props.imageKey);
    }

    render() {

        const style = {
            display: 'inline-block',
            marginLeft: '8px',
            marginTop: '4px'
        }

        const buttons = {
            marginTop: '4px'
        }

        const button = {
            marginLeft: '2px'
        }

        return (
            <div style={style}>
                <div><img src={this.state.url} /></div>
                <div style={buttons}>
                    <Button onClick={this.props.remove} color="primary">X</Button>
                    <Button onClick={this.props.change} style={button} color="primary">+</Button>
                </div>
            </div>
        )
    }

}

export default Picture;