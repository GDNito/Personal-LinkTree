import acountimage from "../assets/test.jfif";

const acountname: string = "Matheus Forster Antunes";
const acountdesc: string = "Desenvolvedor Front-End";
const AcountInfos = () => {
  return (
    <>
      <img
        src={acountimage}
        alt="Imagem de Perfil"
        className="min-h-52 min-w-52 rounded-full bg-orange-600 border-orange-600 border-x-4 text-center"
      />
      <h1 className="text-2xl font-semibold text-center">{acountname}</h1>
      <h2 className="text-xl">{acountdesc}</h2>
    </>
  );
};

export default AcountInfos;
