import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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

export default function SearchPage() {
  const restaurants = ["Freshii", "Chipotle", "Subway"];
  const groceryStores = ["Whole Foods", "IGA", "TNT", "Superstore", "Walmart"];
  const [budget, setBudget] = useState(0);
  const [search, setSearch] = useState("");
  const [foods, setFoods] = useState([]);
  const [tags, setTags] = useState([]);
  const { loginService, authLoading, user } = useAuthStore((state) => state);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    setSearch(value);
  };

  const handleFoodSelect = (food) => {
    setTags((prevTags) => [...prevTags, food]);
    setFoods((prevFoods) => prevFoods.filter((item) => item.id !== food.id));
  };

  const handleNavigateToMyList = () => {
    navigate('/dealstorm2/mylist', { state: { selectedItems: tags } });
  };


  useEffect(() => {
    async function getBudget() {
      const res = await axios.get(`${DOMAIN}/api/budgets/${user.user_id}`);
      console.log(res);
      setBudget(res.data.value);
    }
    getBudget();
  }, []);

  useEffect(() => {
    async function searchFoods() {
      const API_KEY = "235652c2433d4ff48133864d0d8b6e4a";
      const url = `https://api.spoonacular.com/food/ingredients/search?apiKey=${API_KEY}&query=${encodeURIComponent(
        search
      )}`;

      const res = await axios.get(url);
      const results = res.data.results;
      setFoods(results);
    }
    if (search) {
      searchFoods();
    }
  }, [search]);

  return (
    <main className="flex-1 bg-emerald-100 flex flex-col ">
      <h2 className="text-2xl font-bold text-center py-2">
        My weekly budget:<span className="text-teal-600">${budget}</span>
      </h2>
      <div className="mx-auto w-[80%] bg-gray-400 py-1 my-2 rounded-full"></div>
      <div className="font-bold text-gray-500 text-center">
        0/<span className="text-teal-600">${budget}</span>
      </div>
      <form
        className="flex justify-center items-center gap-4 my-4"
        onSubmit={handleSearchSubmit}
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for an ingredient!"
          className="w-[350px] rounded-md py-1 px-2"
        />
        <button
          type="submit"
          className="py-1 px-2 rounded-md bg-green-900 text-white"
        >
          Search
        </button>
      </form>
      <div className="flex justify-start md:justify-center items-center md:items-start gap-4 flex-col md:flex-row h-screen md:h-auto">

        <div
          id="search"
          className="flex flex-col w-96 h-80 bg-white rounded-md m-0 p-4 gap-2 overflow-y-auto"
        >
          {foods.map((food) => (
            <div
              key={food.id}
              className="bg-gray-100 p-2 hover:bg-gray-200 rounded-md cursor-pointer"
              onClick={() => handleFoodSelect(food)}
            >
              {food.name}
            </div>
          ))}
        </div>
        <div id="tags" className="flex flex-col p-4 w-96 md:w-48 h-80 bg-white rounded-md gap-2 overflow-y-auto">

          {tags.map((tag) => (
            <div
              key={tag.id}
              className="bg-gray-100 p-2 hover:bg-gray-200 rounded-md cursor-pointer text-xs"
              onClick={() => handleTagRemove(tag)}
            >
              {tag.name}
            </div>
          ))}
        </div>

        <button
            className="py-2 px-4 bg-green-900 text-white rounded-md w-32"
            onClick={handleNavigateToMyList}
          >
            Go to My List
          </button>
 
      </div>



    </main>
  );  
}
