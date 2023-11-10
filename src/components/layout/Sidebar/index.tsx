import Image from 'next/image'
import {MessagesSquare, Phone, Settings, Sun, Users2} from "lucide-react";
import styles from "./Sidebar.module.scss";
import Link from "next/link";



export function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Image src={'/logo.svg'} alt={''} width={40} height={40}/>
            <div>
                <Link href={'friends'}>
                    <Users2 />
                </Link>
                <Link href={'call'}>
                    <Phone />
                </Link>
                <Link href={'chats'}>
                    <MessagesSquare />
                </Link>
                <Link href={'chats'}>
                    <Settings />
                </Link>
            </div>
            <Sun/>
        </div>
    )
}
