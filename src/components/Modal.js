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
                <div style={{marginBottom: 40}}>
                    {children}
                </div>
                <div>
                <button style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    background: "none",
                    border: "none",
                    fontSize: "18px",
                    color: "#333",
                    cursor: "pointer",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    backgroundColor: "#fff",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}onClick={setModalOpen}>Adicionar ao Carrinho</button>
                <button style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    background: "black",
                    border: "none",
                    fontSize: "18px",
                    color: "#333",
                    cursor: "pointer",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    backgroundColor: "#fff",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }} onClick={setModalOpen}>Fechar</button>
                </div>
            </div>
            </div>
          )
    }

    return null
  
}
