import cn from 'clsx' // Импорт библиотеки 'clsx' для удобной работы с динамическими классами.
import styles from './Layout.module.scss'
import Header from './header/Header'

const Layout = ({ children, bgImage, heading = '', backLink = '/' }) => {
  // Компонент Layout принимает следующие пропсы:
  // children - содержимое, которое будет передано внутрь компонента;
  // bgImage - изображение для фона;
  // heading - текст заголовка (по умолчанию пустая строка);
  // backLink - ссылка для кнопки "назад" (по умолчанию '/').

  return (
    <section
      // Обертка раздела с использованием динамического класса.
      // Используется библиотека 'clsx', которая объединяет классы:
      // - 'styles.wrapper' всегда применяется;
      // - 'styles.otherPage' добавляется только если существует heading (т.е. на других страницах).
      className={cn(styles.wrapper, {
        [styles.otherPage]: !!heading
      })}
      // Стиль для секции, который устанавливает фоновое изображение через инлайн-стили.
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Компонент Header отображает кнопку "назад" и принимает пропс backLink */}
      <Header backLink={backLink} />

      {/* Если передан заголовок (heading), то отображается h1 с текстом заголовка */}
      {heading && <h1 className={styles.heading}>{heading}</h1>}

      {/* Если переданы дочерние элементы (children), они будут обернуты в div */}
      {children && <div>{children}</div>}
    </section>
  )
}

export default Layout // Экспорт компонента 'Layout' для использования в других частях приложения.
