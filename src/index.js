import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

//Funtion based yaptik basta ama callbackler girince isin icine bunu artik kullnamaz oluyoruz.
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div>Latitude:</div>;
// };

//Sonra class based kismina gectik.class based components
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { latitude: null, errorMessage: "" };
//     window.navigator.geolocation.getCurrentPosition(
//       (position) => {
//         console.log(position);
//         console.log({ latitude: position.coords });
//         //we called set state
//         this.setState({ latitude: position.coords.latitude });
//         //we did not
//         //this.state.latitude=position.coord.latidute
//         //yukaridaki satiri sadece constructorda initialize yaparken yaptik
//       },
//       (err) => {
//         this.setState({ errorMessage: err.message });
//       }
//     );
//   }

//6.aBSCHNITTE lifecycle metodlari ögrenince su sekilde degistirdik:
//Constructor kalkti, sadece state kaldi.Ve didMount()metodu
class App extends React.Component {
  state = { latitude: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  //en sonunda helper function olarak ana logiki contentin icine koyduk
  //böylelikle ana fonksiyonumuza birsey eklenmek istediginde renderda o eklenebiliyor
  renderContent() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error:{this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }
    return <Spinner message="Please accept location request" />;
  }

  //React want us to define render method
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
