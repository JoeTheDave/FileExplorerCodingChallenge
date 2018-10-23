import React from 'react';
import PropTypes from 'prop-types';
import '../assets/InteractiveFileExplorer.css';
import Modal from './Modal';
import ExplorerNode from './ExplorerNode';

const InteractiveFileExplorer = ({
  content,
  content: { children },
  selectedNode,
  nodeSelectionHandler,
  folderActionHandler,
  expandedNodes,
}) => {
  console.log(content);
  return (
    <Modal title="Title">
      <div className="explorer">
        {children.map((item, index) => {
          const id = index;
          return (
            <ExplorerNode
              key={id}
              item={item}
              id={`${id}`}
              selectedNode={selectedNode}
              nodeSelectionHandler={nodeSelectionHandler}
              folderActionHandler={folderActionHandler}
              expandedNodes={expandedNodes}
            />
          );
        })}
      </div>
    </Modal>
  );
};

InteractiveFileExplorer.propTypes = {
  content: PropTypes.object.isRequired,
  selectedNode: PropTypes.string,
  nodeSelectionHandler: PropTypes.func.isRequired,
  folderActionHandler: PropTypes.func.isRequired,
  expandedNodes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

InteractiveFileExplorer.defaultProps = {
  selectedNode: null,
};

export default InteractiveFileExplorer;
