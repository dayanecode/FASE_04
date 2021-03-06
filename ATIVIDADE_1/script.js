let conteudoGulliver = `<html>
   <head>
      <title>Gulliver Traveller - Roteiros</title>
   </head>
   <body>
    <b>->1 - Roteiros para *São Paulo*</b>
    <br>
    A Terra da Garoa!
    <br>
    Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista
    <br>
      #Roteiro A | Região: Avenida Paulista
    <br>
    MASP; Parque Trianon; Rua Augusta
    <br>
    #Roteiro B | Região: Centro
    <br>
      Catedral da Sé; Pátio do Colégio; Rua Augusta
    <br>
      #Roteiro C | Região: Vila Madalena
    <br>
      Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila
    <br> 
    <b>->2 - Roteiros para *Las Vegas*</b>
    <br>
      Viva Las Vegas!
    <br>       
      A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!
    <br>
      #Roteiro A | Região: Las Vegas Boulevard South
    <br>
      Fonte do Bellagio; Principais Cassinos; Madame Tussauds
    <br>
      #Roteiro B | Região: Downtown;
    <br> 
      Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; 
    <br>
      #Roteiro C | Região: Las Vegas Boulevard North
    <br>
    Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b>
    <br>
      Privet!
    <br>
      A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin
    <br>
      #Roteiro B | Região: Centro
    <br>
      Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou
    <br>
      #Roteiro C | Região: Obras pela cidade
    <br>
      Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  
    <br> 
   </body>
</html>`

function getHTML() {

  //Limpando as tags do conteúdo Gulliver
  let conteudoClean = conteudoGulliver.replaceAll("<br>", '')
    .replaceAll("<head>", '')
    .replaceAll("</head>", '')
    .replaceAll("<title>", '')
    .replaceAll("</title>", '')
    .replaceAll("</b>", '')
    .replaceAll("<body>", '')
    .replaceAll("</body>", '')
    .replaceAll("<b>->", '')
    .replaceAll("<html>", '')
    .replaceAll("</html>", '')
  console.log(conteudoClean)

  //1 - Nome das cidades avaliadas
  let buscarCidades = conteudoClean.split("*")
  console.table(buscarCidades)
  let cidadesAvaliadas = `${buscarCidades[1]}, ${buscarCidades[3]} e ${buscarCidades[5]}`
  console.log(cidadesAvaliadas)
  alert(`Os nomes das cidades avaliadas são: ${cidadesAvaliadas}.`)


  //2 - O conteúdo do Roteiro A de cada cidade avaliada.
  let buscarRoteiroA = conteudoClean.split("#")
  console.table(buscarRoteiroA)
  let RoteirosA = `SÃO PAULO: ${buscarRoteiroA[1]}. LAS VEGAS: ${buscarRoteiroA[4]}. MOSCOU: ${buscarRoteiroA[7]}.`
  alert(RoteirosA)

  //3 - Quantos locais são citados no roteiro A de cada cidade
  let buscarQtdLocais = conteudoClean.split("\n")
  console.table(buscarQtdLocais)

  //Locais de SÃO PAULO
  let qtdLocaisSP = buscarQtdLocais[11 + 2].split(";")
  console.log(qtdLocaisSP)
  console.log(qtdLocaisSP.length)

  //Locais de LAS VEGAS
  let qtdLocaisLV = buscarQtdLocais[29 + 2].split(";")
  console.log(qtdLocaisLV)
  console.log(qtdLocaisLV.length)

  //Locais de MOSCOU
  let qtdLocaisMC = buscarQtdLocais[43].split(";")
  console.log(qtdLocaisMC)
  console.log(qtdLocaisMC.length)
  alert(`Na cidade de SÃO PAULO são citados ${qtdLocaisSP.length} locais. Em LAS VEGAS ${qtdLocaisLV.length} locais e em MOSCOU também são citados ${qtdLocaisMC.length} locais.`)


  // //4 - O nome dos pontos turísticos localizados no bairro Centro da Cidade de São Paulo

  // let buscarPtCentroSP = buscarRoteiroA[2].search("Centro")
  // console.log(buscarPtCentroSP)
}