// Array de objetos representando alunos e suas notas
const alunos = [
    { nome: 'Ana', nota: 8 },
    { nome: 'João', nota: 5 },
    { nome: 'Maria', nota: 7 },
    { nome: 'Pedro', nota: 4 },
    { nome: 'Lucas', nota: 6 },
  ];
  
  // Função que filtra alunos com nota maior ou igual a 6
  const alunosAprovados = (listaAlunos) => {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
  };
  
  // Executa a função e armazena os alunos aprovados
  const aprovados = alunosAprovados(alunos);
  
  // Exibe o resultado de forma organizada
  console.log('Alunos Aprovados:');
  aprovados.forEach(aluno => {
    console.log(`Nome: ${aluno.nome}, Nota: ${aluno.nota}`);
  });
  