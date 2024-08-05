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
          'service_9cwmu2o',
          'template_skdht18',
          e.target,
          'fJDCbzMT-rNilqNZx'
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
    <footer
      id="footer"
      className="bg-gradient-to-r from-slate-900 to-slate-700 text-white lg:pt-24 lg:pb-12"
    >
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
                href="http://youtube.com/c/FinancieraMente?sub_confirmation=1"
                className="flex items-center space-x-2 text-red-600 hover:underline"
              >
                <svg
                  className="h-6 w-6 mr-2 "
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.186a2.947 2.947 0 0 0-2.077-2.081C19.215 3.515 12 3.515 12 3.515s-7.215 0-9.421.59a2.947 2.947 0 0 0-2.077 2.08C.002 8.4 0 12 0 12s.002 3.601.502 5.814a2.947 2.947 0 0 0 2.077 2.081C4.785 20.485 12 20.485 12 20.485s7.215 0 9.421-.59a2.947 2.947 0 0 0 2.077-2.08C23.998 15.601 24 12 24 12s-.002-3.6-.502-5.814zM9.75 15.002V8.998l6.5 3.001-6.5 3.003z" />
                </svg>
                <span>Financiera-Mente</span>
              </a>
              <a
                href="https://www.instagram.com/financieramente.yt/?hl=es-la"
                className="flex items-center space-x-2 text-pink-500 hover:underline mt-4"
              >
                <svg
                  className="h-6 w-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.058 2.003.276 2.465.46a4.993 4.993 0 011.734 1.01 4.993 4.993 0 011.01 1.734c.184.462.402 1.26.46 2.465.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.206-.276 2.003-.46 2.465a4.993 4.993 0 01-1.01 1.734 4.993 4.993 0 01-1.734 1.01c-.462.184-1.26.402-2.465.46-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.058-2.003-.276-2.465-.46a4.993 4.993 0 01-1.734-1.01 4.993 4.993 0 01-1.01-1.734c-.184-.462-.402-1.26-.46-2.465C2.175 15.787 2.163 15.407 2.163 12s.012-3.584.07-4.85c.058-1.206.276-2.003.46-2.465a4.993 4.993 0 011.01-1.734 4.993 4.993 0 011.734-1.01c.462-.184 1.26-.402 2.465-.46 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.332.014 7.053.072 5.77.13 4.679.327 3.83.584A7.917 7.917 0 001.563 1.562a7.917 7.917 0 00-.979 2.267c-.258.849-.455 1.94-.512 3.222C.014 8.332 0 8.741 0 12s.014 3.668.072 4.947c.057 1.283.254 2.373.512 3.222.23.716.522 1.34.979 1.797a7.917 7.917 0 001.797.979c.849.258 1.94.455 3.222.512 1.278.058 1.688.072 4.947.072s3.668-.014 4.947-.072c1.283-.057 2.373-.254 3.222-.512a7.917 7.917 0 001.797-.979c.457-.457.749-1.081.979-1.797.258-.849.455-1.94.512-3.222.058-1.278.072-1.688.072-4.947s-.014-3.668-.072-4.947c-.057-1.283-.254-2.373-.512-3.222a7.917 7.917 0 00-.979-1.797A7.917 7.917 0 0020.17.584c-.849-.258-1.94-.455-3.222-.512C15.668.014 15.259 0 12 0z" />
                  <path d="M12 5.838A6.162 6.162 0 005.838 12 6.162 6.162 0 0012 18.162 6.162 6.162 0 0018.162 12 6.162 6.162 0 0012 5.838zm0 10.325a4.162 4.162 0 110-8.325 4.162 4.162 0 010 8.325zM18.406 4.594a1.44 1.44 0 11-2.878 0 1.44 1.44 0 012.878 0z" />
                </svg>
                <span>@financieramente.yt</span>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h2 id='contactofm' className="text-2xl font-medium">¿En qué te puedo ayudar?</h2>
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
