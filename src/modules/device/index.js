import { NavLink } from 'react-router-dom';
import { DEVICE } from '../../constants/paths';

const navItems = [
  { name: 'Каталог товаров', to: DEVICE },
  { name: 'Доставка', to: DEVICE },
  { name: 'Гарантия', to: DEVICE },
  { name: 'Контакты', to: DEVICE },
];

const goods = [
  'Виртуальная реальность',
  'Моноподы для селфи',
  'Экшн-камеры',
  'Фитнес-браслеты',
  'Умные часы',
  'Квадрокоптеры',
];

const services = ['Доставка', 'Гарантия', 'Кредит'];

const Index = () => (
  <>
    <header>
      <h1>Device</h1>

      <section>
        <h2>Navigation</h2>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink to={item.to}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <section>slider</section>
    </header>
    <main>
      <section>
        <h2>Items</h2>
        <ul>
          {goods.map((good) => (
            <li key={good}>
              <div>
                <img src="" alt="" />
              </div>
              <p>{good}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <ul>
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>
    </main>
  </>
);

export default Index;
