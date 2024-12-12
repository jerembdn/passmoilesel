import { ActivityType } from "discord.js";
import type { DixtPluginPresenceOptions } from "dixt-plugin-presence";

const dixtPluginPresenceOptions: DixtPluginPresenceOptions = {
	presences: [
		{
			activities: [
				{
					name: "Merci du follow la GOAT",
					type: ActivityType.Watching,
				},
			],
			status: "invisible",
		},
		{
			activities: [
				{
					name: "chacun son avis ^^",
					type: ActivityType.Watching,
				},
			],
			status: "invisible",
		},
	],
};

export default dixtPluginPresenceOptions;
