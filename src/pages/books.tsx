import { Box, Container, Typography } from '@material-ui/core';
import { FC, useEffect, useState } from 'react';
import BookCard from 'src/components/atoms/BookCard';
import Loader from 'src/components/atoms/Loader';
import { createRate, getBook, getBooks, getRates } from 'src/services/book';
import { Book } from 'src/types/book';
import { Rate } from 'src/types/rate';

const Books: FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [rates, setRates] = useState<Rate[]>([]);
  const [isLoading, setIsLoaing] = useState<boolean>(true);

  const fetchBooks = async () => {
    const results: Book[] = await getBooks();
    setBooks(results);
  };

  const fetchRates = async () => {
    const results: Rate[] = await getRates();
    setRates(results);
  };

  const giveRate = async (rate: number, book: Book) => {
    await createRate({ rate, book_id: book.book_id });
    const bookValue = await getBook(book.book_id);
    const bookIndex = books.findIndex((i) => i.book_id === book.book_id);
    books[bookIndex] = bookValue;
    setBooks([...books]);
  };

  useEffect(() => {
    const exec = async () => {
      await fetchBooks();
      await fetchRates();
      setIsLoaing(false);
    };
    exec();
  }, []);

  return (
    <Container>
      <Box>
        {isLoading ? (
          <Loader />
        ) : (
          <Box
            sx={{
              mt: 3,
              mb: 3
            }}
          >
            {books.length > 0
              ? (
                <>
                  <BookCard
                    books={books}
                    rates={rates}
                    ratingChanged={(rate, book) => giveRate(rate, book)}
                  />
                </>
              )
              : (
                <>
                  <Typography>
                    No Data
                  </Typography>
                </>
              )}
          </Box>
        )}

      </Box>
    </Container>
  );
};

export default Books;
