import { ChangeEvent, useState } from 'react';

type Inputs = {
  name: string;
  price: number;
  description: string;
  image?: File;
};

type InputTypes = {
  name: string;
  type: string;
  value: string | number | File;
};

function useForm(initial: Inputs) {
  const [inputs, setInputs] = useState<Inputs>(initial);

  function handleChange(
    event: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>
  ) {
    let { name, type, value }: InputTypes = event.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      value = event.target.files[0];
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
    ) as unknown;

    setInputs(blankState as Inputs);
  }

  return { inputs, handleChange, resetForm, clearForm };
}

export default useForm;
