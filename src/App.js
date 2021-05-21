import React from 'react';
import './App.css';

function App() {
  const [isLightOn, setIsLightOn] = React.useState(true);
  const toggleLight = () => {setIsLightOn(!isLightOn)}

  return (
    <div>
        <button onClick={toggleLight}>
            {isLightOn ? 'AAN' : 'UIT'}
        </button>
    </div>
  );
}

// class App extends React.Component {
//     // De constructor zorgt ervoor dat we onze props kunnen doorgeven aan het react component
//     constructor(props) {
//         super(props);
//         this.state = {
//             // Definitie van de status, de standaard is aan, dmv een boolean
//             isLightOn: true
//         };
//         // Hier wordt de methode aan de class gebonden om te zorgen dat this. zijn context niet verliest ***DIT SNAP IK NIET GOED***
//         this.handleClick = this.handleClick.bind(this);
//     }
//     // De methode die ervoor zorgt wanneer er op de button wordt geklikt dat state isLightOn wordt getoggled naar de andere status van de Boolean
//     handleClick() {
//         this.setState({
//             isLightOn: !this.state.isLightOn,
//         });
//     }
//     // De HTML, deze wordt gerendered
//     render() {
//         return (
//             // De button
//             <button
//                 type="button"
//                 // Via deze onClick wordt de eerder gedefinieerde methode met zijn state gekoppeld aan de html
//                 onClick={this.handleClick}
//                 // Hier wordt de text in de button gedefinieerd en gekoppeld aan de staat van de boolean
//             >
//                 {this.state.isLightOn ? 'AAN' : 'UIT'}
//             </button>
//         );
//     }
// }

export default App;