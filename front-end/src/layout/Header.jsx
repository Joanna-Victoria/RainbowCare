import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

function Header() {
  return (
    <header class="bg-white drop-shadow-lg">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <img src="logotipo.png" alt="logo" class="h-8 w-auto"/>
          </a>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a href='#' class="text-sm font-semibold leading-6 text-gray-900 hover:text-fuchsia-500">
            Início
          </a>

          <LinkScroll to='#' smooth={true} offset={50} class="text-sm font-semibold leading-6 text-gray-900 hover:text-fuchsia-500">
            Acolhimento
          </LinkScroll>
          
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900 hover:text-fuchsia-500">
            Depoimentos
          </a>
          
          <LinkScroll to='sobre' smooth={true} offset={-100} duration={800} class="text-sm font-semibold leading-6 text-gray-900 hover:text-fuchsia-500">
            Sobre
          </LinkScroll>
          
          <LinkScroll to='footer' smooth={true} offset={-100} duration={800} class="text-sm font-semibold leading-6 text-gray-900 hover:text-fuchsia-500">
            Contato
          </LinkScroll>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <button class="text-sm font-semibold leading-6 text-fuchsia-500 px-7 py-1 mr-4 rounded-lg bg-transparent border-solid border-2 border-fuchsia-500
            hover:text-fuchsia-400 hover:border-fuchsia-400" >
            <Link to={'/login'}>
              Entrar
            </Link>
          </button>
          <button class="text-sm font-semibold leading-6 text-fuchsia-500 px-2 py-1 ml-4 rounded-lg bg-yellow-200 border-solid border-2 border-fuchsia-500
            hover:shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 duration-300" >
              <Link to={'/cadastro'}>
                Cadastre-se
              </Link>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header;