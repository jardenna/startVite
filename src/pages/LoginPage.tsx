import { FC } from 'react';
import {
  Form,
  useActionData,
  useLocation,
  useNavigation,
} from 'react-router-dom';

const LoginPage: FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get('from') || '/';

  const navigation = useNavigation();
  const isLoggingIn = navigation.formData?.get('username') != null;

  const actionData = useActionData() as { error: string } | undefined;

  return (
    <div>
      <Form method="post" replace>
        <input type="hidden" name="redirectTo" value={from} />
        <label htmlFor="username">
          Username: <input name="username" id="username" />
        </label>
        <button type="submit" disabled={isLoggingIn}>
          {isLoggingIn ? 'Logging in...' : 'Login'}
        </button>
        {actionData && actionData.error ? (
          <p
            style={{
              color: 'red',
            }}
          >
            {actionData.error}
          </p>
        ) : null}
      </Form>
    </div>
  );
};
export default LoginPage;
