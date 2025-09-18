function status(resquest, response) {
  response.status(200).json({ mensagem: "Esse endpoint de status funcionol" });
}

export default status;
