class InvalidFormatError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidFormatError";
  }
}

class InvalidLengthError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidLengthError";
  }
}

function validateCpf(cpf) {
  if (isNaN(cpf)) {
    throw new InvalidFormatError(`O Cpf [${cpf}] deve conter apenas numeros`);
  }
  if (cpf.length !== 11) {
    throw new InvalidLengthError(`O Cpf [${cpf}] deve conter 11 digitos`);
  }
}

for (const cpf of ['abc', '12345678910']) {
  try {
    validateCpf(cpf);
    console.log(`O Cpf [${cpf}] é valido`);
  } catch (error) {
    if (error instanceof InvalidFormatError || InvalidLengthError) {
      console.log(error.message);
      continue
    }
      console.log('Erro desconhecido', error.message);
  }
}