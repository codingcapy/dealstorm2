import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import DOMAIN from "../services/endpoint";
import useAuthStore from "../store/AuthStore";
import wholefoods from "/Whole Foods.svg";
import iga from "/IGA.svg";
import tnt from "/TNT.svg";
import superstore from "/Superstore.svg";
import walmart from "/Walmart.svg";
import freshii from "/Freshii.svg";
import chipotle from "/Chipotle.svg";
import subway from "/Subway.svg";

export default function MyListPage() {
  const restaurants = ["Freshii", "Chipotle", "Subway"];
  const groceryStores = ["Whole Foods", "IGA", "TNT", "Superstore", "Walmart"];
  const [budget, setBudget] = useState(0);
  const { loginService, authLoading, user } = useAuthStore((state) => state);
  const location = useLocation();
  const tags = location.state?.selectedItems || [];
  const navigate = useNavigate();

  const handleNavigateToCompleted = () => {
    navigate('/dealstorm2/completed', { state: { selectedItems: tags } });
  };

  useEffect(() => {
    async function getBudget() {
      const res = await axios.get(`${DOMAIN}/api/budgets/${user.user_id}`);
      console.log(res);
      setBudget(res.data.value);   
    }
    getBudget();
  }, []);

  return (
    <main className="flex-1 bg-emerald-100">
      <h2 className="text-2xl font-bold text-center py-2">
        My weekly budget:<span className="text-teal-600">${budget}</span>
      </h2>
      <div className="mx-auto w-[80%] bg-gray-400 py-1 my-2 rounded-full"></div>
      <div className="font-bold text-gray-500 text-center">
        0/<span className="text-teal-600">${budget}</span>
      </div>
      <input
        type="text"
        placeholder="Search for an ingredient!"
        className="flex flex-col bg-white mx-auto py-1 px-4 rounded-xl outline-none w-[90%] text-xl text-center text-gray-600"
      />
      <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-4xl md:text-8xl tracking-tighter font-bold pt-36">
            My List
          </h1>
          <div className="w-[350px] p-4 mt-4 rounded-md">
            {tags.map((item) => (
              <div key={item.id} className="cursor-pointer rounded-full px-5 py-3 border-2 border-teal-900 text-center">{item.name}</div>
            ))}
          </div>
          <button
          className="py-2 px-4 bg-green-900 text-white rounded-md"
          onClick={handleNavigateToCompleted}
        >
          Complete Grocery Run
        </button>
      </div>

    </main>
  );
}
