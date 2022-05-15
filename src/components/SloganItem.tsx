import { useState } from 'react';

import { copyTextToClipboard } from '../utils';
import Tooltip from './Tooltip';

const SloganItem = ({ slogan, idx: key }: { slogan: string; idx: number }) => {
  const [sloganText, setSloganText] = useState('Click to copy');

  return (
    <Tooltip
      direction={(key + 1) % 2 === 1 ? 'left' : 'right'}
      onLeave={() => setSloganText('Click to copy')}
      text={sloganText}>
      <div
        className="flex min-h-[68px] w-full items-center rounded bg-black-lighter py-2 px-4"
        onClick={() => {
          setSloganText('Copied!');
          copyTextToClipboard(slogan);
        }}>
        <span className="text-black-dark">{slogan}</span>
      </div>
    </Tooltip>
  );
};

export default SloganItem;
