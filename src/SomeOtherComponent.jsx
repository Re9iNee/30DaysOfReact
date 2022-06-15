import React from "react";
// import PropTypes from "prop-types";

class MyComponent extends React.Component {
    render() {
        return <div>Hello There, {this.props.title}</div>;
    }
}

MyComponent.defaultProps = {
    title: "ameeeee guzu",
};

MyComponent.propTypes = {
    title: React.PropTypes.string.isRequired,
    count: React.PropTypes.number,
};

export default MyComponent;
