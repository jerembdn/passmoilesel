const convertHexColortoNumber = (hexString: `#${string}`) => {
	return Number.parseInt(hexString.replace("#", ""), 16);
};

export default convertHexColortoNumber;
