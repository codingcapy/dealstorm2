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
		<main className="flex-1 bg-emerald-100 flex flex-col">
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
					className="py-1 px-1 rounded-md bg-green-900 text-white"
				>
					Search
				</button>
			</form>
			<div className="flex justify-start md:justify-center items-center md:items-start gap-4 flex-col md:flex-row h-screen md:h-auto">
				<div
					id="search"
					className="flex flex-col h-80 rounded-md m-0 p-4 gap-2 overflow-y-auto"
				>
					{foods.map((food) => (
						<div
							key={food.id}
							className="cursor-pointer rounded-full px-5 py-3 border-2 border-teal-900 text-center"
							onClick={() => handleFoodSelect(food)}
						>
							{food.name}
						</div>
					))}
				</div>
				<div id="tags" className="flex flex-col p-4 md:w-48 rounded-md gap-2 overflow-y-auto">
					<h2 className="text-2xl font-bold text-center">My Grocey List</h2>
					{tags.map((tag) => (
						<div
							key={tag.id}
							className="cursor-pointer rounded-full px-5 py-3 border-2 border-teal-900 text-center"
							onClick={() => handleTagRemove(tag)}
						>
							{tag.name}
						</div>
					))}
				</div>
			</div>
			<button
				className="py-2 px-4 bg-green-900 text-white rounded-md w-32 mx-auto my-5"
				onClick={handleNavigateToMyList}
			>
				Go to My List
			</button>
			<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10422.821007833185!2d-122.999909!3d49.2251167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486765bdb5d5b3f%3A0x68dafb58b8f7deb!2sT%26T%20Supermarket!5e0!3m2!1sen!2sca!4v1716144725917!5m2!1sen!2sca" width="300" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mx-auto"></iframe>
		</main>
	);
}
