import { useAuth } from '@/context/userContext';
import InputField from '@/components/TextField/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { paths } from '@/routing/Paths';
import Button from '@/components/Button';
import { setAuthTokens } from '@/utils/authTokens';

function Login() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setUser({
      user: 'levan',
      password: '123',
      role: 'admin',
      token: '',
    });
    const refreshToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMTNiMzlkNy0xNTg5LTRkNzEtODJhNy1hNjRlZGM0ZDU4YTEiLCJqdGkiOiI2YzcwYTkxOS05ZjBmLTQ0ZDItOWZhNS0yODJjNWM1NGVjNGEiLCJleHAiOjE2NjU3Mzk3Njd9.xv1MloI5O75QEbseyU0uYuyExDFhrP9tqwONlVuy1zg';
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMTNiMzlkNy0xNTg5LTRkNzEtODJhNy1hNjRlZGM0ZDU4YTEiLCJlbWFpbCI6ImwubmF0czUxQHlhaG9vLmNvbSIsImdpdmVuX25hbWUiOiJMZXZhbiBOYXRzdmxpc2h2aWxpIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoic3VwZXJBZG1pbiIsImp0aSI6ImRmNWI4OTNkLTk4ZTAtNGI3NS1hOTNlLWUyYTFkYTA2ZTJhMiIsImV4cCI6MTY2NjE3ODUxN30.K9yOUcXgfYVC1IEewn03Yhs_fu6Jr3K057mTn7vrmtU';

    setAuthTokens(token, refreshToken);
    navigate(paths.app.home);
  };
  return (
    <div className="h-100-vh  flex items-center justify-center">
      <div className="w-47-0 px-4-0 bg-white h-40-0 rounded-1-2 flex flex-col justify-center ">
        <div className="my-2-0">
          <p className="text-2-8 font-700">Sign in</p>
        </div>
        <div className="my-2-0">
          <InputField label="Username" />
        </div>
        <div>
          <InputField label="Password" type="password" />
        </div>

        <div className="my-2-0">
          <Link className="text-blue font-600 ml-auto" to={paths.auth.forgot}>
            Forgot Password
          </Link>
        </div>
        <div className="my-2-0" onClick={handleLogin}>
          <Button onClick={() => console.log('clicked')}>Login</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
