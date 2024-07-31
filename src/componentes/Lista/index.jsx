import { useState } from "react";
import "./Lista.css";

function Lista(_props){
    let tarefas=["Tarefa 1", "Tarefa 2", "Tarefa 3"];
    const [marcado, mudarMarcacao] = useState([]);

    const verificar = (event) => {
        var listaAtualizada = [...marcado];
        if (event.target.marcado) {
            listaAtualizada = [...marcado, event.target.value];
        } else {
            listaAtualizada.splice(marcado.indexOf(event.target.value), 1);
        }
        mudarMarcacao(listaAtualizada);
    }

    const tarefasMarcadas = marcado.length
        ? marcado.reduce((total, item) => {
            return total + "," + item;
        }) : "";

    const estaMarcado = (item) =>
        marcado.includes(item) ? "item-marcado" : "item-nao-marcado";
    
    return (
        <>
        <div className="app">
        <div className="lista">
            <div className="titulo">Lista de Tarefas:</div>
            <div className="container-lista">
                {tarefas.map((item, index) => (
                    <div key={index}>
                        <input value={item} type="checkbox" onChange={verificar} />
                        <span className={estaMarcado(item)}>{item}</span>
                    </div>
                ))}
            </div>
        </div>
            {` ${tarefasMarcadas}`}
        <div>

        </div>
        </div>
        </>
    );
}

export default Lista;