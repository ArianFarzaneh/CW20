import { BsFillCheckCircleFill } from 'react-icons/bs';
function SuccessPage() {
  return (
    <div className="flex flex-col  gap-5 px-32 w-full justify-center items-center">
      <div className="w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center text-white">
        <BsFillCheckCircleFill size={'3.5rem'} />
      </div>
      <h4 className="font-bold text-3xl">Thank You !</h4>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo
        ut rem ex at animi sequi fugit consectetur quidem. Recusandae accusamus
        ullam quia, reprehenderit doloribus veritatis maiores sed laboriosam
        eos.
      </div>
    </div>
  );
}

export default SuccessPage;
