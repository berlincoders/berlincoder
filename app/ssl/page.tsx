import Footer from "@/components/Footer";
import { LampDemo } from "@/components/ui/LampDemo";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import SimpleTextbox from "@/components/ui/SimpleTextbox";
import { sslItems } from "@/data/index"; // Import the data
import Terminal from "@/components/ui/Terminal"; // Import the CommandLine component
import Header from "@/components/ui/Header"; // Import the Header component

export default function ssl() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <Header className="mb-5">
          <div className="h-full w-full">
            <LampDemo />
          </div>
        </Header>

        <SimpleTextbox
          key={sslItems[0].id}
          title={sslItems[0].title}
          text={sslItems[0].description}
          desc2={sslItems[0].desc2}
          desc3={sslItems[0].desc3}
          desc4={sslItems[0].desc4}
          children1={<Terminal command="Homebrew: brew install openssl" />}
          children2={<Terminal command="sudo apt-get install openssl" />}
          children3={<Terminal command="openssl -v" />}
          children4={<Terminal command="openssl genrsa -des3 -out server.pass.key 2048" />}
        />
      </div>
    </main>
  );
}
