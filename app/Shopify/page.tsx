
import Image from "next/image";
import Footer from "@/components/Footer";
import { shopifyItems } from "@/data/index"; // Import the data
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import SimpleTextbox from "@/components/ui/SimpleTextbox";
import Terminal from "@/components/ui/Terminal"; // Import the CommandLine component
import Header from "@/components/ui/Header"; // Import the Header component

export default function shopify() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <Header className="mb-5">
          <div className="h-full w-full flex justify-center flex-col">
           {/* Add the image here */}
          <Image
              src="/hydrogen.webp"
              alt="Hydrogen Banner"
              width={850} // Adjust as needed
              height={350} // Adjust as needed
              className="rounded-lg object-cover"
            />
            <h1 className="text-white text-4xl font-bold mt-4">Welcome to Hydrogen</h1>
            <p> check the oficial documetation here: {""}
                <a
                  href="https://shopify.dev/docs/custom-storefronts/hydrogen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-300"
                >
                  Hydrogen Documentation
                </a>


            </p>
          </div>
        </Header>

        <SimpleTextbox
          key={shopifyItems[0].id}
          title={shopifyItems[0].title}
          text={shopifyItems[0].description}
          desc2={shopifyItems[0].desc2}
          desc3={shopifyItems[0].desc3}
          children1={<Terminal command="npm install -g @shopify/cli @shopify/theme" />}
          children2={<Terminal command="shopify version" />}
        />

        <SimpleTextbox
          key={shopifyItems[1].id}
          title={shopifyItems[1].title}
          text={shopifyItems[1].description}
          desc2={shopifyItems[1].desc2}
          children1={<Terminal command="shopify login" />}
        />
      </div>
    </main>
  );
}
