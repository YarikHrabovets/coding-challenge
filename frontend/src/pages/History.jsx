import React, { useState, useEffect } from 'react'

import MyButton from '../components/UI/button/MyButton'

const History = () => {
    const [history, setHistory] = useState([])

    useEffect(() => {
        const storedHistory = localStorage.getItem('userHistory')
        if(storedHistory) {
            setHistory(JSON.parse(storedHistory))
        }
      }, [])

    function deleteByName(name) {
        const historyFiltered = history.filter((item) => item !== name)
        localStorage.setItem('userHistory', JSON.stringify([...historyFiltered]))
        setHistory(historyFiltered)

    }
    
    function deleteAll() {
        localStorage.removeItem('userHistory')
        setHistory([])
    }

    return (
        <main className='main'>
            <div className='container shadow-lg p-2 p-sm-5 mt-5'>
                {history.length !== 0 ?
                    <>
                        <ul className='list-group'>
                            {history.map(item => {
                                return (
                                    <li className='list-group-item bg-by-turns' key={item}>
                                        <div className='d-flex justify-content-between'>
                                            <p className='mt-2'>{item}</p>
                                            <MyButton onClick={() => {deleteByName(item)}} className='btn btn-light btn-sm'><ion-icon name='trash-outline'></ion-icon></MyButton>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <MyButton onClick={deleteAll} className='btn btn-danger mt-3'>
                            Clear History
                        </MyButton>
                    </>
                    : <p className='text-center fs-1 fw-bold'>Your history is empty</p>
                }
            </div>
        </main>
    )
}

export default History
