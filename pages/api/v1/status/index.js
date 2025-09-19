import database from "infra/database.js";

async function status(resquest, response) {
  const result = await database.query("SELECT 1 + 1 as sun;");
  console.log(result.rows);
  response.status(200).json({ mensagem: "Esse endpoint de status funcionol" });
}

export default status;
