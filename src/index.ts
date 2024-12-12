import dixt, { Log } from "dixt";
import dixtPluginPresence from "dixt-plugin-presence";
import dixtPluginPresenceOptions from "./dixt-options/presence";
import dixtPluginAffix from "dixt-plugin-affix";
import { env } from "./env";
import dixtPluginLogs from "dixt-plugin-logs";
import dixtPluginLogsOptions from "./dixt-options/logs";
import dixtPluginAffixOptions from "./dixt-options/affix";
import mirrorHoursPlugin from "./plugins/mirror-hours";
import congratsPlugin from "./plugins/congrats";
import congratsPluginOptions from "./plugins/congrats/options";
import antiConnardPlugin from "./plugins/anti-connards";
import antiConnardPluginOptions from "./plugins/anti-connards/options";

(async () => {
	const instance = new dixt({
		plugins: [
			[dixtPluginPresence, dixtPluginPresenceOptions],
			[dixtPluginLogs, dixtPluginLogsOptions],
			[dixtPluginAffix, dixtPluginAffixOptions],
			[congratsPlugin, congratsPluginOptions],
			[antiConnardPlugin, antiConnardPluginOptions],
			mirrorHoursPlugin,
		],
	});

	await instance.start();
	Log.ready(`bot was started in \`${env.NODE_ENV}\` mode.`);
})();
