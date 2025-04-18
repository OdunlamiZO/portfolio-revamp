export default function WorkExperience(props: {
  jobTitle: string;
  company: string;
  companyUrl?: string;
  startDate: string;
  endDate: string;
  achievements?: string[];
}) {
  const { jobTitle, company, companyUrl, startDate, endDate, achievements } =
    props;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-gray-900">
        <span className="flex gap-2">
          <span>{jobTitle}</span>
          <span>@</span>
          <a href={companyUrl} className="hover:underline">
            {company}
          </a>
        </span>
        <span>{`${startDate} - ${endDate}`}</span>
      </div>
      {achievements && (
        <ul className="list-disc pl-5 space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-sm text-justify">
              {achievement}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
