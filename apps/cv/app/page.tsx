export const metadata = {
  title: 'Duke Resume',
  description: '',
};

export default function Page() {
  return (
    <div>
      <object
        className="w-full min-h-[1000px] border-0"
        data="/duck-monorepo/DukeCV.pdf"
        aria-labelledby="cv"
        type="application/pdf">
          <a href="/duck-monorepo/DukeCV.pdf">DukeCV.pdf</a>
        </object>
      <div className="flex flex-col items-center justify-center mt-10">
        <a className="px-4 py-2" download href="/duck-monorepo/DukeCV.pdf">
          Download PDF
        </a>
      </div>
    </div>
  );
}
