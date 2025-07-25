import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useTheme } from '../context/ThemeContext';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useUser();
  const navigate = useNavigate();
  const { theme } = useTheme(); // ⬅️ get current theme

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.email === email)) {
      alert('User already exists');
      return;
    }
    const newUser = { name, email, password };
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    login(newUser);
    navigate('/');
  };

  return (
    <div
      className={`min-h-screen flex justify-center items-center p-4 transition-colors duration-500 ${
        theme === 'light' ? 'bg-gray-100 text-black' : 'bg-black text-white'
      }`}
    >
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="input" />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input mt-2" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input mt-2" />
        <button onClick={handleSignup} className="btn mt-4 w-full">Sign Up</button>
        <p className="mt-4 text-sm text-center">
          Already have an account? <a href="/login" className="text-blue-600 dark:text-blue-400">Log in</a>
        </p>
      </div>
    </div>
  );
}
