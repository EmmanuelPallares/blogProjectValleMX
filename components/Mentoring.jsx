import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

export default function Mentoring() {
  return (
    <div className="bg-green-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-green-800">
              <SpeakerphoneIcon
                className="h-6 w-6 text-yellow-300"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">Ahora mentorias personalizadas!</span>
              <span className="hidden md:inline">
                Grandes Noticias ! Ahora también en Metabol Mentorias
                Personalizadas !
              </span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="#"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-indigo-50"
            >
              Saber más
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
