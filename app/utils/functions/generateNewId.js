export const generateNewID = (array, initials) => {
  if (!array || array.length === 0) return `${initials}1000001`;

  const lastId = array.at(-1)?.u_id?.slice(3);

  const newId = `${initials}${+lastId + 1}`;

  return newId;
};
