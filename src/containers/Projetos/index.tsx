import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'

import { Lista } from './styles'

import { useTranslation } from 'react-i18next'
import '../../i18n'

const Projetos = () => {
  const { t } = useTranslation()

  const projetos = [
    {
      titulo: 'Streaming Disney+ Rogue One.',
      tecnologias:
        'HTML, CSS, JavaScript, Sass, Grunt, Uglify, Gulp e Bootstrap',
      descricao: t('RogueOne'),
      link: 'https://rogue-one-disney-app.vercel.app/',
      imagem: '/img/Home_page Disney_Plus_Rog_One.jpg',
      imagemExtra: '/img/Home_page Disney_Plus_Rog_One_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },
    {
      titulo: 'Clone KTM 2023',
      tecnologias: 'HTML, JavaScript, CSS, JQuery e Bootstrap',
      descricao: t('Ktm'),
      link: 'https://ktm-pied.vercel.app/',
      imagem: '/img/Home_page_KTM_2003.jpg',
      imagemExtra: '/img/Home_page_KTM_2003_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },
    {
      titulo: 'Evento contagem regressiva',
      tecnologias: 'HTML, JavaScript, CSS, Parcel e Sass',
      descricao: t('Aniversario'),
      link: 'https://my-birthday-party-cyan.vercel.app/',
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
      imagem: '/img/Restaurante_Bucho_Cheio_01.jpg',
      imagemExtra: '/img/Restaurante_Bucho_Cheio_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },
    {
      titulo: 'Galeria de fotos',
      tecnologias: 'HTML, JavaScript e CSS, JQuery',
      descricao: t('Galeria'),
      link: 'https://galeria-fotos-mu.vercel.app/',
      imagem: '/img/Galeria_de_fotos_01.jpg',
      imagemExtra: '/img/Galeria_de_fotos_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },
    {
      titulo: 'Portfolio Personagens 3D',
      tecnologias: 'HTML e CSS',
      descricao: t('3D'),
      link: 'https://site-portifolio-vert.vercel.app/',
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
      imagem: '/img/Exemplo_Email_Page.jpg',
      imagemExtra: '/img/Exemplo_Email_Page_02.jpg',
      dataAo: 'fade-up',
      dataAosAnchorPlacement: 'bottom-bottom'
    },
    {
      titulo: 'Formulario com mask JQuery',
      tecnologias: 'HTML, JavaScript, CSS e JQuery',
      descricao: t('Formulario'),
      link: 'https://formulario-mask-plugins.vercel.app/',
      imagem: '/img/Formulario_mask_01.jpg',
      imagemExtra: '/img/Formulario_mask_02.jpg',
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
          >
            <Projeto
              titulo={projeto.titulo}
              tecnologias={projeto.tecnologias}
              descricao={projeto.descricao}
              link={typeof projeto.link === 'string' ? projeto.link : '#'}
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
