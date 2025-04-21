// components/HeaderShell.tsx
import logo from "./../../app/assets/img/logo.svg";
import menuData from "./menuData";
import ClientHeader from "./ClientHeader";

export default function HeaderShell() {
  return (
    <header className="fixed z-10 w-full">
      <ClientHeader menuData={menuData} logo={logo} />
    </header>
  );
}
