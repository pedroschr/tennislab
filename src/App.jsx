import { useState, useEffect, useRef } from "react";

/* ══════════════════════════════════════════════════════════════════
   SEO — Meta tags, Schema.org JSON-LD, Open Graph
   Palavras-chave: melhor raquete de tênis, comparador de raquetes,
   equipamentos de tênis, kit de tênis, corda de tênis, calçado para tênis
══════════════════════════════════════════════════════════════════ */
function useSEO(step, cat) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const titles = {
      0: "TennisLab – Comparador de Raquetes e Equipamentos de Tênis 2025 | Melhores Preços",
      raquete: "Melhor Raquete de Tênis 2025 | Compare Wilson, Babolat, Head – TennisLab",
      corda:   "Melhor Corda de Tênis 2025 | Luxilon, Babolat RPM, Wilson NXT – TennisLab",
      bola:    "Melhor Bola de Tênis 2025 | Wilson US Open, Penn ATP – TennisLab",
      raqueteira:"Melhor Raqueteira de Tênis 2025 | Head, Wilson, Tecnifibre – TennisLab",
      tenis:   "Melhor Calçado para Tênis 2025 | Asics, Nike, Adidas – TennisLab",
    };
    const descs = {
      0: "Compare raquetes, cordas, bolas, raqueteiras e calçados para tênis. Produtos avaliados pelo nosso time especialista. Veja preços na Amazon, Netshoes e Centauro.",
      raquete: "Qual a melhor raquete de tênis para você? Compare Wilson Clash, Babolat Pure Aero, Head Speed e mais. Análise técnica por nível e estilo de jogo.",
      corda:   "Qual a melhor corda de tênis? Compare Babolat RPM Blast, Luxilon ALU Power, Wilson NXT. Dicas de tensão e tipo de jogo.",
      bola:    "Compare as melhores bolas de tênis: Wilson US Open, Penn ATP, Babolat Gold. Veja qual é ideal para saibro, quadra dura ou indoor.",
      raqueteira:"Compare raqueteiras de tênis Head, Wilson e Tecnifibre. Veja capacidade, bolsos térmicos e preços nas principais lojas.",
      tenis:   "Qual o melhor tênis para praticar tênis? Compare Asics Gel-Resolution, Nike Air Zoom Vapor, Adidas Barricade. Análise por tipo de quadra.",
    };
    const key = step === 0 ? 0 : (cat || 0);
    document.title = titles[key] || titles[0];
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = descs[key] || descs[0];
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) { ogTitle = document.createElement('meta'); ogTitle.setAttribute('property','og:title'); document.head.appendChild(ogTitle); }
    ogTitle.content = titles[key] || titles[0];
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) { ogDesc = document.createElement('meta'); ogDesc.setAttribute('property','og:description'); document.head.appendChild(ogDesc); }
    ogDesc.content = descs[key] || descs[0];
    // Schema.org JSON-LD
    let schema = document.getElementById('tennislab-schema');
    if (!schema) { schema = document.createElement('script'); schema.id = 'tennislab-schema'; schema.type = 'application/ld+json'; document.head.appendChild(schema); }
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "name": "TennisLab",
          "url": "https://tennislab.com.br",
          "description": "Comparador de equipamentos de tênis com curadoria do time especialista TennisLab",
          "potentialAction": { "@type": "SearchAction", "target": "https://tennislab.com.br/?q={search_term_string}", "query-input": "required name=search_term_string" }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Qual a melhor raquete de tênis para iniciante?", "acceptedAnswer": { "@type": "Answer", "text": "Para iniciantes, recomendamos raquetes leves com cabeça grande (110–115 polegadas) como a Head Ti.S6 (232g) ou Wilson Hyper Hammer 5.3. Elas oferecem mais potência com menos esforço e perdoam erros de timing." } },
            { "@type": "Question", "name": "Qual a melhor corda de tênis para spin?", "acceptedAnswer": { "@type": "Answer", "text": "A Babolat RPM Blast 1.25mm é a referência mundial para spin, usada por Rafael Nadal. Para quem busca mais conforto com bom spin, a Head Hawk Touch é uma excelente alternativa." } },
            { "@type": "Question", "name": "Qual calçado usar para jogar tênis no saibro?", "acceptedAnswer": { "@type": "Answer", "text": "Para saibro (terra batida), o Asics Gel-Resolution 9 é a referência do mercado, com sola Herringbone para aderência. O Babolat Jet Mach 3 com sola Michelin também é muito popular." } },
            { "@type": "Question", "name": "Qual a tensão ideal para encordoar uma raquete de tênis?", "acceptedAnswer": { "@type": "Answer", "text": "A tensão ideal depende do nível e estilo de jogo. Iniciantes e jogadores de controle usam tensões mais baixas (48–52 lbs), enquanto jogadores agressivos preferem 54–58 lbs. Cordas co-poly devem ser encordoadas mais baixas (48–54 lbs)." } },
            { "@type": "Question", "name": "Qual a diferença entre raquete head-heavy e head-light?", "acceptedAnswer": { "@type": "Answer", "text": "Raquetes head-heavy têm mais peso na cabeça, gerando mais potência — ideais para iniciantes e jogadores de fundo. Raquetes head-light têm o peso concentrado no cabo, oferecendo mais controle e velocidade de swing — preferidas por jogadores avançados." } },
            { "@type": "Question", "name": "Onde comprar equipamentos de tênis com o melhor preço?", "acceptedAnswer": { "@type": "Answer", "text": "As melhores lojas para comprar equipamentos de tênis no Brasil são Amazon, Netshoes, Centauro e Tennis Point. Compare os preços em todas elas no TennisLab antes de decidir." } }
          ]
        }
      ]
    });
  }, [step, cat]);
}


/* ══════════════════════════════════════════════════════════════════
   BANCO DE DADOS CURADO — produtos reais, specs verificados
   Seleção feita pelo time especialista TennisLab.
══════════════════════════════════════════════════════════════════ */
const DB = {
  raquete: [
    // ── INICIANTE ──
    { id:"head-ti-s6",        marca:"Head",     produto:"Ti.S6",              nivel:"iniciante",    estilo:["baseline","defensivo","polivalente"], peso:"232g", balanco:"head-heavy", padrao:"oversize 115 pol.", preco_brl:"R$ 280–R$ 420",   busca:"Head Ti.S6 raquete tênis adulto",   pontos_spin:2, pontos_controle:3, pontos_potencia:5, descricao:"Raquete leve e com cabeça grande, ideal para iniciantes que precisam de potência sem muito esforço físico." },
    { id:"babolat-boost-d",   marca:"Babolat",  produto:"Boost Drive",        nivel:"iniciante",    estilo:["baseline","polivalente"],             peso:"270g", balanco:"head-heavy", padrao:"midplus 105 pol.",  preco_brl:"R$ 380–R$ 550",   busca:"Babolat Boost Drive raquete tênis", pontos_spin:3, pontos_controle:3, pontos_potencia:4, descricao:"Confortável, forgiving e potente. Ótima para mulheres e jogadores que buscam praticidade no início." },
    { id:"wilson-hyper-h5",   marca:"Wilson",   produto:"Hyper Hammer 5.3",   nivel:"iniciante",    estilo:["baseline","defensivo"],               peso:"248g", balanco:"head-heavy", padrao:"oversize 110 pol.", preco_brl:"R$ 250–R$ 380",   busca:"Wilson Hyper Hammer 5.3 raquete", pontos_spin:2, pontos_controle:3, pontos_potencia:5, descricao:"Clássica de treino, frame leve e cabeça grande para máxima zona de conforto." },
    // ── INTERMEDIÁRIO ──
    { id:"wilson-clash-100",  marca:"Wilson",   produto:"Clash 100 v2",       nivel:"intermediario",estilo:["baseline","polivalente"],             peso:"295g", balanco:"even",       padrao:"midplus 100 pol.",  preco_brl:"R$ 1.100–R$ 1.600",busca:"Wilson Clash 100 v2 raquete", links:{ amazon:"https://www.amazon.com.br/dp/B09RGCLH3M", centauro:"https://www.centauro.com.br/raquete-de-tenis-wilson-clash-100-v2-adulto-972482.html" },  pontos_spin:4, pontos_controle:5, pontos_potencia:4, descricao:"Tecnologia FreeFlex proporciona controle e conforto excepcionais. Excelente para quem está evoluindo o jogo de fundo de quadra." },
    { id:"head-speed-mp",     marca:"Head",     produto:"Speed MP 2024",      nivel:"intermediario",estilo:["polivalente","saque-voleio"],          peso:"300g", balanco:"even",       padrao:"midplus 100 pol.",  preco_brl:"R$ 1.200–R$ 1.800",busca:"Head Speed MP 2024 raquete tênis",   pontos_spin:4, pontos_controle:4, pontos_potencia:4, descricao:"A raquete do Zverev. Versátil, rápida e equilibrada. Perfeita para quem quer atacar e defender bem." },
    { id:"babolat-pure-drive-lite", marca:"Babolat", produto:"Pure Drive Lite",nivel:"intermediario",estilo:["baseline","polivalente"],           peso:"270g", balanco:"slight-head-heavy", padrao:"midplus 100 pol.", preco_brl:"R$ 950–R$ 1.400", busca:"Babolat Pure Drive Lite raquete tênis", pontos_spin:4, pontos_controle:3, pontos_potencia:5, descricao:"Versão mais leve da icônica Pure Drive. Máxima potência e spin para jogadores em evolução." },
    { id:"head-radical-mp",   marca:"Head",     produto:"Radical MP 2023",    nivel:"intermediario",estilo:["baseline","defensivo"],               peso:"295g", balanco:"even",       padrao:"midplus 98 pol.",   preco_brl:"R$ 1.100–R$ 1.600",busca:"Head Radical MP 2023 raquete",  pontos_spin:4, pontos_controle:5, pontos_potencia:3, descricao:"A raquete do Andy Murray. Precisão cirúrgica e controle sem abrir mão do spin." },
    // ── AVANÇADO ──
    { id:"babolat-pure-aero", marca:"Babolat",  produto:"Pure Aero 2023",     nivel:"avancado",     estilo:["baseline","polivalente"],             peso:"300g", balanco:"slight-head-heavy", padrao:"midplus 100 pol.", preco_brl:"R$ 1.800–R$ 2.500", busca:"Babolat Pure Aero 2023 raquete", links:{ netshoes:"https://www.netshoes.com.br/p/raquete-de-tenis-babolat-pure-aero-2023-l2-preto-2DC-1090-006" }, pontos_spin:5, pontos_controle:4, pontos_potencia:4, descricao:"A arma do Nadal. Spin fenomenal com Aero Modular Technology. Referência para jogadores de fundo de quadra agressivos." },
    { id:"wilson-pro-staff-97", marca:"Wilson", produto:"Pro Staff 97 v14",   nivel:"avancado",     estilo:["baseline","defensivo","polivalente"], peso:"315g", balanco:"head-light",  padrao:"midplus 97 pol.",   preco_brl:"R$ 2.000–R$ 2.800",busca:"Wilson Pro Staff 97 v14 raquete", pontos_spin:4, pontos_controle:5, pontos_potencia:3, descricao:"A lendária raquete do Federer (versão 97\"). Feeling incomparável, controle absoluto para jogadores avançados." },
    { id:"head-prestige-mp",  marca:"Head",     produto:"Prestige MP 2023",   nivel:"avancado",     estilo:["baseline","defensivo"],               peso:"320g", balanco:"head-light",  padrao:"midplus 95 pol.",   preco_brl:"R$ 1.900–R$ 2.600",busca:"Head Prestige MP 2023 raquete",  pontos_spin:3, pontos_controle:5, pontos_potencia:3, descricao:"Para jogadores técnicos. Padrão fechado 95\" exige precisão mas recompensa com controle excepcional." },
    { id:"yonex-ezone-98",    marca:"Yonex",    produto:"EZONE 98 2022",      nivel:"avancado",     estilo:["polivalente","saque-voleio"],          peso:"305g", balanco:"even",        padrao:"midplus 98 pol.",   preco_brl:"R$ 1.700–R$ 2.400",busca:"Yonex EZONE 98 raquete tênis",   pontos_spin:4, pontos_controle:4, pontos_potencia:4, descricao:"Isometria exclusiva Yonex. Sweetspot maior em padrão 98\". Popular no tour asiático e entre jogadores versáteis." },
    // ── PROFISSIONAL ──
    { id:"wilson-pro-staff-rf97", marca:"Wilson", produto:"Pro Staff RF97 Autograph", nivel:"profissional", estilo:["baseline","defensivo"], peso:"340g", balanco:"head-light", padrao:"midplus 97 pol.", preco_brl:"R$ 3.200–R$ 4.500", busca:"Wilson Pro Staff RF97 Autograph raquete", pontos_spin:4, pontos_controle:5, pontos_potencia:3, descricao:"A raquete que o Federer usou por 20 anos. Peso alto (340g) exige técnica e condicionamento. Feeling inigualável." },
    { id:"babolat-pure-strike-18-20", marca:"Babolat", produto:"Pure Strike 18×20", nivel:"profissional", estilo:["baseline","saque-voleio","polivalente"], peso:"305g", balanco:"even", padrao:"midplus 98 pol.", preco_brl:"R$ 2.800–R$ 3.800", busca:"Babolat Pure Strike 18x20 raquete", pontos_spin:3, pontos_controle:5, pontos_potencia:4, descricao:"Versão com padrão fechado 18×20. Precisão máxima para quem domina a técnica. Usada por Tsitsipas." },
  ],

  corda: [
    // ── INICIANTE ──
    { id:"wilson-nxt-16",     marca:"Wilson",   produto:"NXT 16",             nivel:"iniciante",    estilo:["polivalente","defensivo","baseline"],  material:"multifilamento", espessura:"1.30mm", tensao_rec:"50-55 lbs", preco_brl:"R$ 45–R$ 70",    busca:"Wilson NXT 16 corda raquete tênis",  pontos_spin:2, pontos_controle:4, pontos_conforto:5, descricao:"Multifilamento macia e confortável. Excelente absorção de vibração. Ideal para cotovelo de tenista." },
    { id:"babolat-xcel-130",  marca:"Babolat",  produto:"Xcel 130",           nivel:"iniciante",    estilo:["polivalente","defensivo"],             material:"multifilamento", espessura:"1.30mm", tensao_rec:"48-54 lbs", preco_brl:"R$ 50–R$ 75",    busca:"Babolat Xcel 1.30 corda tênis",     pontos_spin:3, pontos_controle:3, pontos_conforto:5, descricao:"Corda de entrada confortável com boa durabilidade. Popular em academias e jogadores iniciantes." },
    // ── INTERMEDIÁRIO ──
    { id:"babolat-rpm-blast-125", marca:"Babolat", produto:"RPM Blast 125",  nivel:"intermediario",estilo:["baseline","polivalente"],             material:"monofilamento co-poly", espessura:"1.25mm", tensao_rec:"52-57 lbs", preco_brl:"R$ 80–R$ 120", busca:"Babolat RPM Blast 125 corda tênis", pontos_spin:5, pontos_controle:4, pontos_conforto:3, descricao:"A corda mais vendida do mundo. Snap-back excepcional para spin. Usada por Nadal. Referência em co-poly." },
    { id:"solinco-tour-bite-125", marca:"Solinco", produto:"Tour Bite 125",  nivel:"intermediario",estilo:["baseline","polivalente"],             material:"monofilamento co-poly", espessura:"1.25mm", tensao_rec:"50-56 lbs", preco_brl:"R$ 90–R$ 135", busca:"Solinco Tour Bite 125 corda tênis", pontos_spin:5, pontos_controle:4, pontos_conforto:2, descricao:"Perfil pentagonal para máximo mordida na bola. Favorita de jogadores de topspin agressivos." },
    { id:"head-hawk-125",     marca:"Head",     produto:"Hawk Touch 125",     nivel:"intermediario",estilo:["polivalente","saque-voleio"],          material:"monofilamento co-poly", espessura:"1.25mm", tensao_rec:"50-56 lbs", preco_brl:"R$ 75–R$ 110", busca:"Head Hawk Touch 125 corda tênis",      pontos_spin:4, pontos_controle:5, pontos_conforto:3, descricao:"Co-poly com excelente controle e feeling. Mais confortável que cordas de spin puras. Versátil." },
    // ── AVANÇADO ──
    { id:"luxilon-alu-power-125", marca:"Luxilon", produto:"ALU Power 125",  nivel:"avancado",     estilo:["baseline","polivalente","saque-voleio"],material:"monofilamento co-poly aluminium", espessura:"1.25mm", tensao_rec:"48-54 lbs", preco_brl:"R$ 120–R$ 170", busca:"Luxilon ALU Power 125 corda tênis", pontos_spin:4, pontos_controle:5, pontos_conforto:3, descricao:"Referência absoluta no tour. Usada por Djokovic e Federer (híbrido). Controle e tensão estável." },
    { id:"luxilon-4g-125",    marca:"Luxilon",  produto:"4G 125",             nivel:"avancado",     estilo:["baseline","polivalente"],             material:"monofilamento co-poly", espessura:"1.25mm", tensao_rec:"48-54 lbs", preco_brl:"R$ 130–R$ 180", busca:"Luxilon 4G 125 corda raquete",       pontos_spin:5, pontos_controle:5, pontos_conforto:3, descricao:"Evolução da ALU Power com mais spin. Preferida por jogadores que querem o melhor dos dois mundos." },
    // ── PROFISSIONAL ──
    { id:"wilson-natural-gut-16", marca:"Wilson", produto:"Natural Gut 16",  nivel:"profissional", estilo:["polivalente","saque-voleio","defensivo"],material:"tripa natural", espessura:"1.30mm", tensao_rec:"52-60 lbs", preco_brl:"R$ 280–R$ 420", busca:"Wilson Natural Gut 16 corda tênis", pontos_spin:3, pontos_controle:5, pontos_conforto:5, descricao:"A corda original e ainda a melhor em conforto e potência viva. Usada como cruzada no híbrido de Federer." },
    { id:"babolat-rpm-hurricane-125", marca:"Babolat", produto:"RPM Hurricane 125", nivel:"profissional", estilo:["baseline"], material:"monofilamento co-poly", espessura:"1.25mm", tensao_rec:"50-56 lbs", preco_brl:"R$ 110–R$ 160", busca:"Babolat RPM Hurricane 125 corda", pontos_spin:5, pontos_controle:4, pontos_conforto:2, descricao:"Perfil octogonal para spin extremo. Para jogadores que querem ainda mais efeito que a RPM Blast." },
  ],

  bola: [
    { id:"wilson-us-open",    marca:"Wilson",   produto:"US Open Extra Duty", nivel:"todos",        superficies:["quadra dura","saibro"],           durabilidade:4, pressao:5, preco_brl:"R$ 55–R$ 75 (tubo 3)",  busca:"Wilson US Open bola tênis", pontos_qualidade:5, descricao:"Bola oficial do US Open. Feltro extra duty para quadras duras. Excelente durabilidade e pressão consistente." },
    { id:"penn-atp",          marca:"Penn",     produto:"ATP Regular Duty",   nivel:"todos",        superficies:["saibro","grama","indoor"],        durabilidade:4, pressao:5, preco_brl:"R$ 50–R$ 70 (tubo 3)",  busca:"Penn ATP bola tênis",       pontos_qualidade:5, descricao:"Bola oficial ATP. Regular duty para saibro e pisos internos. Padrão de torneios internacionais." },
    { id:"babolat-gold",      marca:"Babolat",  produto:"Gold Premium",       nivel:"todos",        superficies:["saibro","grama"],                durabilidade:5, pressao:4, preco_brl:"R$ 60–R$ 80 (tubo 4)",  busca:"Babolat Gold Premium bola tênis",   pontos_qualidade:5, descricao:"4 bolas por tubo. Feltro premium com excelente durabilidade. Popular em treinamentos e academias." },
    { id:"head-pro",          marca:"Head",     produto:"Pro S",              nivel:"iniciante|intermediario", superficies:["saibro","indoor"],   durabilidade:3, pressao:4, preco_brl:"R$ 45–R$ 60 (tubo 4)",  busca:"Head Pro S bola tênis",     pontos_qualidade:4, descricao:"Boa opção de custo-benefício para treinos regulares em saibro." },
    { id:"dunlop-atp",        marca:"Dunlop",   produto:"ATP Championship",   nivel:"todos",        superficies:["quadra dura","saibro"],           durabilidade:4, pressao:5, preco_brl:"R$ 48–R$ 68 (tubo 3)",  busca:"Dunlop ATP Championship bola tênis", pontos_qualidade:5, descricao:"Bola oficial ATP Championship. Tecnologia HD Core para pressão consistente por mais tempo." },
  ],

  raqueteira: [
    { id:"head-tour-team-12r", marca:"Head",    produto:"Tour Team 12R Monstercombi", nivel:"todos", capacidade:"12 raquetes", bolsos:5, mochila:true,  preco_brl:"R$ 420–R$ 600",  busca:"Head Tour Team 12R raqueteira tênis",  pontos_organizacao:5, pontos_protecao:5, descricao:"Raqueteira completa com compartimento térmico para raquetes, bolso para roupas e sistema de mochila." },
    { id:"wilson-super-tour-9r", marca:"Wilson", produto:"Super Tour 9 Pack", nivel:"todos",        capacidade:"9 raquetes",  bolsos:4, mochila:false, preco_brl:"R$ 300–R$ 450",  busca:"Wilson Super Tour 9 Pack raqueteira", pontos_organizacao:4, pontos_protecao:5, descricao:"Clássica do tour. Compartimento térmico, bolso de acessórios separado. Excelente proteção." },
    { id:"babolat-pure-aero-6r", marca:"Babolat", produto:"Pure Aero Racket Holder x6", nivel:"iniciante|intermediario", capacidade:"6 raquetes", bolsos:3, mochila:false, preco_brl:"R$ 200–R$ 320", busca:"Babolat Pure Aero raqueteira x6", pontos_organizacao:3, pontos_protecao:4, descricao:"Compacta e funcional para o dia a dia. Combina com a linha Pure Aero. Boa entrada no mundo das raqueteiras." },
    { id:"tecnifibre-tour-endurance-15r", marca:"Tecnifibre", produto:"Tour Endurance 15R", nivel:"avancado|profissional", capacidade:"15 raquetes", bolsos:6, mochila:true, preco_brl:"R$ 650–R$ 950", busca:"Tecnifibre Tour Endurance 15R raqueteira", pontos_organizacao:5, pontos_protecao:5, descricao:"Para atletas sérios. 15 raquetes, 6 bolsos organizados, compartimento sapatos separado e sistema mochila." },
    { id:"head-djokovic-supercombi", marca:"Head", produto:"Djokovic Supercombi 9R", nivel:"intermediario|avancado", capacidade:"9 raquetes", bolsos:4, mochila:true, preco_brl:"R$ 480–R$ 700", busca:"Head Djokovic Supercombi 9R raqueteira", pontos_organizacao:5, pontos_protecao:5, descricao:"Edição especial Djokovic. Compartimento térmico duplo, bolso laptop, sistema mochila integrado." },
  ],

  tenis: [
    // ── SAIBRO ──
    { id:"asics-gel-resolution-9", marca:"Asics", produto:"Gel-Resolution 9",  nivel:"todos",     superficies:["saibro","quadra dura"],          drop:"10mm", cabedal:"sintético", sola:"Herringbone",     preco_brl:"R$ 700–R$ 1.000", busca:"Asics Gel Resolution 9 tênis quadra", pontos_estabilidade:5, pontos_amortecimento:5, pontos_durabilidade:5, descricao:"Referência em estabilidade. Tecnologia GELTM no calcanhar. Sola dupla de borracha com HB 3D para saibro." },
    { id:"nike-air-zoom-vapor-pro-2", marca:"Nike", produto:"Air Zoom Vapor Pro 2", nivel:"todos", superficies:["quadra dura","saibro"],          drop:"9mm",  cabedal:"mesh",      sola:"RC outsole",       preco_brl:"R$ 750–R$ 1.100", busca:"Nike Air Zoom Vapor Pro 2 tênis", pontos_estabilidade:4, pontos_amortecimento:5, pontos_durabilidade:4, descricao:"Leve e responsivo. Air Zoom no antepé para resposta explosiva. Favorito de jogadores que buscam velocidade." },
    { id:"adidas-barricade-13",    marca:"Adidas",  produto:"Barricade 13",        nivel:"todos",     superficies:["quadra dura","saibro"],          drop:"10mm", cabedal:"TPU",        sola:"Adiwear 6",        preco_brl:"R$ 680–R$ 950",   busca:"Adidas Barricade 13 tênis quadra",    pontos_estabilidade:5, pontos_amortecimento:4, pontos_durabilidade:5, descricao:"O tênis mais durável do mercado. Gaiola TPU para suporte total. Garantia de 6 meses pela Adidas." },
    { id:"new-balance-fresh-foam-lav2", marca:"New Balance", produto:"Fresh Foam LAV2", nivel:"todos", superficies:["saibro","grama"],             drop:"8mm",  cabedal:"mesh premium", sola:"HC clay",        preco_brl:"R$ 620–R$ 880",   busca:"New Balance Fresh Foam LAV2 tênis", pontos_estabilidade:4, pontos_amortecimento:5, pontos_durabilidade:4, descricao:"Fresh Foam midsole premium. Excelente amortecimento para jogadores que sentem o impacto no joelho." },
    { id:"babolat-jet-mach-3",     marca:"Babolat",  produto:"Jet Mach 3",          nivel:"intermediario|avancado", superficies:["saibro","quadra dura"], drop:"8mm", cabedal:"3D synthetic", sola:"Michelin outsole", preco_brl:"R$ 800–R$ 1.150", busca:"Babolat Jet Mach 3 tênis quadra", pontos_estabilidade:4, pontos_amortecimento:4, pontos_durabilidade:4, descricao:"Sola Michelin para aderência excepcional em saibro. Calce e sensação de velocidade." },
    { id:"wilson-rush-pro-4",      marca:"Wilson",   produto:"Rush Pro 4.0",        nivel:"intermediario|avancado", superficies:["quadra dura"],         drop:"10mm", cabedal:"Duralast", sola:"R-DST",           preco_brl:"R$ 650–R$ 900",   busca:"Wilson Rush Pro 4.0 tênis quadra", pontos_estabilidade:5, pontos_amortecimento:4, pontos_durabilidade:5, descricao:"Construção 3 camadas para quadra dura. Excelente durabilidade e estabilidade lateral." },
  ],
};

/* ─── Mapeamentos ─────────────────────────────────────────────── */
const NIVEL_MAP = {
  "Iniciante":               "iniciante",
  "Intermediário":           "intermediario",
  "Avançado":                "avancado",
  "Profissional / Competidor":"profissional"
};
const ESTILO_MAP = {
  "Fundo de quadra (Baseline)":    "baseline",
  "Saque e Voleio (Serve & Volley)":"saque-voleio",
  "Jogo Polivalente":              "polivalente",
  "Jogo Defensivo":                "defensivo"
};
const BUDGET_MAP = {
  raquete:    { "Até R$ 300":"low","R$ 300 – R$ 800":"mid","R$ 800 – R$ 2.000":"high","Acima de R$ 2.000":"premium" },
  corda:      { "Até R$ 300":"low","R$ 300 – R$ 800":"mid","R$ 800 – R$ 2.000":"high","Acima de R$ 2.000":"premium" },
  bola:       { "Até R$ 300":"low","R$ 300 – R$ 800":"low","R$ 800 – R$ 2.000":"mid","Acima de R$ 2.000":"mid" },
  raqueteira: { "Até R$ 300":"low","R$ 300 – R$ 800":"mid","R$ 800 – R$ 2.000":"high","Acima de R$ 2.000":"premium" },
  tenis:      { "Até R$ 300":"low","R$ 300 – R$ 800":"mid","R$ 800 – R$ 2.000":"high","Acima de R$ 2.000":"premium" },
};

/* Score de compatibilidade produto × perfil */
function scoreProduct(prod, nivel, estilo, budgetTier) {
  let score = 0;
  const nivelMapa = { iniciante:0, intermediario:1, avancado:2, profissional:3 };
  const budgetTierMapa = { low:0, mid:1, high:2, premium:3 };
  const prodNivel = prod.nivel?.split("|").map(n=>n.trim());
  const nivelIdx = nivelMapa[nivel] ?? 1;
  const budgetIdx = budgetTierMapa[budgetTier] ?? 1;

  // Match de nível (±1 é ok)
  const bestProdNivel = prodNivel?.reduce((best,n)=>{ const d=Math.abs(nivelMapa[n]-nivelIdx); return d<best.d?{d,n}:best; },{ d:99,n:"" })?.n;
  const levelDiff = Math.abs(nivelMapa[bestProdNivel??"iniciante"] - nivelIdx);
  score += Math.max(0, 3 - levelDiff) * 20;

  // Match de estilo
  if (prod.estilo?.includes(estilo)) score += 30;

  // Compatibilidade de orçamento
  const precoMin = parseInt((prod.preco_brl||"").replace(/\D/g,"").slice(0,5)||"0");
  const priceScore = { low: precoMin < 400, mid: precoMin < 1200, high: precoMin < 2500, premium: true };
  if (priceScore[budgetTier]) score += 20;

  return score;
}

/* Seleciona top-3 produtos por categoria com scores */
function selectProducts(catId, nivel, estilo, orcamento) {
  const tier = (BUDGET_MAP[catId] && BUDGET_MAP[catId][orcamento]) || "mid";
  const nv = NIVEL_MAP[nivel] || "intermediario";
  const es = ESTILO_MAP[estilo] || "polivalente";

  return DB[catId]
    .map(p => ({ ...p, score: scoreProduct(p, nv, es, tier) }))
    .sort((a,b) => b.score - a.score)
    .slice(0, 3);
}

/* YouTube search URL */
function ytSearch(query) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query + " análise review português")}`;
}
function ytSearchEN(query) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query + " review test 2024")}`;
}

/* Gera links de loja — usa link direto (amazon_asin/url_direta) quando disponível */
const STORES = (busca, links={}) => [
  {
    name:"Amazon",
    color:"#FF9900",
    bg:"rgba(255,153,0,.1)",
    border:"rgba(255,153,0,.3)",
    url: links.amazon
      ? `${links.amazon}?tag=SEUTAG-20`
      : `https://www.amazon.com.br/s?k=${encodeURIComponent(busca)}&rh=n%3A18756995011&tag=SEUTAG-20`
  },
  {
    name:"Netshoes",
    color:"#E30613",
    bg:"rgba(227,6,19,.1)",
    border:"rgba(227,6,19,.3)",
    url: links.netshoes
      ? links.netshoes
      : `https://www.netshoes.com.br/busca?q=${encodeURIComponent(busca)}`
  },
  {
    name:"Centauro",
    color:"#00AEEF",
    bg:"rgba(0,174,239,.1)",
    border:"rgba(0,174,239,.3)",
    url: links.centauro
      ? links.centauro
      : `https://www.centauro.com.br/busca?q=${encodeURIComponent(busca)}`
  },
  {
    name:"Tennis Point",
    color:"#c8f06a",
    bg:"rgba(200,240,106,.07)",
    border:"rgba(200,240,106,.2)",
    url:`https://www.tennispoint.com.br/search?q=${encodeURIComponent(busca)}`
  },
];

const CATS = [
  { id:"raquete",    label:"Raquete",    icon:"🎾", desc:"Frame, peso e balanço",    color:"#a8d840" },
  { id:"corda",      label:"Corda",      icon:"〰️", desc:"Tensão, spin e controle",  color:"#40c8d8" },
  { id:"bola",       label:"Bola",       icon:"🟡", desc:"Pressão e durabilidade",   color:"#f0c840" },
  { id:"raqueteira", label:"Raqueteira", icon:"🎒", desc:"Proteção e capacidade",    color:"#d870a8" },
  { id:"tenis",      label:"Calçado",    icon:"👟", desc:"Tênis para jogar na quadra",    color:"#f08840" },
];
const QUIZ = [
  { id:"nivel",      q:"Qual é o seu nível de jogo?",     icon:"🏅", opts:["Iniciante","Intermediário","Avançado","Profissional / Competidor"] },
  { id:"estilo",     q:"Como você joga na quadra?",        icon:"🎯", opts:["Fundo de quadra (Baseline)","Saque e Voleio (Serve & Volley)","Jogo Polivalente","Jogo Defensivo"] },
  { id:"frequencia", q:"Com que frequência você joga?",    icon:"📅", opts:["1x por semana ou menos","2–3x por semana","Todo dia","Torneios e competições"] },
  { id:"orcamento",  q:"Qual é o seu orçamento?",          icon:"💰", opts:["Até R$ 300","R$ 300 – R$ 800","R$ 800 – R$ 2.000","Acima de R$ 2.000"] },
];
const QUIZ_KIT = [
  ...QUIZ.slice(0,3),
  { id:"orcamento", q:"Qual é o seu orçamento total para o kit?", icon:"💰", opts:["Até R$ 500","R$ 500 – R$ 1.500","R$ 1.500 – R$ 4.000","Acima de R$ 4.000"] },
];

async function brevoSubscribe(email, listId=1, attrs={}) {
  console.log("📧 Brevo:", email, listId, attrs); return true;
}

/* ─── CSS ──────────────────────────────────────────────────── */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Outfit:wght@300;400;500;600;700&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}
html{-webkit-text-size-adjust:100%;}
body{overflow-x:hidden;}
.grid-bg{position:fixed;inset:0;background-image:linear-gradient(rgba(110,220,80,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(110,220,80,.025) 1px,transparent 1px);background-size:52px 52px;pointer-events:none;z-index:0;}
.glow{position:fixed;top:-10%;left:50%;transform:translateX(-50%);width:800px;height:500px;background:radial-gradient(ellipse,rgba(140,220,80,.06) 0%,transparent 70%);pointer-events:none;z-index:0;}
.fade-in{animation:fadeUp .45s ease both;}
@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
@keyframes slideUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
@keyframes chatPop{from{opacity:0;transform:scale(.85) translateY(20px)}to{opacity:1;transform:scale(1) translateY(0)}}

/* ── Botões ── */
.ans-btn{display:block;width:100%;text-align:left;background:rgba(255,255,255,.025);border:1px solid rgba(140,220,80,.18);border-radius:10px;padding:15px 20px;color:#e6f4ea;font-family:'Outfit',sans-serif;font-size:15px;cursor:pointer;margin-bottom:10px;transition:all .18s;}
.ans-btn:active{background:rgba(140,220,80,.1);border-color:rgba(140,220,80,.55);}
.btn-green{background:linear-gradient(135deg,#a8d840,#7db800);color:#07100d;border:none;padding:13px 28px;border-radius:8px;font-family:'Outfit',sans-serif;font-weight:700;font-size:14px;cursor:pointer;transition:all .2s;letter-spacing:.5px;min-height:44px;}
.btn-ghost{background:transparent;border:1px solid rgba(230,244,234,.15);color:rgba(230,244,234,.45);padding:11px 22px;border-radius:8px;font-family:'Outfit',sans-serif;font-size:14px;cursor:pointer;transition:all .2s;min-height:44px;}

/* ── Links de loja ── */
.store-link{display:flex;align-items:center;justify-content:center;gap:6px;padding:10px 12px;border-radius:8px;text-decoration:none;font-family:'Outfit',sans-serif;font-size:13px;font-weight:600;transition:all .2s;flex:1;min-width:120px;min-height:40px;}
.yt-link{display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:8px;text-decoration:none;font-family:'Outfit',sans-serif;font-size:13px;font-weight:600;background:rgba(255,0,0,.1);border:1px solid rgba(255,60,60,.3);color:#ff7070;transition:all .2s;min-height:40px;}

/* ── Badges e tags ── */
.badge{display:inline-block;padding:3px 10px;border-radius:20px;font-size:13px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;}
.spec-tag{display:inline-flex;align-items:center;gap:5px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:6px;padding:5px 11px;font-size:13px;color:rgba(230,244,234,.7);}
.ai-badge{display:inline-flex;align-items:center;gap:5px;background:rgba(168,216,64,.08);border:1px solid rgba(168,216,64,.18);border-radius:6px;padding:4px 11px;font-size:13px;color:rgba(168,216,64,.9);}

/* ── Progress ── */
.prog-track{height:3px;background:rgba(140,220,80,.12);border-radius:2px;margin-bottom:40px;}
.prog-fill{height:100%;background:linear-gradient(90deg,#a8d840,#7db800);border-radius:2px;transition:width .4s ease;}

/* ── Header ── */
header{padding:14px 20px;border-bottom:1px solid rgba(140,220,80,.1);display:flex;align-items:center;justify-content:space-between;backdrop-filter:blur(12px);background:rgba(7,16,13,.9);position:sticky;top:0;z-index:200;}
.header-subtitle{font-size:11px;color:rgba(230,244,234,.5);letter-spacing:1.5px;font-family:'Outfit',sans-serif;text-transform:uppercase;}

/* ── Input ── */
.input-field{width:100%;background:rgba(255,255,255,.06);border:1px solid rgba(140,220,80,.22);border-radius:8px;padding:12px 14px;color:#e6f4ea;font-family:'Outfit',sans-serif;font-size:16px;outline:none;transition:border-color .2s;}
.input-field:focus{border-color:rgba(168,216,64,.55);}
.input-field::placeholder{color:rgba(230,244,234,.28);}

/* ── Push banner ── */
.push-banner{background:linear-gradient(90deg,rgba(168,216,64,.1),rgba(0,174,239,.07));border-bottom:1px solid rgba(168,216,64,.15);padding:10px 20px;display:flex;align-items:center;gap:12px;font-size:14px;min-height:50px;}
.push-actions{display:flex;gap:8px;margin-left:auto;}

/* ── Modal ── */
.modal-bg{position:fixed;inset:0;background:rgba(0,0,0,.8);backdrop-filter:blur(5px);z-index:500;display:flex;align-items:flex-end;justify-content:center;padding:0;}
.modal-box{background:#0e1a11;border:1px solid rgba(140,220,80,.25);border-radius:18px 18px 0 0;padding:28px 20px;width:100%;max-width:500px;animation:slideUp .35s ease;max-height:92vh;overflow-y:auto;}

/* ── Chat fab ── */
.chat-fab{position:fixed;bottom:20px;right:16px;z-index:400;width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#a8d840,#7db800);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:26px;box-shadow:0 4px 24px rgba(168,216,64,.45),0 2px 8px rgba(0,0,0,.3);transition:transform .2s;}

/* ── Chat window ── */
.chat-window{position:fixed;bottom:80px;right:0;left:0;z-index:400;background:#0e1a11;border:1px solid rgba(140,220,80,.25);border-radius:16px 16px 0 0;overflow:hidden;animation:chatPop .3s ease;box-shadow:0 -8px 40px rgba(0,0,0,.6);}
.chat-header{background:rgba(168,216,64,.06);border-bottom:1px solid rgba(140,220,80,.12);padding:14px 16px;display:flex;align-items:center;gap:10px;}
.chat-messages{height:240px;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:10px;}
.chat-messages::-webkit-scrollbar{width:4px;}
.chat-messages::-webkit-scrollbar-thumb{background:rgba(168,216,64,.2);border-radius:2px;}
.msg-bot{background:rgba(255,255,255,.05);border-radius:0 10px 10px 10px;padding:11px 14px;font-size:14px;line-height:1.65;max-width:88%;color:#e6f4ea;}
.msg-user{background:rgba(168,216,64,.14);border:1px solid rgba(168,216,64,.18);border-radius:10px 0 10px 10px;padding:11px 14px;font-size:14px;line-height:1.65;max-width:88%;color:#d6f09a;align-self:flex-end;text-align:right;}
.chat-input-area{border-top:1px solid rgba(140,220,80,.1);padding:10px;display:flex;gap:8px;}
.chat-send{background:linear-gradient(135deg,#a8d840,#7db800);border:none;border-radius:7px;width:44px;height:44px;cursor:pointer;font-size:18px;flex-shrink:0;display:flex;align-items:center;justify-content:center;}

/* ── Alert row ── */
.alert-btn{background:rgba(168,216,64,.1);border:1px solid rgba(168,216,64,.26);color:#a8d840;border-radius:7px;padding:10px 14px;font-family:'Outfit',sans-serif;font-size:13px;font-weight:600;cursor:pointer;white-space:nowrap;transition:all .18s;min-height:40px;}
.alert-row{display:flex;gap:8px;align-items:center;margin-top:10px;flex-wrap:wrap;}
.alert-row input{min-width:0;flex:1;}

/* ── Cards ── */
.prod-card{background:rgba(255,255,255,.025);border-radius:16px;padding:20px;margin-bottom:16px;}
.prod-card.best{border:2px solid rgba(140,220,80,.4);}
.prod-card.second{border:1px solid rgba(64,200,216,.2);}
.prod-card.third{border:1px solid rgba(255,255,255,.07);}
.kit-card-toggle{border-radius:13px;padding:16px 12px;cursor:pointer;text-align:center;transition:all .22s;position:relative;overflow:hidden;border-width:2px;border-style:solid;}
.status-pill{position:absolute;top:6px;right:6px;font-size:12px;font-weight:700;letter-spacing:.5px;padding:2px 6px;border-radius:10px;text-transform:uppercase;}
.kit-section{background:rgba(255,255,255,.022);border-radius:14px;padding:16px;margin-bottom:14px;border-left:3px solid;}
.sinergia-box{background:linear-gradient(135deg,rgba(168,216,64,.07),rgba(64,200,216,.05));border:1px solid rgba(168,216,64,.16);border-radius:14px;padding:18px;margin-bottom:18px;}

/* ── Score bars ── */
.score-bar-track{height:4px;background:rgba(255,255,255,.08);border-radius:2px;flex:1;}
.score-bar-fill{height:100%;border-radius:2px;transition:width .6s ease;}

/* ── Misc ── */
.tab-row{display:flex;gap:8px;margin-bottom:28px;flex-wrap:wrap;}
.tab-btn{padding:9px 20px;border-radius:8px;font-family:'Outfit',sans-serif;font-size:14px;font-weight:600;cursor:pointer;transition:all .2s;border:none;}
.tab-active{background:linear-gradient(135deg,#a8d840,#7db800);color:#07100d;}
.tab-inactive{background:rgba(255,255,255,.04);color:rgba(230,244,234,.4);border:1px solid rgba(255,255,255,.07);}


/* ── Seção Pros ── */
.pros-section{margin-bottom:44px;}
.pros-scroll{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px;}
.pro-card{border-radius:16px;overflow:hidden;cursor:pointer;transition:transform .25s,box-shadow .25s;position:relative;}
.pro-card:hover{transform:translateY(-6px);box-shadow:0 16px 40px rgba(0,0,0,.5);}
.pro-photo{width:100%;aspect-ratio:3/4;object-fit:cover;display:block;transition:transform .3s;}
.pro-card:hover .pro-photo{transform:scale(1.05);}
.pro-photo-placeholder{width:100%;aspect-ratio:3/4;display:flex;align-items:center;justify-content:center;font-size:64px;letter-spacing:-2px;font-family:'Anton',sans-serif;font-weight:normal;position:relative;overflow:hidden;}
.pro-photo-placeholder::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 40%,rgba(0,0,0,.7) 100%);}
.pro-info{padding:14px 16px;background:rgba(0,0,0,.55);backdrop-filter:blur(8px);}
.pro-overlay{position:absolute;bottom:0;left:0;right:0;padding:14px 16px;background:linear-gradient(0deg,rgba(0,0,0,.88) 0%,transparent 100%);}
.pro-equip-tag{display:inline-flex;align-items:center;gap:4px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);border-radius:20px;padding:3px 9px;font-size:11px;color:rgba(230,244,234,.75);margin:2px 3px 2px 0;}

/* ════════════════════════════
   TABLET  (≥600px)
════════════════════════════ */
@media(min-width:600px){
  header{padding:16px 28px;}
  .chat-window{left:auto;right:16px;width:340px;bottom:84px;border-radius:16px;}
  .modal-bg{align-items:center;padding:20px;}
  .modal-box{border-radius:18px;padding:34px;}
  .store-link{min-width:110px;}
}

/* ════════════════════════════
   DESKTOP (≥900px)
════════════════════════════ */
@media(min-width:900px){
  header{padding:18px 32px;}
  .prod-card{padding:26px;}
  .kit-section{padding:22px;}
  .btn-green:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(140,220,80,.3);}
  .btn-ghost:hover{border-color:rgba(230,244,234,.4);color:#e6f4ea;}
  .ans-btn:hover{background:rgba(140,220,80,.1);border-color:rgba(140,220,80,.55);transform:translateX(5px);}
  .store-link:hover{transform:translateY(-1px);filter:brightness(1.2);}
  .yt-link:hover{background:rgba(255,0,0,.18);transform:translateY(-1px);}
}
`;

/* ══════════════════════════════════════════════════════════════════
   APP
══════════════════════════════════════════════════════════════════ */
export default function TennisLab() {
  const [mode, setMode]         = useState(null);
  const [step, setStep]         = useState(0);
  const [cat, setCat]           = useState(null);
  const [answers, setAnswers]   = useState({});
  const [qIdx, setQIdx]         = useState(0);
  const [results, setResults]   = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [kitStatus, setKitStatus] = useState(
    Object.fromEntries(CATS.map(c=>[c.id,"include"]))
  );
  const [pushDone, setPushDone]   = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [chatOpen, setChatOpen]   = useState(false);

  useSEO(step, cat);
  const catObj = CATS.find(c=>c.id===cat);
  const includedCats = CATS.filter(c=>kitStatus[c.id]==="include");
  const quizData = mode==="kit" ? QUIZ_KIT : QUIZ;

  const handleAnswer = (qId, ans) => {
    const next = { ...answers, [qId]: ans };
    setAnswers(next);
    if (qIdx < quizData.length-1) { setQIdx(qIdx+1); }
    else { mode==="kit" ? runKit(next) : runSingle(next); }
  };

  /* ── SINGLE: seleção do time + justificativa ── */
  const runSingle = async (qa) => {
    setStep(3); setAiLoading(true);
    const prods = selectProducts(cat, qa.nivel, qa.estilo, qa.orcamento);
    // Time especialista: justificativas técnicas detalhadas
    const prodList = prods.map((p,i)=>`${i+1}. ${p.marca} ${p.produto} | Specs: ${JSON.stringify(Object.fromEntries(Object.entries(p).filter(([k])=>["peso","balanco","padrao","material","espessura","tensao_rec","superficies","durabilidade","capacidade","drop","sola"].includes(k))))}`).join("\n");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          model:"claude-sonnet-4-20250514", max_tokens:900,
          system:`Você é especialista em tênis do time TennisLab. Gere justificativas técnicas detalhadas para cada produto dado o perfil do jogador. Retorne APENAS JSON:
{"perfil":"frase de 1 linha","justificativas":["justificativa técnica produto 1 (2-3 frases, mencione specs específicos)","justificativa produto 2","justificativa produto 3"],"dica_tecnica":"dica prática específica para este perfil","aviso":"qualquer aviso relevante sobre limitações ou considerações"}`,
          messages:[{ role:"user", content:`Perfil: Nível=${qa.nivel}, Estilo=${qa.estilo}, Frequência=${qa.frequencia}, Orçamento=${qa.orcamento}\nProdutos selecionados:\n${prodList}` }]
        })
      });
      const d = await res.json();
      const ai = JSON.parse(d.content.map(i=>i.text||"").join("").replace(/```json|```/g,"").trim());
      setResults({ type:"single", prods, ai, qa, catObj });
    } catch(e) {
      // Fallback — exibe descrição técnica do produto
      setResults({ type:"single", prods, ai:null, qa, catObj });
    }
    setAiLoading(false); setStep(4);
    setTimeout(()=>setShowEmail(true), 3500);
  };

  /* ── KIT: seleção do time + análise de sinergia ── */
  const runKit = async (qa) => {
    setStep(3); setAiLoading(true);
    const kitProds = {};
    includedCats.forEach(c=>{ kitProds[c.id] = selectProducts(c.id, qa.nivel, qa.estilo, qa.orcamento)[0]; });
    const kitSummary = Object.entries(kitProds).map(([k,p])=>`${k}: ${p.marca} ${p.produto}`).join(" | ");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          model:"claude-sonnet-4-20250514", max_tokens:1000,
          system:`Você é especialista em tênis do time TennisLab. Analise a sinergia e compatibilidade técnica do kit. Retorne APENAS JSON:
{"perfil":"frase de 1 linha","sinergia":"parágrafo técnico detalhado sobre como estes produtos se complementam (mencione specs concretos)","justificativas":${JSON.stringify(Object.fromEntries(includedCats.map(c=>[c.id,"justificativa técnica específica"])))}, "tensao_recomendada":"se tiver corda no kit, qual tensão ideal para este perfil","dica_montagem":"dica técnica de montagem e configuração do kit","aviso":"avisos importantes sobre compatibilidade ou limitações"}`,
          messages:[{ role:"user", content:`Perfil: Nível=${qa.nivel}, Estilo=${qa.estilo}, Frequência=${qa.frequencia}\nKit: ${kitSummary}` }]
        })
      });
      const d = await res.json();
      const ai = JSON.parse(d.content.map(i=>i.text||"").join("").replace(/```json|```/g,"").trim());
      setResults({ type:"kit", kitProds, ai, qa, includedCats, ownedCats:CATS.filter(c=>kitStatus[c.id]==="owned") });
    } catch {
      setResults({ type:"kit", kitProds, ai:null, qa, includedCats, ownedCats:CATS.filter(c=>kitStatus[c.id]==="owned") });
    }
    setAiLoading(false); setStep(4);
    setTimeout(()=>setShowEmail(true), 3500);
  };

  const reset = () => {
    setMode(null); setStep(0); setCat(null); setAnswers({});
    setQIdx(0); setResults(null);
    setKitStatus(Object.fromEntries(CATS.map(c=>[c.id,"include"])));
  };

  return (
    <div style={{ minHeight:"100vh", background:"#07100d", fontFamily:"'Outfit',sans-serif", color:"#e6f4ea", overflowX:"hidden" }}>
      <style>{CSS}</style>
      <div className="grid-bg"/><div className="glow"/>
      <div style={{ position:"relative", zIndex:1 }}>
        {!pushDone && <PushBanner onDone={()=>setPushDone(true)}/>}
        <header>
          <div style={{ display:"flex", alignItems:"center", gap:14 }}>
            <span style={{ fontSize:26, lineHeight:1 }}>🎾</span>
            <div>
              <div style={{ fontFamily:"'Anton',sans-serif", fontSize:20, letterSpacing:3, color:"#a8d840", lineHeight:1.1 }}>TENNISLAB</div>
              <div className="header-subtitle">RAQUETES · CORDAS · BOLAS · CALÇADOS · RAQUETEIRAS</div>
            </div>
          </div>
          {step>0 && <button className="btn-ghost" onClick={reset}>← Início</button>}
        </header>

        {step===0 && <HomeStep onSingle={()=>{ setMode("single"); setStep(1); }} onKit={()=>{ setMode("kit"); setStep(1); }}/>}
        {step===1 && mode==="single" && <SingleConfig onSelect={(id)=>{ setCat(id); setStep(2); setQIdx(0); setAnswers({}); }}/>}
        {step===1 && mode==="kit"    && <KitConfig kitStatus={kitStatus} setKitStatus={setKitStatus} onStart={()=>{ setStep(2); setQIdx(0); setAnswers({}); }} includedCount={includedCats.length}/>}
        {step===2 && <QuizStep quizData={quizData} catObj={mode==="kit"?{icon:"🎯",label:"Kit Completo"}:catObj} qIdx={qIdx} onAnswer={handleAnswer} onBack={()=>qIdx>0?setQIdx(qIdx-1):setStep(1)}/>}
        {step===3 && <LoadingStep isKit={mode==="kit"}/>}
        {step===4 && results && (
          results.type==="single"
            ? <SingleResults results={results} onReset={reset} onReQuiz={()=>{ setStep(2); setQIdx(0); setResults(null); }}/>
            : <KitResults results={results} onReset={reset} onReQuiz={()=>{ setStep(2); setQIdx(0); setResults(null); }}/>
        )}
      </div>
      {showEmail && <EmailModal onClose={()=>setShowEmail(false)} onSave={async(e)=>{ await brevoSubscribe(e); setShowEmail(false); }}/>}
      <ChatWidget open={chatOpen} onToggle={()=>setChatOpen(o=>!o)}/>
    </div>
  );
}




/* ══════════════════════════════════════════════════════════════════
   SEÇÃO PROS — Top 10 ATP + Top 10 WTA + Destaque Brasil
   Equipamentos verificados em fontes especializadas (Abril 2026)
   
   PARA ADICIONAR FOTOS REAIS:
   1. Baixe fotos do ATP/WTA Media Centre (gratuito, uso editorial)
      → https://atpmedia.atptour.com | https://wtamedia.wtatennis.com
   2. Ou use Wikimedia Commons (licença CC)
   3. Adicione no campo foto:"URL_DA_IMAGEM" de cada jogador
   4. O componente usa <img> automaticamente quando foto estiver preenchida
══════════════════════════════════════════════════════════════════ */

const PROS_ATP = [
  {
    ranking:1, nome:"Jannik Sinner", pais:"🇮🇹", pais_nome:"Itália",
    subtitulo:"Nº1 ATP · 4x Grand Slam",
    cor1:"#009246", cor2:"#CE2B37",
    foto:"",
    raquete:"Head Speed MP", corda:"Head Hawk Touch 1.30", calcado:"Nike GP Challenge 1",
    destaque:"Primeiro italiano a conquistar múltiplos Grand Slams"
  },
  {
    ranking:2, nome:"Carlos Alcaraz", pais:"🇪🇸", pais_nome:"Espanha",
    subtitulo:"Nº2 ATP · 4x Grand Slam",
    cor1:"#c60b1e", cor2:"#f1bf00",
    foto:"",
    raquete:"Babolat Pure Aero 98", corda:"Babolat RPM Blast 125", calcado:"Nike Air Zoom Vapor",
    destaque:"Wimbledon e Roland Garros campeão · Rivalidade histórica com Sinner"
  },
  {
    ranking:3, nome:"Alexander Zverev", pais:"🇩🇪", pais_nome:"Alemanha",
    subtitulo:"Nº3 ATP · Roland Garros 2024",
    cor1:"#000000", cor2:"#FFCC00",
    foto:"",
    raquete:"Head Gravity Pro", corda:"Luxilon ALU Power 125", calcado:"Adidas Barricade",
    destaque:"Primeiro alemão a vencer Roland Garros desde Boris Becker"
  },
  {
    ranking:4, nome:"Novak Djokovic", pais:"🇷🇸", pais_nome:"Sérvia",
    subtitulo:"Nº4 ATP · 24x Grand Slam",
    cor1:"#003DA5", cor2:"#C6363C",
    foto:"",
    raquete:"Head Speed Pro", corda:"Luxilon ALU Power 125", calcado:"Asics Gel Resolution",
    destaque:"Maior vencedor de Grand Slams da história · 24 títulos"
  },
  {
    ranking:5, nome:"Felix Auger-Aliassime", pais:"🇨🇦", pais_nome:"Canadá",
    subtitulo:"Nº5 ATP · Career High",
    cor1:"#FF0000", cor2:"#ffffff",
    foto:"",
    raquete:"Babolat Pure Aero", corda:"Babolat RPM Blast 125", calcado:"Nike Court",
    destaque:"Melhor ranking da carreira em 2026 · Semifinalista de Grand Slams"
  },
  {
    ranking:6, nome:"Ben Shelton", pais:"🇺🇸", pais_nome:"EUA",
    subtitulo:"Nº6 ATP · Saque explosivo",
    cor1:"#3C3B6E", cor2:"#B22234",
    foto:"",
    raquete:"Yonex EZONE 98", corda:"Yonex Poly Tour Strike", calcado:"On The Roger Pro",
    destaque:"Um dos serviços mais potentes do circuito · Finalist de Grand Slams"
  },
  {
    ranking:7, nome:"Alex de Minaur", pais:"🇦🇺", pais_nome:"Austrália",
    subtitulo:"Nº7 ATP · The Demon",
    cor1:"#00008B", cor2:"#FFCC00",
    foto:"",
    raquete:"Wilson Blade 98", corda:"Luxilon ALU Power", calcado:"Nike Air Zoom Vapor",
    destaque:"Melhor atleta australiano · Conhecido pela velocidade e defesa"
  },
  {
    ranking:8, nome:"Taylor Fritz", pais:"🇺🇸", pais_nome:"EUA",
    subtitulo:"Nº8 ATP · US Open 2024",
    cor1:"#3C3B6E", cor2:"#B22234",
    foto:"",
    raquete:"Head Radical MP", corda:"Head Hawk Touch", calcado:"Nike Court",
    destaque:"Finalista do US Open 2024 · Líder da nova geração americana"
  },
  {
    ranking:9, nome:"Lorenzo Musetti", pais:"🇮🇹", pais_nome:"Itália",
    subtitulo:"Nº9 ATP · Artista da quadra",
    cor1:"#009246", cor2:"#CE2B37",
    foto:"",
    raquete:"Head Boom Pro", corda:"Head Sonic Pro", calcado:"Head apparel",
    destaque:"Conhecido pelo jogo estético · Drop shot mais preciso do circuito"
  },
  {
    ranking:10, nome:"Daniil Medvedev", pais:"🇷🇺", pais_nome:"Rússia",
    subtitulo:"Nº10 ATP · US Open 2021",
    cor1:"#ffffff", cor2:"#003DA5",
    foto:"",
    raquete:"Tecnifibre T-Fight ISO 305", corda:"Tecnifibre Ice Code", calcado:"Lacoste AG-LT",
    destaque:"Estilo único e imprevisível · Multicampeão de Masters 1000"
  },
];

const PROS_WTA = [
  {
    ranking:1, nome:"Aryna Sabalenka", pais:"🇧🇾", pais_nome:"Belarus",
    subtitulo:"Nº1 WTA · 4x Grand Slam",
    cor1:"#CF101A", cor2:"#007A33",
    foto:"",
    raquete:"Wilson Blade 98 v10", corda:"Luxilon ALU Power + Ace", calcado:"Nike",
    destaque:"Ano-end Nº1 consecutiva · Rainha do Australian Open"
  },
  {
    ranking:2, nome:"Elena Rybakina", pais:"🇰🇿", pais_nome:"Cazaquistão",
    subtitulo:"Nº2 WTA · Wimbledon 2022",
    cor1:"#00AFCA", cor2:"#FFE600",
    foto:"",
    raquete:"Yonex VCORE 100", corda:"Yonex Poly Tour Pro", calcado:"Nike Air Zoom",
    destaque:"Campeã do WTA Finals 2025 · Saque mais devastador do circuito"
  },
  {
    ranking:3, nome:"Coco Gauff", pais:"🇺🇸", pais_nome:"EUA",
    subtitulo:"Nº3 WTA · 2x Grand Slam",
    cor1:"#3C3B6E", cor2:"#B22234",
    foto:"",
    raquete:"Head Speed MP", corda:"Head Sonic Pro 125", calcado:"New Balance",
    destaque:"US Open 2023 e Roland Garros 2025 · Maior nome da nova geração"
  },
  {
    ranking:4, nome:"Iga Swiatek", pais:"🇵🇱", pais_nome:"Polônia",
    subtitulo:"Nº4 WTA · 6x Grand Slam",
    cor1:"#DC143C", cor2:"#ffffff",
    foto:"",
    raquete:"Tecnifibre T-Fight I.G.", corda:"Tecnifibre Black Code", calcado:"On The Roger",
    destaque:"6x Roland Garros · Rainha absoluta do saibro mundial"
  },
  {
    ranking:5, nome:"Jessica Pegula", pais:"🇺🇸", pais_nome:"EUA",
    subtitulo:"Nº5 WTA · Top 5 constante",
    cor1:"#3C3B6E", cor2:"#B22234",
    foto:"",
    raquete:"Yonex EZONE 98", corda:"Yonex Poly Tour Strike", calcado:"Nike Air Zoom",
    destaque:"Finalista do US Open 2024 · Consistência e agressividade de fundo"
  },
  {
    ranking:6, nome:"Amanda Anisimova", pais:"🇺🇸", pais_nome:"EUA",
    subtitulo:"Nº6 WTA · 2x finalista Slam",
    cor1:"#3C3B6E", cor2:"#B22234",
    foto:"",
    raquete:"Wilson Blade 98", corda:"Luxilon ALU Power", calcado:"Nike",
    destaque:"Finalista de Wimbledon e US Open 2025 · Grande retorno ao topo"
  },
  {
    ranking:7, nome:"Elina Svitolina", pais:"🇺🇦", pais_nome:"Ucrânia",
    subtitulo:"Nº7 WTA · Veterana de elite",
    cor1:"#005BBB", cor2:"#FFD500",
    foto:"",
    raquete:"Diadem Edge 98", corda:"Diadem Solstice Power", calcado:"Adidas",
    destaque:"Ícone ucraniano · Semifinalista de Wimbledon e Roland Garros"
  },
  {
    ranking:8, nome:"Jasmine Paolini", pais:"🇮🇹", pais_nome:"Itália",
    subtitulo:"Nº8 WTA · 2x finalista Slam",
    cor1:"#009246", cor2:"#CE2B37",
    foto:"",
    raquete:"Yonex VCORE 100", corda:"Yonex Poly Tour Fire", calcado:"Nike Air Zoom",
    destaque:"Roland Garros e Wimbledon finalista 2024 · Campeã em Roma 2025"
  },
  {
    ranking:9, nome:"Mirra Andreeva", pais:"🇷🇺", pais_nome:"Rússia",
    subtitulo:"Nº9 WTA · 18 anos",
    cor1:"#ffffff", cor2:"#003DA5",
    foto:"",
    raquete:"Wilson Blade v10", corda:"Luxilon ALU Power", calcado:"Nike",
    destaque:"Mais jovem a entrar no Top 10 · Dupla campeã Dubai e Indian Wells 2025"
  },
  {
    ranking:10, nome:"Victoria Mboko", pais:"🇨🇦", pais_nome:"Canadá",
    subtitulo:"Nº10 WTA · 19 anos",
    cor1:"#FF0000", cor2:"#ffffff",
    foto:"",
    raquete:"Wilson Blade v10", corda:"Luxilon Ace", calcado:"Nike",
    destaque:"WTA Newcomer of the Year 2025 · Campeã em Montreal com 19 anos"
  },
];

const PROS_BR = [
  {
    ranking:"Top 50", nome:"João Fonseca", pais:"🇧🇷", pais_nome:"Brasil",
    subtitulo:"Top 50 ATP · 19 anos",
    cor1:"#009C3B", cor2:"#002776",
    foto:"",
    raquete:"Yonex VCORE 98", corda:"Yonex Poly Tour Strike", calcado:"On The Roger Pro 2",
    destaque:"Campeão do Next Gen ATP Finals 2024 · Maior promessa do tênis brasileiro"
  },
];

function ProsSection() {
  const [aba, setAba] = useState("atp");
  const [ativo, setAtivo] = useState(null);
  const lista = aba==="atp" ? PROS_ATP : aba==="wta" ? PROS_WTA : PROS_BR;

  return (
    <div style={{ marginBottom:44 }}>
      {/* Título */}
      <div style={{ display:"flex", alignItems:"baseline", gap:12, marginBottom:20, flexWrap:"wrap" }}>
        <h2 style={{ fontFamily:"'Anton',sans-serif", fontSize:"clamp(18px,4vw,26px)", letterSpacing:2, fontWeight:"normal" }}>
          OS MELHORES DO MUNDO <span style={{ color:"#a8d840" }}>E SEUS EQUIPAMENTOS</span>
        </h2>
      </div>

      {/* Tabs ATP / WTA / Brasil */}
      <div style={{ display:"flex", gap:8, marginBottom:20, flexWrap:"wrap" }}>
        {[
          { id:"atp", label:"🏆 ATP Top 10" },
          { id:"wta", label:"🏆 WTA Top 10" },
          { id:"br",  label:"🇧🇷 Destaque Brasil" },
        ].map(t=>(
          <button key={t.id} onClick={()=>{ setAba(t.id); setAtivo(null); }}
            style={{
              padding:"9px 18px", borderRadius:8, fontSize:13, fontWeight:600,
              fontFamily:"'Outfit',sans-serif", cursor:"pointer", transition:"all .2s", border:"none",
              background: aba===t.id ? "linear-gradient(135deg,#a8d840,#7db800)" : "rgba(255,255,255,.06)",
              color: aba===t.id ? "#07100d" : "rgba(230,244,234,.55)",
              outline: aba!==t.id ? "1px solid rgba(255,255,255,.08)" : "none",
            }}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))", gap:12 }}>
        {lista.map((pro, idx)=>{
          const aberto = ativo===idx;
          const gradiente = `linear-gradient(160deg,${pro.cor1}cc,${pro.cor2}44,#07100d 80%)`;
          return (
            <div key={pro.nome} onClick={()=>setAtivo(aberto?null:idx)}
              style={{
                borderRadius:14, overflow:"hidden", cursor:"pointer",
                background: gradiente,
                border: aberto ? "2px solid rgba(168,216,64,.5)" : "1px solid rgba(255,255,255,.07)",
                transition:"transform .22s,box-shadow .22s",
                transform: aberto ? "translateY(-4px)" : "none",
                boxShadow: aberto ? "0 12px 32px rgba(0,0,0,.4)" : "none",
              }}>

              {/* ÁREA DA FOTO */}
              {pro.foto ? (
                <img src={pro.foto} alt={pro.nome}
                  style={{ width:"100%", aspectRatio:"3/4", objectFit:"cover", objectPosition:"top", display:"block" }}
                  onError={e=>{ e.target.style.display="none"; e.target.nextSibling.style.display="flex"; }}
                />
              ) : null}

              {/* PLACEHOLDER quando não há foto */}
              <div style={{
                display: pro.foto ? "none" : "flex",
                flexDirection:"column", alignItems:"center", justifyContent:"center",
                width:"100%", aspectRatio:"3/4",
                background:`linear-gradient(160deg,${pro.cor1}88,${pro.cor2}22,#07100d)`,
                position:"relative", overflow:"hidden",
              }}>
                {/* Fundo decorativo */}
                <div style={{
                  position:"absolute", inset:0,
                  backgroundImage:`radial-gradient(circle at 50% 40%,${pro.cor1}33 0%,transparent 65%)`,
                }}/>
                <div style={{ fontSize:"clamp(44px,12vw,64px)", zIndex:1, lineHeight:1, marginBottom:8, filter:"drop-shadow(0 4px 12px rgba(0,0,0,.4))" }}>
                  {pro.pais}
                </div>
                <div style={{
                  fontFamily:"'Anton',sans-serif",
                  fontSize:"clamp(20px,5vw,28px)",
                  letterSpacing:2, color:"rgba(255,255,255,.12)",
                  zIndex:1, lineHeight:1, textAlign:"center", padding:"0 8px",
                }}>
                  {pro.nome.split(" ").map(w=>w[0]).join("")}
                </div>
                {/* Ranking badge */}
                <div style={{
                  position:"absolute", top:10, left:10,
                  background:"rgba(0,0,0,.55)", backdropFilter:"blur(4px)",
                  borderRadius:6, padding:"2px 8px",
                  fontFamily:"'Anton',sans-serif", fontSize:11, letterSpacing:1,
                  color:"rgba(168,216,64,.9)",
                }}>
                  {typeof pro.ranking==="number" ? `#${pro.ranking}` : pro.ranking}
                </div>
              </div>

              {/* INFO */}
              <div style={{ padding:"12px 12px 14px", background:"rgba(0,0,0,.55)", backdropFilter:"blur(8px)" }}>
                <div style={{ fontFamily:"'Anton',sans-serif", fontSize:"clamp(13px,3vw,15px)", letterSpacing:.5, color:"#fff", lineHeight:1.2, marginBottom:3 }}>
                  {pro.nome}
                </div>
                <div style={{ fontSize:11, color:"rgba(230,244,234,.5)", marginBottom: aberto?10:0 }}>
                  {pro.pais_nome} · {pro.subtitulo}
                </div>

                {aberto && (
                  <div style={{ marginTop:10, borderTop:"1px solid rgba(255,255,255,.1)", paddingTop:10 }}>
                    <div style={{ fontSize:11, color:"rgba(168,216,64,.8)", textTransform:"uppercase", letterSpacing:1, marginBottom:6 }}>
                      Equipamentos
                    </div>
                    <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
                      <div style={{ display:"flex", gap:5, alignItems:"flex-start" }}>
                        <span style={{ fontSize:11, flexShrink:0 }}>🎾</span>
                        <span style={{ fontSize:11, color:"rgba(230,244,234,.75)", lineHeight:1.4 }}>{pro.raquete}</span>
                      </div>
                      <div style={{ display:"flex", gap:5, alignItems:"flex-start" }}>
                        <span style={{ fontSize:11, flexShrink:0 }}>〰️</span>
                        <span style={{ fontSize:11, color:"rgba(230,244,234,.75)", lineHeight:1.4 }}>{pro.corda}</span>
                      </div>
                      <div style={{ display:"flex", gap:5, alignItems:"flex-start" }}>
                        <span style={{ fontSize:11, flexShrink:0 }}>👟</span>
                        <span style={{ fontSize:11, color:"rgba(230,244,234,.75)", lineHeight:1.4 }}>{pro.calcado}</span>
                      </div>
                    </div>
                    <div style={{ marginTop:8, fontSize:11, color:"rgba(230,244,234,.45)", fontStyle:"italic", lineHeight:1.5 }}>
                      {pro.destaque}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Nota equipamentos */}
      <p style={{ fontSize:11, color:"rgba(230,244,234,.3)", marginTop:12, lineHeight:1.6, textAlign:"center" }}>
        Toque em um card para ver os equipamentos · Dados verificados em fontes especializadas · Abril 2026
      </p>
    </div>
  );
}

/* ── HOME ── */
const FAQ_DATA = [
  { q:"Qual a melhor raquete de tênis para iniciante?", a:"Para iniciantes recomendamos raquetes leves com cabeça grande (110–115 pol.) como a Head Ti.S6 (232g) ou Wilson Hyper Hammer 5.3. Elas geram potência com menos esforço e são mais forgiving nos erros de timing." },
  { q:"Qual a melhor corda de tênis para topspin?", a:"A Babolat RPM Blast 1.25mm é a referência mundial para spin, usada por Nadal. Para mais conforto mantendo bom spin, a Head Hawk Touch é excelente alternativa. Cordas co-poly com perfil redondo ou pentagonal maximizam o efeito." },
  { q:"Qual calçado é melhor para jogar tênis?", a:"Para saibro (terra batida), o Asics Gel-Resolution 9 é referência com sola Herringbone 3D. O Babolat Jet Mach 3 com sola Michelin também é muito popular. Evite calçados de corrida — eles não têm suporte lateral adequado para quadra." },
  { q:"Qual a tensão ideal para encordoar uma raquete?", a:"Iniciantes e jogadores de controle: 48–52 lbs. Jogadores intermediários: 52–56 lbs. Avançados com jogo agressivo: 54–58 lbs. Cordas co-poly devem ser sempre encordoadas mais baixas (48–54 lbs) para preservar o braço." },
  { q:"Qual a diferença entre raquete head-heavy e head-light?", a:"Head-heavy: mais peso na cabeça, mais potência — ideal para iniciantes e jogadores de fundo de quadra. Head-light: mais peso no cabo, mais controle e velocidade de swing — preferida por jogadores avançados e saque-e-voleio." },
  { q:"Onde comprar raquete de tênis com o melhor preço?", a:"Compare preços na Amazon, Netshoes, Centauro e Tennis Point — as 4 maiores lojas do Brasil. Os preços variam bastante entre elas. Use o TennisLab para comparar todos de uma vez antes de decidir." },
];

function HomeStep({ onSingle, onKit }) {
  const [faqOpen, setFaqOpen] = useState(null);
  return (
    <div style={{ maxWidth:900, margin:"0 auto", padding:"40px 16px 32px" }} className="fade-in">

      {/* ── HERO ── */}
      <div style={{ textAlign:"center", marginBottom:52 }}>
        <h1 style={{ fontFamily:"'Anton',sans-serif", fontSize:"clamp(32px,8vw,72px)", lineHeight:1, letterSpacing:"clamp(1px,1vw,3px)", marginBottom:14 }}>
          <span style={{ color:"#a8d840" }}>COMPARE</span><br/>
          <span>EQUIPAMENTOS</span><br/>
          <span style={{ color:"rgba(230,244,234,.42)" }}>DE TÊNIS</span>
        </h1>
        <p style={{ color:"rgba(230,244,234,.52)", fontSize:15, maxWidth:540, margin:"0 auto 18px", lineHeight:1.75 }}>
          Descubra a <strong style={{ color:"#e6f4ea" }}>melhor raquete de tênis</strong>, corda, bola, raqueteira e calçado esportivo para o seu jogo.
          Produtos avaliados e selecionados pelo nosso time especialista, com comparação de preços na Amazon, Netshoes e Centauro.
        </p>
        {/* Trust bar — marcas */}
        <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:10, marginBottom:10 }}>
          {["Wilson","Babolat","Head","Yonex","Luxilon","Asics","Nike","Adidas"].map(b=>(
            <span key={b} style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.09)", borderRadius:20, padding:"4px 14px", fontSize:13, color:"rgba(230,244,234,.65)", fontWeight:600 }}>{b}</span>
          ))}
        </div>
        <p style={{ fontSize:13, color:"rgba(230,244,234,.55)", marginTop:6 }}>+30 modelos avaliados pelo time TennisLab · Wilson · Babolat · Head · Yonex · Asics · Nike · Adidas</p>
      </div>
      {/* ── MODO DE BUSCA ── */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:14, marginBottom:48, alignItems:"stretch" }}>
        <div onClick={onKit} style={{ cursor:"pointer", background:"linear-gradient(135deg,rgba(168,216,64,.09),rgba(64,200,216,.05))", border:"2px solid rgba(168,216,64,.32)", borderRadius:18, padding:30, transition:"all .22s", display:"flex", flexDirection:"column", boxSizing:"border-box" }}
          onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 14px 42px rgba(168,216,64,.13)"; }}
          onMouseLeave={e=>{ e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow=""; }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
            <span style={{ fontSize:38 }}>🎯</span>
            <span className="badge" style={{ background:"#a8d840", color:"#07100d" }}>RECOMENDADO</span>
          </div>
          <h2 style={{ fontFamily:"'Anton',sans-serif", fontSize:22, letterSpacing:2, color:"#a8d840", marginBottom:8, fontWeight:"normal" }}>MONTE SEU KIT DE TÊNIS</h2>
          <p style={{ fontSize:14, color:"rgba(230,244,234,.7)", lineHeight:1.75, marginBottom:16 }}>
            Nosso time especialista analisa seu estilo de jogo e monta um <strong style={{ color:"#e6f4ea" }}>kit de tênis completo</strong> com raquete, corda, bola, raqueteira e calçado compatíveis entre si. Marque os itens que já possui.
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
            {CATS.map(c=><span key={c.id} style={{ background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.09)", borderRadius:20, padding:"3px 11px", fontSize:13, color:"rgba(230,244,234,.65)" }}>{c.icon} {c.label}</span>)}
          </div>
        </div>
        <div onClick={onSingle} style={{ cursor:"pointer", background:"rgba(255,255,255,.022)", border:"1px solid rgba(255,255,255,.07)", borderRadius:18, padding:30, transition:"all .22s", display:"flex", flexDirection:"column", boxSizing:"border-box" }}
          onMouseEnter={e=>{ e.currentTarget.style.background="rgba(255,255,255,.04)"; e.currentTarget.style.transform="translateY(-4px)"; }}
          onMouseLeave={e=>{ e.currentTarget.style.background="rgba(255,255,255,.022)"; e.currentTarget.style.transform=""; }}>
          <span style={{ fontSize:38, display:"block", marginBottom:12 }}>🔍</span>
          <h2 style={{ fontFamily:"'Anton',sans-serif", fontSize:22, letterSpacing:2, marginBottom:8, fontWeight:"normal" }}>COMPARAR POR CATEGORIA</h2>
          <p style={{ fontSize:14, color:"rgba(230,244,234,.65)", lineHeight:1.75, marginBottom:16 }}>
            Quer saber <strong style={{ color:"#e6f4ea" }}>qual a melhor raquete de tênis</strong> para o seu nível? Ou a melhor corda para mais spin? Compare 3 opções ranqueadas do custo-benefício ao premium com specs técnicos e reviews em vídeo.
          </p>
          <div style={{ fontSize:13, color:"rgba(230,244,234,.55)" }}>Raquete · Corda · Bola · Raqueteira · Calçado</div>
        </div>
      </div>
      {/* ── PROS ── */}
      <ProsSection />

      {/* ── COMO FUNCIONA ── */}
      <div style={{ background:"rgba(168,216,64,.03)", border:"1px solid rgba(168,216,64,.07)", borderRadius:12, padding:24, marginBottom:40 }}>
        <h2 style={{ fontFamily:"'Anton',sans-serif", fontSize:13, letterSpacing:1.5, color:"rgba(168,216,64,.75)", marginBottom:18, fontWeight:"normal" }}>COMO FUNCIONA</h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))", gap:14 }}>
          {[
            { i:"🎯", t:"Escolha o modo",              d:"Kit completo ou comparação de uma categoria específica." },
            { i:"📝", t:"Responda 4 perguntas",         d:"Nível de jogo, estilo, frequência e orçamento disponível." },
            { i:"🏅", t:"Time especialista recomenda",  d:"Análise técnica personalizada com os melhores produtos do mercado." },
            { i:"💰", t:"Compare preços e compre",      d:"Links diretos para Amazon, Netshoes, Centauro e Tennis Point." },
          ].map(s=>(
            <div key={s.t} style={{ display:"flex", gap:10, alignItems:"flex-start" }}>
              <span style={{ fontSize:20, flexShrink:0 }}>{s.i}</span>
              <div>
                <h3 style={{ fontWeight:600, fontSize:13, marginBottom:3, color:"#e6f4ea" }}>{s.t}</h3>
                <p style={{ fontSize:13, color:"rgba(230,244,234,.6)", lineHeight:1.6, margin:0 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FAQ — Featured Snippets Google ── */}
      <div style={{ marginBottom:32 }}>
        <h2 style={{ fontFamily:"'Anton',sans-serif", fontSize:16, letterSpacing:2, color:"rgba(230,244,234,.7)", marginBottom:14, fontWeight:"normal" }}>
          PERGUNTAS FREQUENTES
        </h2>
        <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
          {FAQ_DATA.map((item, idx) => (
            <div key={idx} style={{ background:"rgba(255,255,255,.025)", border:"1px solid rgba(255,255,255,.07)", borderRadius:10, overflow:"hidden" }}>
              <button onClick={()=>setFaqOpen(faqOpen===idx?null:idx)}
                style={{ width:"100%", background:"none", border:"none", padding:"14px 16px", display:"flex", justifyContent:"space-between", alignItems:"center", cursor:"pointer", textAlign:"left", gap:12 }}>
                <h3 style={{ fontSize:13, fontWeight:600, color:"#e6f4ea", margin:0, lineHeight:1.4 }}>{item.q}</h3>
                <span style={{ color:"#a8d840", fontSize:16, flexShrink:0 }}>{faqOpen===idx?"▲":"▼"}</span>
              </button>
              {faqOpen===idx && (
                <div style={{ padding:"0 16px 14px", fontSize:14, color:"rgba(230,244,234,.72)", lineHeight:1.75 }}>{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── SEO FOOTER TEXT ── */}
      <div style={{ borderTop:"1px solid rgba(255,255,255,.05)", paddingTop:20, marginBottom:8 }}>
        <p style={{ fontSize:12, color:"rgba(230,244,234,.42)", lineHeight:1.8, textAlign:"center", maxWidth:700, margin:"0 auto 10px" }}>
          O <strong style={{ color:"rgba(230,244,234,.35)" }}>TennisLab</strong> é o comparador de equipamentos de tênis com curadoria do time especialista. Compare raquetes Wilson, Babolat, Head e Yonex. Encontre a melhor corda de tênis Luxilon, RPM Blast ou NXT. Calçados Asics Gel-Resolution, Nike Air Zoom Vapor e Adidas Barricade. Raqueteiras para todos os níveis.
        </p>
        <p style={{ textAlign:"center",fontSize:12,color:"rgba(230,244,234,.4)" }}>💼 Links de afiliados — Amazon, Netshoes, Centauro, Tennis Point. Ao comprar você apoia o TennisLab.</p>
      </div>
    </div>
  );
}

/* ── SINGLE CONFIG ── */
function SingleConfig({ onSelect }) {
  return (
    <div style={{ maxWidth:860, margin:"0 auto", padding:"28px 16px" }} className="fade-in">
      <h1 style={{ fontFamily:"'Anton',sans-serif", fontSize:"clamp(24px,5vw,36px)", letterSpacing:2, marginBottom:8, fontWeight:"normal" }}>COMPARE <span style={{ color:"#a8d840" }}>EQUIPAMENTOS DE TÊNIS</span></h1>
      <p style={{ fontSize:13, color:"rgba(230,244,234,.48)", marginBottom:28 }}>Selecione a categoria e descubra qual é o melhor produto para o seu estilo de jogo e orçamento.</p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(130px,1fr))", gap:10 }}>
        {CATS.map(c=>(
          <button key={c.id} onClick={()=>onSelect(c.id)}
            style={{ background:"rgba(255,255,255,.022)", border:"1px solid rgba(255,255,255,.07)", borderRadius:14, padding:"26px 14px", cursor:"pointer", textAlign:"center", transition:"all .2s", color:"#e6f4ea", width:"100%" }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor=c.color; e.currentTarget.style.transform="translateY(-3px)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(255,255,255,.07)"; e.currentTarget.style.transform=""; }}>
            <div style={{ fontSize:32, marginBottom:10 }}>{c.icon}</div>
            <div style={{ fontFamily:"'Anton',sans-serif", fontSize:16, letterSpacing:1, color:c.color, marginBottom:4 }}>{c.label}</div>
            <div style={{ fontSize:12, color:"rgba(230,244,234,.55)" }}>{c.desc}</div>
            <div style={{ marginTop:8, fontSize:12,color:"rgba(230,244,234,.55)" }}>{DB[c.id].length} modelos avaliados</div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── KIT CONFIG ── */
function KitConfig({ kitStatus, setKitStatus, onStart, includedCount }) {
  const toggle = (id) => setKitStatus(prev => {
    const cur = prev[id];
    return { ...prev, [id]: cur==="include"?"owned":cur==="owned"?"exclude":"include" };
  });
  const SC = {
    include: { label:"Incluir no kit", bg:"rgba(168,216,64,.1)", border:"rgba(168,216,64,.42)", pill:"#a8d840", pillTxt:"#07100d" },
    owned:   { label:"Já possuo",      bg:"rgba(64,200,216,.07)",border:"rgba(64,200,216,.32)", pill:"#40c8d8", pillTxt:"#07100d" },
    exclude: { label:"Não quero",      bg:"rgba(255,80,80,.06)", border:"rgba(255,80,80,.22)",  pill:"#ff6060", pillTxt:"#fff" },
  };
  return (
    <div style={{ maxWidth:880, margin:"0 auto", padding:"28px 16px" }} className="fade-in">
      <div style={{ fontFamily:"'Anton',sans-serif", fontSize:"clamp(22px,5vw,34px)", letterSpacing:2, marginBottom:6 }}>MONTE SEU <span style={{ color:"#a8d840" }}>KIT</span></div>
      <p style={{ fontSize:13, color:"rgba(230,244,234,.4)", marginBottom:22 }}>Clique nos cards para alternar o status de cada equipamento.</p>
      <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:24 }}>
        {Object.entries(SC).map(([k,v])=>(
          <div key={k} style={{ display:"flex", alignItems:"center", gap:6, background:v.bg, border:`1px solid ${v.border}`, borderRadius:20, padding:"5px 12px" }}>
            <div style={{ width:7, height:7, borderRadius:"50%", background:v.pill }}/>
            <span style={{ fontSize:13, fontWeight:600, color:"rgba(230,244,234,.75)" }}>{k==="include"?"✅ Incluir":k==="owned"?"📦 Já possuo":"❌ Não quero"}</span>
          </div>
        ))}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(140px,1fr))", gap:10, marginBottom:24 }}>
        {CATS.map(c=>{
          const st = kitStatus[c.id];
          const cfg = SC[st];
          return (
            <div key={c.id} className="kit-card-toggle" onClick={()=>toggle(c.id)}
              style={{ background:cfg.bg, borderColor:cfg.border, opacity:st==="exclude"?.45:1 }}>
              <div className="status-pill" style={{ background:cfg.pill, color:cfg.pillTxt }}>
                {st==="include"?"Kit":st==="owned"?"Tenho":"Skip"}
              </div>
              <div style={{ fontSize:32, marginBottom:9, marginTop:6 }}>{c.icon}</div>
              <div style={{ fontFamily:"'Anton',sans-serif", fontSize:15, letterSpacing:1, color:c.color, marginBottom:3 }}>{c.label}</div>
              <div style={{ fontSize:12,color:"rgba(230,244,234,.55)" }}>{c.desc}</div>
              <div style={{ marginTop:6, fontSize:12,color:"rgba(230,244,234,.55)" }}>{DB[c.id].length} produtos avaliados</div>
            </div>
          );
        })}
      </div>
      {/* Resumo */}
      <div style={{ background:"rgba(255,255,255,.022)", border:"1px solid rgba(255,255,255,.07)", borderRadius:10, padding:"14px 18px", marginBottom:22 }}>
        <div style={{ fontSize:12, letterSpacing:1.2, color:"rgba(168,216,64,.8)", textTransform:"uppercase", marginBottom:10 }}>Resumo do kit</div>
        <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
          {CATS.map(c=>{ const st=kitStatus[c.id]; const clr=st==="include"?"#a8d840":st==="owned"?"#40c8d8":"#ff6060"; const lbl=st==="include"?"incluindo":st==="owned"?"já tenho":"ignorando";
            return <div key={c.id} style={{ display:"flex", alignItems:"center", gap:5, background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.06)", borderRadius:7, padding:"5px 10px" }}><span style={{ fontSize:13 }}>{c.icon}</span><span style={{ fontSize:13, fontWeight:600 }}>{c.label}</span><span style={{ fontSize:12, color:clr }}>· {lbl}</span></div>;
          })}
        </div>
      </div>
      <div style={{ display:"flex", gap:12, alignItems:"center", flexWrap:"wrap" }}>
        <button className="btn-green" onClick={onStart} disabled={includedCount===0} style={{ opacity:includedCount===0?.5:1 }}>
          {includedCount===0?"Selecione ao menos 1 item":`🎯 Analisar Kit (${includedCount} ${includedCount===1?"item":"itens"})`}
        </button>
        <span style={{ fontSize:13, color:"rgba(230,244,234,.55)" }}>{includedCount} item(ns) serão analisados</span>
      </div>
    </div>
  );
}

/* ── QUIZ ── */
function QuizStep({ quizData, catObj, qIdx, onAnswer, onBack }) {
  const q = quizData[qIdx];
  return (
    <div style={{ maxWidth:560, margin:"0 auto", padding:"28px 16px" }} className="fade-in">
      <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:6 }}>
        <span style={{ fontSize:18 }}>{catObj?.icon}</span>
        <span style={{ fontFamily:"'Anton',sans-serif", fontSize:13, letterSpacing:1.5, color:"rgba(168,216,64,.85)", textTransform:"uppercase" }}>{catObj?.label}</span>
      </div>
      <div style={{ fontFamily:"'Anton',sans-serif", fontSize:12, letterSpacing:1, color:"rgba(230,244,234,.5)", marginBottom:18 }}>PERGUNTA {qIdx+1} DE {quizData.length}</div>
      <div className="prog-track"><div className="prog-fill" style={{ width:`${((qIdx+1)/quizData.length)*100}%` }}/></div>
      <div style={{ fontSize:22, marginBottom:10 }}>{q.icon}</div>
      <h2 style={{ fontFamily:"'Anton',sans-serif", fontSize:"clamp(22px,5vw,38px)", letterSpacing:0, lineHeight:1.15, marginBottom:24 }}>{q.q}</h2>
      <div>{q.opts.map(o=><button key={o} className="ans-btn" onClick={()=>onAnswer(q.id,o)}>{o}</button>)}</div>
      <button className="btn-ghost" style={{ marginTop:14 }} onClick={onBack}>← Voltar</button>
    </div>
  );
}

/* ── LOADING ── */
function LoadingStep({ isKit }) {
  const msgs = isKit
    ? ["Selecionando produtos do banco de dados...","Verificando compatibilidade dos equipamentos...","Montando o kit ideal para o seu perfil..."]
    : ["Consultando nosso time de especialistas...","Verificando compatibilidade com seu jogo...","Preparando recomendações do time especialista..."];
  const [msgIdx, setMsgIdx] = useState(0);
  useEffect(()=>{ const t=setInterval(()=>setMsgIdx(i=>(i+1)%msgs.length),1400); return ()=>clearInterval(t); },[]);
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", minHeight:"65vh", padding:40 }}>
      <div style={{ fontSize:50, animation:"spin 1.8s linear infinite", marginBottom:26 }}>🎾</div>
      <div style={{ fontFamily:"'Anton',sans-serif", fontSize:"clamp(20px,5vw,26px)", letterSpacing:"clamp(1px,1vw,3px)", color:"#a8d840", marginBottom:12 }}>{isKit?"MONTANDO SEU KIT":"ANALISANDO"}</div>
      <div style={{ color:"rgba(230,244,234,.42)", fontSize:13, textAlign:"center", minHeight:20 }}>{msgs[msgIdx]}</div>
    </div>
  );
}

/* ── SCORE BARS ── */
function ScoreBar({ label, value, max=5, color="#a8d840" }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:5 }}>
      <div style={{ fontSize:12, color:"rgba(230,244,234,.65)", width:72, flexShrink:0 }}>{label}</div>
      <div className="score-bar-track">
        <div className="score-bar-fill" style={{ width:`${(value/max)*100}%`, background:color }}/>
      </div>
      <div style={{ fontSize:13, color:"rgba(230,244,234,.6)", width:16, textAlign:"right" }}>{value}</div>
    </div>
  );
}

/* ── PRODUCT CARD (single results) ── */
function ProdCard({ prod, rank, justificativa, catObj }) {
  const [alertEmail, setAlertEmail] = useState("");
  const [alertDone, setAlertDone]   = useState(false);
  const cls = rank===0?"best":rank===1?"second":"third";
  const labels = ["⭐ Melhor Escolha","2º Opção","3ª Opção"];
  const badgeColors = [{ bg:"#a8d840", txt:"#07100d" },{ bg:"rgba(64,200,216,.2)", txt:"#40c8d8" },{ bg:"rgba(255,255,255,.07)", txt:"rgba(230,244,234,.45)" }];
  // Specs dinâmicos
  const specKeys = ["peso","balanco","padrao","material","espessura","tensao_rec","superficies","durabilidade","pressao","capacidade","bolsos","drop","sola"];
  const specs = specKeys.filter(k=>prod[k]!==undefined).map(k=>({ k, v: Array.isArray(prod[k])?prod[k].join(", "):prod[k] }));
  // Score bars
  const bars = [
    prod.pontos_spin!=null       && { l:"Spin",       v:prod.pontos_spin,       c:"#a8d840" },
    prod.pontos_controle!=null   && { l:"Controle",   v:prod.pontos_controle,   c:"#40c8d8" },
    prod.pontos_potencia!=null   && { l:"Potência",   v:prod.pontos_potencia,   c:"#f0c840" },
    prod.pontos_conforto!=null   && { l:"Conforto",   v:prod.pontos_conforto,   c:"#f08840" },
    prod.pontos_estabilidade!=null&&{ l:"Estabilid.", v:prod.pontos_estabilidade,c:"#d870a8" },
    prod.pontos_amortecimento!=null&&{l:"Amortec.",  v:prod.pontos_amortecimento,c:"#a8d840" },
    prod.pontos_durabilidade!=null&&{ l:"Durabilid.", v:prod.pontos_durabilidade,c:"#f0c840" },
    prod.pontos_qualidade!=null  && { l:"Qualidade",  v:prod.pontos_qualidade,   c:"#a8d840" },
    prod.pontos_organizacao!=null&& { l:"Organiz.",   v:prod.pontos_organizacao, c:"#40c8d8" },
    prod.pontos_protecao!=null   && { l:"Proteção",   v:prod.pontos_protecao,    c:"#f08840" },
  ].filter(Boolean);

  return (
    <div className={`prod-card ${cls}`}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14, flexWrap:"wrap", gap:8, rowGap:12 }}>
        <div>
          <span className="badge" style={{ background:badgeColors[rank].bg, color:badgeColors[rank].txt, marginBottom:8, display:"inline-block" }}>{labels[rank]}</span>
          <div style={{ fontSize:13, color:"rgba(230,244,234,.6)", marginBottom:4 }}>{prod.marca}</div>
          <div style={{ fontFamily:"'Anton',sans-serif", fontSize:20, letterSpacing:1 }}>{prod.produto}</div>
        </div>
        <div style={{ textAlign:"right" }}>
          <div style={{ fontSize:12, color:"rgba(230,244,234,.55)", textTransform:"uppercase", letterSpacing:1, marginBottom:3 }}>Faixa de preço</div>
          <div style={{ fontFamily:"'Anton',sans-serif", fontSize:18, color:catObj?.color||"#a8d840" }}>{prod.preco_brl}</div>
        </div>
      </div>

      {/* Specs */}
      {specs.length>0 && (
        <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:14 }}>
          {specs.map(s=><span key={s.k} className="spec-tag"><span style={{ color:"rgba(230,244,234,.35)" }}>{s.k}:</span>{String(s.v)}</span>)}
        </div>
      )}

      {/* Score bars */}
      {bars.length>0 && (
        <div style={{ background:"rgba(255,255,255,.02)", borderRadius:8, padding:"12px 14px", marginBottom:14 }}>
          {bars.map(b=><ScoreBar key={b.l} label={b.l} value={b.v} color={b.c}/>)}
        </div>
      )}

      {/* Análise do time especialista */}
      <div style={{ fontSize:13, color:"rgba(230,244,234,.58)", lineHeight:1.68, marginBottom:14, padding:"12px 14px", background:"rgba(255,255,255,.025)", borderRadius:8, borderLeft:`3px solid ${catObj?.color||"#a8d840"}44` }}>
        {justificativa || prod.descricao}
      </div>

      {/* Vídeos */}
      <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:14 }}>
        <a href={ytSearch(prod.busca)} target="_blank" rel="noopener noreferrer" className="yt-link">▶ Review em Português</a>
        <a href={ytSearchEN(prod.busca)} target="_blank" rel="noopener noreferrer" className="yt-link">▶ Review em Inglês</a>
      </div>

      {/* Lojas */}
      <div style={{ borderTop:"1px solid rgba(255,255,255,.05)", paddingTop:12, marginBottom:12 }}>
        <div style={{ fontSize:12, color:"rgba(230,244,234,.55)", textTransform:"uppercase", letterSpacing:1, marginBottom:8 }}>🔍 Buscar melhor preço:</div>
        <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
          {STORES(prod.busca, prod.links||{}).map(s=><a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="store-link" style={{ background:s.bg, border:`1px solid ${s.border}`, color:s.color }}>🔗 {s.name}</a>)}
        </div>
      </div>

      {/* Alerta */}
      <div style={{ borderTop:"1px solid rgba(255,255,255,.05)", paddingTop:12 }}>
        {alertDone ? <div style={{ fontSize:12, color:"#a8d840" }}>✅ Alerta cadastrado!</div> : (
          <div className="alert-row">
            <span style={{ fontSize:13, color:"rgba(230,244,234,.55)", flexShrink:0 }}>🔔 Alerta de preço:</span>
            <input className="input-field" style={{ fontSize:13, padding:"9px 11px" }} type="email" placeholder="seu@email.com" value={alertEmail} onChange={e=>setAlertEmail(e.target.value)} onKeyDown={e=>e.key==="Enter"&&setAlertDone(true)}/>
            <button className="alert-btn" onClick={()=>alertEmail.includes("@")&&setAlertDone(true)}>Alertar</button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── SINGLE RESULTS ── */
function SingleResults({ results, onReset, onReQuiz }) {
  const { prods, ai, qa, catObj } = results;
  return (
    <div style={{ maxWidth:860, margin:"0 auto", padding:"24px 16px" }} className="fade-in">
      <div style={{ display:"flex", flexWrap:"wrap", gap:14, alignItems:"flex-start", marginBottom:32 }}>
        <div style={{ flex:1, minWidth:160 }}>
          <div style={{ fontFamily:"'Anton',sans-serif", fontSize:"clamp(22px,5vw,32px)", letterSpacing:2, marginBottom:6 }}>
            {catObj?.icon} MELHOR {catObj?.label.toUpperCase()} DE TÊNIS — <span style={{ color:"#a8d840" }}>COMPARAÇÃO 2025</span>
          </div>
          {ai?.perfil && <div style={{ fontSize:14, color:"rgba(230,244,234,.68)" }}>{ai.perfil}</div>}
        </div>
        <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
          <span className="ai-badge">🏅 {DB[catObj?.id||"raquete"].length} modelos avaliados pelo time</span>
        </div>
      </div>

      {prods.map((p,i)=>(
        <ProdCard key={p.id} prod={p} rank={i} justificativa={ai && ai.justificativas && ai.justificativas[i]} catObj={catObj}/>
      ))}

      {ai?.dica_tecnica && (
        <div style={{ display:"flex", gap:12, background:"rgba(168,216,64,.04)", border:"1px solid rgba(168,216,64,.1)", borderRadius:12, padding:"18px 20px", marginBottom:16 }}>
          <span style={{ fontSize:20, flexShrink:0 }}>💡</span>
          <div>
            <div style={{ fontSize:13, letterSpacing:1.2, color:"rgba(168,216,64,.85)", textTransform:"uppercase", marginBottom:6 }}>Dica do Time Especialista</div>
            <div style={{ fontSize:14, color:"rgba(230,244,234,.75)", lineHeight:1.7 }}>{ai.dica_tecnica}</div>
          </div>
        </div>
      )}
      {ai?.aviso && (
        <div style={{ display:"flex", gap:12, background:"rgba(240,200,64,.04)", border:"1px solid rgba(240,200,64,.15)", borderRadius:12, padding:"16px 20px", marginBottom:16 }}>
          <span style={{ fontSize:18, flexShrink:0 }}>⚠️</span>
          <div style={{ fontSize:14, color:"rgba(240,200,64,.85)", lineHeight:1.7 }}>{ai.aviso}</div>
        </div>
      )}

      <div style={{ fontSize:12, color:"rgba(230,244,234,.4)", lineHeight:1.6, padding:"10px 14px", background:"rgba(255,255,255,.02)", borderRadius:8, marginBottom:20 }}>
        💼 Links de afiliados — ao comprar você apoia o TennisLab. Substitua <strong style={{ color:"rgba(168,216,64,.3)" }}>SEUTAG-20</strong> pelo seu ID Amazon antes de publicar.
      </div>
      <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
        <button className="btn-green" style={{ flex:"1 1 auto" }} onClick={onReset}>🎾 Comparar Outro Equipamento</button>
        <button className="btn-ghost" style={{ flex:"1 1 auto" }} onClick={onReQuiz}>↺ Refazer Quiz</button>
      </div>
    </div>
  );
}

/* ── KIT RESULTS ── */
function KitResults({ results, onReset, onReQuiz }) {
  const { kitProds, ai, includedCats, ownedCats } = results;
  const totalMin = includedCats.reduce((acc,c)=>{ const m=parseInt((kitProds[c.id]?.preco_brl||"").replace(/\D/g,"").slice(0,5)||"0"); return acc+m; },0);

  return (
    <div style={{ maxWidth:900, margin:"0 auto", padding:"24px 16px" }} className="fade-in">
      <div style={{ display:"flex", flexWrap:"wrap", gap:12, alignItems:"flex-start", marginBottom:24 }}>
        <div style={{ flex:1 }}>
          <h1 style={{ fontFamily:"'Anton',sans-serif", fontSize:"clamp(22px,5vw,32px)", letterSpacing:2, marginBottom:6, fontWeight:"normal" }}>SEU <span style={{ color:"#a8d840" }}>KIT DE TÊNIS PERSONALIZADO</span></h1>
          {ai?.perfil && <div style={{ fontSize:14, color:"rgba(230,244,234,.68)" }}>{ai.perfil}</div>}
        </div>
        <div style={{ textAlign:"right" }}>
          <div style={{ fontSize:12, color:"rgba(230,244,234,.55)", textTransform:"uppercase", marginBottom:4 }}>Investimento estimado a partir de</div>
          <div style={{ fontFamily:"'Anton',sans-serif", fontSize:20, color:"#a8d840" }}>R$ {totalMin.toLocaleString("pt-BR")}+</div>
        </div>
      </div>

      {ai?.sinergia && (
        <div className="sinergia-box">
          <div style={{ fontSize:13, letterSpacing:1.2, color:"rgba(168,216,64,.85)", textTransform:"uppercase", marginBottom:8 }}>🔗 Análise do Time Especialista</div>
          <div style={{ fontSize:14, color:"rgba(230,244,234,.78)", lineHeight:1.75 }}>{ai.sinergia}</div>
          {ai?.tensao_recomendada && (
            <div style={{ marginTop:10, padding:"8px 14px", background:"rgba(168,216,64,.06)", borderRadius:8, fontSize:13, color:"rgba(168,216,64,.8)" }}>
              🎯 Tensão recomendada: <strong>{ai.tensao_recomendada}</strong>
            </div>
          )}
        </div>
      )}

      {includedCats.map(catObj=>{
        const prod = kitProds[catObj.id];
        if (!prod) return null;
        const specs = ["peso","balanco","padrao","material","espessura","tensao_rec","superficies","durabilidade","pressao","capacidade","bolsos","drop","sola"].filter(k=>prod[k]!==undefined).map(k=>({ k, v:Array.isArray(prod[k])?prod[k].join(", "):prod[k] }));
        return (
          <div key={catObj.id} className="kit-section" style={{ borderLeftColor:catObj.color }}>
            <div style={{ display:"flex", flexWrap:"wrap", gap:14, alignItems:"flex-start", marginBottom:14 }}>
              <div style={{ display:"flex", alignItems:"center", gap:10, flexShrink:0 }}>
                <div style={{ width:40, height:40, background:"rgba(255,255,255,.05)", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, border:`1px solid ${catObj.color}44` }}>{catObj.icon}</div>
                <div>
                  <div style={{ fontSize:12, letterSpacing:1, color:catObj.color, textTransform:"uppercase", marginBottom:3 }}>{catObj.label}</div>
                  <div style={{ fontSize:12, color:"rgba(230,244,234,.55)" }}>{catObj.desc}</div>
                </div>
              </div>
              <div style={{ flex:1, minWidth:120 }}>
                <div style={{ fontSize:13, color:"rgba(230,244,234,.6)", marginBottom:3 }}>{prod.marca}</div>
                <div style={{ fontFamily:"'Anton',sans-serif", fontSize:17, letterSpacing:1 }}>{prod.produto}</div>
              </div>
              <div style={{ textAlign:"right", flexShrink:0 }}>
                <div style={{ fontFamily:"'Anton',sans-serif", fontSize:16, color:catObj.color }}>{prod.preco_brl}</div>
              </div>
            </div>
            {specs.length>0 && <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginBottom:10 }}>{specs.map(s=><span key={s.k} className="spec-tag"><span style={{ color:"rgba(230,244,234,.3)" }}>{s.k}:</span>{String(s.v)}</span>)}</div>}
            <div style={{ fontSize:14, color:"rgba(230,244,234,.72)", lineHeight:1.7, marginBottom:14, borderLeft:`2px solid ${catObj.color}33`, paddingLeft:10 }}>
              {(ai && ai.justificativas && ai.justificativas[catObj.id]) || prod.descricao}
            </div>
            <div style={{ display:"flex", gap:7, flexWrap:"wrap", marginBottom:10 }}>
              <a href={ytSearch(prod.busca)} target="_blank" rel="noopener noreferrer" className="yt-link">▶ Review PT</a>
              <a href={ytSearchEN(prod.busca)} target="_blank" rel="noopener noreferrer" className="yt-link">▶ Review EN</a>
            </div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
              {STORES(prod.busca, prod.links||{}).map(s=><a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="store-link" style={{ background:s.bg, border:`1px solid ${s.border}`, color:s.color }}>🔗 {s.name}</a>)}
            </div>
          </div>
        );
      })}

      {ownedCats.length>0 && (
        <div style={{ background:"rgba(64,200,216,.04)", border:"1px solid rgba(64,200,216,.14)", borderRadius:12, padding:"14px 18px", marginBottom:14 }}>
          <div style={{ fontSize:13, letterSpacing:1.2, color:"rgba(64,200,216,.85)", textTransform:"uppercase", marginBottom:8 }}>📦 Equipamentos que você já possui</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>{ownedCats.map(c=><span key={c.id} style={{ background:"rgba(64,200,216,.07)", border:"1px solid rgba(64,200,216,.18)", borderRadius:8, padding:"5px 12px", fontSize:13, display:"flex", alignItems:"center", gap:5 }}><span>{c.icon}</span><span style={{ fontWeight:600 }}>{c.label}</span></span>)}</div>
        </div>
      )}

      {ai?.dica_montagem && (
        <div style={{ display:"flex", gap:12, background:"rgba(168,216,64,.04)", border:"1px solid rgba(168,216,64,.1)", borderRadius:12, padding:"16px 20px", marginBottom:14 }}>
          <span style={{ fontSize:18, flexShrink:0 }}>🛠️</span>
          <div>
            <div style={{ fontSize:13, letterSpacing:1.2, color:"rgba(168,216,64,.85)", textTransform:"uppercase", marginBottom:6 }}>Dica de Montagem</div>
            <div style={{ fontSize:14, color:"rgba(230,244,234,.75)", lineHeight:1.7 }}>{ai.dica_montagem}</div>
          </div>
        </div>
      )}
      {ai?.aviso && (
        <div style={{ display:"flex", gap:10, background:"rgba(240,200,64,.04)", border:"1px solid rgba(240,200,64,.14)", borderRadius:12, padding:"14px 18px", marginBottom:14 }}>
          <span style={{ fontSize:18, flexShrink:0 }}>⚠️</span>
          <div style={{ fontSize:14, color:"rgba(240,200,64,.85)", lineHeight:1.7 }}>{ai.aviso}</div>
        </div>
      )}

      <div style={{ fontSize:12, color:"rgba(230,244,234,.4)", lineHeight:1.6, padding:"10px 14px", background:"rgba(255,255,255,.02)", borderRadius:8, marginBottom:20 }}>
        💼 Links de afiliados. Substitua <strong style={{ color:"rgba(168,216,64,.3)" }}>SEUTAG-20</strong> pelo seu ID Amazon antes de publicar.
      </div>
      <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
        <button className="btn-green" style={{ flex:"1 1 auto" }} onClick={onReset}>🎯 Montar Novo Kit</button>
        <button className="btn-ghost" style={{ flex:"1 1 auto" }} onClick={onReQuiz}>↺ Refazer Quiz</button>
      </div>
    </div>
  );
}

/* ── PUSH BANNER ── */
function PushBanner({ onDone }) {
  const [st, setSt] = useState("idle");
  const req = async () => {
    setSt("loading");
    try { const p=await Notification.requestPermission(); if(p==="granted"){new Notification("🎾 TennisLab",{body:"Alertas de equipamentos ativos!"}); setSt("done");} else setSt("denied"); } catch { setSt("denied"); }
    setTimeout(onDone, 1600);
  };
  if(st==="done") return <div className="push-banner"><span style={{ color:"#a8d840",fontSize:13 }}>✅ Notificações ativas!</span></div>;
  if(st==="denied") return <div className="push-banner"><span style={{ fontSize:13,color:"rgba(230,244,234,.32)" }}>Notificações bloqueadas.</span></div>;
  return (
    <div className="push-banner">
      <span style={{ fontSize:15 }}>📲</span>
      <span style={{ fontSize:13, flex:1 }}>Receba alertas de promoções e ofertas de tênis!</span>
      <div style={{ display:"flex", gap:8, flexShrink:0 }}>
        <button className="btn-green" style={{ padding:"9px 18px",fontSize:13,minHeight:40 }} onClick={req}>{st==="loading"?"...":"Ativar"}</button>
        <button className="btn-ghost" style={{ padding:"9px 14px",fontSize:13,minHeight:40 }} onClick={onDone}>Agora não</button>
      </div>
    </div>
  );
}

/* ── EMAIL MODAL ── */
function EmailModal({ onClose, onSave }) {
  const [email,setEmail]=useState(""); const [nome,setNome]=useState(""); const [loading,setLoading]=useState(false); const [weekly,setWeekly]=useState(true);
  const save=async()=>{ if(!email.includes("@"))return; setLoading(true); await onSave(email); setLoading(false); };
  return (
    <div className="modal-bg" onClick={e=>{ if(e.target===e.currentTarget)onClose(); }}>
      <div className="modal-box">
        <div style={{ fontSize:30,textAlign:"center",marginBottom:10 }}>📧</div>
        <div style={{ fontFamily:"'Anton',sans-serif",fontSize:21,letterSpacing:2,textAlign:"center",marginBottom:8 }}>SALVAR ANÁLISE</div>
        <p style={{ fontSize:14,color:"rgba(230,244,234,.65)",textAlign:"center",lineHeight:1.7,marginBottom:20 }}>Receba sua análise técnica por e-mail e fique por dentro das melhores ofertas.</p>
        <div style={{ display:"flex",flexDirection:"column",gap:10,marginBottom:14 }}>
          <input className="input-field" placeholder="Seu nome (opcional)" value={nome} onChange={e=>setNome(e.target.value)}/>
          <input className="input-field" type="email" placeholder="seu@email.com *" value={email} onChange={e=>setEmail(e.target.value)} onKeyDown={e=>e.key==="Enter"&&save()}/>
        </div>
        <label style={{ display:"flex",alignItems:"center",gap:10,cursor:"pointer",marginBottom:18,fontSize:14,color:"rgba(230,244,234,.65)" }}>
          <input type="checkbox" checked={weekly} onChange={e=>setWeekly(e.target.checked)} style={{ accentColor:"#a8d840",width:15,height:15 }}/> Newsletter semanal de ofertas
        </label>
        <div style={{ display:"flex",gap:10 }}>
          <button className="btn-green" style={{ flex:1 }} onClick={save} disabled={loading}>{loading?"Salvando...":"✅ Salvar"}</button>
          <button className="btn-ghost" onClick={onClose}>Não, obrigado</button>
        </div>
        <div style={{ marginTop:12,fontSize:12,color:"rgba(230,244,234,.4)",textAlign:"center" }}>Sem spam · Cancelamento com 1 clique · Powered by Brevo</div>
      </div>
    </div>
  );
}

/* ── CHAT ── */
function ChatWidget({ open, onToggle }) {
  const [msgs,setMsgs]=useState([{ role:"bot", text:"Olá! 🎾 Bem-vindo ao chat do time especialista TennisLab. Tire dúvidas sobre raquetes, cordas, tensão, superfície de quadra e muito mais. Como posso ajudar?" }]);
  const [input,setInput]=useState(""); const [loading,setLoading]=useState(false); const endRef=useRef(null);
  useEffect(()=>{ endRef.current?.scrollIntoView({ behavior:"smooth" }); },[msgs]);
  const send=async()=>{
    if(!input.trim()||loading)return;
    const txt=input.trim(); setInput(""); setMsgs(m=>[...m,{ role:"user",text:txt }]); setLoading(true);
    try {
      const history=msgs.slice(1).map(m=>({ role:m.role==="bot"?"assistant":"user",content:m.text }));
      const res=await fetch("https://api.anthropic.com/v1/messages",{ method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ model:"claude-sonnet-4-20250514",max_tokens:400,system:"Você é um especialista do time TennisLab. Responda de forma precisa e concisa em português sobre equipamentos, tensão de corda, superfícies e cuidados. Máximo 3 parágrafos.",messages:[...history,{ role:"user",content:txt }] }) });
      const d=await res.json();
      setMsgs(m=>[...m,{ role:"bot",text:d.content?.map(i=>i.text||"").join("")||"Desculpe, tente novamente." }]);
    } catch { setMsgs(m=>[...m,{ role:"bot",text:"Erro de conexão. Tente novamente." }]); }
    setLoading(false);
  };
  return (
    <>
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <span style={{ fontSize:18 }}>🎾</span>
            <div><div style={{ fontFamily:"'Anton',sans-serif",fontSize:13,letterSpacing:1.5,color:"#a8d840" }}>TIME TENNISLAB</div><div style={{ fontSize:12,color:"rgba(230,244,234,.5)" }}>Time Especialista TennisLab</div></div>
            <button onClick={onToggle} style={{ marginLeft:"auto",background:"none",border:"none",color:"rgba(230,244,234,.38)",cursor:"pointer",fontSize:16 }}>✕</button>
          </div>
          <div className="chat-messages">
            {msgs.map((m,i)=><div key={i} className={m.role==="bot"?"msg-bot":"msg-user"}>{m.text}</div>)}
            {loading && <div className="msg-bot" style={{ animation:"pulse 1s ease infinite" }}>⏳ digitando...</div>}
            <div ref={endRef}/>
          </div>
          <div className="chat-input-area">
            <input className="input-field" style={{ padding:"9px 12px",fontSize:16 }} placeholder="Sua pergunta sobre tênis..." value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()}/>
            <button className="chat-send" onClick={send}>➤</button>
          </div>
        </div>
      )}
      <button className="chat-fab" onClick={onToggle} title="Fale com o time especialista">{open?"✕":"🎾"}</button>
    </>
  );
}
