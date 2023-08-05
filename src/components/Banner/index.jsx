// banner component
export default function Banner() {
  return (
    <div className="banner text-center">
      <div className="banner__logo">
        <img width={40} height={40} src="/assets/logo.png" alt="logo" />
      </div>

      <div className="banner__label text-sm">kalash</div>
    </div>
  );
}
