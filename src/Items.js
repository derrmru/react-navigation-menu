import React, { Fragment, useState } from 'react'
import './Items.css'

const Items = ({ items }) => {

    //toggle drop down menus
    const [drop, setDrop] = useState('1234Start');

    return (
        <div>
            <h2 
                className='headerness fade-in'
                style={{
                    color: 'var(--brand-color-2)',
                    animationDelay: '1s', 
                    animationDirection: 'forwards'
                }}
                >
                    MENU
            </h2>
            <hr 
                style={{
                    animationDelay: '1.2s', 
                    animationDirection: 'forwards'
                }}
                className='menuHr'
                />
            <ul 
                className={'uls fade-in'}
                style={{animationDelay: '1s', animationDirection: 'forwards'}}
                >
            {
                items.map((item, i) => {
                    return item[1] !== 'dropdown' ?
                        <a 
                            key={'navItem' + i} 
                            href={item[1]}
                            >
                            <li>
                                {item[0]}
                            </li>
                        </a>
                         :
                         <Fragment>
                            <a 
                                href="#"
                                key={'navItem' + i}
                                onClick={() => drop !== item[0] ? setDrop(item[0]) : setDrop('')}
                                >
                                <li>
                                        <div
                                            className='droppingContainer'
                                            >
                                                {item[0]}
                                        </div>
                                </li>
                            </a>
                            {
                                drop === item[0] && <ul className='subUL fade-in'>
                                {
                                    item[2].map((subItem, j) => {
                                        console.log(subItem)
                                        return <a
                                                key={'navSubItem' + j} 
                                                href={subItem[1]}
                                                >
                                                    <li>{subItem[0]}</li>
                                            </a>
                                    })
                                }
                                </ul>
                            }
                        </Fragment>
                })
            }
            </ul>
            <hr 
                style={{
                    animationDelay: '1.2s', 
                    animationDirection: 'forwards'
                }}
                className='menuHr'
                />
        </div>
    )
}

export default Items