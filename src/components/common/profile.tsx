export function Profile() {
  return (
    <div className="avatar">
      <div className="w-24 rounded-full">
        <img src="https://avatars.githubusercontent.com/u/83922405?v=4" />
      </div>
    </div>
  );
}

export function SquProfile(props: { width: number }) {
  return (
    <div className="avatar">
      <div className={`w-12 mask mask-squircle`}>
        <img
          src="https://avatars.githubusercontent.com/u/83922405?v=4"
          alt="profile"
        />
      </div>
    </div>
  );
}
