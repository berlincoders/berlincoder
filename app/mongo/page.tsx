import Footer from "@/components/Footer";
import { LampDemo } from "@/components/ui/LampDemo";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { mongoItems, navItems } from "@/data";
import SimpleMongo from "@/components/ui/SimpleMongo";
import Terminal from "@/components/ui/Terminal"; // Import the CommandLine component


export default function mongo() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <SimpleMongo
          key={mongoItems[0].id}
          title={mongoItems[0].title}
          text={mongoItems[0].description}
          desc2={mongoItems[0].desc2}
          desc3={mongoItems[0].desc3}
          desc4={mongoItems[0].desc4}
          desc5={mongoItems[0].desc5}
          desc6={mongoItems[0].desc6}
          children1={<Terminal command=" pgrep -l mongod" />}
          children2={<Terminal command="mkdir -p ~/data/db" />}
          children3={<Terminal command="mongod --dbpath ~/data/db" />}
        />
        {/* Render second mongoItem */}

        <SimpleMongo
          key={mongoItems[1].id}
          title={mongoItems[1].title}
          text={mongoItems[1].description}
          desc2={mongoItems[1].desc2}
          desc3={mongoItems[1].desc3}
          desc4={mongoItems[1].desc4}
        />
      </div>
    </main>
  );
}
