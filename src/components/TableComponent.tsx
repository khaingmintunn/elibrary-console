import {
  Box,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Table,
  TablePagination,
} from '@material-ui/core';
import { useState } from 'react';
import type { ChangeEvent, MouseEvent } from 'react';
import StyledTableCell from './StyledTableCell';
import StyledTableSortLabel from './StyledTableSortLabel';

interface TableProps {
  columns: any[];
  tablebody: any[];
  isSorted: boolean;
  sortedColumn?: string;
  sortValue?: string;
  isPagination: boolean;
}

const TableComponent = (props: TableProps) => {
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(25);
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const { columns, tablebody, isSorted, sortedColumn, sortValue, isPagination } = props;
  let paginatedOrgList: Array<[]> = [];

  const handleSort = (): void => {
    setOrder((prevOrder) => {
      if (prevOrder === 'asc') {
        return 'desc';
      }
      return 'asc';
    });
  };
  const handlePageChange = (event: MouseEvent<HTMLButtonElement> | null, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value, 10));
  };

  const getSortedOrgList = (
    lst: any[],
    orders: 'asc' | 'desc',
    sortVal: string
  ): any[] => lst
    .sort((a, b) => {
      if (orders === 'asc') {
        return a[sortVal] < b[sortVal] ? -1 : 1;
      }

      return a[sortVal] > b[sortVal] ? -1 : 1;
    });

  const applyPagination = (
    customers: any[],
    pages: number,
    limits: number
  ): any[] => customers
    .slice(pages * limits, pages * limits + limits);

  if (isPagination) {
    const sortedOrgList = isSorted ? getSortedOrgList(tablebody, order, sortValue) : tablebody;
    paginatedOrgList = applyPagination(sortedOrgList, page, limit);
  } else {
    paginatedOrgList = isSorted ? getSortedOrgList(tablebody, order, sortValue) : tablebody;
  }
  return (
    <>
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell />
              {columns.map((col) => {
                let cell;
                if (!isSorted || !sortValue || sortedColumn !== col.colVal) {
                  cell = <StyledTableCell key={col.colName}>{col.colName}</StyledTableCell>;
                } else {
                  cell = (
                    <StyledTableCell
                      key={col.colName}
                      sortDirection={order}
                    >
                      <StyledTableSortLabel
                        active
                        direction={order}
                        onClick={handleSort}
                      >
                        {col.colName}
                      </StyledTableSortLabel>
                    </StyledTableCell>
                  );
                }
                return (
                  cell
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedOrgList.map((lst, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <TableRow key={i}>
                <TableCell>{(page * limit) + (i + 1)}</TableCell>
                {columns.map((keys) => (
                  <TableCell key={keys.colVal}>{lst[keys.colVal]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      {isPagination
        && (
          <TablePagination
            component="div"
            labelRowsPerPage="表示する行数"
            count={tablebody.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[25, 50, 100]}
          />
        )}
    </>
  );
};

export default TableComponent;
