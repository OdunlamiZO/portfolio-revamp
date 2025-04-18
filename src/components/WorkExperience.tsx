export default function WorkExperience(props: {
  jobTitle: string;
  company: string;
  companyUrl?: string;
  startDate: string;
  endDate: string;
  achievements?: string[];
  skills: string[];
}) {
  const {
    jobTitle,
    company,
    companyUrl,
    startDate,
    endDate,
    achievements,
    skills,
  } = props;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col md:flex-row justify-between text-black">
        <span>
          {jobTitle}&nbsp;@&nbsp;
          <a href={companyUrl} className="hover:underline">
            {company}
          </a>
        </span>
        <span>{`${startDate} - ${endDate}`}</span>
      </div>
      {achievements && (
        <ul className="list-disc pl-5 space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-justify">
              {achievement}
            </li>
          ))}
        </ul>
      )}
      <div className="text-black font-bold">{skills?.join(", ")}</div>
    </div>
  );
}
