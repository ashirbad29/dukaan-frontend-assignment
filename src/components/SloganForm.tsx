import { useState } from 'react';

import Button from './Button';
import Input from './Input';

type PropTypes = {
  onGenerate: (_slogan: string) => void;
};

const SloganForm = ({ onGenerate }: PropTypes) => {
  const [slogan, setSlogan] = useState('');

  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        onGenerate(slogan);
      }}>
      <Input
        value={slogan}
        autoComplete="off"
        placeholder="Enter something"
        label="Word for your slogan"
        id="slogan-input"
        wrapperClassName="max-w-xs mb-12"
        onValueChange={(val) => setSlogan(val)}
        showClearIcon={!!slogan}
        onInputClear={() => setSlogan('')}
      />

      <Button variant="primary" type="submit" disabled={!slogan}>
        Generate Slogans
      </Button>
    </form>
  );
};

export default SloganForm;
