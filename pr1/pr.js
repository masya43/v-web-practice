function sumArray(nums) {
    let sum = 0;
    nums.forEach(element => {
        sum += element;
    });
    return sum;
}
let a = [1, 2, 3, 4, 5];

function findMax(nums) {
    let max = nums[0];
    nums.forEach(element => {
        max = max > element ? max : element;
    });
    return max;
}


console.log(sumArray(a));
console.log(findMax(a));


function group(dict) {
	result = {}
	
	dict["products"].forEach(product => {
		if (!(product["category"] in result)) {
			result[product["category"]] = []
		}

		result[product["category"]].push({
			"productName": product["name"],
			"price": product["price"]
		})
		
	})

	return result
}


a = {
	"products": [
		{"id": 1, "name": "Laptop", "category": "Electronics", "price": 1000},
		{"id": 2, "name": "Book", "category": "Education", "price": 20},
		{"id": 3, "name": "Phone", "category": "Electronics", "price": 500},
	]

}


console.log(group(a))