export const loadEntries = () => {
  const storedEntries = localStorage.getItem("diaryEntries");
  return storedEntries ? JSON.parse(storedEntries) : [];
};

export const saveEntry = (entry) => {
  const entries = loadEntries();
  const updatedEntries = [entry, ...entries];
  localStorage.setItem("diaryEntries", JSON.stringify(updatedEntries));
};
