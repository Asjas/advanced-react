import { ChangeEvent, useState } from 'react';

type Inputs = {
  name?: string;
  price?: number;
  description?: string;
};

type InputTypes = {
  name: string;
  type: string;
  value: string | number;
};

function useForm(initial: Inputs = {}) {
  const [inputs, setInputs] = useState<Inputs>(initial);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    let { name, type, value }: InputTypes = event.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      value[0] = event.target.files;
      console.log(typeof value);
      console.log(typeof value[0]);
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );

    setInputs(blankState);
  }

  return { inputs, handleChange, resetForm, clearForm };
}

export default useForm;
