import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    title: "Por hacer",
    tasks: [
      {
        id: uuidv4(),
        title: "Inscribirse al curso de Python",
      },
      {
        id: uuidv4(),
        title: "Inscribirse al curso de JS",
      },
      {
        id: uuidv4(),
        title: "Inscribirse al curso de CSS",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "En progreso",
    tasks: [
      {
        id: uuidv4(),
        title: "Curso de Python",
      },
      {
        id: uuidv4(),
        title: "Curso de JS",
      },
      {
        id: uuidv4(),
        title: "Curso de CSS",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Completado",
    tasks: [
      {
        id: uuidv4(),
        title: "Curso de HTML",
      },
    ],
  },
];

export default mockData;
