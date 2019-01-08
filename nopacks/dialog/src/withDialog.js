import React from 'react';
import Dialog from './BasicDialogInside';

function isNotAvailable(value) {
  return value === null || typeof value === 'undefined';
}

export default function withDialog(WrappedComponent) {
  class WithDialog extends React.Component {
    state = {
      isOpen: false,
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.dialogContent !== prevState.dialogContent) {
        return {
          dialogContent: nextProps.dialogContent,
          isOpen: !isNotAvailable(nextProps.dialogContent),
        };
      }
      return null;
    }

    componentDidMount() {
      this.setState({
        dialogContent: this.props.dialogContent,
        isOpen: !isNotAvailable(this.props.dialogContent),
      });
    }

    render() {
      return (
        <div style={{ position: 'relative' }}>
          <WrappedComponent {...this.props}/>
          {this.state.isOpen
            ? <Dialog onClose={this.props.closeDialog}>
              {this.props.dialogContent}
            </Dialog>
            : null}
        </div>
      );
    }
  }
  WithDialog.displayName = 'withDialog';
  return WithDialog;
}
