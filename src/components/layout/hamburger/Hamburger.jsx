import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'
import styles from './Hamburger.module.scss'
import Menu from './Menu'

const Hamburger = () => {
  const { isShow, setIsShow } = useOnClickOutside(false)

  return (
    <div className={styles.wrapper}>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? <IoClose color='white' /> : <CgMenuRight color='white' />}
      </button>
      <Menu isShow={isShow} />
    </div>
  )
}

export default Hamburger
