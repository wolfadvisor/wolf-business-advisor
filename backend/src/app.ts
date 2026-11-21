import express from "express";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Bem vindo ao curso de TypeScript!");
});

function criaPet(
  id: string,
  nome: string,
  especie: string,
  idade: number,
  adotado: boolean
) {
  return {
    id,
    nome,
    especie,
    idade,
    adotado,
  };
}

let id = 0;

function geraId(): string {
  id += 1;
  return String(id);
}

app.post("/pets", (_req, res) => {
  const pet1 = criaPet(geraId(), "Bolt", "cachorro", 3, false);
  const pet2 = criaPet(geraId(), "Mel", "gato", 2, false);

  res.send([pet1, pet2]);
});

export default app;
