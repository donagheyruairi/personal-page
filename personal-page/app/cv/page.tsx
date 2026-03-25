export default function CV() {
  return (
    <main className="cv relative">
      <section className="relative h-20 lg:h-[calc(50vh-80px)] flex flex-col justify-center border-b">
        <h1 className="flex items-center justify-center">Curriculum Vitae</h1>
      </section>
      <section className="min-h-[calc(100vh-160px)] lg:min-h-[calc(50vh-48px)]">
        <h2>Education</h2>
        <div>
          <a
            href="https://www.tcd.ie/courses/undergraduate/courses/computer-science/"
            target="blank_"
            rel="noopener noreferrer"
          >
            <img
              src="/cv/tcd.svg"
              alt="Trinity College Dublin Logo"
              width={313}
              height={83}
              className="aspect-313/83"
            />
          </a>
          <div>
            <p>
              College Green, Dublin 2
            </p>
            <div className="md:flex gap-8">
              <p>
                M.C.S. in Computer Science
                <br />
                <i>
                  2024 - 2025
                  {' '}
                  Distinction
                </i>
              </p>
              <p>
                B. A. (Mod) in Computer Science
                <br />
                <i>
                  2020 - 2024
                  {' '}
                  First Class Honours
                </i>
              </p>
            </div>
            <ul>
              <li>
                In addition to exams and internships, I completed numerous solo and group projects in the course of my assessment, including a project for DELL.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-primary text-white/90 min-h-[calc(100vh-80px)] rounded-3xl">
        <h2>Work Experience</h2>
        <div>
          <a
            href="https://www.quantexa.com/"
            target="blank_"
            rel="noopener noreferrer"
            className="max-md:p-2"
          >
            <img
              src="/cv/quantexa.svg"
              alt="Quantexa Logo"
              width={207}
              height={32}
            />
          </a>
          <div>
            <p>
              Dogpatch Labs, The Chq Building, Custom House Quay
            </p>
            <p>
              NLP Data Scientist
              <br />
              <i>January 2024 - September 2024</i>
            </p>
            <ul>
              <li>
                Was a member of the R&D-focused NLP research team, building models
                and doing data analysis.
              </li>
              <li>
                Worked full-stack, building NLP tools using Python, spaCy, HF
                models and other techniques.
              </li>
              <li>
                Developed a Next.js app, used for internal demos of the tools and
                features made by the team.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <a
            href="https://www.fiserv.com/en.html/"
            target="blank_"
            rel="noopener noreferrer"
            className="p-6"
          >
            <img src="/cv/fiserv.svg" alt="Fiserv Logo" width={239} height={120} className="aspect-239/120" />
          </a>
          <div>
            <p>
              10 Hanover Quay, Grand Canal Docks
            </p>
            <p>
              Software Engineer
              <br />
              <i>July 2023 - September 2023</i>
            </p>
            <ul>
              <li>
                Was a member of the Omnipay team, working on Fiserv&apos;s
                platform for processing card transactions.
              </li>
              <li>
                Worked through client-side and internal problems with a team of
                experienced mentors, for the EMEA and APAC regions.
              </li>
              <li>
                Work included responding to Jira tickets, diagnosing errors, and
                checking the Oracle database. I also assisted other associates
                with projects in areas such as AI and HR.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="min-h-[calc(50vh-40px)]">
        <h2>Other Projects</h2>
        <div>
          <a
            href="https://clarecivil.ie/"
            target="blank_"
            rel="noopener noreferrer"
          >
            <img
              src="/cv/clare-civil.svg"
              alt="Clare Civil Logo"
              width={1467}
              height={328}
              className="aspect-1467/328"
            />
          </a>
          <div>
            <p>
              Jordanstown Road, Rathcoole, Co. Dublin
            </p>
            <p><i>2025 - 2026</i></p>
            <ul>
              <li>
                Built the website for Clare Civil Engineering Ltd, which can be
                found
                {' '}
                <a
                  href="https://clarecivil.ie/"
                  target="blank_"
                  rel="noopener noreferrer"
                  className="hover:animate-pulse"
                >
                  here
                </a>
                .
              </li>
              <li>
                Worked through client-side and internal problems with a team of
                experienced mentors, for the EMEA and APAC regions.
              </li>
              <li>
                Work included responding to Jira tickets, diagnosing errors, and
                checking the Oracle database. I also assisted other associates
                with projects in areas such as AI and HR.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
