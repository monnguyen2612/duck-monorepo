const file = '';

export const metadata = {
  title: 'Duke Resume',
  description: '',
};

const pdfViewerURL = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${file}#zoom=150`;

export default function Page() {
  return (
    <div>
      <object
        className="w-full min-h-[1000px] border-0"
        data="/DukeCV.pdf"
        type="application/pdf"
      >
        {/* <iframe
          src={pdfViewerURL}
          title="cv"
        /> */}
      </object>

      <div className="flex flex-col items-center justify-center mt-10">
        <a className="px-4 py-2" download href="/DukeCV.pdf">
          Download PDF
        </a>
      </div>
    </div>
  );
}
