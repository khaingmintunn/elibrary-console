import { TableSortLabel } from '@material-ui/core';
import { createStyles, withStyles } from '@material-ui/core/styles';

const StyledTableSortLabel = withStyles(() => createStyles({
  root: {
    color: 'white',
    '&:hover': {
      color: 'white',
    },
    '&$active': {
      color: 'white',
    },
  },
  active: {},
  icon: {
    color: 'inherit !important'
  },
}))(TableSortLabel);

export default StyledTableSortLabel;
