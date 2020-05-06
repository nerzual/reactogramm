import React, { Component} from 'react';

import './App.css';

import Header from './components/Header';
import FilterList from './components/FilterList';
import Filter from './components/Filter';
import Settings from './components/Settings';
import Range from './components/Range';
import Image from './components/Image';


class App extends Component{
  state={
    image:"https://pbs.twimg.com/media/EGQd4mdXoAEeTaE.jpg",
    selectedFilter: "",
    settings:{
      contrast: 100,
      hue: 0,
      brightness: 100,
      saturate: 100,
      sepia: 0
    }
  }
  handleChange = event =>{
    const setting = event.target.id;
    const value = event.target.value;
    const settings = {...this.state.settings, [setting]: value};
    this.setState({selectedFilter: '',settings});
  }

  updateSettings = (selectedFilter, settings) => {
    this.setState({ selectedFilter, settings });
  }

  render(){
    const {image, selectedFilter, settings} = this.state;
    return(
      <div className="app">
        <Header title="REACTOGRAM"/>
        <section className="content">
          <Settings settings={settings} handleChange={this.handleChange} />
        <main className="main">
          <Filter settings={settings}> 
           <Image src={image} />
          </Filter>
          <FilterList 
            image={image}
            settings={settings}
            selectedFilter={selectedFilter}
            updateSettings = {this.updateSettings} />
        </main> 
                
        </section>
      </div>
    );
  }
}
export default App;
