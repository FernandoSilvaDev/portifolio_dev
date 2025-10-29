import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import 'animate.css'

import { Lista } from './styles'

import { useTranslation } from 'react-i18next'
import '../../i18n'

const Projetos = () => {
  const { t } = useTranslation()

  const projetos = [
    {
      titulo: 'Eplay Games',
      tecnologias:
        'Styles, JavaScript, TypeScript, EsLisnt, React, Prettier, Redux, Router, Hash-link, Input-Mask, Yup, Formik and Spinners',
      descricao: t('Eplay'),
      link: 'https://eplay-fs.vercel.app/',
      linkGit: 'https://github.com/FernandoSilvaDev/eplay',
      imagem: '/img/Eplay_games_01.jpg',
      imagemExtra: '/img/Eplay_games_02.jpg',
      className: 'animate__animated animate__fadeInUp'
    },
    {
      titulo: 'Efood',
      tecnologias:
        'Styles, JavaScript, TypeScript, EsLisnt, React, Prettier, Redux, Router, Input-Mask, Yup, Formik and Spinners',
      descricao: t('Efood'),
      link: 'https://efoodfs.vercel.app/',
      linkGit: 'https://github.com/FernandoSilvaDev/efood',
      imagem: '/img/Efood_01.jpg',
      imagemExtra: '/img/Efood_02.jpg',
      className: 'animate__animated animate__fadeInUp'
    },
    {
      titulo: 'Streaming Disney+ Rogue One',
      tecnologias:
        'HTML, CSS, JavaScript, Sass, Grunt, Uglify, Gulp e Bootstrap',
      descricao: t('RogueOne'),
      link: 'https://rogue-one-disney-app.vercel.app/',
      linkGit: 'https://github.com/FernandoSilvaDev/Rogue-one-Disney-app',
      imagem: '/img/Home_page Disney_Plus_Rog_One.jpg',
      imagemExtra: '/img/Home_page Disney_Plus_Rog_One_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },
    {
      titulo: 'Modelo Processo de dados Python ',
      tecnologias: 'Python',
      descricao: t('DataProcess'),
      link: null,
      linkGit: 'https://github.com/FernandoSilvaDev/date_process_python',
      imagem: '/img/Process_date_01.jpg',
      imagemExtra: '/img/Process_date_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },
    // {
    //   titulo: 'Store Games',
    //   tecnologias:
    //     'Styles, JavaScript, TypeScript, EsLisnt, React, Prettier, Redux, Bootstrap',
    //   descricao: t('Games'),
    //   link: 'https://loja-games-fs.vercel.app/',
    //   linkGit: 'https://github.com/FernandoSilvaDev/loja_games',
    //   imagem: '/img/Loja_games_01.jpg',
    //   imagemExtra: '/img/Loja_games_02.jpg',
    //   dataAo: 'fade-up',
    //   dataAosAnchorPlacement: 'bottom-bottom'
    // },
    {
      titulo: 'Lista de contatos',
      tecnologias:
        'Styles, JavaScript, TypeScript, EsLisnt, React, Prettier, Redux, React-mask, Router',
      descricao: t('Contato'),
      link: 'https://lista-de-contatosfs.vercel.app/',
      linkGit: 'https://github.com/FernandoSilvaDev/lista_de_contatos',
      imagem: '/img/Lista_de_contatos_01.jpg',
      imagemExtra: '/img/Lista_de_contatos_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },
    {
      titulo: 'Clone KTM 2023',
      tecnologias: 'HTML, JavaScript, CSS, JQuery e Bootstrap',
      descricao: t('Ktm'),
      link: 'https://ktm-pied.vercel.app/',
      linkGit: 'https://github.com/FernandoSilvaDev/ktm',
      imagem: '/img/Home_page_KTM_2003.jpg',
      imagemExtra: '/img/Home_page_KTM_2003_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },
    {
      titulo: 'Loja de esportes',
      tecnologias:
        'Styles, JavaScript, TypeScript, EsLisnt, React, Prettier, Redux, Bootstrap',
      descricao: t('Esportes'),
      link: 'https://loja-de-esportesfs.vercel.app/',
      linkGit: 'https://github.com/FernandoSilvaDev/loja_de_esportes',
      imagem: '/img/Loja_de_esportes_01.jpg',
      imagemExtra: '/img/Loja_de_esportes_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },
    {
      titulo: 'Evento contagem regressiva',
      tecnologias: 'HTML, JavaScript, CSS, Parcel e Sass',
      descricao: t('Aniversario'),
      link: 'https://my-birthday-party-cyan.vercel.app/',
      linkGit: 'https://github.com/FernandoSilvaDev/my_birthday_party',
      imagem: '/img/Contagem_regressiva_page.jpg',
      imagemExtra: '/img/Contagem_regressiva_page_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },
    {
      titulo: 'Disney Plus - Clone 2022',
      tecnologias: 'HTML, CSS, JavaScript, Gulp, Sass e Uglify',
      descricao: t('DisneyPlus'),
      link: 'https://disney-clone-taupe-seven.vercel.app/',
      linkGit: 'https://github.com/FernandoSilvaDev/Disney-_Clone',
      imagem: '/img/Home_page Disney_Plus.jpg',
      imagemExtra: '/img/Home_page Disney_Plus_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },
    {
      titulo: 'Sorteador',
      tecnologias: 'HTML, JavaScript, Grunt, Gulp, Uglify e Less',
      descricao: t('Sorteador'),
      link: 'https://sorteador-fernando.vercel.app/',
      linkGit: 'https://github.com/FernandoSilvaDev/Sorteador',
      imagem: '/img/Sorteador.jpg',
      imagemExtra: '/img/Sorteador_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },
    {
      titulo: 'Loja Concessionária',
      tecnologias: 'HTML, JavaScript, CSS, Slick JQuery',
      descricao: t('Concessionaria'),
      link: 'https://fake-loja-ebac-motors.vercel.app/',
      linkGit: 'https://github.com/FernandoSilvaDev/Loja-EBAC-Motors',
      imagem: '/img/Concessionaria_page.jpg',
      imagemExtra: '/img/Concessionaria_page_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },

    {
      titulo: 'Minhas Tarefas',
      tecnologias: 'HTML, JavaScript, CSS, Vue.js, Bootstrap',
      descricao: t('Tarefas'),
      link: 'https://todo-vue-azure-six.vercel.app/',
      linkGit: 'https://github.com/FernandoSilvaDev/todo-vue',
      imagem: '/img/Minhas_Tarefas.jpg',
      imagemExtra: '/img/Minhas_Tarefas_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },

    {
      titulo: 'Calculadora Aritimética',
      tecnologias: 'HTML, JavaScript, CSS, Vue.js e Bootstrap',
      descricao: t('Calculadora'),
      link: 'https://calculadora-aritimetica-gray.vercel.app/',
      linkGit: 'https://github.com/FernandoSilvaDev/calculadora_aritimetica',
      imagem: '/img/Calculadora_Aritmética.jpg',
      imagemExtra: '/img/Calculadora_Aritmética_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },
    {
      titulo: 'Calculadora IMC',
      tecnologias: 'HTML, JavaScript, CSS, EsLint, React.Js e TypeScript',
      descricao: t('Imc'),
      link: 'https://calculadora-imcfs.vercel.app/',
      linkGit: 'https://github.com/FernandoSilvaDev/calculadora_imc',
      imagem: '/img/Calculadora_IMC.jpg',
      imagemExtra: '/img/Calculadora_IMC_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },

    {
      titulo: 'Sparrow Streaming',
      tecnologias: 'HTML, JavaScript, CSS e Bootstrap ',
      descricao: t('Sparrow'),
      link: 'https://sparrow-streaming.vercel.app/',
      linkGit: 'https://github.com/FernandoSilvaDev/Sparrow-Streaming',
      imagem: '/img/Streaming_page.jpg',
      imagemExtra: '/img/Streaming_page_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },
    {
      titulo: 'Buscador perfil GitHub',
      tecnologias:
        'HTML, JavaScript, CSS, Eslint, TypeScript, Vue.Js e ReactJs',
      descricao: t('PerfilGit'),
      link: 'https://github-perfil-fsd.vercel.app/',
      linkGit: 'https://github.com/FernandoSilvaDev/github_perfil',
      imagem: '/img/Buscador_perfil_Github.jpg',
      imagemExtra: '/img/Buscador_perfil_Github.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },
    {
      titulo: 'Evento fictício',
      tecnologias: 'HTML, JavaScript, CSS, Parcel e Sass',
      descricao: t('EventoTech'),
      link: 'https://fs-ebac-tech-talks.vercel.app/',
      linkGit: 'https://github.com/FernandoSilvaDev/ebac_tech_talks',
      imagem: '/img/Evento_ficticio_01.jpg',
      imagemExtra: '/img/Evento_ficticio_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },
    {
      titulo: 'Restaurante Bucho cheio',
      tecnologias: 'HTML, JavaScript, CSS, Bootstrap e JQuery',
      descricao: t('Restaurante'),
      link: 'https://restaurante-bucho-cheio.vercel.app/',
      linkGit: 'https://github.com/FernandoSilvaDev/restaurant_bucho_cheio',
      imagem: '/img/Restaurante_Bucho_Cheio_01.jpg',
      imagemExtra: '/img/Restaurante_Bucho_Cheio_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },
    // {
    //   titulo: 'Galeria de fotos',
    //   tecnologias: 'HTML, JavaScript e CSS, JQuery',
    //   descricao: t('Galeria'),
    //   link: 'https://galeria-fotos-mu.vercel.app/',
    //   linkGit: 'https://github.com/FernandoSilvaDev/galeria_fotos',
    //   imagem: '/img/Galeria_de_fotos_01.jpg',
    //   imagemExtra: '/img/Galeria_de_fotos_02.jpg',
    //   dataAo: 'fade-up',
    //   dataAosAnchorPlacement: 'bottom-bottom'
    // },
    {
      titulo: 'Portfolio Personagens 3D',
      tecnologias: 'HTML e CSS',
      descricao: t('3D'),
      link: 'https://site-portifolio-vert.vercel.app/',
      linkGit: 'https://github.com/FernandoSilvaDev/site_portifolio',
      imagem: '/img/Portifolio_3D.jpg',
      imagemExtra: '/img/Portifolio_3D_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },
    {
      titulo: 'Agenda de contatos',
      tecnologias: 'HTML, JavaScript e CSS',
      descricao: t('AgendaContatos'),
      link: 'https://fernando-agenda-de-contatos.vercel.app/',
      linkGit: 'https://github.com/FernandoSilvaDev/Agenda-de-Contatos',
      imagem: '/img/Agenda_de_contatos.jpg',
      imagemExtra: '/img/Agenda_de_contatos_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },
    {
      titulo: 'Modelo de Email',
      tecnologias: 'HTML',
      descricao: t('ModeloEmail'),
      link: 'https://modelo-email-six.vercel.app/',
      linkGit: 'https://github.com/FernandoSilvaDev/modelo_email',
      imagem: '/img/Exemplo_Email_Page.jpg',
      imagemExtra: '/img/Exemplo_Email_Page_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    }
  ]

  return (
    <section>
      <hr />
      <br />
      <Titulo fontSize={16}>{t('Projetos')}</Titulo>
      <Lista>
        {projetos.map((projeto, index) => (
          <li
            key={index}
            data-aos={projeto.dataAo}
            data-aos-anchor-placement={projeto.dataAosAnchorPlacement}
            className={projeto.className}
          >
            <Projeto
              titulo={projeto.titulo}
              tecnologias={projeto.tecnologias}
              descricao={projeto.descricao}
              link={typeof projeto.link === 'string' ? projeto.link : ''}
              linkGit={
                typeof projeto.linkGit === 'string' ? projeto.linkGit : ''
              }
              imagem={projeto.imagem}
              imagemExtra={projeto.imagemExtra}
            />
          </li>
        ))}
      </Lista>
    </section>
  )
}

export default Projetos
