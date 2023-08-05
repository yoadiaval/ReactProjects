
import { BiSolidQuoteAltRight } from "react-icons/bi";
function Review({ value }) {
  const name = value.name;
  const toCamelCaseName = name.replace(/(^|\s)\S/g, (L) => L.toUpperCase());
  const job = value.job;
  const toUpperlCaseJob = job.toUpperCase();

  return (
    <div>
      <div className="flex justify-center mb-5">
        <div className="relative left-5 top-3">
          <BiSolidQuoteAltRight className=" text-white text-3xl rounded-full p-1 bg-fuchsia-900" />
        </div>
        <figure className="m-0 h-28 w-28 ">
          <img
            className="border-r-4 border-fuchsia-900 place-self-center object-top object-cover w-full h-full rounded-full"
            src={value.image}
            alt="imagen del perfil"
          />
        </figure>
      </div>
      <div className="text-xl">{toCamelCaseName}</div>
      <div className="text-indigo-500 text-xs">{toUpperlCaseJob}</div>
      <div className="mt-5 text-xs">{value.text}</div>
    </div>
  );
}

export default Review;
