import { quote } from "../constants/images";

interface feedbackTypes {
  content: string;
  name: string;
  title: string;
  img: string;
}
const FeedbackCard = ({ content, name, title, img }: feedbackTypes) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={quote}
        alt="quote"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="font-normal font-poppins text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>
      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[42px] h-[42px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-semibold font-poppins text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <h4 className="font-normal font-poppins text-[16px] leading-[32px] text-dimWhite">
            {title}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
