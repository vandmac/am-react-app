import React from "react";
class MovieClass extends React.Component{
   
    componentDidMount() {
       console.log('Init component');
   }
   
   componentDidUpdate(prevProps) {
       console.log('PrevProps and Update:',prevProps);
    }
    
    componentDidUnmount() {
       
    }
   
    render() {
        return <div>
        Movie class Component: {this.props.movie.name}
        </div>;
    }
}

export default MovieClass;