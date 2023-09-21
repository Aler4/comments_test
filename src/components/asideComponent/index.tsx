import {FC} from 'react';
import './style.scss';

export const AsideComponent: FC = () => {
    return (
        <aside className='aside'>
            <h2 className='aside__title'>DAYRY APP</h2>
            <sub className='aside__subtitle'>Comment whit no sense</sub>
        </aside>
    )
}
