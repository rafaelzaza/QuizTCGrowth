import type { QuizStep, QuizResult } from '../types/quiz.types'

export const quizSteps: QuizStep[] = [
  {
    id: 'q1',
    step: 1,
    type: 'question',
    question_type: 'grid',
    body: 'Como você descreveria seu negócio hoje? 👇',
    subtitle: 'Selecione a opção que mais combina com você.',
    required: true,
    multiple_select: false,
    options: [
      { id: 'q1_a', type: 'grid_item', emoji: '🃏', label: 'Tenho uma loja TCG', value: 'loja_tcg' },
      { id: 'q1_b', type: 'grid_item', emoji: '🎙️', label: 'Sou criador / marca pessoal', value: 'marca_pessoal' },
      { id: 'q1_c', type: 'grid_item', emoji: '🏪', label: 'Loja + marca pessoal', value: 'loja_e_marca' },
      { id: 'q1_d', type: 'grid_item', emoji: '🚀', label: 'Ainda estou começando', value: 'iniciante' }
    ]
  },
  {
    id: 'q2',
    step: 2,
    type: 'question',
    question_type: 'grid',
    body: 'Você já posta conteúdo ou ainda está começando? 🎬',
    subtitle: 'Selecione a opção que mais combina com você.',
    required: true,
    multiple_select: false,
    options: [
      { id: 'q2_a', type: 'grid_item', emoji: '📱', label: 'Já posto com frequência', value: 'posta_frequente' },
      { id: 'q2_b', type: 'grid_item', emoji: '😬', label: 'Posto, mas de forma irregular', value: 'posta_irregular' },
      { id: 'q2_c', type: 'grid_item', emoji: '🌱', label: 'Estou começando agora', value: 'iniciando' },
      { id: 'q2_d', type: 'grid_item', emoji: '💭', label: 'Quero começar mas ainda não comecei', value: 'quer_comecar' }
    ]
  },
  // ── Condicionais por Q3_loja ─────────────────────────────────────────────
  {
    id: 'q5_loja_fisica',
    type: 'question',
    question_type: 'list',
    default: false,
    condition: { question_id: 'q3_loja', values: ['fisica'] },
    body: 'Você já perdeu vendas por não ter presença forte no digital? 📵',
    subtitle: 'Seja honesto.',
    required: true,
    multiple_select: false,
    options: [
      { id: 'q5lf_a', type: 'list_item', emoji: '😬', label: 'Sim, sinto que perco clientes pra concorrentes online', subtext: 'Presença digital fraca', value: 'perde_clientes' },
      { id: 'q5lf_b', type: 'list_item', emoji: '🤷', label: 'Não sei, nunca acompanhei', subtext: 'Sem controle', value: 'nao_sabe' },
      { id: 'q5lf_c', type: 'list_item', emoji: '🙂', label: 'Ainda não sinto impacto', subtext: 'Loja vai bem assim', value: 'sem_impacto' },
    ],
  },
  {
    id: 'q5_loja_redes',
    type: 'question',
    question_type: 'list',
    default: false,
    condition: { question_id: 'q3_loja', values: ['redes', 'ambos'] },
    body: 'Qual tipo de vídeo mais funciona pra sua loja hoje? 📦',
    subtitle: 'Escolha o que gera mais resultado.',
    required: true,
    multiple_select: false,
    options: [
      { id: 'q5lr_a', type: 'list_item', emoji: '🃏', label: 'Unboxing e reveal de cartas', subtext: 'Entretenimento TCG', value: 'unboxing' },
      { id: 'q5lr_b', type: 'list_item', emoji: '💰', label: 'Promoções e preços', subtext: 'Direto ao ponto', value: 'promocoes' },
      { id: 'q5lr_c', type: 'list_item', emoji: '🏆', label: 'Torneios e eventos', subtext: 'Comunidade', value: 'eventos' },
      { id: 'q5lr_d', type: 'list_item', emoji: '❓', label: 'Ainda não sei o que funciona', subtext: 'Sem dados ainda', value: 'nao_sabe' },
    ],
  },

  // ── Condicionais por Q3_marca ─────────────────────────────────────────────
  {
    id: 'q5_marca_inseguro',
    type: 'question',
    question_type: 'list',
    default: false,
    condition: { question_id: 'q3_marca', values: ['inseguro', 'nao_comecou'] },
    body: 'O que você acha que faria mais diferença no seu conteúdo agora? 🎯',
    subtitle: 'Escolha o principal.',
    required: true,
    multiple_select: false,
    options: [
      { id: 'q5mi_a', type: 'list_item', emoji: '✂️', label: 'Edição mais dinâmica e profissional', subtext: 'Visual que prende atenção', value: 'edicao_dinamica' },
      { id: 'q5mi_b', type: 'list_item', emoji: '🎨', label: 'Identidade visual consistente', subtext: 'Marca reconhecível', value: 'identidade' },
      { id: 'q5mi_c', type: 'list_item', emoji: '🔁', label: 'Postar mais vezes por semana', subtext: 'Consistência acima de tudo', value: 'consistencia' },
      { id: 'q5mi_d', type: 'list_item', emoji: '📣', label: 'Conteúdo que gere mais comentários e compartilhamentos', subtext: 'Engajamento real', value: 'engajamento' },
    ],
  },
  {
    id: 'q5_marca_engajamento',
    type: 'question',
    question_type: 'multiple_choice',
    default: false,
    condition: { question_id: 'q3_marca', values: ['ideia_boa_exec_ruim', 'baixo_engajamento'] },
    body: 'O que você acha que faz os vídeos não reterem? 🔍',
    subtitle: 'Selecione tudo que faz sentido.',
    required: true,
    multiple_select: true,
    options: [
      { id: 'q5me_a', type: 'choice_item', emoji: '⏩', label: 'Ritmo lento, sem cortes dinâmicos', value: 'ritmo_lento' },
      { id: 'q5me_b', type: 'choice_item', emoji: '🎨', label: 'Visual sem identidade ou personalidade', value: 'sem_identidade' },
      { id: 'q5me_c', type: 'choice_item', emoji: '🔇', label: 'Áudio ruim ou sem trilha', value: 'audio_ruim' },
      { id: 'q5me_d', type: 'choice_item', emoji: '📵', label: 'Hook fraco nos primeiros 3 segundos', value: 'hook_fraco' },
      { id: 'q5me_e', type: 'choice_item', emoji: '🤷', label: 'Não sei ao certo', value: 'nao_sabe' },
    ],
  },

  // ── Condicional por Q3_combo ──────────────────────────────────────────────
  {
    id: 'q5_combo_dividido',
    type: 'question',
    question_type: 'list',
    default: false,
    condition: { question_id: 'q3_combo', values: ['dividido', 'depende', 'prioriza_loja'] },
    body: 'Com que frequência você consegue postar conteúdo de qualidade? 📅',
    subtitle: 'Sendo bem realista.',
    required: true,
    multiple_select: false,
    options: [
      { id: 'q5cd_a', type: 'list_item', emoji: '✅', label: 'Toda semana, mesmo que pouco', subtext: 'Consistente', value: 'toda_semana' },
      { id: 'q5cd_b', type: 'list_item', emoji: '📆', label: 'Quinzenal ou mensal', subtext: 'Irregular', value: 'quinzenal' },
      { id: 'q5cd_c', type: 'list_item', emoji: '❌', label: 'Quase nunca consigo', subtext: 'Sem tempo mesmo', value: 'quase_nunca' },
      { id: 'q5cd_d', type: 'list_item', emoji: '🌊', label: 'Varia muito, sem padrão', subtext: 'Depende da semana', value: 'sem_padrao' },
    ],
  },

  // ── Condicionais por Q3_iniciante ─────────────────────────────────────────
  {
    id: 'q5_ini_medo',
    type: 'question',
    question_type: 'list',
    default: false,
    condition: { question_id: 'q3_iniciante', values: ['medo_amador', 'sem_estrutura'] },
    body: 'Se você tivesse vídeos com qualidade profissional prontos toda semana, você postaria? 🚀',
    subtitle: 'Seja honesto.',
    required: true,
    multiple_select: false,
    options: [
      { id: 'q5im_a', type: 'list_item', emoji: '🔥', label: 'Sim, com certeza', subtext: 'Era só isso que faltava', value: 'sim_certeza' },
      { id: 'q5im_b', type: 'list_item', emoji: '🙂', label: 'Provavelmente sim', subtext: 'Ainda teria que testar', value: 'provavelmente' },
      { id: 'q5im_c', type: 'list_item', emoji: '🤔', label: 'Talvez, ainda tenho dúvidas', subtext: 'Preciso pensar mais', value: 'talvez' },
    ],
  },
  {
    id: 'q5_ini_pauta',
    type: 'question',
    question_type: 'multiple_choice',
    default: false,
    condition: { question_id: 'q3_iniciante', values: ['sem_pauta', 'nao_sabe_editar'] },
    body: 'Que tipo de conteúdo você imagina fazer? 🎬',
    subtitle: 'Selecione tudo que faz sentido.',
    required: true,
    multiple_select: true,
    options: [
      { id: 'q5ip_a', type: 'choice_item', emoji: '🃏', label: 'Unboxing e aberturas de pacote', value: 'unboxing' },
      { id: 'q5ip_b', type: 'choice_item', emoji: '🏆', label: 'Gameplay e torneios', value: 'gameplay' },
      { id: 'q5ip_c', type: 'choice_item', emoji: '📚', label: 'Conteúdo educativo sobre TCG', value: 'educativo' },
      { id: 'q5ip_d', type: 'choice_item', emoji: '💰', label: 'Divulgação de produtos e preços', value: 'divulgacao' },
      { id: 'q5ip_e', type: 'choice_item', emoji: '🤷', label: 'Ainda não sei', value: 'nao_sabe' },
    ],
  },

  // ── Steps existentes ──────────────────────────────────────────────────────
  {
    id: 'f1',
    step: 3,
    type: 'fact',
    body: 'Você sabia?',
    headline: 'Vídeos com edição profissional têm até 3x mais retenção no Instagram.',
    description: 'O algoritmo prioriza conteúdo que mantém as pessoas assistindo até o final. Retenção é o novo alcance — e ela começa na qualidade visual do seu vídeo.',
    image: '/phone-growth.jpg',
    cta_label: 'Continuar →',
    cta_action: 'next_step'
  },
  {
    id: 'q3',
    step: 4,
    type: 'question',
    question_type: 'list',
    body: 'Qual é o maior problema dos seus vídeos hoje? 🎬',
    subtitle: 'Escolha o principal.',
    required: true,
    multiple_select: false,
    options: [
      { id: 'q3_a', type: 'list_item', emoji: '📉', label: 'Não retêm as pessoas até o final', subtext: 'Alto drop-off', value: 'sem_retencao' },
      { id: 'q3_b', type: 'list_item', emoji: '😐', label: 'Ficam sem dinamismo e cansativos', subtext: 'Ritmo lento', value: 'sem_dinamismo' },
      { id: 'q3_c', type: 'list_item', emoji: '🎨', label: 'Não têm identidade visual forte', subtext: 'Parecem amadores', value: 'sem_identidade' },
      { id: 'q3_d', type: 'list_item', emoji: '🔇', label: 'Áudio fraco ou sem trilha', subtext: 'Experiência ruim', value: 'audio_fraco' }
    ]
  },
  {
    id: 'q4',
    step: 5,
    type: 'question',
    question_type: 'multiple_choice',
    body: 'Quais dessas situações você já viveu? 👇',
    subtitle: 'Selecione todas que se aplicam.',
    required: true,
    multiple_select: true,
    options: [
      { id: 'q4_a', type: 'choice_item', emoji: '📉', label: 'Postei um vídeo e ele não engajou nada', value: 'sem_engajamento' },
      { id: 'q4_b', type: 'choice_item', emoji: '⏱️', label: 'Perdi muito tempo editando e o resultado ficou ruim', value: 'tempo_perdido' },
      { id: 'q4_c', type: 'choice_item', emoji: '😓', label: 'Me comparei com outros criadores e senti que ficava atrás', value: 'comparacao' },
      { id: 'q4_d', type: 'choice_item', emoji: '🛒', label: 'Senti que meu conteúdo não gerou vendas nem oportunidades', value: 'sem_conversao' },
      { id: 'q4_e', type: 'choice_item', emoji: '🔇', label: 'As pessoas não assistem meus vídeos até o final', value: 'baixa_retencao' }
    ]
  },
  {
    id: 'q5',
    step: 6,
    type: 'question',
    question_type: 'list',
    body: 'Qual é sua maior barreira hoje para ter vídeos de qualidade? 🚧',
    subtitle: 'Escolha a principal.',
    required: true,
    multiple_select: false,
    options: [
      { id: 'q5_a', type: 'list_item', emoji: '⏳', label: 'Falta de tempo para editar', subtext: 'O dia a dia não deixa espaço', value: 'falta_tempo' },
      { id: 'q5_b', type: 'list_item', emoji: '🎬', label: 'Não sei editar no nível que quero', subtext: 'Falta habilidade técnica', value: 'falta_habilidade' },
      { id: 'q5_c', type: 'list_item', emoji: '💸', label: 'Já tentei contratar, mas não confiei no resultado', subtext: 'Experiências ruins com editores', value: 'desconfianca' },
      { id: 'q5_d', type: 'list_item', emoji: '🤷', label: 'Não sei por onde começar', subtext: 'Falta direção e estratégia', value: 'sem_direcao' }
    ]
  },
  {
    id: 'f2',
    step: 7,
    type: 'fact',
    body: 'Dado importante:',
    headline: 'Criadores com edição consistente e dinâmica vendem até 2x mais do que quem posta de forma amadora.',
    description: 'Não é só sobre views — é sobre autoridade. Quando seu vídeo parece profissional, o seu produto também parece. A percepção de valor começa antes de qualquer oferta.',
    cta_label: 'Quero ver como resolver →',
    cta_action: 'next_step'
  },
  {
    id: 'q6',
    step: 8,
    type: 'question',
    question_type: 'grid',
    body: 'Se seus vídeos gerassem muito mais engajamento, o que mudaria primeiro? 🎯',
    subtitle: 'Escolha o resultado que mais importa pra você agora.',
    required: true,
    multiple_select: false,
    options: [
      { id: 'q6_a', type: 'grid_item', emoji: '📈', label: 'Mais vendas diretas', value: 'mais_vendas' },
      { id: 'q6_b', type: 'grid_item', emoji: '🔥', label: 'Muito mais alcance e seguidores', value: 'mais_alcance' },
      { id: 'q6_c', type: 'grid_item', emoji: '🏆', label: 'Ser referência no nicho TCG', value: 'autoridade' },
      { id: 'q6_d', type: 'grid_item', emoji: '🤝', label: 'Atrair parcerias e oportunidades', value: 'parcerias' }
    ]
  },
  {
    id: 'q7',
    step: 9,
    type: 'question',
    question_type: 'multiple_choice',
    body: 'O que seria ideal pra você em um parceiro de edição? ✅',
    subtitle: 'Selecione tudo que importa pra você.',
    required: true,
    multiple_select: true,
    options: [
      { id: 'q7_a', type: 'choice_item', emoji: '⚡', label: 'Entrega rápida, sem enrolação', value: 'entrega_rapida' },
      { id: 'q7_b', type: 'choice_item', emoji: '🎨', label: 'Vídeos com identidade visual forte', value: 'identidade_visual' },
      { id: 'q7_c', type: 'choice_item', emoji: '🔁', label: 'Consistência — postagem toda semana', value: 'consistencia' },
      { id: 'q7_d', type: 'choice_item', emoji: '💬', label: 'Comunicação fácil e direta', value: 'comunicacao' },
      { id: 'q7_e', type: 'choice_item', emoji: '📊', label: 'Vídeos pensados pra retenção e resultado', value: 'foco_resultado' }
    ]
  }
]

export const quizResult: QuizResult = {
  id: 'result',
  type: 'result',
  headline: 'Seu conteúdo tem potencial — o que falta é execução.',
  body: 'Com base nas suas respostas, você já sabe o que quer mas ainda não tem os vídeos que merecem. A TCG Growth existe exatamente pra isso: vídeos dinâmicos, com retenção real, entregues no prazo — pra você focar no que importa.',
  cta_label: 'Falar no WhatsApp →',
  cta_action: 'redirect_whatsapp',
  cta_url: 'https://wa.me/5548996065524'
}
