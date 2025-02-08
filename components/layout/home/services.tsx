import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      // style={{ backgroundColor: color }} 
      className={`w-full rounded-lg h-[400px] flex flex-col gap-4 justify-between p-4 bg-white`}
    >
      <div className="bg-slate-100 rounded-lg w-full h-full">
        
      </div>
      <div>
        <h3 className={`text-xl font-semibold ${poppins.className}`}>
          {title}
        </h3>
        <p className="md:text-sm text-xs md:leading-5 mt-2">{description}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="h-auto py-24 justify-center items-center w-full gap-5 flex flex-col xl:px-20 lg:px-10 md:px-5 px-4 bg-appColor-blue-muted">
      <h2
        className={`text-4xl font-bold text-center ${poppins.className} g:w-[70%] md:w-[70%] lg:leading-[3rem]`}
      >
        Empwering Your Property Ownership Through Technology and Innovation
      </h2>
      <p className="text-center text-base sm:text-sm w-[70%]">
        Explore our services and discover how we can help you achieve your goals
      </p>
      <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-4 w-full">
        <ServiceCard
          title="Property Management"
          description="We provide property management services for residential and commercial properties"
        />
        <ServiceCard
          title="Property Management"
          description="We provide property management services for residential and commercial properties"
        />
        <ServiceCard
          title="Property Management"
          description="We provide property management services for residential and commercial properties"
        />
        <ServiceCard
          title="Property Management"
          description="We provide property management services for residential and commercial properties"
        />
      </div>
    </div>
  );
}
