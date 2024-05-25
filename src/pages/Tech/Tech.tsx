import TechPanel from '@/components/TechPanel';
import './index.css';

const techPanels = [
  {
    category: 'Code.',
    description:
      'Crafting clean, maintainable, and efficient code is my go-to strategy. I strive for simplicity, ensuring that every line serves a purpose. By adhering to best practices and coding standards, I deliver robust solutions that are both scalable and easy to understand.',
    techList: ['html', 'css', 'js', 'ts'],
  },
  {
    category: 'Frameworks.',
    sub: 'Libraries,',
    description:
      'These powerful resources enable rapid development and ensure my projects are equipped with the latest functionalities and optimizations, providing a seamless user experience.',

    techList: ['react', 'lit', 'angular', 'flask', 'sass', 'material', 'gsap', 'mobx', 'rxjs'],
  },
  {
    category: 'Operations.',
    description:
      'From version control to build automation, these tools help manage complexity, ensure code quality, and facilitate continuous integration and deployment, making development more efficient and reliable.',
    techList: ['git', 'bitbucket', 'webpack', 'vite', 'gcloud', 'jira', 'vscode'],
  },
];

function Tech() {
  return (
    <section className='tech'>
      <div className='tech--container'>
        {techPanels.map((techPanel) => (
          <TechPanel panelData={techPanel} key={techPanel.category} />
        ))}
      </div>
    </section>
  );
}

export default Tech;
