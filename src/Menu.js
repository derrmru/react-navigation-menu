import React, { useState, useEffect } from 'react'
import Items from './Items'
import './Menu.css'

const Menu = ({
    brandColor1,
    brandColor2,
    items,
    telephone,
    email
}) => {

    //open and close menu toggle state
    const [menuToggle, setMenuToggle] = useState(false);

    //insert color variables as css variables
    useEffect(() => {
        document.documentElement.style.setProperty('--brand-color-1', brandColor1);
        document.documentElement.style.setProperty('--brand-color-2', brandColor2);
    })

    //closing menu animation control
    const [closing, setClosing] = useState(false);
    const close = () => {
        setClosing(true);
        setTimeout(() => {
            setClosing(false)
            setMenuToggle(!menuToggle)
        }, 800)
    }

    return (
        <div>
            {
                !menuToggle ?
                    <div 
                        className={'menuButton fade-in'}
                        onClick={() => setMenuToggle(!menuToggle)}
                        >
                            MENU
                        </div>
                    :
                        <div>
                            <div
                                className={'exitCross fade-in'}
                                onClick={() => close()}
                                >
                                    &#10005;
                                </div>
                            <div
                                className={'itemsBackground' + (closing ? ' closeUp' : '')}
                                >
                                    <Items 
                                        items={items}
                                        />
                                { 
                                    (telephone && email) && <div
                                        className={'contactDets fade-in'}
                                        style={{
                                            animationDelay: '1s'
                                        }}
                                        >
                                        <div>Telephone: <a href={'tel:' + telephone}>{telephone}</a></div>
                                        <div>Email: <a href={'mailto:' + email}>{email}</a></div>
                                    </div>
                                }
                            </div>
                        </div>
            }
        </div>
    )
}

export default Menu