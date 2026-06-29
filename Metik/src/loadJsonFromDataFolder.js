export async function loadJsonFromDataFolder(relativePath) {
  
  const modules = import.meta.glob('./data/*.json', { eager: true, import: 'default' });

  const matchKey = Object.keys(modules).find((k) => k === relativePath || k.endsWith(relativePath));
  if (!matchKey) {
    throw new Error(`JSON not found in src/data folder: ${relativePath}`);
  }

  return modules[matchKey];
}

