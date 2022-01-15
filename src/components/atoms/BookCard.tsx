import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Book } from 'src/types/book';
import ReactStars from 'react-rating-stars-component';
import Label from '../Label';

const useStyles = makeStyles((theme: Theme) => ({
  cardHeader: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  cardContent: {
    width: '95%',
  },
  headerText: {
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
    overflow: 'hidden',
  },
  description: {
    'text-overflow': 'ellipsis',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 10,
    '-webkit-box-orient': 'vertical',
    marginTop: '8px',
    height: '75px'
  },
  title: {
    color: '#f89c00',
    fontWeight: 'bold',
    fontSize: 12
  },
  link: {
    display: 'block',
    width: '100%',
    marginTop: '20px',
    marginBottom: '10px',
    textAlign: 'right',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  actionCard: {
    width: '100%',
    display: 'block',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardButton: {
    padding: '5px 10px',
    marginBottom: '30px'
  }
}));

const BookCard = (props: { items: Array<Book> }) => {
  const classes = useStyles();
  const { items } = props;

  const ratingChanged = async (rate: number) => {
    console.log(rate);
  };

  const read = async (item: any) => {
    // eslint-disable-next-line no-alert
    alert(item.title);
  };

  return (
    <Grid
      container
      spacing={3}
    >
      {items.map((item: any) => (
        <Grid
          key={item.book_id}
          item
          xl={3}
          xs={6}
          sm={3}
        >
          <Card variant="outlined">
            <CardHeader
              classes={{ title: classes.headerText, root: classes.cardHeader, content: classes.cardContent }}
              title={item.title}
            />
            <CardContent>
              <Typography
                className={classes.title}
              >
                {item.author}
              </Typography>
              <Box
                className={classes.description}
              >
                {item.description}
              </Box>
              <Grid
                container
                justifyContent="space-between"
                sx={{
                  mt: 2
                }}
              >
                <Grid item>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ff9800"
                    value={3}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    align="center"
                    color="success.main"
                    variant="subtitle2"
                  >
                    <Label color={item.rate > 4 ? 'success' : 'warning'}>
                      {item.rate ? item.rate : 'No review'}
                    </Label>
                  </Typography>
                </Grid>
              </Grid>
              <Box
                sx={{
                  mt: 2,
                  mb: 2
                }}
              >
                <Typography
                  align="center"
                  color="success.main"
                  variant="subtitle2"
                >
                  <Label color="primary">
                    {item.rated_users > 0 ? `${item.rated_users} reviews` : 'No review'}
                  </Label>
                </Typography>
              </Box>
            </CardContent>
            <CardActions className={classes.actionCard}>
              <Button
                className={classes.cardButton}
                variant="outlined"
                color="primary"
                onClick={() => read(item)}
              >
                Read
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BookCard;
