import {CardProps} from '../types/card-types';

export const cards = (number: number): CardProps[] => {
  const data = [];

  for (let i = 0; i < number; i++) {
    const task = {
      title: `Tarea ${i}`,
      description: `Descripción de la tarea ${i}`,
      isCompleted: i % 2 === 0,
      index: i,
    };
    data.push(task);
  }
  return data;
};
