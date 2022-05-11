const linkGenerateHandler = async (whatsapp, message, type) => {
  const baseURL = `https://${type}.whatsapp.com/send?phone=55`;

  return `${baseURL}${whatsapp}&text=${encodeURIComponent(message)}`;
};

const errorConstructor = (code, message) => ({ code, message });

module.exports = {
  linkGenerateHandler,
  errorConstructor,
};
