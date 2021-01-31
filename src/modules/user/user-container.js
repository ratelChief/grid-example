import { useQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { GET_USER_INFO, userInfoVar } from '../../api/queries';

const UserContainer = () => {
  const { data } = useQuery(GET_USER_INFO);

  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    userInfoVar(data);
  };

  return (
    <>
      <section>
        <h2>User form</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">
            <p>Name</p>
            <input ref={register} type="text" name="name" id="name" />
          </label>
          <label htmlFor="surname">
            <p>Surname</p>
            <input ref={register} type="text" id="surname" name="surname" />
          </label>
          <label htmlFor="gender">
            <p>Gender</p>
            <input ref={register} type="text" id="gender" name="gender" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>

      <section>
        <h2>User Info</h2>

        {data && (
          <section>
            <h3>Local Cache:</h3>

            <p>
              Name <b>{data.user.name}</b>
            </p>
            <p>
              Surname <b>{data.user.surname}</b>
            </p>
            <p>
              Gender <b>{data.user.gender}</b>
            </p>
          </section>
        )}
      </section>
    </>
  );
};

export default UserContainer;
