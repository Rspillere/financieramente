import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Footer = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.user_name) tempErrors.user_name = 'Nombre es requerido';
    if (!formData.user_email) tempErrors.user_email = 'Correo es requerido';
    else if (!/\S+@\S+\.\S+/.test(formData.user_email))
      tempErrors.user_email = 'Correo no es válido';
    if (!formData.subject) tempErrors.subject = 'Asunto es requerido';
    if (!formData.message) tempErrors.message = 'Mensaje es requerido';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .sendForm(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          e.target,
          'YOUR_USER_ID'
        )
        .then(
          (result) => {
            setSubmitted(true);
            setFormData({
              user_name: '',
              user_email: '',
              subject: '',
              message: '',
            });
            setTimeout(() => setSubmitted(false), 5000);
          },
          (error) => {
            console.error(error.text);
            alert('Hubo un error al enviar el mensaje');
          }
        );
    }
  };

  return (
    <footer id='footer' className="bg-gradient-to-r from-slate-900 to-slate-700 text-white lg:pt-48 lg:pb-24">
      <div className="md:pt-24 pt-12 md:pb-10 pb-20 md:px-16 px-8 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-2xl font-medium">Conectate y compartí</h2>
            <p className="mt-4 text-gray-400">
              Te invito a ponerte en contacto conmigo por cualquier duda o
              consulta que tengas y a seguirme en las redes sociales para que
              estemos conectados.
            </p>
            <div className="mt-4">
              <a
                href="https://www.youtube.com"
                className="flex items-center space-x-2 text-red-600 hover:underline"
              >
                <img src="/youtube-icon.png" alt="YouTube" className="h-6" />
                <span>Financiera-Mente</span>
              </a>
              <a
                href="https://www.instagram.com"
                className="flex items-center space-x-2 text-pink-500 hover:underline"
              >
                <img
                  src="/instagram-icon.png"
                  alt="Instagram"
                  className="h-6"
                />
                <span>@financieramente.yt</span>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-medium">¿En qué te puedo ayudar?</h2>
            {submitted && (
              <p className="text-green-500">Mensaje enviado exitosamente</p>
            )}
            <form onSubmit={handleSubmit} className="mt-4 w-full">
              <div className="mb-4">
                <input
                  placeholder="Nombre"
                  type="text"
                  name="user_name"
                  id="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  className="bg-gray-800 text-gray-400 rounded-lg p-2 w-full"
                  required
                />
                {errors.user_name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.user_name}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  placeholder="Correo"
                  type="email"
                  name="user_email"
                  id="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  className="bg-gray-800 text-gray-400 rounded-lg p-2 w-full"
                  required
                />
                {errors.user_email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.user_email}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  placeholder="Asunto"
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-gray-800 text-gray-400 rounded-lg p-2 w-full"
                  required
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                )}
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Mensaje"
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-gray-800 text-gray-400 rounded-lg p-2 w-full h-24"
                  required
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl text-white font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>© 2024 Financiera-Mente. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;