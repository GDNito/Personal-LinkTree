type Props = {
  image: any;
  linkName: string;
  http: string;
};

const LinkTemplate = ({ image, linkName, http }: Props) => {
  return (
    <a
      href={http}
      className="border-2 w-full h-14 rounded-3xl grid grid-rows-1  grid-cols-3 place-items-center transition-all duration-200 hover:bg-orange-200 m-2"
      target="blank"
    >
      <img src={image} alt="" className="p-2 max-w-full max-h-full" />
      <h3 className="col-span-2 justify-self-start text-lg ">{linkName}</h3>
    </a>
  );
};

export default LinkTemplate;
