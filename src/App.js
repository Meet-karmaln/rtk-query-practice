import { useDispatch, useSelector } from "react-redux";

import { useGetAllProductsQuery } from "./Redux/dataFetching/apiSlice";
import { counterAction } from "./Redux/Slice/sliceOne";

function App() {
	const { number } = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	const { data, isError, isSuccess, isLoading } = useGetAllProductsQuery();
	console.log(number);
	return (
		<>
			<div>
				<button onClick={() => dispatch(counterAction.increase())}>
					+
				</button>
				<p>{number}</p>
				<button onClick={() => dispatch(counterAction.decrease())}>
					-
				</button>
			</div>
			<h1>data</h1>

			{isError && <h1>Error...</h1>}
			{isLoading && <h1>Loading...</h1>}
			{isSuccess && (
				<p
					style={{
						maxWidth: "100rem",
						background: "red",
						overflow: "hidden",
					}}
				>
					{JSON.stringify(data)}
				</p>
			)}
		</>
	);
}

export default App;
