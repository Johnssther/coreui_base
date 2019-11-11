import React, { Component } from 'react';
import WidgetO1 from '../Widgets/Widget02'
// Main Chart

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      data: 'a',
      prueba: 'Dashboard'
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  componentDidMount() {



  }
  render() {
    return (
      <div className="animated fadeIn">
        <WidgetO1
          header='$-'
          mainText='Gastos totales de este mes'
        />
      </div>
    );
  }

}

export default Dashboard;
