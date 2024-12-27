<template>
  <section class="px-4 mt-[80px] font-Montserrat mb-12 pt-32">
    <h1
      class="text-[32px] sm:text-[44px] md:text-[52px] text-center font-bold text-blue"
    >
      Portfolio
    </h1>
    <nav class="flex flex-wrap items-center justify-center gap-3 mt-12">
      <NavPortfolioCard
        :class="[
          selectedCategory === null
            ? 'text-white bg-blue'
            : 'text-gray-600 bg-white',
        ]"
        @click="filterByCategory(null)"
      >
        Wszystkie
      </NavPortfolioCard>
      <NavPortfolioCard
        :class="[
          selectedCategory === 'frontend'
            ? 'text-white bg-blue'
            : 'text-gray-600 bg-white',
        ]"
        @click="filterByCategory('frontend')"
      >
        Front-End
      </NavPortfolioCard>
      <NavPortfolioCard
        :class="[
          selectedCategory === 'backend'
            ? 'text-white bg-blue'
            : 'text-gray-600 bg-white',
        ]"
        @click="filterByCategory('backend')"
      >
        Back-End
      </NavPortfolioCard>
      <NavPortfolioCard
        :class="[
          selectedCategory === 'fullstack'
            ? 'text-white bg-blue'
            : 'text-gray-600 bg-white',
        ]"
        @click="filterByCategory('fullstack')"
      >
        Full-Stack
      </NavPortfolioCard>
    </nav>
    <div class="flex flex-wrap justify-center items-start mt-12 gap-x-[2%] gap-y-4">
      <PortfolioCard
        v-for="(project, index) in filteredProjects"
        :key="index"
        :project="project"
      >
      </PortfolioCard>
    </div>
  </section>
</template>
<script>
import NavPortfolioCard from '@/components/UI/NavPortfolioCard.vue';
import PortfolioCard from '@/components/UI/PortfolioCard.vue';

import Portfolio from '@/assets/images/projects/portfolio.png';
import ApiForLendingBooks from '@/assets/images/projects/api_for_lending_books.png';
import MMBlog from '@/assets/images/projects/mmblog.png';
import CarsSpot from '@/assets/images/projects/cars-spot.png';
import LinkShortener from '@/assets/images/projects/link_shortener.png';
import TaskManagmentSystem from '@/assets/images/projects/task-managment-system.png';
import MemoryGame from '@/assets/images/projects/memory-game.png';
import RockScissorsPaper from '@/assets/images/projects/rock-scissors-paper.png';
import ToDoList from '@/assets/images/projects/todo-list.png';
import TreeStructure from '@/assets/images/projects/tree-structure.png';

export default {
  name: 'Portfolio',
  components: {
    NavPortfolioCard,
    PortfolioCard,
  },
  data() {
    return {
      projects: [
        {
          imageSrc: Portfolio,
          title: 'CMS Portfolio',
          technology: 'Laravel, Vue.js, Tailwind, MySQL',
          description:
            'To system zarządzania treścią (CMS) zaprojektowany do tworzenia i administrowania portfolio. API backend umożliwia zarządzanie projektami, dodawanie, edycję i usuwanie danych, takich jak opisy projektów, zdjęcia, tagi czy metadane. Aplikacja integruje frontend w Vue.js z backendem w Laravel, zapewniając płynne zarządzanie treścią portfolio oraz dynamiczne generowanie widoków dla użytkowników. Dzięki wykorzystaniu Tailwind CSS i Vite, strona charakteryzuje się nowoczesnym wyglądem oraz szybkim ładowaniem. Całość jest dostosowana do CI/CD, co ułatwia wdrażanie aktualizacji i rozwój projektu.',
          live: 'https://mariuszmalankiewicz.pl/',
          github: 'https://github.com/MariuszMalankiewicz/cms-portfolio',
          category: 'fullstack',
        },
        {
          imageSrc: ApiForLendingBooks,
          title: 'Restful API Do Wypożyczania Książek',
          technology: 'Laravel, MySql, SQLite',
          description:
            'API umożliwia zarządzanie klientami, a także obsługę wypożyczania i zwrotu książek. Zwraca listę książek podzieloną na 20 pozycji na stronę, opcjonalnie parametr search pozwala znaleźć książkę po nazwie, autorze, imieniu lub nazwisku klienta. Dodano również mechanizm seeder, który świetnie ładuje bazę danych danymi, a także  testy, by w przyszłości uniknąć błędów przy rozbudowie API.',
          live: '#',
          github: 'https://github.com/MariuszMalankiewicz/simple-api-for-lending-books',
          category: 'backend',
        },
        {
          imageSrc: MMBlog,
          title: 'Aplikacja Blogowa',
          technology: '',
          description:
            'Jest oparta na frameworku Laravel, systemie szablonów Blade oraz bazie danych MySQL, pozwala użytkownikom na tworzenie, edytowanie, usuwanie i przeglądanie postów. Umożliwia logowanie, komentowanie, a także przeglądanie archiwum, kategorii i tagów. Całość wykorzystuje nowoczesne funkcjonalności Laravel, takie jak middleware, kontrolery, validacja danych i zarządzanie sesjami. MySQL przechowuje dane o użytkownikach, postach, komentarzach i innych istotnych elementach aplikacji. Projekt ma na celu stworzenie intuicyjnego narzędzia do zarządzania treściami blogowymi, które można łatwo rozwijać o nowe funkcje.',
          live: '#',
          github: 'https://github.com/MariuszMalankiewicz/MMBlog',
          category: 'fullstack',
        },
        {
          imageSrc: CarsSpot,
          title: 'Aplikacja do sprzedaży samochodów',
          technology: 'Vue.js, Tailwind',
          description:
            'To aplikacja webowa, której celem jest umożliwienie użytkownikom przeglądania, wyszukiwania i zakupu samochodów w sposób intuicyjny i nowoczesny. Frontend projektu oparty jest na Vue.js, co zapewnia dynamiczne i responsywne doświadczenie użytkownika. Do projektowania interfejsu wykorzystano Tailwind CSS, co umożliwia szybkie tworzenie atrakcyjnych i zgodnych z nowoczesnymi standardami layoutów.',
          live: 'https://cars-spott.netlify.app/',
          github: 'https://github.com/MariuszMalankiewicz/cars-spot',
          category: 'frontend',
        },
        {
          imageSrc: LinkShortener,
          title: 'Aplikacja Do Skracania Linków',
          technology: 'Laravel, Vue.js, Tailwind Css, MySQL',
          description:
            'Aplikacja do skracania linków, która umożliwia użytkownikom tworzenie skróconych, łatwych do zapamiętania linków, podobnie jak popularne usługi takie jak Bit.ly. Aplikacja jest budowana przy użyciu frameworka Laravel w back-endzie i Vue.js w front-endzie, zapewniając dynamiczny i responsywny interfejs użytkownika.',
          live: '#',
          github:
            'https://github.com/MariuszMalankiewicz/link-shortener',
          category: 'fullstack',
        },
        {
          imageSrc: TaskManagmentSystem,
          title: 'Restful API do zarzadzania zadaniami',
          technology: 'Laravel',
          description:
            'API służy do zarządzania listą zadań w aplikacji typu "to-do". Umożliwia użytkownikom tworzenie, odczytywanie, edytowanie i usuwanie zadań (CRUD). API jest zgodne z zasadami REST i może być wykorzystywane w aplikacjach frontendowych lub mobilnych.',
          live: '#',
          github:
            'https://github.com/MariuszMalankiewicz/task-managment-system',
          category: 'backend',
        },
        {
          imageSrc: MemoryGame,
          title: 'Gra W Zapamiętywanie',
          technology: 'JavaScript, CSS3, HTML5',
          description:
            'To interaktywna aplikacja, która pomaga ćwiczyć pamięć i koncentrację. Gracz musi zapamiętać położenie obrazków lub par symboli, które losowo pojawiają się na planszy, a następnie dopasować je w jak najkrótszym czasie. Gra oferuje różne poziomy trudności, ranking najlepszych wyników oraz możliwość rywalizacji z innymi graczami. To świetna zabawa dla osób w każdym wieku, która jednocześnie rozwija zdolności poznawcze.',
          live: 'https://mariuszmalankiewicz.github.io/Memory-Game/',
          github: 'https://github.com/MariuszMalankiewicz/Memory-Game',
          category: 'frontend',
        },
        {
          imageSrc: RockScissorsPaper,
          title: 'Gra W Kamień, Papier i Nożyczki',
          technology: 'JavaScript, CSS3, HTML5',
          description:
            'Projekt jest prostą grą w klasycznego "Kamień, Papier, Nożyce", napisaną w językach HTML, CSS i JavaScript. Gra pozwala użytkownikowi grać przeciwko komputerowi. Użytkownik wybiera jedną z trzech opcji (kamień, papier, nożyce), a komputer losowo wybiera swój ruch. Następnie program sprawdza wyniki obu wyborów i informuje, kto wygrał dany pojedynek.',
          live: 'https://mariuszmalankiewicz.github.io/Rock-scissors-paper/',
          github: 'https://github.com/MariuszMalankiewicz/Rock-scissors-paper',
          category: 'frontend',
        },
        {
          imageSrc: ToDoList,
          title: 'Aplikacja Listy Do Zrobienia',
          technology: 'JavaScript, CSS3, HTML5',
          description:
            'To prosta i funkcjonalna aplikacja webowa stworzona w HTML, CSS i JavaScript, której głównym celem jest umożliwienie użytkownikom tworzenia, zarządzania i śledzenia listy zadań do wykonania.',
          live: 'https://mariuszmalankiewicz.github.io/To-Do-List/',
          github: 'https://github.com/MariuszMalankiewicz/To-Do-List',
          category: 'frontend',
        },
        {
          imageSrc: TreeStructure,
          title: 'Aplikacja Struktury Drzewiastej',
          technology: 'Laravel, Blade',
          description:
            'To system umożliwiający tworzenie i zarządzanie hierarchicznymi strukturami danych. Projekt opiera się na frameworku Laravel i wykorzystuje szablon Blade do generowania dynamicznych widoków. Głównym celem jest umożliwienie użytkownikom tworzenia, edytowania i zarządzania strukturami drzewiastymi, takimi jak kategorie, struktura menu, organizacje, lub inne złożone hierarchie danych.',
          live: '#',
          github: 'https://github.com/MariuszMalankiewicz/Tree-Structure',
          category: 'fullstack',
        },
      ],
      selectedCategory: null,
    };
  },
  computed: {
    filteredProjects() {
      if (!this.selectedCategory) {
        return this.projects;
      }
      return this.projects.filter(
        (project) => project.category === this.selectedCategory,
      );
    },
  },
  methods: {
    filterByCategory(category) {
      return (this.selectedCategory = category);
    },
  },
};
</script>
