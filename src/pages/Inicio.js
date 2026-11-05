function Inicio() {
    return (
        <section id="contexto">
            <h2>Contexto del Problema</h2>
            <p>
                <strong>Barranquilla</strong>, 
                una de las ciudades más importantes de la costa caribe colombiana, 
                enfrenta una crisis de movilidad que afecta
                la calidad de vida de sus habitantes. 

                Según datos de la <strong>Cámara de Comercio de Barranquilla</strong>, 
                el parque automotor creció un 60% en la última década, 
                mientras que la infraestructura vial solo se amplió en un 15%.
            </p>

            <p>
                Las principales vías de la ciudad como la <strong>Calle 30</strong>, 
                la <strong>Circunvalar</strong> y la <strong>Vía 40</strong> 
                colapsan diariamente en horas pico (7:00-8:30 AM y 5:00-7:00 PM). 
                <br/> Un estudio de movilidad indica que un barranquillero promedio pierde 
                <strong>2 horas diarias</strong> en desplazamientos, lo que representa más de 
                <strong>30 días al año</strong> perdidos en trancones.
            </p>

            <p>
                Esta situación no solo afecta la productividad económica, 
                sino que también incrementa los niveles de <strong>estrés</strong> 
                y <strong>contaminación</strong> en la ciudad, 
                convirtiéndose en un problema social que requiere atención urgente.
            </p>

            <div>
                {/* La imagen está en la carpeta public */}
                <img src="/imageb.jpg" alt="Tráfico en una vía principal de Barranquilla"
                 width="800" />
                 
                <p>
                    <em>Tráfico en la Calle 84, 
                    una de las vías más congestionadas de Barranquilla</em>
                </p>
                
            </div>

            <p className="dato-clave">
                <strong>Dato clave:</strong> En Barranquilla hay actualmente más de 
                <strong>500,000 vehículos</strong> 
                para una población de 1.2 millones de habitantes.
            </p>
        </section>
    );
}

export default Inicio;