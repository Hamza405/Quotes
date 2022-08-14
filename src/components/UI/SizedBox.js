const SizedBox = ( props ) => {
    const size = props.size != null ? props.size : 1;
    return <div style={ { margin: `${ size }rem` } }></div>;
};

export default SizedBox;