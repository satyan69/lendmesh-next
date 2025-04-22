// components/HeaderShell.tsx

import menuData from "./menuData";
import ClientHeader from "./ClientHeader";

export default function HeaderShell() {
  return (
    <header className="fixed z-10 w-full">
      <ClientHeader menuData={menuData} />
    </header>
  );
}
