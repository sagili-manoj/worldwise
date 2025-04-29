import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
          Lorem ipsum dolor sit amet, consecteturaaa adipisicing elit. It is said that the light is true, the fault is with the architect, the wise man is not free, the pain is nothing, the place is owed, the labor is at the escape of the sweat?
           </p>
           <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. The body is free from pain, it is expedient to reason rightly, great, the wise man follows the officials and.
          </p>
        </div>
      </section>
    </main>
  );
}
