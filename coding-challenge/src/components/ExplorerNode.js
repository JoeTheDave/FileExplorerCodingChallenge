import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import '../assets/ExplorerNode.css';
import SpriteIcon from './SpriteIcon';

class ExplorerNode extends Component {
  clickHandler = () => {
    const { nodeSelectionHandler, id } = this.props;
    nodeSelectionHandler(id);
  };

  folderActionHandler = (e) => {
    e.stopPropagation();
    const { folderActionHandler, id } = this.props;
    folderActionHandler(id);
  };

  getActionIcon() {
    const { item, id, selectedNode, expandedNodes } = this.props;
    const isFolder = item.type === 'folder';
    const isExpanded = expandedNodes.includes(id);
    const isSelected = id === selectedNode;

    if (isFolder) {
      return (
        <SpriteIcon
          icon={`${isExpanded ? 'collapse' : 'expand'}-${
            isSelected ? 'light' : 'dark'
          }`}
        />
      );
    }
    return <SpriteIcon icon="blank" />;
  }

  getNodeTypeIcon() {
    const { item } = this.props;
    const isFolder = item.type === 'folder';

    if (isFolder) {
      if (item.private) {
        return <SpriteIcon icon="private-folder" />;
      }
      return <SpriteIcon icon="folder" />;
    }
    return <SpriteIcon icon="file" />;
  }

  render() {
    const {
      item,
      id,
      selectedNode,
      nodeSelectionHandler,
      folderActionHandler,
      expandedNodes,
    } = this.props;
    return (
      <Fragment>
        <div
          className={cx('node', { selected: id === selectedNode })}
          onClick={this.clickHandler}
          style={{ paddingLeft: `${id.split('.').length * 20 + 20}px` }}
        >
          <div className="action-icon" onClick={this.folderActionHandler}>
            {this.getActionIcon()}
          </div>
          <div className="node-icon-spacer">{this.getNodeTypeIcon()}</div>
          <div>{item.name}</div>
        </div>
        {item.type === 'folder' &&
          expandedNodes.includes(id) &&
          item.children &&
          item.children.length &&
          item.children.map((subItem, index) => {
            const subId = `${id}.${index}`;
            return (
              <ExplorerNode
                key={subId}
                item={subItem}
                id={subId}
                selectedNode={selectedNode}
                nodeSelectionHandler={nodeSelectionHandler}
                folderActionHandler={folderActionHandler}
                expandedNodes={expandedNodes}
              />
            );
          })}
      </Fragment>
    );
  }
}

ExplorerNode.propTypes = {
  item: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  selectedNode: PropTypes.string,
  nodeSelectionHandler: PropTypes.func.isRequired,
  folderActionHandler: PropTypes.func.isRequired,
  expandedNodes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ExplorerNode.defaultProps = {
  selectedNode: null,
};

export default ExplorerNode;
