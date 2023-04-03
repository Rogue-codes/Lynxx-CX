import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import {motion} from "framer-motion"
interface Coin {
  id: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export default function PopularToken() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [coins, setCoins] = useState<Coin[]>([]);
  useEffect(() => {
    const getCoin = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin,ethereum,tether,binancecoin,usd-coin&vs_currency=usd"
      );
      const data = await response.data;
      setCoins(data);
      setIsLoading(false);
    };
    getCoin();
  }, []);

  const scrollRef = useRef(null);

  const slideUp = {
    hide: {
      y: "20%",
      opacity: 0,
    },
    show: {
      y: "0%",
      opacity: 1,
      transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
    },
  };
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex justify-between items-center flex-wrap">
          {coins.map((coin) => (
            <motion.div
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef} 
              key={coin.id}
              className="w-full lg:w-[19%] mt-3 lg:mt-[4.5rem] relative z-10 bg-[#000] p-4 flex justify-between items-baseline"
            >
              <div className="flex items-center gap-2">
                <img src={coin.image} width={30} alt="" />

                <div>
                  <p className="text-white-primary">
                    {coin.symbol.toUpperCase()}
                  </p>
                  <p className="text-white-secondary">${coin.current_price}</p>
                </div>
              </div>

              <p
                className={`${
                  coin.price_change_percentage_24h < 0
                    ? "text-red-600"
                    : "text-green-600"
                } flex items-center`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%{" "}
                <AiOutlineCaretDown />
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
