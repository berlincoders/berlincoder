import Footer from "@/components/Footer";
import { LampDemo } from "@/components/ui/LampDemo";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import SimpleTextbox  from "@/components/ui/SimpleTextbox";
import { sslItems } from "@/data/index"; // Importa los datos

export default function ssl() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <LampDemo />
        {sslItems.map(item => (
          <SimpleTextbox key={item.id} title={item.title} text={item.description} />
        ))}
      </div>
    </main>
  );
}