import Footer from "@/components/Footer";
import { LampDemo } from "@/components/ui/LampDemo";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import SimpleTextbox  from "@/components/ui/SimpleTextbox";
import { sslItems } from "@/data/index"; // Import the data
import Terminal from "@/components/ui/Terminal"; // Import the CommandLine component
import Header from "@/components/ui/Header"; // Import the Header component

export default function ssl() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <Header className="mb-5" style={{ height: '300px' }}>
          <div className="h-full w-full">
            <LampDemo />
          </div>
        </Header>

        <SimpleTextbox
          key={sslItems[0].id}
          title={sslItems[0].title}
          text={sslItems[0].description}
        >
          <Terminal command="openssl genrsa -out private.key 2048" />
        </SimpleTextbox>
      </div>
    </main>
  );
}
