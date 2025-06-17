import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Información que recopilamos</h2>
            <p className="text-gray-700 mb-4">
              En ALC Retail, recopilamos y procesamos la siguiente información personal:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Nombre y apellidos</li>
              <li>Información de contacto (email, teléfono, dirección)</li>
              <li>DNI o documento identificativo</li>
              <li>Información sobre el vehículo de interés</li>
              <li>Datos de financiación (si aplica)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Uso de la información</h2>
            <p className="text-gray-700 mb-4">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Procesar y gestionar su compra o consulta</li>
              <li>Proporcionar información sobre nuestros productos y servicios</li>
              <li>Mejorar nuestros servicios</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Cookies</h2>
            <p className="text-gray-700 mb-4">
              Utilizamos cookies y tecnologías similares para:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Mantener su sesión activa</li>
              <li>Recordar sus preferencias</li>
              <li>Analizar el uso de nuestro sitio web</li>
              <li>Personalizar su experiencia</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Sus derechos</h2>
            <p className="text-gray-700 mb-4">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Acceder a sus datos personales</li>
              <li>Rectificar datos inexactos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse al procesamiento de sus datos</li>
              <li>Solicitar la portabilidad de sus datos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Contacto</h2>
            <p className="text-gray-700 mb-4">
              Para ejercer sus derechos o realizar cualquier consulta sobre nuestra política de privacidad, puede contactarnos en:
            </p>
            <ul className="list-none text-gray-700 mb-4">
              <li>Email: privacidad@alcgestionretail.com</li>
              <li>Teléfono: 914 840 950</li>
              <li>Dirección: Calle Principal 123, Madrid</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;