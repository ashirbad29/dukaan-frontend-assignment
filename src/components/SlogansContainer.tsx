import { useState } from 'react';

import { generateSlogans } from '../utils';
import Button from './Button';
import Paginate from './Paginate';
import SloganForm from './SloganForm';
import SloganItem from './SloganItem';

const PER_PAGE = 20;

const SlogansContainer = () => {
  const [data] = useState(() => generateSlogans());

  const getNextPage = (currPage: number) => {
    const end = currPage * PER_PAGE;
    const start = end - PER_PAGE;
    return data.slice(start, end);
  };

  const [slogan, setSlogan] = useState('something');
  const [slogans, setSlogans] = useState<Array<{ key: number; slogan: string }>>(() =>
    getNextPage(1)
  );

  return (
    <>
      <SloganForm
        onGenerate={(val) => {
          setSlogan(val);
        }}
      />
      <div className="mt-12">
        <div className="border-y border-black-extraLight py-14">
          <div className="flex flex-col justify-between gap-y-6 md:flex-row">
            <span className="text-xl text-black-dark">
              We have generated 1,023 slogans for “{slogan}”
            </span>
            <Button
              variant="normal"
              className="whitespace-nowrap rounded border-2 border-primary px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white">
              Download all
            </Button>
          </div>
          <section className="mt-9 grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2">
            {slogans.map((slogan) => (
              <SloganItem key={slogan.key} idx={slogan.key} slogan={slogan.slogan} />
            ))}
          </section>
        </div>
        <div className="mt-7">
          <Paginate
            pageCount={Math.ceil(data.length / PER_PAGE)}
            onPageChange={(page) => setSlogans(getNextPage(page.selected + 1))}
          />
        </div>
      </div>
    </>
  );
};

export default SlogansContainer;
