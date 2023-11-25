import React, { useState } from 'react'

const Register = () => {
  const [kullaniciAdi, setKullaniciAdi] = useState('');
  const [email, setEmail] = useState('');
  const [sifre, setSifre] = useState('');

  const handleKayit = () => {
    console.log('Kullanıcı Adı:', kullaniciAdi);
    console.log('E-posta:', email);
    console.log('Şifre:', sifre);
  };

  return (
    <div>
      <h2>Kayıt Formu</h2>
      <form>
        <label>
          Kullanıcı Adı:
          <input
            type="text"
            value={kullaniciAdi}
            onChange={(e) => setKullaniciAdi(e.target.value)}
          />
        </label>
        <br />
        <label>
          E-posta:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Şifre:
          <input
            type="password"
            value={sifre}
            onChange={(e) => setSifre(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleKayit}>
          Kayıt Ol
        </button>
      </form>
    </div>
  );
};


export default Register