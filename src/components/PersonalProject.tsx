export default function PersonalProject(props: {
  name: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
}) {
  const { name, description, githubUrl, liveUrl } = props;

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-gray-900">{name}</h2>
      <p className="text-sm text-justify">{description}</p>
      <div className="flex justify-end gap-4">
        <a href={githubUrl}>GitHub</a>
        {liveUrl && <a href={liveUrl}>Visit Site</a>}
      </div>
    </div>
  );
}
