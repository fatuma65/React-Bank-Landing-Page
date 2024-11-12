interface styles {
  styles: string;
}

const ButtonComponent = ({ styles }: styles) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-primary text-[18px] outline-none rounded-[10px] ${styles}`}>
      Get Started
    </button>
  );
};

export default ButtonComponent;
