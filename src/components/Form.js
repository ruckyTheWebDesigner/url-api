import React, { useEffect, useState } from "react";

function Form({ onSubmit, error }) {
  const [resolution, setResolution] = useState(window.innerWidth);

  // useEffect runs once when the component is mounted and again when the window is resized

  useEffect(() => {
    window.addEventListener("resize", (event) => {
      setResolution(event.target.innerWidth);
    });
  }, []);

  // shortlink form inputs

  return (
    <div className='form'>
      <form
        className={resolution < 768 ? "form_mobile" : "form_desktop"}
        onSubmit={onSubmit}>
        <div>
          <input
            type='text'
            id='shortenlink'
            placeholder='Shorten a link here..'
            name='text'
            autoComplete='off'
            className={error ? "form_input_error" : "form_input"}
          />
          {error && <p className='error'>{error}</p>}
        </div>
        <button
          className={error ? "form_btn_error" : "btn_shortenlink"}
          type='submit'>
          Shorten Link
        </button>
      </form>
    </div>
  );
}

export default Form;
