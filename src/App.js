import React from 'react';

export default class FetchRandomser extends React.Component {

    state ={
      loading: true,
      people: []
    };

    async componentDidMount() {
      const url = "http://api.randomuser.me/?results=20";
      const response = await fetch(url)
    
      const data = await response.json();
      this.setState({people: data.results, loading: false});
      console.log(data.results[0]);

    }

  render(){
    if (this.state.loading){
      return <div>Loading...</div>;
    }
    if (!this.state.people.length) {
      return <div>Didn't get any personnel</div>
    }
    return (
         <div>
           <ul>
           {this.state.people.map(person => (             
             <li key={person.login.uuid}>
           <img src={person.picture.medium} /> {person.name.title}  {person.name.first} {person.name.last}    email: {person.email}    Cell: {person.cell}
            </li>
           ))};
           </ul>
          </div>           
         );     
  }
}




