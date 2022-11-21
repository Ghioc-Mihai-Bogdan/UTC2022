function changeRestaurantName() {
	const restaurantName = document.getElementById("restaurant-name-input").value;
	document.getElementById("restaurant-name").innerHTML = "Welcome to " + restaurantName + '!';
}
