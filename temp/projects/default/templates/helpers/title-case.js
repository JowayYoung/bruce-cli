export default function(title) {
	// console.log(this.page);
	return title.split("-").reduce((t, c) => {
		const item = c.toLowerCase().replace(/( |^)[a-z]/g, w => w.toUpperCase());
		return t + item;
	}, "");
};