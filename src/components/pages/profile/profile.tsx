import {WrapperNav} from "./index";

import styles from "./profile.module.scss";

export const Profile = () => {
    return (
      <section className={styles.container}>
        <WrapperNav>
          <h2 className={styles.name}>Tatyana Mikhnevich</h2>
          <p className={styles.mail}>pampam@mail.ru</p>
        </WrapperNav>
      </section>
    );
}