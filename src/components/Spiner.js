import React from "react";
import Loader from "react-loader-spinner";



class Spiner extends React.Component {
        render() {
        return (
            <Loader
                type="Circles"
                color="#00BFFF"
                height={200}
                width={200}
            />
        );
    }
}

export default Spiner
