import React from "react";
import PropTypes from "prop-types";

const Component = ({ title }) => {
    return <div>HI i have a secret: {title}</div>;
};

Component.defaultProps = {
    title: "AMEEE KHEILI GUZU E",
};
Component.propTypes = {
    title: PropTypes.string,
    count: PropTypes.string.isRequired,
};

export default Component;
