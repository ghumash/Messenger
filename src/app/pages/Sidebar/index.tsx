import Image from 'next/image'
import {MessagesSquare, Phone, Settings, Sun, Users2} from "lucide-react";
import styles from "./Sidebar.module.scss";
import Link from "next/link";
import logo from "../../assets/img/logo.svg"
import {Configs} from "@/app/ts/configs";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Link href={'/'}>
        <Image className={styles.logo} src={logo} priority alt={''} width={40} height={40}/>
      </Link>
      <div>
        <Link href={'friends'}>
          <Users2 size={Configs.iconSize} className={styles.icon}/>
        </Link>
        <Link href={'call'}>
          <Phone size={Configs.iconSize} className={styles.icon}/>
        </Link>
        <Link href={'chats'}>
          <MessagesSquare size={Configs.iconSize} className={styles.icon}/>
        </Link>
        <Link href={'chats'}>
          <Settings size={Configs.iconSize} className={styles.icon}/>
        </Link>
      </div>
      <Sun size={Configs.iconSize} className={styles.icon}/>
    </aside>
  )
}
