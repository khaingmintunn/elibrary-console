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
import { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Book } from 'src/types/book';

const useStyles = makeStyles((theme: Theme) => ({
  cardHeader: {
    backgroundColor: '#773544',
    color: theme.palette.common.white,
  },
  headerText: {
    width: '95%',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
    overflow: 'hidden',
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
    marginTop: '1rem'
  },
  cardButton: {
    padding: '10px 30px',
    marginBottom: '30px'
  }
}));

const BookCard = (props: { items: Array<Book> }) => {
  const classes = useStyles();
  const { items } = props;
  const [expands, setExpands] = useState<any[]>([]);
  useEffect(() => {
    const exec = async () => {
      const ele = [];
      items.map(() => (
        ele.push(false)
      ));
      setExpands(ele);
    };
    exec();
  }, []);

  return (
    <Grid
      container
      spacing={3}
    >
      {items.map((item: any, i) => (
        <Grid
          key={item.book_id}
          item
          xl={3}
          xs={6}
          sm={3}
        >
          <Card variant="outlined">
            <CardHeader
              classes={{ title: classes.headerText, root: classes.cardHeader }}
              title={item.title}
            />
            <CardContent>
              <Typography
                className={classes.title}
              >
                {item.author}
              </Typography>
              <Box
                sx={{
                  height: '60px'
                }}
              >
                {!expands[i] ? `${item.description.slice(0, 50)}` : item.description}
              </Box>
            </CardContent>
            <CardActions className={classes.actionCard}>
              <Button
                className={classes.cardButton}
                variant="outlined"
                color="primary"
              // onClick={() => isModalOpened(i)}
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
