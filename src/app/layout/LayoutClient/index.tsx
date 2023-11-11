import type { PropsWithChildren } from "react";
import { Sidebar } from "../../../app/pages/Sidebar";
import styles from "./LayoutClient.module.scss";

export default function LayoutClient({ children }: PropsWithChildren<unknown>) {
	return (
		<main className={styles.layout}>
      <Sidebar/>
      <section>
        {children}
      </section>
    </main>
	)
}