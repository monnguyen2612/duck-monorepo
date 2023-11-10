export const metadata = {
  title: 'Duke Resume',
  description: '',
};

export default function Page() {
  return (
    <div>
      <object
        className="w-full min-h-[1000px] border-0"
        data="/DukeCV.pdf"
        type="application/pdf"
      >
        <iframe
          src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${file}#zoom=150`}
          title="cv"
        />
      </object>

      <div className="flex flex-col items-center justify-center mt-10">
        <a className="px-4 py-2" download href={file}>
          Download PDF
        </a>
      </div>
    </div>
  );
}
