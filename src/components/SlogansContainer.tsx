import { useState } from 'react';

import Button from './Button';
import SloganForm from './SloganForm';

const SlogansContainer = () => {
  const [slogan, setSlogan] = useState('something');

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
              className="rounded border-2 border-primary px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white">
              Download all
            </Button>
          </div>
        </div>
        <section className="mt-9 grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2">
          {[...new Array(17)].map((_, idx) => (
            <div
              className="flex min-h-[50px] items-center rounded bg-black-lighter py-2 px-4"
              key={idx}>
              <span className="text-black-dark">
                There is no Sore it will Not Heal, No cool it will not Subdue.
              </span>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default SlogansContainer;
