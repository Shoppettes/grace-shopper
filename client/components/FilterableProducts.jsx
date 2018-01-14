// import React, { Component } from 'react';
// import FilterInput from './FilterInput';
// import AllArtists from './AllArtists';

// export default class FilterableArtists extends React.Component {

//   constructor (props) {
//     super(props);
//     this.state = {
//       inputValue: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange (evt) {
//     const value = evt.target.value;
//     this.setState({
//       inputValue: value
//     });
//   }

//   render () {

//     const inputValue = this.state.inputValue;
//     const filteredArtists = this.props.artists.filter(artist =>
//       artist.name.match(inputValue));

//     return (
//       <div>
//         <FilterInput
//           handleChange={this.handleChange}
//           inputValue={inputValue}
//         />
//         <AllArtists artists={filteredArtists} />
//       </div>
//     );
//   }
// }