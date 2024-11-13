function validateCpf(cpf) {
  const erros = [];

  if (isNaN(cpf)) {
    erros.push({
      message:`O CPF [${cpf}] deve conter apenas numeros`,
      name: 'InvalidFormatError'
    });
  }

  if (cpf.length !== 11) {
    erros.push({
      message: `O CPF [${cpf}] deve conter 11 digitos`,
      name: 'InvalidLengthError'
    });
  }

  return {
    valid: !erros.length,
    erros
  }
}

for (const cpf of ['12345678910', 'abc', '123']) {
  const { valid, erros } = validateCpf(cpf);

  if (valid) {
    console.log(`O CPF [${cpf}] é valido`);
    continue;
  }

  erros.forEach(({ message, name }) => {
    console.log(`[${name}] - ${message}`);
  });
}