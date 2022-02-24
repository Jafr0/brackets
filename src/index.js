module.exports = function check(str, bracketsConfig) {

	let arr = bracketsConfig.map(el => RegExp(`${del(el.join(''))}`, 'g'));

	function del(el) {
		return (el.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
	};

	let num;

	do {
		num = str.length;
		str = remove(arr, str);
	} while (str.length > 0 && str.length !== num);

	function remove(arr, str) {
		arr.forEach(i => { str = str.replace(i, ''); });

		return str;
	}

	return str.length === 0;
};


