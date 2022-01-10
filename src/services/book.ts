import axios from 'axios';
import { Book } from 'src/types/book';

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
