import React from 'react';

import './App.css';

//Calling Bootstrap 4.5 css
import 'bootstrap/dist/css/bootstrap.min.css';

//Calling Firebase config setting to call the data
import firebase from './Firebase';


class App extends React.Component {

constructor(props) {
    
    super(props);
   
    this.state = {studentslist : []}
    }
    
  componentDidMount() {
   
   
     
      firebase.database().ref("smart-image-transport").on("value", snapshot => {
        let studentlist = [];
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'students-list' path
            studentlist.push(snap.val());
        });
        this.setState({ studentslist: studentlist });
      });
    
    
 }
  
  render(){
  return (
    <div className="MainDiv">
      <div class="jumbotron text-center bg-sky">
          <h1>TRANSPORT DASHBOARD</h1>
          <div>You're at Chickballapur (CBP)</div>
      </div>
    
      <div className="container">
          <table id="example" class="display table">
            <thead class="thead-dark">
                <tr>
                    <th>Bus#</th>
                    <th>Source Point</th>
                    <th>Destination</th>
                    <th>Arrival time</th>
                    <th>Departure</th>
                </tr>
            </thead>
            <tbody>
            {this.state.studentslist.map(data => {
                
                return (
                    <tr>     
                    <td>{data.ID}</td>
                    <td>{data.Source}</td>
                    <td>{data.Destination}</td>
                    <td>{data.Arrival}</td>
                    <td>{data.Departure}</td>
                    </tr>
                    
                );
               
                })}
        
               
            </tbody>
            
         </table>
          
     </div>
    </div>
  );
}
}
export default App;