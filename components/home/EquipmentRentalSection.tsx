const EquipmentRentalSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Locação de Equipamentos Oftalmológicos
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Equipamentos de última geração disponíveis para locação através da 
            <strong className="text-primary-green"> Smart Doc</strong>
          </p>
          <a
            href="https://smartdoc.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-green text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary-teal transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Saiba Mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default EquipmentRentalSection;
