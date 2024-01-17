export function MobileMenu({
  title,
  lists,
}: {
  title: string;
  lists: string[];
}) {
  return (
    <div className="grid justify-center items-center top-32 mb-12 ">
      <div className="flex flex-col items-center mb-12 px-6">
        <div className="font-bold text-xl">JH'S BLOG !</div>
        <p className="text-sm italic">Updates, ideas and resources</p>
      </div>
      <ul className="menu menu-horizontal bg-base-200 rounded-box">
        <li className="menu-title">{title}</li>
        {lists.map((list, index) => (
          <li key={index}>
            <a className="text-center">{list}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
