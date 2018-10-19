import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './FilterPanel.style';

// const initialState = (data, selected) => {
//   if (selected && selected.length > 0) {
//     return selected.reduce(
//       (accumulator, item) => ({ ...accumulator, [item]: true }),
//       {}
//     );
//   }
//   return data.reduce(
//     (accumulator, target) => ({ ...accumulator, [target.value]: true }),
//     {}
//   );
// };

// class FilterPanelMulti extends Component {
//   state = initialState(this.props.data, this.props.selected);

//   handleChange = name => (event) => {
//     this.setState({
//       [name]: event.target.checked,
//     }, () => {
//       const selected = Object.keys(this.state).reduce(
//         (accumulator, target) => {
//           if (this.state[target]) {
//             accumulator.push(target);
//           }
//           return accumulator;
//         },
//         []
//       );
//       this.props.updateDataFilter(this.props.keyName, selected);
//     });
//   };
const FilterPanelMulti = ({
  classes,
  data,
  heading,
  selected,
  widthItem,
  defaultExpanded,
  isAlwaysExpanded,
  keyName,
  updateDataFilter,
}) => {
  let UI = null;
  let summary = 'Tất cả';
  const summaryArr = [];
  if (data && data.length > 0) {
    let _data = null; // eslint-disable-line
    if (selected && selected.length > 0) {
      _data = data.map((currentValue) => {
        const ss = selected.filter(value => (value === currentValue.value));
        currentValue.checked = ss.length > 0; // eslint-disable-line
        summaryArr.push(currentValue.label);
        return currentValue;
      });
      summary = summaryArr.join(', ');
    } else {
      _data = data.map((currentValue) => {
        currentValue.checked = true; // eslint-disable-line
        return currentValue;
      });
    }
    UI = (
      <ExpansionPanel
        defaultExpanded={defaultExpanded}
        expanded={isAlwaysExpanded || null}
        classes={{
          root: classes.expansionPanel,
          expanded: classes.expansionPanelExpanded,
        }}
      >
        <ExpansionPanelSummary
          classes={{
            root: classes.expansionPanelSummary,
            expandIcon: classes.expandMoreIcon,
            expanded: classes.expandedSummary,
            content: classes.contentSummary,
          }}
          expandIcon={isAlwaysExpanded ? null : <ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>{heading}</Typography>
          <Typography className={classes.selected}>{summary}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionPanelDetails}>
          <FormGroup row className={classes.formGroup}>
            {
              _data.map(item => (
                <FormControlLabel
                  key={item.value}
                  control={
                    <Checkbox
                      checked={item.checked}
                      onChange={(event) => {
                        const ss = _data.reduce(
                          (accumulator, i) => {
                            const checked = (i.value === item.value) ? event.target.checked : i.checked;
                            if (checked) {
                              accumulator.push(i.value);
                            }
                            return accumulator;
                          },
                          []
                        );
                        updateDataFilter(keyName, ss);
                      }}
                      value={item.value}
                      disabled={selected && selected.length === 1 && item.value === selected[0]}
                      // color="primary"
                      classes={{
                        root: classes.checkboxRadio,
                        disabled: classes.checkboxRadioDisabled,
                      // checked: classes.checked,
                      }}
                    />
                  }
                  classes={{
                    root: classes.formControlLabel,
                  }}
                  style={{ width: widthItem || 'auto' }}
                  label={item.label}
                />
              ))
            }
          </FormGroup>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
  return UI;
};

FilterPanelMulti.defaultProps = {
  defaultExpanded: true,
  isAlwaysExpanded: false,
  heading: 'title here!!!',
  widthItem: '50%',
  data: [],
};

FilterPanelMulti.propTypes = {
  classes: PropTypes.object.isRequired,
  heading: PropTypes.string,
  selected: PropTypes.array,
  widthItem: PropTypes.string,
  defaultExpanded: PropTypes.bool,
  isAlwaysExpanded: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.object),
  // data: PropTypes.arrayOf(PropTypes.shape({
  //   someValue: PropTypes.number
  // }))
  keyName: PropTypes.string,
  updateDataFilter: PropTypes.func,
};

export default injectSheet(styles)(FilterPanelMulti);
