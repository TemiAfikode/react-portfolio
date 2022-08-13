export default function Skills() {
  return (
    <div className='skills'>
      <div className='heading-wrapper'>
        <h1 className='heading'>Skills</h1>
      </div>
      <ul>
        {skillsList.map((skill) => (
          <SkillItem key={skill.id} img_url={skill.img_url} name={skill.name} />
        ))}
      </ul>
    </div>
  );
}

const SkillItem = ({ img_url, name }) => (
  <li>
    <img src={img_url} alt='' srcset='' />
    <p>{name}</p>
  </li>
);

const skillsList = [
  {
    id: 1,
    img_url: '/php-icon.png',
    name: 'PHP',
  },
  {
    id: 2,
    img_url: '/laravel-icon.png',
    name: 'Laravel',
  },
  {
    id: 3,
    img_url: '/mysql-icon.png',
    name: 'MySQL',
  },
  {
    id: 4,
    img_url: '/javascript-icon.png',
    name: 'Javascript',
  },
  {
    id: 5,
    img_url: '/node-icon.png',
    name: 'Node Js',
  },
  {
    id: 6,
    img_url: '/react-icon.png',
    name: 'React Js',
  },
  {
    id: 7,
    img_url: '/css-icon.png',
    name: 'CSS',
  },
  {
    id: 8,
    img_url: '/html-icon.png',
    name: 'HTML',
  },
];
