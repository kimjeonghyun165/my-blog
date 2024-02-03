export function PcMenu({ title, lists }: { title: string; lists: string[] }) {
  return (
    <div className="sticky top-32">
      <div className="flex flex-col mb-12 px-6">
        <div className="font-bold text-xl">JH&apos;S BLOG !</div>
        <p className="text-sm italic">Updates, ideas and resources</p>
      </div>
      <ul className="menu menu-lg bg-base-200 w-56 rounded-box">
        <li className="menu-title text-sm">{title}</li>
        {lists.map((list, index) => (
          <li key={index}>
            <a>{list}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
