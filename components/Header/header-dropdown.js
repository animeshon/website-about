import React from 'react';
import Router, { useRouter } from 'next/router';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { withTranslation } from '@/root/i18n'

import * as style from './header-dropdown.module.scss';


const HeaderDropdown = ({ t }) => {
    const options = [
        { href: '/users', value: 'usr', label: <div className={style.wrapper}><img src={"../svg/open-book.svg"} className={style.icon} /><span>{t('aboutDispatcher_choose_user')}</span></div> },
        { href: '/creators', value: 'cr', label: <div className={style.wrapper}><img src={"../svg/painter.svg"} className={style.icon} /><span>{t('aboutDispatcher_choose_creator')}</span></div> },
        { href: '/developers', value: 'dev', label: <div className={style.wrapper}><img src={"../svg/material-computer.svg"} className={style.icon} /><span>{t('aboutDispatcher_choose_developer')}</span></div> },
    ];

    const onSelect = (option) => {
        console.log('You selected ', option.value)

        Router.push({
            pathname: options.filter(o => o.value == option.value)[0].href,
        });
    };

    const router = useRouter();
    const defaultOption = options.filter(o => o.href == router.pathname)[0];

    return (
        <>
            {defaultOption && <Dropdown
                controlClassName={style.menu}
                arrowClassName={style.arrow}
                onChange={onSelect}
                options={options} value={defaultOption} />}
        </>
    );
};

export default withTranslation()(HeaderDropdown);
