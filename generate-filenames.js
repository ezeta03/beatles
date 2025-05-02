// generate-filenames.js
// generate-filenames.js
import fs from "fs";
import path from "path";
import songs from "./src/data/songs.json";

// Aquí puedes continuar con la lógica para trabajar con los datos de 'songs'

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[’']/g, "") // eliminar comillas
    .replace(/[^a-z0-9]+/g, "-") // reemplazar espacios y símbolos por guión
    .replace(/(^-|-$)/g, ""); // quitar guiones al principio/final
}

const outputPath = path.join(__dirname, "public", "data");
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

songs.forEach((song) => {
  const filename = slugify(song.title);
  const fullPath = path.join(outputPath, `${filename}.txt`);
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, `# ${song.title}\n\n(agrega la letra aquí)`);
  }
});

console.log("✅ Archivos generados o verificados en /public/data/");
