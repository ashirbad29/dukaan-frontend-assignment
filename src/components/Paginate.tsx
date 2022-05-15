import ReactPaginate, { ReactPaginateProps } from 'react-paginate';

import { ChevronLeftIcon, ChevronRightIcon } from '../icons';

const Paginate = (props: ReactPaginateProps) => {
  return (
    <ReactPaginate
      previousLabel={<PaginationBtn which="prev" />}
      nextLabel={<PaginationBtn which="next" />}
      breakLabel="..."
      breakLinkClassName="text-2xl text-primary"
      pageLinkClassName="px-3 py-1 cursor-pointer inline-block"
      activeClassName="bg-primary text-white rounded-full"
      nextClassName="inline-block ml-auto"
      nextLinkClassName="inline-block flex items-center"
      previousClassName="inline-block mr-auto"
      previousLinkClassName="inline-block flex items-center py-1 px-1"
      pageClassName="inline-block"
      className="flex w-full items-center gap-2 text-primary"
      pageRangeDisplayed={1}
      marginPagesDisplayed={2}
      disabledClassName="opacity-0 !cursor-not-allowed"
      {...props}
    />
  );
};

export const PaginationBtn = ({ which }: { which: 'prev' | 'next' }) => {
  return (
    <>
      {which === 'prev' ? (
        <button className="flex items-center">
          <ChevronLeftIcon className="h-6 w-6" />
          Prev
        </button>
      ) : (
        <button className="flex items-center">
          Next
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default Paginate;
