import React, {useContext, useState} from 'react';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon'
import plusIcon from '../../../assets/icons/plus.svg';
import styles from './Additem.module.scss';
import FormAddItemBar from '../FormAddItemBar/FormAddItemBar';


const AddItem = () => {

  const [modalOpened, setModalOpened] = useState(false);

  
  return (
    <>
      <div className={styles.addItem}>
          <ButtonIcon icon={plusIcon} addItem={true} clicked={()=> setModalOpened(prevValue => !prevValue)} />
      </div>
      <div className={styles.form}>
        <FormAddItemBar isVisible={modalOpened} closeModal={() => setModalOpened(false)} />
      </div>
    </>
   );
}
 
export default AddItem;