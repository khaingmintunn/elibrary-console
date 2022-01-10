import { TableCell, Theme } from '@material-ui/core';
import { createStyles, withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme: Theme) => createStyles({
  head: {
    backgroundColor: '#3333ff',
    color: theme.palette.common.white,
  }
}))(TableCell);

export default StyledTableCell;
