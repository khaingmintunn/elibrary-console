import axios from 'axios';
import { user } from 'src/static/user';
import { Book } from 'src/types/book';
import { Rate } from 'src/types/rate';

export const getBooks = async () => {
  const books: Book[] = await new Promise((resolve, reject) => {
    axios.get(`${process.env.REACT_APP_ENDPOINT}/${process.env.REACT_APP_VERSION}/books`)
      .then((response) => {
        resolve(response.data.books);
      })
      .catch((error) => {
        reject(error.response.message);
      });
  });

  return books;
};

export const getBook = async (book_id: string) => {
  const book: Book = await new Promise((resolve, reject) => {
    axios.get(`${process.env.REACT_APP_ENDPOINT}/${process.env.REACT_APP_VERSION}/book/${book_id}`)
      .then((response) => {
        resolve(response.data.book);
      })
      .catch((error) => {
        reject(error.response.message);
      });
  });

  return book;
};

export const getRates = async () => {
  const rates: Rate[] = await new Promise((resolve, reject) => {
    axios.get(`${process.env.REACT_APP_ENDPOINT}/${process.env.REACT_APP_VERSION}/rates`, { headers: { Authorization: user.token } })
      .then((response) => {
        resolve(response.data.rates);
      })
      .catch((error) => {
        reject(error.response.message);
      });
  });

  return rates;
};

export const createRate = async (data) => {
  const rates: Rate[] = await new Promise((resolve, reject) => {
    axios.post(`${process.env.REACT_APP_ENDPOINT}/${process.env.REACT_APP_VERSION}/rate`,
      { rate: data.rate, book_id: data.book_id },
      { headers: { Authorization: user.token } })
      .then((response) => {
        resolve(response.data.rates);
      })
      .catch((error) => {
        reject(error.response.message);
      });
  });

  return rates;
};
