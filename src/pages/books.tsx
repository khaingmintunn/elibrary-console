import { Box, Card, Container, Typography } from '@material-ui/core';
import { FC, useEffect, useState } from 'react';
import { getBooks } from 'src/services/book';
import { Book } from 'src/types/book';

const Books: FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    const results: Book[] = await getBooks();
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
        {books.map((book) => (
          <Card
            key={book.book_id}
            sx={{
              p: 4,
              m: 2
            }}
          >
            <Typography>
              {book.title}
            </Typography>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Books;
