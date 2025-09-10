type TooltipProps = {
  x: string; 
  y: string; 
  img: string;
  price: string;
  text: string;
};

const TooltipPoint = ({ x, y, img, price, text }: TooltipProps) => {
  return (
    <div
      className="absolute group"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
    >
      {/* Point bleu */}
      <div className="w-3 h-3 bg-orange-600 rounded-full cursor-pointer"></div>

      {/* Tooltip au hover */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-30 p-2 bg-white rounded-xl shadow-lg 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                      z-10 group-hover:z-50">
        <img src={img} alt={text} className="w-full h-24 object-cover rounded-lg mb-2" />
        <p className="font-bold text-black">{price}</p>
        <p className="text-xs text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default TooltipPoint;
