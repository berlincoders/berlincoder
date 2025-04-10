export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
  //{ name: "Ssl", link: "#" },
];
export const gridItems = [
  {
    id: 1,
    title: "Explore the Logic Under the Hood",
    description: "What happens after you click “Buy Now” or log in to your account? In this section, we’ll explain the hidden work the website does—like saving your info, checking passwords, or sending a confirmation email. It’s the behind-the-scenes logic that makes everything run smoothly—and we’ll keep it super simple.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full object-contain p-4",
    titleClassName: "justify-end",
    img: "/Backend.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I am available for communication during European time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I am constantly  improving",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a MERN project",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
export const shopifyItems = [
 {
    id: 1,
    title: "1) Install Prerequisites",
    description: `Node.js, Git, install Shopify CLI, to install the Shopify CLI, run the command below:`,
    desc2: `After installation, confirm that Shopify CLI is correctly installed by running:`,
    desc3: `<pre>3.70.0</pre><br>
    If you see a similar message in your console, you have successfully installed Shopify CLI.`,
  },
  {
    id: 2,
    title: " 2) Log in to Shopify",
    description: "Open your terminal and log in to Shopify using the command:",
    desc2: `Follow the instructions to authenticate your account.`,
  },
  {
    id: 3,
    title: " 3) Create a Hydrogen App",
    description: "Open your terminal and log in to Shopify using the command:",
    desc2: `Follow the instructions to authenticate your account.`,
  },

]

export const sslItems =[
  {
    id: 1,
    title: "1) Generate private key",
    description: `Before requesting an SSL certificate, you need to generate a private key in your local environment using the <a href="https://www.openssl.org/" target="_blank" rel="noopener noreferrer" style="color: #E49BFF; font-weight: bold;">openssl</a> tool.<br>
    If you cannot execute the openssl command from the terminal, you may need to install it. For Mac OS X, use the command below.`,
    desc2: `For Ubuntu Linux, use the command below . . .`,
    desc3: `And if you're on Windows.. well, I feel sorry for you 😅, but you can still download it <b><a href="https://slproweb.com/products/Win32OpenSSL.html" target="_blank" style="color: #E49BFF;">here</a></b>.<br>
            Now check if openssl is correctly installed by running the command below. `,
    desc4: `<pre>OpenSSL 3.3.1 4 Jun 2024 (Library: OpenSSL 3.3.1 4 Jun 2024)</pre><br>
              A Similar message will apear in your console, that means you have successfully installed openssl. you can generate your private key now with the command below.`,
  },
  {
    id: 2,
    title: " 2 ) Generate CSR",
    description: "A CSR is a certificate signing request and is also required when purchasing an SSL cert. Using the private key from the previous step, generate the CSR. This will require you to enter identifying information about your organization and domain.<br>",
    desc2: `For Ubuntu Linux, use the command below . . .`,
    desc3: `And if you're on Windows.. well, I feel sorry for you 😅, but you can still download it <b><a href="https://slproweb.com/products/Win32OpenSSL.html" target="_blank" style="color: #E49BFF;">here</a></b>.<br>
            Now check if openssl is correctly installed by running the command below. `,
    desc4: `<pre>OpenSSL 3.3.1 4 Jun 2024 (Library: OpenSSL 3.3.1 4 Jun 2024)</pre><br>
              A Similar message will apear in your console, that means you have successfully installed openssl. you can generate your private key now with the command below.`,
  },
]
export const mongoItems =[
  {
    id: 1,
    title: "1) Mongobd Setup",
    description: `Is Mongodb  mongod process  running on your system?`,
    desc3: ` 😅, Nothing happened? No worries! You've installed the software, now we just need to run it! , Use a Different Directory: Instead of creating /data/db, you can create a data directory within your home directory. For example:`,
    desc4: `This will aboid problems with the permisions,Naw you can Start MongoDB with the new data directory path:`,
    desc5: `Luckily, you should see something like this (check below 👇). In that case, keep this terminal window open`,
    desc6: `<pre>{"t":{"$date":"2024-09-29T11:35:22.512+02:00"},"s":"I",  "c":"WTCHKPT",  "id":22430, timestamp: (0, 0) base write gen: 919"}}}"</pre><br>
            <pre>█</pre><br>`,
  },
  {
    id: 2,
    title: " 2) Express Setup",
    description: "A CSR is a certificate signing request and is also required when purchasing an SSL cert. Using the private key from the previous step, generate the CSR. This will require you to enter identifying information about your organization and domain.<br>",
    desc2: `For Ubuntu Linux, use the command below . . .`,
    desc3: `And if you're on Windows.. well, I feel sorry for you 😅, but you can still download it <b><a href="https://slproweb.com/products/Win32OpenSSL.html" target="_blank" style="color: #E49BFF;">here</a></b>.<br>
            Now check if openssl is correctly installed by running the command below. `,
    desc4: `<pre>OpenSSL 3.3.1 4 Jun 2024 (Library: OpenSSL 3.3.1 4 Jun 2024)</pre><br>
              A Similar message will apear in your console, that means you have successfully installed openssl. you can generate your private key now with the command below.`,
  },
]

export const projects = [
  {
    id: 1,
    title: "NFLKL app",
    des: "Watch all NFL games for free, and utilize our FREE API solution! ",
    img: "/p1.png",
    iconLists: ["/tailwind.svg", "/mongodb.svg","/re.svg"],
    link: "https://github.com/berlincoders/nflkl",
  },
  {
    id: 2,
    title: "skullbug",
    des: "Skullbug is a cutting-edge bug tracking system designed to streamline issue management and resolution for agile software development teams.",
    img: "/skullbug_promo.png",
    iconLists: ["/java.svg","/Spring.png"],
    link: "https://github.com/berlincoders/skullbug",
  },
  {
    id: 3,
    title: "Treasurekeeper app",
    des: "a web app to gamify your finances! ",
    img: "/p3.png",
    iconLists: ["/ruby.svg", "/rails.svg", "/postgresql.svg", "bootstrap.svg", "/stimulus.svg"],
    link: "https://github.com/berlincoders/TreasureKeeper",
  },
  {
    id: 4,
    title: "Myspaceship",
    des: "Blast off into adventure! Rent the Millennium Falcon now for just 9141.86 Galaxian Credits and take your journey to the stars!",
    img: "/p2.png",
    iconLists: ["/ruby.svg", "/rails.svg", "/postgresql.svg", "bootstrap.svg"],
    link: "https://github.com/berlincoders/MySpaceShip",
  },

];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  }
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/berlincoders",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/berlincoders/"
  }
];
