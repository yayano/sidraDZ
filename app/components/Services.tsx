
import { ServiceItems } from "../constants";
export default function Services() {
  return (
    <div
      className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto "
      id="services"
    >
      {/* Services Card */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-red-500 font-semibold mb-3 ">
          Notre Services
        </h2>
        <p className="text-neutralGray">
          nous avons travaller avec plus de 500 clients
        </p>
      </div>
      {/* cards */}
      <div className="mt-14 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {ServiceItems.map((service) => (
          <div
            key={service.id}
            className="px-4 py-2 text-left md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:border-b-4 hover:border-red-600 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <h4 className="text-2xl font-bold text-neutralDGray mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGray">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
