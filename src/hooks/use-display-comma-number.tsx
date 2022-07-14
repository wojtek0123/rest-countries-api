const useDisplayCommasInNumber = () => {
	const displayCommasInNumber = (amount: number) => {
		let result = '';
		const arrayOfNumbers = amount.toString().split('').reverse();

		arrayOfNumbers.forEach((number, index) => {
			if (index % 3 === 0 && index !== 0) {
				result += ',';
			}
			result += number;
		});
		return result.split('').reverse().join('');
	};

	return {
		displayCommasInNumber,
	};
};

export default useDisplayCommasInNumber;
