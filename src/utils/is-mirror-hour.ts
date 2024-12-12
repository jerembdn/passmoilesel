export const isMirrorHour = (date: Date): boolean => {
	const hours = date.getHours();
	const minutes = date.getMinutes();
	return hours === minutes;
};
