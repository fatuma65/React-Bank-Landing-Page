import styles from "../styles";
import { layout } from "../styles";
import { apple, bill, google } from "../constants/images";

const Billing = () => {
  return (
    <>
      <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <img
            src={bill}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          />
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] white__gradient rounded-full" />
          <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] pink__gradient rounded-full" />
        </div>

        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Easily control your <br className="sm:block hidden" /> billing &
            invoicing.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            repellendus aliquam eum officia suscipit doloremque, adipisci
            possimus similique expedita, vel voluptatibus sequi quas quis
            laboriosam dolores qui cupiditate sed recusandae.
          </p>

          <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <img src={apple} alt="apple" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
            <img src={google} alt="apple" className="w-[128px] h-[42px] object-contain  cursor-pointer" />
          </div>
        </div>

      </section>
    </>
  );
};

export default Billing;
