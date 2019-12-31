export const get = (path, obj) =>
  path.reduce(
    (acc, current) => (acc && acc[current] ? acc[current] : null),
    obj
  );
