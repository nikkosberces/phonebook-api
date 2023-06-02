const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

let persons = [
  {
    id: 1,
    name: "Nikko Pebrero Berces",
    number: "0916-4461311",
  },
  {
    id: 2,
    name: "Cassandra Mae Berces",
    number: "0916-4461311",
  },
  {
    id: 3,
    name: "Christian Casil",
    number: "0916-4461311",
  },
  {
    id: 4,
    name: "Emgie Perillo",
    number: "0916-4461311",
  },
];

function generateId() {
  return Math.floor(Math.random() * 1000);
}

app.get("/api/persons", (_req, res) => {
  res.status(200).json(persons);
});

app.post("/api/persons", (req, res) => {
  const { name, number } = req.body;

  const person = {
    id: generateId(),
    name,
    number,
  };

  persons.push(person);

  res.status(201).json(person);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = parseInt(req.params.id);

  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
