import Modal from 'react-modal'
import { Container } from './style'
import  closeImg  from '../../assets/close.svg'


interface TransactionModal {
  isOpen: boolean;
  onRequestClose: () => void;
}
  


export function NewTransactionModal({isOpen, onRequestClose} : TransactionModal) {
    return (
        <Modal 
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
          <button 
            type="button" 
            onClick={onRequestClose} 
            className='react-modal-close'
          >
            <img src={closeImg} alt="fechar Modal"/>
          </button>

          <Container>
            <h2>Cadastrar transação</h2>
            <input placeholder='Titulo'/>
            <input type="number" placeholder="Valor"/>
            <input type="text" placeholder="Categoria"/>
            <button type="submit">Cadastrar</button>
          

          </Container>          
        </Modal>
    )
}