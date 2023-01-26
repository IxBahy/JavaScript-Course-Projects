import React, { useRef, useEffect } from 'react'
export const ModalWindow = () => {
    const btnsArray = ['show modal 1', 'show modal 2', 'show modal 3']
    // getting all the elements 
    const modalOpenBtns = useRef([])
    const modal = useRef(null)
    const modalCloseBtn = useRef(null)
    const overlay = useRef(null)



    useEffect(() => {
        modalOpenBtns.current.forEach((btn) => {
            btn.addEventListener('click', openModal)
        })
        modalCloseBtn.current.addEventListener('click', closeModal)
        overlay.current.addEventListener('click', closeModal)
        document.addEventListener('keydown', CloseModalOnEscPress)
    }, [modalOpenBtns]);

    // *************************************
    // functions

    const openModal = () => {
        modal.current.classList.remove('hidden')
        overlay.current.classList.remove('hidden')
    }

    const closeModal = () => {
        modal.current.classList.add('hidden')
        overlay.current.classList.add('hidden')

    }

    const CloseModalOnEscPress = (e) => {
        if (e.key === 'Escape') {
            closeModal()
        }
    }



    return (
        <div className='modal-body'>
            <div>
                {btnsArray.map((text, index) => {
                    return <button key={index} className="show-modal" ref={(element) => modalOpenBtns.current[index] = element}>{text}</button>
                })}

                <div className="modal hidden" ref={modal}>
                    <button className="close-modal" ref={modalCloseBtn}>×</button>
                    <p className='modal-header'>I'm a modal window 😍</p>
                    <p className='modal-p'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                    </p>
                </div>
                <div className="overlay hidden" ref={overlay} />
            </div>

        </div>
    )
}
