import { Box, Container, Typography } from '@material-ui/core';
import { FC, useEffect, useState } from 'react';
import BookCard from 'src/components/atoms/BookCard';
import Loader from 'src/components/atoms/Loader';
import { getBooks } from 'src/services/book';
import { Book } from 'src/types/book';

const Books: FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoaing] = useState<boolean>(true);

  const fetchBooks = async () => {
    const results: Book[] = await getBooks();
    setIsLoaing(false);
    setBooks(results);
  };

  useEffect(() => {
    const exec = async () => {
      await fetchBooks();
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
                    items={books}
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
