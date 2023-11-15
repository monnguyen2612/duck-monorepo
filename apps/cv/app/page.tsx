export const metadata = {
  title: 'Duke Resume',
  description: '',
};

export default function Page() {

  const cvURL = '/duck-monorepo/DukeCV.pdf';

  return (
    <div>
      <object
        className="w-full min-h-[600px] border-0"
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
