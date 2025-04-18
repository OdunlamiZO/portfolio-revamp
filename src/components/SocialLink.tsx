export default function SocialLink(props: { url: string; icon: string }) {
  const { url, icon } = props;

  return (
    <a
      href={url}
      className="hover:text-gray-900 transition-colors duration-300"
    >
      <i className={icon}></i>
    </a>
  );
}
