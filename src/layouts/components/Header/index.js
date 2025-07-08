import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import config from '~/config';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';

import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vi', title: 'Tiếng Việt' },
                { type: 'language', code: 'fr', title: 'Français' },
                { type: 'language', code: 'es', title: 'Español' },
                { type: 'language', code: 'de', title: 'Deutsch' },
                { type: 'language', code: 'it', title: 'Italiano' },
                { type: 'language', code: 'pt', title: 'Português' },
                { type: 'language', code: 'ja', title: '日本語' },
                { type: 'language', code: 'ko', title: '한국어' },
                { type: 'language', code: 'zh', title: '中文 (简体)' },
                { type: 'language', code: 'ru', title: 'Русский' },
                { type: 'language', code: 'th', title: 'ไทย' },
                { type: 'language', code: 'id', title: 'Bahasa Indonesia' },
                { type: 'language', code: 'ms', title: 'Bahasa Melayu' },
                { type: 'language', code: 'tr', title: 'Türkçe' },
                { type: 'language', code: 'ar', title: 'العربية' },
                { type: 'language', code: 'pl', title: 'Polski' },
                { type: 'language', code: 'nl', title: 'Nederlands' },
                { type: 'language', code: 'sv', title: 'Svenska' },
                { type: 'language', code: 'hi', title: 'हिन्दी' },
                { type: 'language', code: 'uk', title: 'Українська' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log(`Language changed to: ${menuItem.title}`);
                break;
            default:
                console.log(menuItem);
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@nguyenvana',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.home} className={cx('logo-link')}>
                    <div className={cx('logo')}>
                        <img
                            src="https://raw.githubusercontent.com/sondnpt00343/tiktok-ui/53635fef3aad1ef411eb74238ee7560bf4fcc49d/src/assets/images/logo.svg"
                            alt="Logo Tiktok"
                        />
                    </div>
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/c27c4b223014b1c510f5eccb42b25851~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=63ab237e&x-expires=1751914800&x-signature=wrHvNXUr5%2Fos00LgEmER1Bk5wfM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=my"
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
