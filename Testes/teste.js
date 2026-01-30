// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets": lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

// Função que retorna a saudação personalizada conforme o canal informado
function saudacaoBot(canal) {
    // TODO: Retorne a saudação correta para cada canal ou "Canal nao suportado" se não reconhecido
    let resultadoCanal
    let saudacao
    
    switch (canal){
      case "whatsapp":
        resultadoCanal = "WhatsAppBot"
        break
        
      case "telegram":
        resultadoCanal = "TelegramBot"
        break
        
      case "webchat":
        resultadoCanal = "WebChatBot"
        break
        
      default:
        resultadoCanal = "0"
    }
    
    if (resultadoCanal === "0"){
      saudacao = ("Canal nao suportado")
    } else {
    saudacao = ("Ola, este e o " + resultadoCanal + "!")
    }
    return saudacao
}

// Entrada do usuário
const canal = gets();
canal = canal.toLowerCase()

// Chama a função e imprime a resposta
let saudacao = saudacaoBot(canal)
print(saudacao);