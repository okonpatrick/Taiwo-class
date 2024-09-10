// SignIn.js
import { useState } from 'react';
import { useAuth } from './AuthContext';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password);
    setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="block w-full p-2 border rounded mb-4"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="block w-full p-2 border rounded mb-4"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500">{error}</p>}
          <button className="w-full bg-blue-500 text-white p-2 rounded">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;


