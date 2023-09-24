import React from 'react'

const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    botton: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: '1000',
}

const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', 
    width: '50%', 
    maxHeight: '80%', 
    overflowY: 'auto', 
    backgroundColor: '#fff', 
    borderRadius: '10px',
    color: 'black',
    padding: '20px',
  };

export default function Modal({isOpen, setModalOpen, children}) {
    if(isOpen) {
        return (
            <div style={BACKGROUND_STYLE}>
            <div style={MODAL_STYLE}>
                <div>
                    {children}
                </div>
                <div>
                <button style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px"
                    }}onClick={setModalOpen}>Fazer pedido</button>
                <button style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px"
                    }} onClick={setModalOpen}>Fechar</button>
                </div>
            </div>
            </div>
          )
    }

    return null
  
}
