import type { DixtPlugin } from "dixt";
import { isMirrorHour } from "../../utils/is-mirror-hour";

//type MirrorHoursPluginOptions = object;

const mirrorHoursPlugin: DixtPlugin = () => {
	const onMirrorHour = () => {};

	setInterval(() => {
		const now = new Date();

		if (isMirrorHour(now)) onMirrorHour();
	}, 1 * 1000);

	return {
		name: "mirror-hours",
	};
};

export default mirrorHoursPlugin;
