import { useState } from "react";
import "../components/form.css";

const Form = ({ TextForm }) => {
  const initialForm = {
    apelido: "",
    contato: "",
    mensagem: "",
  };

  const [formState, setFormState] = useState(initialForm);
  const [error, setError] = useState("");

  const handleInput = (event) => {
    const { value, name } = event.currentTarget;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    const { apelido, contato, mensagem } = formState;
    if (!apelido || !contato || !mensagem) {
      setError("Preencha todos os campos, por favor.");
      return;
    }

    // Nenhum dado é salvo, apenas reseta
    console.log("Simulação de envio:", formState);
    setFormState(initialForm);
  };

  return (
    <div className="container-form">
      <p className="text-form">{TextForm}</p>

      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            name="apelido"
            value={formState.apelido}
            onChange={handleInput}
            placeholder="Seu apelido"
          />
        </div>

        <div className="form-control">
          <input
            type="text"
            name="contato"
            value={formState.contato}
            onChange={handleInput}
            placeholder="Contato"
          />
        </div>

        <div className="form-control">
          <input
            type="text"
            name="mensagem"
            value={formState.mensagem}
            onChange={handleInput}
            placeholder="Mensagem"
          />
        </div>

        {error && (
          <div className="form-error" style={{ color: "red", marginBottom: "10px" }}>
            {error}
          </div>
        )}

        <div className="form-control">
          <button type="submit" className="buttonForm">
            Enviar
          </button>
        </div>
      </form>

      <p className="form-footer">
        ⚠️ Este formulário é apenas um exercício de front-end. Nenhuma informação é enviada ou salva.
      </p>
    </div>
  );
};

export default Form;