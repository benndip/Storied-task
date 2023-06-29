import React from 'react'
import styles from './CustomModal.module.css'
import styled from "styled-components";

type IProps = {
    title: string;
    closeModal: (state: boolean) => void
    children: React.ReactNode
}

const Title = styled.div`
    font-size: 20px;
    color: #353b48;
    font-weight: bold;
`

const CustomModal:React.FC<IProps> = ({ closeModal, children, title }) => {
  return (
    <div className={styles.modalBackground}>
         <div className={styles.modalContainer}>
            <Title>{title}</Title>
            <button onClick={()=>closeModal(false)}>X</button>
            {children}
        </div>
    </div>
  )
}

export default CustomModal