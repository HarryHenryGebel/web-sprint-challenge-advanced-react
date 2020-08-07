import { useState } from 'react';

export default function useForm(initialValue){
  const [values, setValues] = useState(initialValue),
        [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function handleChanges(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();

    // Make sure all the fields are filled in
    setShowSuccessMessage(values.firstName &&
                          values.lastName &&
                          values.address &&
                          values.city &&
                          values.zip);
  };

  return [values, showSuccessMessage, handleChanges, handleSubmit];
}
