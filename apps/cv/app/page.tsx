/* eslint-disable turbo/no-undeclared-env-vars -- no*/
export const metadata = {
  title: 'Duke Resume',
  description: '',
};

export default function Page() {

  const cvURL = `${process.env.NODE_ENV === 'production' ? '/duck-monorepo' : ''}/DukeCV-2023.pdf`;

  return (
    <div>
      <object
        className="w-full sm:min-h-[500px] md:min-h-[700px] lg:min-h-[1000px] border-0"
        data={cvURL}
        aria-labelledby="cv"
        type="application/pdf">
          <a href={cvURL}>DukeCV.pdf</a>
        </object>
      <div className="flex flex-col items-center justify-center mt-10">
        <a className="px-4 py-2" download href={cvURL}>
          Download PDF
        </a>
      </div>
    </div>
  );
}