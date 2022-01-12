import { GlobalStyle } from './styles/global';

import { Header } from './components/Header/index';
import Modal from 'react-modal'
import { Dashbord } from './components/Dashbord';
import { NewTransactionModal } from './components/NewTransactionModal/index';
import { useState } from 'react';


Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)


  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
}

function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
}

  
  
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      
      <Dashbord/>

     <NewTransactionModal
       isOpen={isNewTransactionModalOpen}
       onRequestClose={handleCloseNewTransactionModal}
        

     />

      <GlobalStyle />
    </>   
    
  );
}