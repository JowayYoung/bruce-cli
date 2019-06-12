export default function() {
	return this.page.split("-").reduce((t, c) => {
		const item = c.toLowerCase().replace(/( |^)[a-z]/g, w => w.toUpperCase());
		return t + item;
	}, "");
};