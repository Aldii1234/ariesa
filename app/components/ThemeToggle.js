import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} 
      style={{
        position: 'fixed', bottom: '20px', left: '20px',
        background: 'var(--bg-color)', border: '1px solid #ccc',
        padding: '0.5rem', borderRadius: '50%', cursor: 'pointer'
      }}>
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
