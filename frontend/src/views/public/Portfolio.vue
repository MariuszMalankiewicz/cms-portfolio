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
    <div class="flex flex-wrap items-center justify-center gap-12 mt-12">
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
import MMBlog from '@/assets/images/projects/mmblog.png';
import CarsSpot from '@/assets/images/projects/cars-spot.png';
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
          technology: 'Laravel, Vue.js, Tailwind',
          description: 'test',
          live: 'test',
          github: 'test',
          category: 'fullstack',
        },
        {
          imageSrc: MMBlog,
          title: 'Aplikacja Blogowa',
          technology: 'Laravel, blade, Tailwind',
          description: 'test',
          live: 'test',
          github: 'test',
          category: 'fullstack',
        },
        {
          imageSrc: CarsSpot,
          title: 'Aplikacja do wynajmu samochodów',
          technology: 'Vue.js, Tailwind',
          description: 'test',
          live: 'test',
          github: 'test',
          category: 'frontend',
        },
        {
          imageSrc: TaskManagmentSystem,
          title: 'Restful API do zarzadzania zadaniami',
          technology: 'Laravel',
          description: 'test',
          live: 'test',
          github: 'test',
          category: 'backend',
        },
        {
          imageSrc: MemoryGame,
          title: 'Gra W Zapamiętywanie',
          technology: 'JavaScript, CSS3, HTML5',
          description: 'test',
          live: 'test',
          github: 'test',
          category: 'frontend',
        },
        {
          imageSrc: RockScissorsPaper,
          title: 'Gra W Kamień, Papier i Nożyczki',
          technology: 'JavaScript, CSS3, HTML5',
          description: 'test',
          live: 'test',
          github: 'test',
          category: 'frontend',
        },
        {
          imageSrc: ToDoList,
          title: 'Aplikacja Listy Do Zrobienia',
          technology: 'JavaScript, CSS3, HTML5',
          description: 'test',
          live: 'test',
          github: 'test',
          category: 'frontend',
        },
        {
          imageSrc: TreeStructure,
          title: 'Aplikacja Struktury Drzewiastej',
          technology: 'Laravel, Blade',
          description: 'test',
          live: 'test',
          github: 'test',
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
