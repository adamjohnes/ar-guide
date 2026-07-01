import { Link, useParams } from 'react-router';
import ChapterNav from '../components/ChapterNav';
import { guideSections } from '../elements/guideSections';
import { tableOfContentSections } from '../elements/tableOfContents';

function GuidePage() {
  const { sectionId } = useParams();
  const section = guideSections.find((item) => item.id === sectionId);
  const tableOfContentSection = tableOfContentSections.find(
    (item) => item.sectionId === section?.id
  );

  const getSubsectionElementId = (subsectionId: string) => {
    return `${section?.id ?? 'guide'}-${subsectionId}`;
  };

  const handleTableOfContentsClick = (subsectionId: string) => {
    document.getElementById(getSubsectionElementId(subsectionId))?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  if (!section) {
    return (
      <main className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[16rem_1fr]">
        <ChapterNav />

        <div className="rounded-2xl border border-black bg-emerald-100 p-6">
          <h2 className="text-3xl font-bold text-black">
            Page Not Found
          </h2>

          <Link to="/" className="mt-6 inline-block font-semibold text-emerald-800 hover:text-black">
            Back to guide home
          </Link>
        </div>
      </main>
    );
  }

  const tableOfContentHeadings = tableOfContentSection?.headings ?? [];

  return (
    <main className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[16rem_1fr]">
      <ChapterNav />

      <div className="grid">
        <nav className=" bg-emerald-50 p-5">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-black">
            Table of Contents
          </h2>

          <div className="mt-4 flex flex-col gap-2">
            {tableOfContentHeadings.map((heading) => (
              <button
                key={heading.id}
                type="button"
                onClick={() => handleTableOfContentsClick(heading.id)}
                className="rounded-2xl border border-gray-300 bg-white px-4 py-1 text-left text-sm font-semibold text-black hover:bg-emerald-100"
              >
                {heading.title}
              </button>
            ))}
          </div>
        </nav>
        <div className="grid bg-emerald-50 p-5 gap-6">
          <section>
            <h1 className="text-4xl font-bold text-black">
              {section.title}
            </h1>

            <p className="mt-2 max-w-3xl text-black">
              {section.description}
            </p>
          </section>
          {section.subsections.map((subsection) => (
            <section
              key={subsection.id}
              id={getSubsectionElementId(subsection.id)}
              className="scroll-mt-8 mt-12"
            >
              <h2 className="text-xl font-bold text-black">
                {subsection.title}
              </h2>

              <p className="mt-2 max-w-3xl text-black">
                {subsection.description}
              </p>

              {subsection.keyPoints.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-black">
                    Key Points
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {subsection.keyPoints.map((point) => (
                      <li key={point} className="flex gap-2 text-black">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-800" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {subsection.examples.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-black">
                    Examples
                  </h3>

                  <div className="mt-4 flex flex-col gap-3">
                    {subsection.examples.map((example) => (
                      <pre
                        key={example}
                        className="overflow-x-auto rounded-xl border border-black bg-emerald-800 p-4 text-sm text-white"
                      >
                        <code>{example}</code>
                      </pre>
                    ))}
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

export default GuidePage;
