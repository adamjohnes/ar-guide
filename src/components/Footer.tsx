import { currentVersion } from "../elements/types/CurrentVersion";

function Footer() {
  return (
    <footer className="bg-emerald-800">
      <div className="mx-auto w-full max-w-7xl px-6 py-6 text-sm text-white">
        <p>
          { currentVersion }
        </p>
      </div>
    </footer>
  );
}

export default Footer;
