import React, { Component } from 'react';
import { xor } from 'lodash';
import logo from '../assets/logo.svg';
import '../assets/App.css';
import data from '../data/data.json';
import InteractiveFileExplorer from './InteractiveFileExplorer';

class App extends Component {
  state = {
    fileStructure: data,
    selectedNode: null,
    expandedNodes: [],
  };

  nodeSelectionHandler = (value) => {
    const { selectedNode } = this.state;
    this.setState({
      selectedNode: selectedNode === value ? null : value,
    });
  };

  folderActionHandler = (id) => {
    const { expandedNodes } = this.state;
    this.setState({
      expandedNodes: xor(expandedNodes, [id]),
    });
  };

  render() {
    const { fileStructure, selectedNode, expandedNodes } = this.state;
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <span>File Explorer Coding Challenge</span>
        </header>
        <div className="content-container">
          <InteractiveFileExplorer
            content={fileStructure}
            selectedNode={selectedNode}
            nodeSelectionHandler={this.nodeSelectionHandler}
            folderActionHandler={this.folderActionHandler}
            expandedNodes={expandedNodes}
          />
        </div>
      </div>
    );
  }
}

export default App;
