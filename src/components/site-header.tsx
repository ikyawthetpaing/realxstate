import { Icons } from "./icons";

export function SiteHeader() {
  return (
    <div className="py-6 text-white">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="gap-6 hidden sm:flex">
          <span>Buy</span>
          <span>Rent</span>
          <span>Mortage</span>
        </div>
        <div>
          <h1 className="font-montserrat-alt font-extrabold text-2xl">
            Estate
          </h1>
        </div>
        <div className="hidden sm:flex gap-6">
          <span>Saved</span>
          <span>Login</span>
          <span>Sign Up</span>
        </div>
        <div className="sm:hidden">
          <Icons.menu className="h-7 w-7" />
        </div>
      </nav>
    </div>
  );
}