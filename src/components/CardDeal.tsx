import { layout } from "../styles";
import styles from "../styles";
import { card } from "../constants/images";
import ButtonComponent from "./ButtonComponent";

const CardDeal = () => {
  return (
    <section className={layout.section} id="features">
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> easy steps
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          corporis dolor, veritatis beatae velit modi laborum quos iusto
          voluptatum deserunt praesentium esse sapiente quas tempore? Provident
          laudantium eaque possimus repellat.
        </p>
        <ButtonComponent styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%] " />
      </div>
    </section>
  );
};

export default CardDeal;
