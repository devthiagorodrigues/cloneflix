import { useState } from "react";
import "../Components/form.css";

const Form = ({TextForm}) => {
    const initialForm = {
        nome: "",
        email: "",
        telefone: "",
    };

    const [formState, setFormState] = useState(initialForm);
    const [error, setError] = useState(""); // Estado para armazenar mensagens de erro

    const handleInput = (event) => {
        const { value, name } = event.currentTarget;
        // Se o campo é telefone, assegure-se de que o valor contém apenas números
        if (name === "telefone") {
            const numericValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos
            setFormState({ ...formState, [name]: numericValue.slice(0, 11) }); // Limita a 11 caracteres
        } else {
            setFormState({ ...formState, [name]: value });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(""); // Limpa erros ao tentar enviar

        // Verifica se todos os campos obrigatórios estão preenchidos
        const { nome, email, telefone } = formState;
        if (!nome || !email || !telefone) {
            setError("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        console.log(formState);
        // Adicione o envio do formulário aqui

        // Limpar os campos após o envio
        setFormState(initialForm);
    };

    return (
        <div className="container-form">
                    <p>{TextForm}</p>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formState.nome}
                        onChange={handleInput}
                        placeholder="Nome"
                        required
                    />
                </div>

                <div className="form-control">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInput}
                        placeholder="E-mail"
                        required
                    />
                </div>

                <div className="form-control">
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formState.telefone}
                        onChange={handleInput}
                        placeholder="Telefone"
                        maxLength={11} 
                        required
                    />
                </div>

                {error && (
                    <div className="form-error">
                        {error}
                    </div>
                )}

                <div className="form-control">
                    <button type="submit" className="buttonForm">
                        Vamos lá!
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
