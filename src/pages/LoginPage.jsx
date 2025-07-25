import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useTheme } from '../context/ThemeContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useUser();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(u => u.email === email && u.password === password);

    if (existingUser) {
      login(existingUser);
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div
      className={`min-h-screen flex justify-center items-center p-4 transition-colors duration-500 ${
        theme === 'light' ? 'bg-gray-100 text-black' : 'bg-black text-white'
      }`}
    >
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Log In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input mt-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input mt-2"
        />
        <button onClick={handleLogin} className="btn mt-4 w-full">Log In</button>
        <p className="mt-4 text-sm text-center">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-600 dark:text-blue-400">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
