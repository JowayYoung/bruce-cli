export default function(title) {
	return title.split("-").reduce((t, c) => {
		const item = c.toLowerCase().replace(/( |^)[a-z]/g, w => w.toUpperCase());
		return t + item;
	}, "");
};