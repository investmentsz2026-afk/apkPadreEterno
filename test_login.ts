import axios from 'axios';

(async () => {
  try {
    const res = await axios.post('https://apkpadreeterno1.onrender.com/api/auth/login', {
      email: 'floreria_jardines@hotmail.com',
      password: 'admin123',
    }, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('Response:', res.data);
  } catch (err: any) {
    if (err.response) {
      console.error('Error status:', err.response.status);
      console.error('Data:', err.response.data);
    } else {
      console.error('Error:', err.message);
    }
  }
})();
