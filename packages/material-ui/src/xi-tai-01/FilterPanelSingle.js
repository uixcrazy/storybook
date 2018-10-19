import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import styles from './FilterPanel.style';

const FilterPanelSingle = ({
  classes,
  data,
  heading,
  selected,
  widthItem,
  defaultExpanded,
  isAlwaysExpanded,
  keyName,
  updateDataFilter,
}) => (
  data && data.length > 0 ? (
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
        <Typography className={classes.selected}>{selected}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.expansionPanelDetails}>
        <RadioGroup
          aria-label="singleSelection"
          name="singleSelection"
          className={classes.radioGroup}
          value={selected}
          onChange={event => updateDataFilter(keyName, event.target.value)}
        >
          {
            data.map(item => (
              <FormControlLabel
                key={item.value}
                value={item.value}
                control={<Radio className={classes.checkboxRadio}/>}
                label={item.label}
                style={{ width: widthItem || 'auto' }}
                classes={{
                  root: classes.formControlLabel,
                }}
              />
            ))
          }
        </RadioGroup>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  ) : null
);

FilterPanelSingle.defaultProps = {
  defaultExpanded: true,
  isAlwaysExpanded: false,
  heading: 'title here!!!',
  data: [],
};

FilterPanelSingle.propTypes = {
  classes: PropTypes.object.isRequired,
  heading: PropTypes.string,
  selected: PropTypes.string,
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

export default injectSheet(styles)(FilterPanelSingle);
