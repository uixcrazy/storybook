import React, { Component, Fragment } from 'react'; // eslint-disable-line
import PropTypes from 'prop-types';
import withDialog from '../src/withDialog';

const DialogContent = ({ closeDialog }) => (
  <div style={{
    width: '400px',
    padding: '32px',
    outline: 'none',
    boxShadow:
      '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)',
    backgroundColor: '#fff',
  }}>
    <button onClick={() => { closeDialog(); }}>
      close ...
    </button>
    DialogContent here!!!
  </div>
);
const EE = ({ closeDialog, openDialog }) => (
  <div>
    <button
      onClick={() => {
        openDialog(<DialogContent closeDialog={closeDialog} />);
      }}
    >
      open new Dialog...
    </button>
    <button onClick={() => { closeDialog(); }}>
      close ...
    </button>
    EEEEEEEEEEEE EEEEEE
  </div>
);

const DD = ({ closeDialog, openDialog }) => (<div>
  ngoc ngoc
  <EE closeDialog={closeDialog} openDialog={openDialog}/>
</div>);

class Example extends Component {
  static propTypes = {
    classes: PropTypes.object,
  }

  static defaultProps = {}

  state = {
    dialogContent: null,
  };

  openDialog = (dialogContent) => {
    this.setState({ dialogContent });
  };

  closeDialog = () => {
    this.setState({ dialogContent: null });
  }

  render() {
    const Cpp = withDialog(DD);
    return (
      <div style={{
        padding: 30,
      }}>
        <p>noi dung bất kỳ</p>
        <button
          onClick={() => {
            this.closeDialog();
          }}
        >
         close dialog below ...
        </button>
        <Cpp
          dialogContent={this.state.dialogContent}
          openDialog={this.openDialog}
          closeDialog={this.closeDialog}/>
      </div>
    );
  }
}

export default Example;


// return (
//   <div className={classes.wrapper}
//     ref={(node) => {
//       this.rootRef = node;
//     }}>
//     <DD
//       dialogRoot={this.rootRef}
//       isOpen={this.state.dialogIsOpen}
//     />
//   </div>
// );
