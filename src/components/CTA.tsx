import styles from "../styles";
import ButtonComponent from "./ButtonComponent";
const CTA = () => {
  return (
    <section
      id="cta"
      className={`${styles.flexCenter}  ${styles.marginX} ${styles.padding} m-16 sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h1 className={`${styles.heading2}`}>Let's try our service now</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet{" "}
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <ButtonComponent styles="" />
      </div>
    </section>
  );
};

export default CTA;
