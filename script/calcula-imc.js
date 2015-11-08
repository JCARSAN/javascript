window.onload = function()
{   
	var botaoCadastrar = document.getElementById("cadastrar");
	var nome = document.getElementById("nomePaciente");
	var peso = document.getElementById("pesoPaciente");
	var altura = document.getElementById("alturaPaciente");
	var trPacientes = document.getElementsByClassName("pacientes");
	var nPacientes = 0;
	
	function Paciente(nome, peso, altura)
	{
		this.nome = nome;
		this.peso = peso;
		this.altura = altura;
		
		this.calculaImc = function()
		{
			return this.peso/(this.altura*this.altura);
		}
	}
	
	function criaLinhaTabela()
	{   
		var tabela = document.getElementById("corpoTabela");
		var linhaTabela = document.createElement("tr");
		var colunaNome = document.createElement("td");
		var colunaPeso = document.createElement("td");
		var colunaAltura = document.createElement("td");
		var colunaImc = document.createElement("td");
		linhaTabela.setAttribute("class","pacientes");
		colunaNome.setAttribute("class","info-nome");
		colunaPeso.setAttribute("class","info-peso");
		colunaAltura.setAttribute("class","info-altura");
		colunaImc.setAttribute("class","calcula-imc");
		tabela.appendChild(linhaTabela);
		linhaTabela.appendChild(colunaNome);
		linhaTabela.appendChild(colunaPeso);
		linhaTabela.appendChild(colunaAltura);
		linhaTabela.appendChild(colunaImc);
	}
	
	function limpaInput()
	{
		nome.value = "";
		peso.value = "";
		altura.value = "";	
	}
	
	function preencheTabela(paciente)
	{
		trPacientes[nPacientes].children[0].textContent = paciente.nome;
		trPacientes[nPacientes].children[1].textContent = paciente.peso;
		trPacientes[nPacientes].children[2].textContent = paciente.altura;
		trPacientes[nPacientes].children[3].textContent = paciente.calculaImc();
		nPacientes++;	
	}
	
	botaoCadastrar.onclick = function()
	{   
		
		var dadoNome = nome.value;
		var dadoPeso = peso.value;
		var dadoAltura = altura.value;
		
		var paciente = new Paciente(dadoNome,dadoPeso,dadoAltura);
		criaLinhaTabela();
		preencheTabela(paciente);
		limpaInput();
	}
	
}