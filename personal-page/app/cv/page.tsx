import Image from 'next/image';

export default function CV() {
  return (
    <main className="cv">
      <section className="p-4">
        <h1>Curriculum Vitae</h1>
      </section>
      <section className="grid grid-cols-3 gap-8 p-8">
        <div>
          <h2 className="">Education</h2>
          <Image
            src="/tcd.svg"
            alt="Trinity College Dublin Logo"
            width={100}
            height={100}
          />
          <p className="col-span-2">
            B. A. (Mod) Computer Science 2020 - 2024
            {' '}
            <i>First Class Honours</i>
          </p>
          <p className="col-span-2">
            M.C.S. in Computer Science 2024 - 2025
            {' '}
            <i>Distinction</i>
          </p>
        </div>
        <div>
          <h2>Work Experience</h2>
          <Image
            src="/quantexa.svg"
            alt="Quantexa Logo"
            width={100}
            height={100}
            className=""
          />
          <p>
            Dogpatch Labs, The Chq Building, Custom House Quay, D01 Y6H7, Dublin
          </p>
          <p>NLP Data Scientist</p>
          <p>January 2024 - September 2024</p>
          <ul className="list-inside list-disc">
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
          <h2>Work Experience</h2>
          <Image src="/fiserv.svg" alt="Fiserv Logo" width={100} height={100} />
          <p>10 Hanover Quay, Dublin Docklands</p>
          <p>Software Engineer</p>
          <p>July 2023 - September 2023</p>
          <ul className="list-inside list-disc">
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
          <Image
            src="/clare-civil.svg"
            alt="Fiserv Logo"
            width={1467}
            height={328}
          />
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
