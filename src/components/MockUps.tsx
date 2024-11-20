import React from "react";
import {highlightWords} from "../utils/stringHelper";

const MockUps = () => {
  const textDescription = "Conectá con personas que comparten tus intereses, participá en actividades únicas y ayudá a construir momentos inolvidables. Descargar Buddy es el primer paso para hacer de cada día una nueva oportunidad de compañía y diversión. ¡Unite ahora y empezá a vivir la experiencia Buddy!";

  return (
      <div className={`py-12 bg-background`} id="mockups">
          <div
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:gap-[300px] sm:justify-between"
          >
              <div className={'w-full self-center'}>
                  <h3
                      className="text-3xl tracking-tight font-extrabold text-gray-900 lg:text-5xl w-full self-center"
                  >
                      <span className="block xl:inline">
                          Viví una experiencia única a través de nuestra
                      </span>{' '}
                      <span className={`block text-primary xl:inline`}>
                          app Buddy
                      </span>
                  </h3>

                  <p className={`text-gray-600`}>
                      {highlightWords(textDescription)}
                  </p>
              </div>

              <div className="mt-10 w-full sm:w-1/2 flex justify-center items-center">
                  <img
                      className="h-auto max-w-full"
                      src={"/assets/smartmockups.png"}
                      alt={"title"}
                      style={{ maxHeight: '300px' }}
                  />
              </div>
          </div>
      </div>
  )
}

export default MockUps;

/*
      <div className={`py-12 bg-background`} id="mockups">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
               style={{ display: "flex", gap: "300px", justifyContent: 'space-between' }}
          >
              <h3 className="text-1xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl"
                  style={{ width: '40%', alignSelf: 'center' }}
              >
                  <span className="block xl:inline">Vive una experiencia única a través de nuestra</span>{' '}
                  <span className={`block text-primary xl:inline`}>
                      app Buddy
                  </span>
              </h3>

              <div className="mt-10">
                  <div className={`w-full sm:w-1/2 p-6`}
                       style={{ alignSelf: 'center', placeItems: 'center', placeSelf: 'center' }}>
                      <img className="h-6/6" src={"/assets/smartmockups.png"} alt={"title"} />
                  </div>
              </div>
          </div>
      </div>*/