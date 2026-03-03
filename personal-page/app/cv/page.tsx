import Image from 'next/image';

export default function CV() {
  return (
    <main className="cv">
      <section className="p-4 border-b">
        <h1 className="bg-inherit text-center">Curriculum Vitae</h1>
      </section>
      <section className="lg:grid grid-cols-3 mx-[5dvw] md:mx-[7.5dvw] lg:mx-[10dvw] gap-4">
        <div className="">
          <h2>Education</h2>
          <a className="" href="https://www.tcd.ie/courses/undergraduate/courses/computer-science/">
            <Image
              src="/tcd.svg"
              alt="Trinity College Dublin Logo"
              width={313}
              height={83}
              className="aspect-313/83"
            />
          </a>
          <p>
            College Green, Dublin 2
          </p>
          <p>
            M.C.S. in Computer Science
            <br />
            2024 - 2025
            {' '}
            <i>Distinction</i>
            <br />
            B. A. (Mod) in Computer Science
            <br />
            2020 - 2024
            {' '}
            <i>First Class Honours</i>
          </p>
          <ul>
            <li>
              In addition to exams and internships, I completed numerous solo and group projects in the course of my assessment, including a project for DELL.
            </li>
          </ul>
        </div>
        <div>
          <h2>Work Experience</h2>
          <a className="">
            <Image
              src="/quantexa.svg"
              alt="Quantexa Logo"
              width={207}
              height={32}
              className=""
            />
          </a>
          <p>
            Dogpatch Labs, The Chq Building, Custom House Quay, D01 Y6H7, Dublin
          </p>
          <p>NLP Data Scientist</p>
          <p>January 2024 - September 2024</p>
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
        <div>
          <a className="md:mt-12">
            <Image src="/fiserv.svg" alt="Fiserv Logo" width={239} height={120} className="aspect-239/120" />
          </a>
          <p>10 Hanover Quay, Dublin Docklands</p>
          <p>Software Engineer</p>
          <p>July 2023 - September 2023</p>
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
        <div>
          <h2>Other Projects</h2>
          <a>
            <Image
              src="/clare-civil.svg"
              alt="Clare Civil Logo"
              width={1467}
              height={328}
              className="aspect-1467/328"
            />
          </a>
          <p>Jordanstown Road, Rathcoole, Co. Dublin, D24 H006</p>
          <p>2025 - 2026</p>
          <ul className="list-inside list-disc">
            <li>
              Built the website for Clare Civil Engineering Ltd, which can be
              found at https://clarecivil.ie/.
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
      </section>
    </main>
  );
}
