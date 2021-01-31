import { useLazyQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { GET_CHARACTERS } from '../../../api/queries';
import { RICK_AND_MORTY_CHARACTERS_LIST } from '../../../constants/paths';

import './form.css';

const Form = (props) => {
  const history = useHistory();

  const [getCharacters, { loading, error, data }] = useLazyQuery(
    GET_CHARACTERS,
    {
      onCompleted: (data) => {
        props.onSubmit(data);
        history.push(RICK_AND_MORTY_CHARACTERS_LIST);
      },
    },
  );
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    getCharacters({ variables: { filter: data } });
  };

  console.log('data characters', data);

  return (
    <section className="form-module">
      <form onSubmit={handleSubmit(onSubmit)} className="form-module__form">
        <label className="filter-input__label" htmlFor="name">
          name
          <input
            className="filter-input"
            disabled={loading}
            id="name"
            name="name"
            type="text"
            ref={register}
          />
        </label>

        <fieldset className="filter-input__fieldset">
          <label htmlFor="alive">
            <input type="radio" id="alive" name="status" value="alive" />
            alive
          </label>

          <label htmlFor="dead">
            <input type="radio" id="dead" name="status" value="dead" />
            dead
          </label>
          <label htmlFor="unknown">
            <input type="radio" id="unknown" name="status" value="unknown" />
            unknown
          </label>
        </fieldset>

        <label className="filter-input__label" htmlFor="species">
          species
          <input
            className="filter-input"
            disabled={loading}
            id="species"
            name="species"
            type="text"
            ref={register}
          />
        </label>

        <label className="filter-input__label" htmlFor="type">
          type
          <input
            className="filter-input"
            disabled={loading}
            id="type"
            name="type"
            type="text"
            ref={register}
          />
        </label>

        <label className="filter-input__label" htmlFor="gender">
          gender
          <select disabled={loading} name="gender" id="gender" ref={register}>
            <option value="Male">male</option>
            <option value="Female">female</option>
            <option value="unknown">unknown</option>
            <option value="genderless">genderless</option>
          </select>
        </label>

        <button type="submit" disabled={loading || error}>
          Submit
        </button>
        {JSON.stringify(error)}
      </form>
    </section>
  );
};

export default Form;
