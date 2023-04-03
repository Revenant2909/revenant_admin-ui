import React from 'react'
import "./widgetSm.css";
import { Visibility } from '@mui/icons-material';
export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://i.ibb.co/tDvkQrG/Screenshot-1.png" alt="Error" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Revenant</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://i.ibb.co/tDvkQrG/Screenshot-1.png" alt="Error" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Revenant</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://i.ibb.co/tDvkQrG/Screenshot-1.png" alt="Error" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Revenant</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://i.ibb.co/tDvkQrG/Screenshot-1.png" alt="Error" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Revenant</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://i.ibb.co/tDvkQrG/Screenshot-1.png" alt="Error" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Revenant</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}
