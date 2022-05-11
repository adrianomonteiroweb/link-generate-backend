const linkGenerateHandler = async (whatsapp, message) => {
  const baseURL = "https://api.whatsapp.com/send?phone=55";

  return `${baseURL}${whatsapp}&text=${encodeURIComponent(message)}`;
};

const errorConstructor = (code, message) => ({ code, message });

module.exports = {
  linkGenerateHandler,
  errorConstructor,
};
