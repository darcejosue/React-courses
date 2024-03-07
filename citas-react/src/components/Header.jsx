function Header({ tomarValor }) {
  const variableHeader = true;

  tomarValor(variableHeader);
  return (
    <>
      <h1 className="font-black text-5xl text-center mr-10 ">
        Seguimiento Pacientes{" "}
        <span className="text-indigo-600">Veterinaria</span>
      </h1>
    </>
  );
}

export default Header;
