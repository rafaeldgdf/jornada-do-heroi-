const prompt = require ("prompt-sync")(); 
console.clear()

const h1 = prompt("Esta é a história do Pedrinho que tem o sonho de conquistar o Mr. Olympia, principal campeonato de fisiculturismo mundial.")
console.log();
console.clear()
const h2 = prompt("Para isto, Pedrinho deverá passar por 5 grandes etapas, afim de conseguir conquistar o seu sonho.");
console.log();
console.clear()
console.log("Você será responsável pelas ações de Pedrinho, responda as próximas perguntas com 's' para sim e 'n' para não e decida o destino do mesmo.")
console.log();
console.log();
console.log();
console.log();
let p1 = prompt("Pedrinho fará dieta? ");
console.log();
console.log();
let p2 = prompt("Pedrinho praticará exercícios de força com intensidade? ");
console.log();
console.log();
let p3 = prompt("Pedrinho praticará exercícios cardiorrespiratório? ");
console.log();
console.log();
let p4 = prompt("Pedrinho será acompanhado por bons profissionais de saúde? ");
console.log();
console.log();
let p5 = prompt("E a pergunta mais importante, Pedrinho acordará para o campeonato? ");
console.log();


if (p1 == "s") {var r1 = 1 
}else if (p1 == "n" ||" ") {r1 = 0};

if (p2 == "s") {var r2 = 1
}else if (p2 == "n" || " ") {var r2 = 0};

if (p3 == "s") {var r3 = 1 
}else if (p3 == "n" || " ") {var r3 = 0};

if (p4 == "s") {var r4 = 1 
}else if (p4 == "n" || " ") {var r4 = 0};

if (p5 == "s") {var r5 = 1 
}else if  (p5 == "n" || " ") {var r5 = 0}

let resultado = r1 + r2 + r3 + r4 + r5

//console.log(typeof(resultado))
console.log(`Com ${resultado} respostas positivas referente a sua jornada:`)

if (resultado == 0) {console.log ("Pedrinho falhou miseravelmente em conquistar o seu sonho.")};

if (resultado == 1) {console.log ("Pedrinho falhou, porém merece felicitações pelo esforço de tentar.")}; 

if (resultado == 2) {console.log ("Pedrinho falhou, porém merece felicitações pelo esforço de tentar.")};

if (resultado == 3) {console.log ("Pedrinho está perto de conseguir alcançar seu objetivo, porém ainda deve se esforçar um pouco mais. ")}

if (resultado == 4) {console.log ("Após muito esforço, Pedrinho conseguiu conquistar o 3º lugar no Mr. Olympia, ficando muito satisfeito com o seu trabalho.")}; 

if (resultado == 5) {console.log ("Pedrinho conquistou o seu objetivo, de maneira incontestável e insuperável, a ponto de ser homenageado nominalmente pelo lendário Arnold Schwarzenegger, tornando-se o melhor do mundo e escrevendo seu nome na história da competição!")};




