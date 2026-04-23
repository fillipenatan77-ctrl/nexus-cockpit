// NEXUS · data.js · banco rico de conteudo (50+ citacoes · 18 estacoes · 5 protocolos · 30+ obras · 30+ reenquadramentos)

window.NEXUS_DATA = {

  // ============================================================
  // 18 ESTACOES DO PALACIO (canonicas)
  // ============================================================
  estacoes: [
    { n:1,  nome:'Fundação',            glifo:'◎', sentido:'base · raiz · origem · solo sobre o qual tudo se apoia' },
    { n:2,  nome:'Liminaridade',        glifo:'▽', sentido:'soleira · passagem · entre-mundos · ritos de transição' },
    { n:3,  nome:'Fogo Interior',       glifo:'✦', sentido:'pulsão · desejo · vida incontida · calor que move' },
    { n:4,  nome:'Reflexão Estratégica',glifo:'§', sentido:'pausa antes do ato · preparação densa · leitura fria' },
    { n:5,  nome:'Ágora',               glifo:'⚯', sentido:'praça · palavra pública · retórica · polis' },
    { n:6,  nome:'Forja',               glifo:'⚒', sentido:'trabalho · fogo e martelo · molde lento · aço formado' },
    { n:7,  nome:'Lapidário',           glifo:'◊', sentido:'acabamento · precisão · gema · sobra é erro' },
    { n:8,  nome:'Coroa Tríplice',      glifo:'♛', sentido:'três poderes · autoridade integrada · rei-sacerdote-juiz' },
    { n:9,  nome:'Espelho',             glifo:'⊛', sentido:'retorno da imagem · reconhecimento · Lacan' },
    { n:10, nome:'Bússola Inversa',     glifo:'⊕', sentido:'norte por exclusão · apofático · saber o que não é' },
    { n:11, nome:'Templo do Eixo',      glifo:'✢', sentido:'axis mundi · centro vertical · sagrado sobre profano' },
    { n:12, nome:'Vau',                 glifo:'≈', sentido:'travessia do rio · compromisso do meio · sem retorno' },
    { n:13, nome:'Tessitura',           glifo:'⁂', sentido:'tecido de muitos fios · rede · narrativa' },
    { n:14, nome:'Selo Quaternário',    glifo:'◈', sentido:'4 cantos · estabilidade · matriz fechada' },
    { n:15, nome:'Acrópole',            glifo:'⌂', sentido:'cidade alta · retirada estratégica · observatório' },
    { n:16, nome:'Catedra',             glifo:'†', sentido:'assento que ensina · autoridade doutrinal · palavra com peso' },
    { n:17, nome:'Convergência',        glifo:'※', sentido:'muitos caminhos em um ponto · síntese' },
    { n:18, nome:'Selo Final',          glifo:'◉', sentido:'fechamento · obra dada · silêncio depois' }
  ],

  // ============================================================
  // LENTES POR DIA DA SEMANA
  // ============================================================
  lentes: {
    0: { nome:'Síntese Dominical',     fontes:'integrar a semana', short:'Domingo · Síntese' },
    1: { nome:'Liderança',             fontes:'Jung + Sun Tzu',    short:'Segunda · Liderança' },
    2: { nome:'PNL e Linguagem',       fontes:'Bandler/Grinder + Erickson', short:'Terça · PNL' },
    3: { nome:'Filosofia Estoica',     fontes:'Marco Aurélio + Sêneca',     short:'Quarta · Estoica' },
    4: { nome:'Psicanálise',           fontes:'Freud + Lacan',              short:'Quinta · Psicanálise' },
    5: { nome:'Memorização',           fontes:'Yates + Palácio',            short:'Sexta · Memória' },
    6: { nome:'Motivacional',          fontes:'Shakespeare + clássicos',    short:'Sábado · Motivo' }
  },

  // ============================================================
  // CITACOES (selecao de 50+ do banco de 95)
  // ============================================================
  citacoes: [
    // PSICANALISE
    { frase:'O inconsciente é estruturado como uma linguagem.', autor:'Jacques Lacan', obra:'Função e Campo da Fala', ano:1953, lente:'psicanálise', peso:'grave' },
    { frase:'Onde isso era, eu devo advir.', autor:'Sigmund Freud', obra:'Novas Conferências, XXXI', ano:1933, lente:'psicanálise', peso:'grave' },
    { frase:'Não há relação sexual.', autor:'Jacques Lacan', obra:'Seminário XX', ano:1973, lente:'psicanálise', peso:'provocativo' },
    { frase:'O sonho é a via régia para o inconsciente.', autor:'Sigmund Freud', obra:'A Interpretação dos Sonhos', ano:1900, lente:'psicanálise', peso:'clássico' },
    { frase:'O eu não é senhor em sua própria casa.', autor:'Sigmund Freud', obra:'Uma Dificuldade da Psicanálise', ano:1917, lente:'psicanálise', peso:'estrutural' },
    { frase:'A criança não é apenas amada: é o falo da mãe.', autor:'Jacques Lacan', obra:'Seminário IV', ano:1956, lente:'psicanálise', peso:'técnico' },
    { frase:'O sintoma é uma verdade que não pode ser dita.', autor:'Jacques Lacan', obra:'Seminário I', ano:1953, lente:'psicanálise', peso:'chave' },
    { frase:'Todo trauma começa como uma confusão de línguas entre adulto e criança.', autor:'Sándor Ferenczi', obra:'Diário Clínico', ano:1932, lente:'psicanálise', peso:'chave' },
    { frase:'O analista empresta seu corpo.', autor:'Jacques Lacan', obra:'Seminário XI', ano:1964, lente:'psicanálise', peso:'técnico' },

    // NEUROCIENCIA + IE
    { frase:'A emoção decide antes de a razão deliberar.', autor:'Joseph LeDoux', obra:'O Cérebro Emocional', ano:1996, lente:'neurociência', peso:'chave' },
    { frase:'Nós não somos máquinas pensantes que sentem; somos máquinas sentintes que pensam.', autor:'António Damásio', obra:'O Erro de Descartes', ano:1994, lente:'neurociência', peso:'fundamental' },
    { frase:'QI te coloca na porta. IE decide se você entra.', autor:'Daniel Goleman', obra:'Inteligência Emocional', ano:1995, lente:'IE', peso:'aplicável' },
    { frase:'Nomear uma emoção reduz pela metade sua intensidade.', autor:'Matthew Lieberman', obra:'Affect Labeling fMRI', ano:2007, lente:'neurociência', peso:'aplicável' },

    // PNL · Bandler/Grinder/Erickson
    { frase:'O mapa não é o território.', autor:'Alfred Korzybski', obra:'Science and Sanity', ano:1933, lente:'PNL', peso:'fundacional' },
    { frase:'Toda comportamento tem uma intenção positiva.', autor:'Bandler & Grinder', obra:'Reframing', ano:1982, lente:'PNL', peso:'pressuposto' },
    { frase:'Se o que você está fazendo não funciona, faça qualquer outra coisa.', autor:'Richard Bandler', obra:'Using Your Brain for a Change', ano:1985, lente:'PNL', peso:'ação' },
    { frase:'A resistência do cliente é sinal de inflexibilidade do terapeuta.', autor:'Milton Erickson', obra:'obra geral', ano:1970, lente:'hipnose', peso:'técnico' },
    { frase:'Minha voz vai com você.', autor:'Milton Erickson', obra:'My Voice Will Go With You', ano:1982, lente:'hipnose', peso:'permissivo' },

    // PERSUASAO · Cialdini + Greene + Matz
    { frase:'As pessoas seguem o caminho de menor resistência racional quando a autoridade é clara.', autor:'Robert Cialdini', obra:'Influence', ano:2021, lente:'persuasão', peso:'estrutural' },
    { frase:'A escassez percebida transforma preferência em urgência.', autor:'Robert Cialdini', obra:'Influence', ano:2021, lente:'persuasão', peso:'chave' },
    { frase:'A sedução é um processo — quando acelera, fracassa.', autor:'Robert Greene', obra:'Arte da Sedução', ano:2001, lente:'poder', peso:'aplicável' },
    { frase:'Quem escolhe a moldura venceu metade da discussão.', autor:'síntese NEXUS', obra:'B05', ano:2026, lente:'persuasão', peso:'operacional' },

    // COMUNICACAO · Stone/Patton/Heen + Duhigg
    { frase:'Toda conversa difícil é três conversas: o que aconteceu, como nos sentimos, quem somos.', autor:'Stone · Patton · Heen', obra:'Difficult Conversations', ano:2010, lente:'comunicação', peso:'chave' },
    { frase:'Supercomunicadores perguntam mais do que respondem.', autor:'Charles Duhigg', obra:'Supercommunicators', ano:2024, lente:'comunicação', peso:'prático' },
    { frase:'Ouvir é o antídoto do argumento.', autor:'síntese Duhigg', obra:'looping', ano:2024, lente:'comunicação', peso:'operacional' },
    { frase:'A contribuição nunca é 50/50. Assuma a sua primeiro.', autor:'Stone/Patton/Heen', obra:'Difficult Conversations', ano:2010, lente:'comunicação', peso:'aplicável' },

    // JULGAMENTO · Kahneman + Likierman
    { frase:'O Sistema 1 vê o que quer ver. O Sistema 2, quando acordado, vê o que é.', autor:'Daniel Kahneman', obra:'Rápido e Devagar', ano:2011, lente:'julgamento', peso:'chave' },
    { frase:'Somos máquinas de explicações — não de verdades.', autor:'síntese Kahneman', obra:'Fast and Slow', ano:2011, lente:'julgamento', peso:'grave' },
    { frase:'Julgamento profissional = conhecimento + experiência + coragem + sabedoria + ação.', autor:'Andrew Likierman', obra:'Judgement at Work', ano:2025, lente:'julgamento', peso:'estrutural' },

    // FILOSOFIA · Estoicismo + Existencial
    { frase:'A alma se tinge da cor dos pensamentos.', autor:'Marco Aurélio', obra:'Meditações', ano:175, lente:'estoicismo', peso:'clássico' },
    { frase:'Não são as coisas que perturbam os homens, mas os juízos que fazem das coisas.', autor:'Epicteto', obra:'Enchirídion', ano:125, lente:'estoicismo', peso:'fundacional' },
    { frase:'Aproveita o dia, confia o mínimo possível no amanhã.', autor:'Horácio', obra:'Odes', ano:-23, lente:'clássico', peso:'aplicável' },
    { frase:'O homem está condenado a ser livre.', autor:'Jean-Paul Sartre', obra:'O Existencialismo é um Humanismo', ano:1946, lente:'existencial', peso:'chave' },
    { frase:'Aquele que tem um porquê suporta quase qualquer como.', autor:'Nietzsche (citado por Frankl)', obra:'Crepúsculo dos Ídolos', ano:1889, lente:'existencial', peso:'grave' },

    // SHAKESPEARE (pt-BR · Heliodora/Millôr/Nunes)
    { frase:'Ser, ou não ser, eis a questão.', autor:'William Shakespeare', obra:'Hamlet III.1', ano:1600, lente:'literatura', peso:'canônico' },
    { frase:'Há mais coisas entre o céu e a terra, Horácio, do que sonha tua filosofia.', autor:'William Shakespeare', obra:'Hamlet I.5', ano:1600, lente:'literatura', peso:'clássico' },
    { frase:'O mal que os homens fazem sobrevive a eles; o bem é muitas vezes sepultado com seus ossos.', autor:'William Shakespeare', obra:'Júlio César III.2', ano:1599, lente:'política', peso:'grave' },
    { frase:'Nada é bom nem ruim senão o pensamento o faz.', autor:'William Shakespeare', obra:'Hamlet II.2', ano:1600, lente:'literatura', peso:'psíquico' },
    { frase:'Coisa ruim nunca há de mostrar a verdadeira face dela.', autor:'William Shakespeare', obra:'Macbeth I.5', ano:1606, lente:'literatura', peso:'sombrio' },
    { frase:'Nosso pequeno mundo é cercado de sono.', autor:'William Shakespeare', obra:'A Tempestade IV.1', ano:1611, lente:'literatura', peso:'terminal' },
    { frase:'A coisa mais nova sob o sol é a coisa mais antiga.', autor:'William Shakespeare (paráfrase)', obra:'Henrique VI', ano:1590, lente:'literatura', peso:'irônico' },
    { frase:'Quando pastores se põem a discutir doutrina, as ovelhas morrem de fome.', autor:'John Donne (citado em NEXUS)', obra:'Sermão XIII', ano:1626, lente:'clássico', peso:'institucional' },

    // MEMORIA · Yates + classicos
    { frase:'A memória não é um depósito — é um palácio que se caminha.', autor:'síntese Yates', obra:'Arte da Memória', ano:1966, lente:'memória', peso:'aplicável' },
    { frase:'Quem lembra sem ordem não lembra — confunde.', autor:'Cícero', obra:'De Oratore II', ano:-55, lente:'retórica', peso:'clássico' },
    { frase:'A memória é a mãe das musas.', autor:'Hesíodo', obra:'Teogonia', ano:-700, lente:'clássico', peso:'fundacional' },

    // LUSOFONOS
    { frase:'O pensamento é, às vezes, um modo de adiar a vida.', autor:'Fernando Pessoa (Álvaro de Campos)', obra:'Tabacaria', ano:1928, lente:'literatura', peso:'existencial' },
    { frase:'Tenho em mim todos os sonhos do mundo.', autor:'Fernando Pessoa', obra:'Poemas', ano:1913, lente:'literatura', peso:'lírico' },
    { frase:'A vida é breve, a arte é longa, a ocasião fugaz.', autor:'Hipócrates (via Machado de Assis)', obra:'Aforismos · epígrafe', ano:-400, lente:'clássico', peso:'fundacional' },
    { frase:'O inferno são os outros — quando somos nós que lhes demos essa função.', autor:'Sartre (reenquadramento NEXUS)', obra:'Entre Quatro Paredes · leitura Ferenczi', ano:1944, lente:'existencial', peso:'aplicável' },
    { frase:'O tempo só ensina quem o respeita.', autor:'síntese NEXUS', obra:'B08 Julgamento', ano:2026, lente:'NEXUS', peso:'próprio' },
    { frase:'A autoridade que precisa se anunciar já se desfez.', autor:'síntese NEXUS', obra:'B08 Presença', ano:2026, lente:'NEXUS', peso:'próprio' }
  ],

  // ============================================================
  // REENQUADRAMENTOS (30+)
  // ============================================================
  reenquadramentos: [
    { glifo:'§', texto:'Se a ansiedade fosse estratégia, você já teria resolvido o universo. Não é. Tente pensar.', tipo:'autocobrança', ref:'B04 · IE aplicada' },
    { glifo:'§', texto:'"Não consegui terminar" quase sempre significa "não comecei direito". Volte ao passo 1 sem drama.', tipo:'autocobrança', ref:'B04' },
    { glifo:'❦', texto:'Você cobrou hoje o que não ensinou ontem. A lacuna não é de caráter — é de protocolo.', tipo:'liderança', ref:'B08' },
    { glifo:'§', texto:'A raiva que você sentiu sobre X provavelmente estava endereçada a Y. Isso é transferência, não incoerência.', tipo:'lente psicanalítica', ref:'Freud' },
    { glifo:'⟶', texto:'Entre dizer "depois eu decido" e decidir mal agora, há uma terceira opção: decidir quando decidir.', tipo:'julgamento', ref:'Kahneman Sistema 2' },
    { glifo:'❦', texto:'Se você só consegue ensinar em tom moral, talvez você ainda esteja aprendendo.', tipo:'pedagogia', ref:'Ferenczi · contratransferência' },
    { glifo:'§', texto:'O sintoma fala a verdade que o argumento ainda esconde. Ouça o corpo antes de escrever o e-mail.', tipo:'psicossomática', ref:'Freud + Goleman' },
    { glifo:'⟶', texto:'Toda reunião urgente que não mata ninguém pode esperar 15 minutos de respiração.', tipo:'crise-15min', ref:'B04 · regulação' },
    { glifo:'❦', texto:'Quem precisa jurar por três filhos já desconfia da própria frase. Observe isso em si também.', tipo:'overassurance', ref:'Miller/Rollnick' },
    { glifo:'§', texto:'O Palácio não é truque de memória — é cosmologia compacta. Leia Yates antes de achar que sabe.', tipo:'memória', ref:'Trilha 3' },
    { glifo:'⊛', texto:'Se todo mundo concorda demais rápido, alguém não falou o que pensa.', tipo:'grupo', ref:'Stone/Heen · elefante na sala' },
    { glifo:'◊', texto:'A formulação elegante é mais difícil que a agressiva — por isso é mais eficaz.', tipo:'comunicação', ref:'B06 · Duhigg matching' },
    { glifo:'⚯', texto:'O silêncio bem usado muda mais coisa que três parágrafos.', tipo:'presença', ref:'B08 · arquitetura' },
    { glifo:'✦', texto:'Se você precisa explicar por que tem autoridade, já perdeu a autoridade.', tipo:'autoridade', ref:'Greene + NEXUS' },
    { glifo:'§', texto:'O medo que você racionaliza hoje volta amanhã como insônia, como esquecimento, como gripe.', tipo:'somático', ref:'LeDoux · medo alto-baixo' },
    { glifo:'❦', texto:'Elogio excessivo é controle com outro nome. Observe quem o faz com você.', tipo:'poder', ref:'Cialdini · liking' },
    { glifo:'⟶', texto:'Fato + impacto + direção. Tudo mais é fofoca.', tipo:'tríade', ref:'B08 · Fillipe canônico' },
    { glifo:'◎', texto:'Toda posição institucional rígida esconde um medo pessoal flexível demais.', tipo:'leitura institucional', ref:'B08' },
    { glifo:'✢', texto:'O que você chama de "intuição" é repertório que seu Sistema 1 ainda não sabe nomear.', tipo:'intuição', ref:'Kahneman + Klein' },
    { glifo:'⊛', texto:'Amar também é aceitar não saber quem o outro é hoje.', tipo:'relação', ref:'Lacan · desejo do Outro' },
    { glifo:'⚒', texto:'Nenhuma reforma pessoal acontece sem fricção. Se está confortável, não está mudando.', tipo:'autoimposição', ref:'B04 + estoico' },
    { glifo:'§', texto:'O contratransferente é o seu compasso — não o seu defeito.', tipo:'clínico', ref:'Ferenczi' },
    { glifo:'◊', texto:'Uma frase bem feita vale por três reuniões mal conduzidas.', tipo:'linguagem', ref:'B01 · metamodel' },
    { glifo:'⟶', texto:'Quem não decide a pauta é pautado por ela.', tipo:'estratégia', ref:'B08 · comunicação para cima' },
    { glifo:'❦', texto:'Perdoar não é esquecer — é deixar de gastar energia com a lembrança.', tipo:'afetivo', ref:'estoico + psicanálise' },
    { glifo:'⊕', texto:'Saber o que você NÃO é limpa mais que afirmar o que você é.', tipo:'via negativa', ref:'Estação Bússola Inversa' },
    { glifo:'✦', texto:'Ambição sem método vira cansaço. Método sem ambição vira tédio.', tipo:'estrutural', ref:'B08 + estoico' },
    { glifo:'※', texto:'Três autores divergentes olhando o mesmo fato é mais fidedigno que dez concordando.', tipo:'metodologia', ref:'grafo conceitual' },
    { glifo:'♛', texto:'A autoridade real é composta: sabe, ouve, decide, assume. Faltando uma, vira encenação.', tipo:'poder', ref:'B08 · Coroa Tríplice' },
    { glifo:'†', texto:'O professor que não admite erro ensina o aluno a esconder o próprio.', tipo:'pedagogia', ref:'Ferenczi · sinceridade' },
    { glifo:'⌂', texto:'Retire-se quando o recuo custa menos do que a vitória.', tipo:'estratégia', ref:'Sun Tzu · B08' },
    { glifo:'◈', texto:'Quatro colunas sustentam qualquer decisão: fato, impacto, direção, proteção.', tipo:'tríade+1', ref:'Grade 10 Pontos' }
  ],

  // ============================================================
  // 5 PROTOCOLOS CANONICOS
  // ============================================================
  protocolos: [
    {
      id:'grade10', nome:'Grade 10 Pontos', meta:'≤30s em C3, ≤20s em C4', bloco:'central',
      passos:['Fato objetivo','Emoção predominante','Estrutura subjetiva (V/A/K · Satir)','Jogo de linguagem (D/D/G · Milton)','Jogo de poder (Cialdini · Greene)','Resistência (verdade · relação · identidade)','Motivação (toward/away · interna/externa)','Metaprograma dominante','Melhor formulação (curta · elegante · firme)','Proteção (imagem · legalidade · dignidade · eficácia)'],
      quando:'qualquer situação real que Fillipe trouxer — verbal, escrita, WhatsApp, reunião'
    },
    {
      id:'conversa_dificil', nome:'Conversa Difícil v2', meta:'30-90 min · planejamento denso', bloco:'B06',
      passos:['Prepare — terceira história · minha contribuição · emoções nomeadas','Regulate — 4-7-8 respiração · frase de ancoragem · postura','Third Story — abertura neutra · sem "você..."','Matching + Looping — qual conversa ele quer? parafraseio com precisão','Contribution — assumo a minha primeiro','Interests + Triad — por trás da posição · fato+impacto+direção','Commitment + Opção Dupla Real — acordo concreto ou não-acordo explicitado'],
      quando:'conversa POR VIR — confronto, feedback pesado, limite, negociação emocional'
    },
    {
      id:'crise_15min', nome:'Crise 15min', meta:'15 min fixos · 4 fases temporais', bloco:'B04',
      passos:['LER (0–2 min) — estado corporal · gatilho · amígdala (0-10) · meu próprio estado','REGULATE (2–5 min) — voz mais baixa · validar sem concordar · nomear emoção','CONDUZIR (5–10 min) — perguntas abertas · duas opções · resumir e pedir confirmação','FECHAR (10–15 min) — ritualizar saída · próxima marca · registro em 3 linhas'],
      quando:'situação aguda em tempo real — explosão, reunião descarrilhando, subordinado em colapso'
    },
    {
      id:'investigacao', nome:'Investigação', meta:'sessão estruturada · respeita lei', bloco:'B01+B03+B05',
      passos:['LER — V/A/K · Satir · metaprograma · micro-reações · linha de base','ABRIR — rapport · perguntas neutras · concessão pequena · Milton permissivo','EXTRAIR — abertas→fechadas · Metamodel · cronologia reversa · detalhes sensoriais · testar contradições','FECHAR — resumir declaração · dupla opção real · tríade · proteção legal'],
      quando:'entrevista · interrogatório · tomada de declaração · sondagem estruturada'
    },
    {
      id:'mapa_influencia', nome:'Mapa de Influência', meta:'ficha 8 campos por pessoa', bloco:'transversal',
      passos:['Metaprograma (direção · referência · evidência · tempo)','Princípio Cialdini predominante','V/A/K dominante','Categoria Satir em conflito','Gatilhos de identidade','Formulação eficaz vs. que queimou','Estratégia por cenário (pedir · feedback · negociar · crise)','Observações livres · hipótese a testar'],
      quando:'chefe · subordinado · par · stakeholder · interlocutor recorrente'
    }
  ],

  // ============================================================
  // 8 BLOCOS B01-B08 (expandidos)
  // ============================================================
  blocos: [
    { id:'B01', nome:'Estrutura e Modelagem Clássica', conceitos:['Metamodel','Deep/Surface Structure','Deletion/Distortion/Generalization','Nominalização','Pressuposição','V/A/K','Satir (placater/blamer/computer/distracter)','Meta-táticas I-III'], autores:'Bandler · Grinder · Satir' },
    { id:'B02', nome:'Manuais e Aplicação Prática', conceitos:['Rapport/calibração','Submodalidades/swish','Ancoragem','TOTE','Well-formed outcomes','Beliefs/reimprinting','Metaprogramas (direção/referência/evidência)'], autores:'O\'Connor · Knight · McKenna · Andreas' },
    { id:'B03', nome:'Linguagem, Reframing, Hipnose', conceitos:['Content reframing','Context reframing','6-step reframing','Milton Model','Hipnose conversacional','Metáfora terapêutica','Nested stories'], autores:'Erickson · Rosen · Bandler/Grinder' },
    { id:'B04', nome:'Inteligência Emocional e Neurociência', conceitos:['4 pilares IE (autoconsciência/autogestão/empatia/sociais)','Amygdala hijack','Flow','Labeling (Lieberman)','Contágio emocional','Rotas tálamo-amigdaliana'], autores:'Goleman · LeDoux · Damásio · Panksepp' },
    { id:'B05', nome:'Persuasão, Influência, Poder', conceitos:['7 princípios Cialdini (reciprocidade · consistência · prova social · autoridade · afeição · escassez · unidade)','Contraste perceptivo','Click-run','Rejeição-retirada','9 sedutores × 18 vítimas (Greene)','Psicografia Big 5 (Matz)'], autores:'Cialdini · Greene · Matz · Allen' },
    { id:'B06', nome:'Comunicação e Conversas Difíceis', conceitos:['3 conversas (fato/afeto/identidade)','Matching principle','Neural entrainment','Negociação silenciosa','Custo-benefício × similaridade','Supercomunicadores'], autores:'Stone/Patton/Heen · Duhigg · Kahneman' },
    { id:'B07', nome:'Feedback e Motivação', conceitos:['3 gatilhos (verdade/relação/identidade)','Switchtracking','Coaching vs avaliação vs apreciação','Vulnerabilidade calibrada','Entrevista motivacional (4 processos OARS)'], autores:'Stone/Heen · Miller/Rollnick' },
    { id:'B08', nome:'Julgamento, Decisão, Presença', conceitos:['Fato+Impacto+Direção','Opção dupla real','Framing + critério','Pressuposição temporal','Comunicação para cima','Metalinguagem de autoridade','Arquitetura da presença (estado+pré-suasão+posição+linguagem+silêncio)','Sistema 1/2','Heurísticas + vieses','6 dimensões do julgamento profissional'], autores:'Kahneman · Likierman · cards NEXUS' }
  ],

  // ============================================================
  // 30+ OBRAS CANONICAS
  // ============================================================
  obras: [
    { id:'freud1934', titulo:'Introdução Geral à Psicanálise', autor:'Sigmund Freud', ano:1934, bloco:'Psicanálise · central', paginas:414, nivel:'III', status:'fase 1' },
    { id:'freud_oc',  titulo:'Obras Completas', autor:'Sigmund Freud', ano:'1886–1939', bloco:'Psicanálise · referência', paginas:4369, nivel:'III', status:'consulta permanente' },
    { id:'ferenczi',  titulo:'Obras Completas 4v', autor:'Sándor Ferenczi', ano:'1908–1933', bloco:'Psicanálise · crítico', paginas:2024, nivel:'III', status:'fase 3 prevista' },
    { id:'roudinesco',titulo:'Dicionário de Psicanálise', autor:'Roudinesco & Plon', ano:1998, bloco:'Psicanálise · navegação', paginas:888, nivel:'referência', status:'consulta' },
    { id:'diniz',     titulo:'O que os psiquiatras não te contam', autor:'Juliana Belo Diniz', ano:2025, bloco:'Psiquiatria humanizada', paginas:265, nivel:'II', status:'leitura ativa · 7 episódios áudio' },
    { id:'suy',       titulo:'Amor e Desejo (dissertação)', autor:'Ana Suy Sesarino Kuss', ano:2017, bloco:'Psicanálise contemporânea', paginas:96, nivel:'II', status:'introdução ao Lacan' },
    { id:'kahneman',  titulo:'Rápido e Devagar', autor:'Daniel Kahneman', ano:2011, bloco:'B08 · julgamento', paginas:892, nivel:'III', status:'planejado C4' },
    { id:'likierman', titulo:'Judgement at Work', autor:'Andrew Likierman', ano:2025, bloco:'B08 · profissional', paginas:295, nivel:'II', status:'planejado' },
    { id:'yates',     titulo:'A Arte da Memória', autor:'Frances A. Yates', ano:1966, bloco:'Memorização · fundacional', paginas:84, nivel:'III', status:'iniciar Trilha 3' },
    { id:'obrien',    titulo:'How to Develop a Perfect Memory', autor:'Dominic O\'Brien', ano:1994, bloco:'Memorização · prática', paginas:180, nivel:'II', status:'fase 2' },
    { id:'cialdini',  titulo:'Influence: New & Expanded', autor:'Robert Cialdini', ano:2021, bloco:'B05 · canônica', paginas:532, nivel:'III', status:'em leitura' },
    { id:'greene',    titulo:'Arte da Sedução', autor:'Robert Greene', ano:2001, bloco:'B05 · poder', paginas:496, nivel:'II', status:'consulta seletiva' },
    { id:'matz',      titulo:'Mindmasters', autor:'Sandra Matz', ano:2024, bloco:'B05 · psicografia', paginas:243, nivel:'II', status:'planejado' },
    { id:'duhigg',    titulo:'Supercommunicators', autor:'Charles Duhigg', ano:2024, bloco:'B06 · canônica', paginas:327, nivel:'III', status:'em leitura' },
    { id:'stone',     titulo:'Difficult Conversations', autor:'Stone · Patton · Heen', ano:2010, bloco:'B06 · canônica', paginas:398, nivel:'III', status:'aplicado' },
    { id:'goleman',   titulo:'Inteligência Emocional', autor:'Daniel Goleman', ano:1995, bloco:'B04 · canônica', paginas:420, nivel:'III', status:'aplicado' },
    { id:'ledoux',    titulo:'O Cérebro Emocional', autor:'Joseph LeDoux', ano:1996, bloco:'B04 · neuro', paginas:84, nivel:'II', status:'em leitura' },
    { id:'bandler',   titulo:'Estrutura da Magia I+II', autor:'Bandler & Grinder', ano:1975, bloco:'B01 · canônica', paginas:447, nivel:'III', status:'aplicado' },
    { id:'reframing', titulo:'Reframing', autor:'Bandler & Grinder', ano:1982, bloco:'B03 · canônica', paginas:191, nivel:'III', status:'aplicado' },
    { id:'erickson',  titulo:'Experiencing Hypnosis', autor:'Milton Erickson', ano:1981, bloco:'B03 · canônica', paginas:69, nivel:'II', status:'em leitura' },
    { id:'rosen',     titulo:'My Voice Will Go With You', autor:'Sidney Rosen (Erickson)', ano:1982, bloco:'B03 · teaching tales', paginas:131, nivel:'II', status:'em leitura' },
    { id:'oconnor',   titulo:'Manual de PNL 2021', autor:'Joseph O\'Connor', ano:2021, bloco:'B02 · referência', paginas:329, nivel:'III', status:'consulta' },
    { id:'knight',    titulo:'NLP at Work (4ed)', autor:'Sue Knight', ano:2025, bloco:'B02 · corporativo', paginas:523, nivel:'II', status:'planejado' },
    { id:'miller',    titulo:'Motivational Interviewing', autor:'Miller & Rollnick', ano:2023, bloco:'B07 · canônica', paginas:355, nivel:'II', status:'planejado' },
    { id:'shakespeare_hamlet', titulo:'Hamlet', autor:'William Shakespeare (pt-BR)', ano:1600, bloco:'Shakespeare · laboratório', paginas:192, nivel:'III', status:'planejado Trilha 5' },
    { id:'shakespeare_lear', titulo:'Rei Lear', autor:'William Shakespeare (pt-BR)', ano:1606, bloco:'Shakespeare', paginas:194, nivel:'III', status:'planejado' },
    { id:'shakespeare_macbeth', titulo:'Macbeth', autor:'William Shakespeare (pt-BR)', ano:1606, bloco:'Shakespeare', paginas:136, nivel:'III', status:'planejado' },
    { id:'shakespeare_tempestade', titulo:'A Tempestade', autor:'William Shakespeare (pt-BR)', ano:1611, bloco:'Shakespeare', paginas:119, nivel:'II', status:'planejado' },
    { id:'shakespeare_romeu', titulo:'Romeu e Julieta', autor:'William Shakespeare (pt-BR)', ano:1597, bloco:'Shakespeare · entrada', paginas:173, nivel:'II', status:'primeiro' },
    { id:'shakespeare_joao', titulo:'Vida e Morte do Rei João', autor:'William Shakespeare (pt-BR)', ano:1596, bloco:'Shakespeare · histórica', paginas:133, nivel:'II', status:'planejado' },
    { id:'amthor',    titulo:'Neurociência para Leigos', autor:'Frank Amthor', ano:2011, bloco:'Neurociência · panorama', paginas:483, nivel:'I', status:'base' },
    { id:'aquino',    titulo:'Suma Teológica Vol. III', autor:'Tomás de Aquino', ano:1274, bloco:'Filosofia · teologia', paginas:4278, nivel:'III', status:'consulta verbetes' }
  ],

  // ============================================================
  // 8 TRILHAS EXPANDIDAS
  // ============================================================
  trilhas: [
    { n:1, id:'psicanalise', nome:'Psicanálise', autores:'Freud → Ferenczi → Lacan → Roudinesco', duracao:'12-18 meses', progresso:8, fase_atual:'Fase 1 · Introdutórios + dicionário', sequencia:['Introdutórios (37p+20p)','Cartas a Jovem Terapeuta','Roudinesco dicionário','Freud 1934 integral','Ferenczi seletivo','Lacan via Roudinesco','3 sínteses comparativas'] },
    { n:2, id:'neuro', nome:'Neurociência + IE', autores:'Amthor → LeDoux → Goleman → Panksepp', duracao:'6-9 meses', progresso:12, fase_atual:'Fase 1 · Panorama Amthor', sequencia:['Amthor panorama','LeDoux ptBR+EN','Goleman 4 pilares','Panksepp 7 eixos','Ponte psicanálise-neuro'] },
    { n:3, id:'memoria', nome:'Memorização', autores:'Yates → O\'Brien → Palácio NEXUS', duracao:'4-6 meses', progresso:12, fase_atual:'Fase 1 · Yates caps 1-3', sequencia:['Yates fundamentos (Simônides · Cícero · Quintiliano)','O\'Brien prática (método jornada · Dominic)','Integração ao Palácio NEXUS (18 estações povoadas)','Yates aprofundamento (Llull · Bruno · Camillo · Fludd)','Aplicação permanente'] },
    { n:4, id:'julgamento', nome:'Julgamento · Kahneman', autores:'Kahneman → Likierman', duracao:'4-6 meses', progresso:0, fase_atual:'aguardando início', sequencia:['Kahneman Parte I-II (Sistema 1/2 · heurísticas)','Parte III-V (vieses · escolhas · dois eus)','Likierman 6 dimensões','Integração operacional','Aplicação investigativa'] },
    { n:5, id:'shakespeare', nome:'Shakespeare + Lente Psicanalítica', autores:'5 tragédias + Rei João', duracao:'6 meses', progresso:5, fase_atual:'Romeu e Julieta (preparação)', sequencia:['Romeu e Julieta','Macbeth × Freud (luto/melancolia)','Hamlet × Lacan (desejo do Outro)','Rei Lear × Winnicott/Lacan','A Tempestade × Jung','Vida e Morte Rei João × política'] },
    { n:6, id:'pnl', nome:'PNL + Comunicação Estratégica', autores:'Bandler/Grinder → O\'Connor → Erickson → Cialdini → Duhigg', duracao:'8-12 meses (C1-C4)', progresso:45, fase_atual:'C2 em andamento · ciclos de 93 eventos', sequencia:['C1 Abr · aprender (B01)','C2 Mai · fundamentos (B02-B03)','C3 Jun · integração (B05-B06)','C4 Jul · automatização (B07-B08)'] },
    { n:7, id:'persuasao', nome:'Persuasão e Poder', autores:'Cialdini → Greene → Matz', duracao:'4-6 meses', progresso:15, fase_atual:'Cialdini 2021 Parte I', sequencia:['Cialdini Influence 2021 integral','Pre-Suasion (lacuna)','Greene sedutores/vítimas seletivo','Matz Big 5 + psicografia','Aplicação institucional'] },
    { n:8, id:'presenca', nome:'Presença e Autodomínio', autores:'síntese transversal · Sêneca+Jung+Goleman+Lacan', duracao:'contínua', progresso:20, fase_atual:'B08 cards em aplicação', sequencia:['Presença corporal+voz','Regulação sob pressão','Linguagem de autoridade','Silêncio estratégico','Identidade sob ataque','Comunicação para cima'] }
  ],

  // ============================================================
  // GRAFO CONCEITUAL (convergencias + divergencias)
  // ============================================================
  grafo: [
    { a:'Freud', b:'Ferenczi', rel:'↑ apoia+diverge', nota:'Ferenczi parte de Freud mas critica neutralidade técnica' },
    { a:'Freud', b:'Lacan', rel:'↑ retorno a', nota:'Lacan lê Freud via Saussure/Hegel/Heidegger' },
    { a:'Lacan', b:'ego-psychology', rel:'⊥ diverge', nota:'Lacan rejeita Hartmann e psicologia americana' },
    { a:'Kahneman', b:'LeDoux', rel:'→ converge', nota:'Sistema 1 é ampla a amígdala + heurísticas' },
    { a:'Kahneman', b:'Damásio', rel:'→ converge', nota:'ambos: emoção anterior à razão' },
    { a:'Cialdini', b:'Mauss', rel:'↑ apoia-se', nota:'reciprocidade Cialdini ← dom de Mauss' },
    { a:'Bandler/Grinder', b:'Satir', rel:'↑ apoia-se', nota:'B/G modelam Satir + Erickson + Perls' },
    { a:'Bandler/Grinder', b:'Chomsky', rel:'↑ apoia-se', nota:'gramática transformacional como base do metamodel' },
    { a:'Erickson', b:'Milton Model', rel:'↓ extraído de', nota:'B/G extraem padrões hipnóticos ericksonianos' },
    { a:'Stone/Patton/Heen', b:'Duhigg', rel:'→ converge', nota:'3 conversas × 3 camadas (prática/emocional/social)' },
    { a:'Yates', b:'Cícero/Quintiliano', rel:'↑ apoia-se', nota:'arte da memória clássica → cosmologia renascentista' },
    { a:'Ferenczi', b:'Kohut', rel:'→ converge', nota:'empatia clínica · precursor da self-psychology' },
    { a:'Shakespeare Macbeth', b:'Freud melancolia', rel:'🎯 aplicação', nota:'ambição + culpa + superego persecutório' },
    { a:'Shakespeare Hamlet', b:'Lacan desejo', rel:'🎯 aplicação', nota:'desejo do Outro · paralisia significante' },
    { a:'Shakespeare Lear', b:'Lacan Nome-do-Pai', rel:'🎯 aplicação', nota:'pai simbólico falhando + abdicação' }
  ],

  // ============================================================
  // LACUNAS CONHECIDAS (obras a adquirir)
  // ============================================================
  lacunas: [
    { prio:1, obra:'Thanks for the Feedback', autor:'Stone & Heen', bloco:'B07 central' },
    { prio:1, obra:'Noise', autor:'Kahneman·Sibony·Sunstein', bloco:'B08 extensão' },
    { prio:2, obra:'Pre-Suasion', autor:'Cialdini', bloco:'B05 complementar' },
    { prio:2, obra:'Frogs into Princes', autor:'Bandler/Grinder', bloco:'B03 original' },
    { prio:2, obra:'O Erro de Descartes', autor:'Damásio', bloco:'neurociência ponte' },
    { prio:2, obra:'Affective Neuroscience', autor:'Panksepp', bloco:'B04 substrato' },
    { prio:3, obra:'Lacan — Escritos/Seminário XI', autor:'Jacques Lacan', bloco:'psicanálise primária' },
    { prio:3, obra:'Jung — Tipos Psicológicos', autor:'C.G. Jung', bloco:'Trilha 8' },
    { prio:3, obra:'Emotions Revealed', autor:'Paul Ekman', bloco:'leitura corporal' },
    { prio:3, obra:'Cartas a Lucílio · Meditações · Enchirídion', autor:'Sêneca · Marco Aurélio · Epicteto', bloco:'estoicismo' }
  ]
};
