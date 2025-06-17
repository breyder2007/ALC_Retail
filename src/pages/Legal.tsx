import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Aviso Legal</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Información general</h2>
            <p className="text-gray-700 mb-4">
              ALC Retail, con CIF B12345678 y domicilio social en Calle Principal 123, Madrid, inscrita en el Registro Mercantil de Madrid, Tomo XXXX, Folio XXX, Hoja M-XXXXXX, es titular de este sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Términos y condiciones de uso</h2>
            <p className="text-gray-700 mb-4">
              El acceso y uso de este sitio web implica la aceptación expresa y sin reservas de todos los términos del presente Aviso Legal.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>El usuario se compromete a hacer un uso adecuado de los contenidos y servicios del sitio web.</li>
              <li>Queda prohibido cualquier uso con fines ilícitos o que perjudique los intereses de terceros.</li>
              <li>No se permite la reproducción, distribución o modificación de los contenidos sin autorización expresa.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Propiedad intelectual</h2>
            <p className="text-gray-700 mb-4">
              Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, tecnología, software, enlaces, contenidos audiovisuales o sonoros, diseño gráfico, código fuente, etc.) son propiedad intelectual de ALC Retail o de terceros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Responsabilidad</h2>
            <p className="text-gray-700 mb-4">
              ALC Retail no se hace responsable de:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Errores u omisiones en los contenidos</li>
              <li>Problemas técnicos de cualquier tipo</li>
              <li>Decisiones tomadas a partir de la información proporcionada</li>
              <li>Contenido de enlaces externos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Modificaciones</h2>
            <p className="text-gray-700 mb-4">
              ALC Retail se reserva el derecho de modificar, en cualquier momento y sin previo aviso, la presentación y configuración del sitio web, así como los presentes términos y condiciones.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Legislación aplicable</h2>
            <p className="text-gray-700 mb-4">
              El presente Aviso Legal se rige por la legislación española. Cualquier controversia será resuelta ante los tribunales de Madrid.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Legal;