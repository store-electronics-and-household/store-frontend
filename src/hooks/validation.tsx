import { useState, useCallback, type ChangeEvent } from 'react';

type FormValues = Record<string, string>;

type FormErrors = Record<string, string>;

interface FormValidation {
  values: FormValues;
  errors: FormErrors;
  isValid: boolean;
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  resetForm: (
    newValues?: FormValues,
    newErrors?: FormErrors,
    newIsValid?: boolean
  ) => void;
  setValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

export const useFormWithValidation = (): FormValidation => {
  const [values, setValues] = useState<FormValues>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form')?.checkValidity() ?? false);
  };

  const resetForm = useCallback(
    (
      newValues: FormValues = {},
      newErrors: FormErrors = {},
      newIsValid: boolean = false
    ): void => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    []
  );

  return { values, handleChange, resetForm, errors, isValid, setValues };
};
