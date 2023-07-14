// profile pic component
export default function ProfilePic() {
  return (
    <div className="profilePic flex items-center justify-center">
      <img
        className="rounded-full"
        width={200}
        height={200}
        src="/photo.jpg"
        alt="profile pic"
      />
    </div>
  );
}
