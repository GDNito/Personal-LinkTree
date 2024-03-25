import LinkTemplate from "./LinkTemplate";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import whatsapp from "../assets/whatsapp.svg";
import port from "../assets/port.svg";

const LinkName = ["Linkedin", "Github", "Whatsapp", "Portifólio Pessoal"];
const LinkHTTP = [
  "https://www.linkedin.com/in/matheusforsterantunes/",
  "https://github.com/GDNito",
  "https://wa.me/5511984258225",
  "https://matheusforster.vercel.app",
];
const LinkImage = [linkedin, github, whatsapp, port];

const Links = () => {
  return (
    <div className=" w-64 xl:w-2/4 h-5/6 rounded-md p-2">
      {LinkName.map((name, index) => (
        <LinkTemplate
          key={index}
          image={LinkImage[index]}
          http={LinkHTTP[index]}
          linkName={name}
        />
      ))}
    </div>
  );
};

export default Links;
