import type { DixtPluginLogsOptions } from "dixt-plugin-logs";
import { env } from "../env";

const dixtPluginLogsOptions: DixtPluginLogsOptions = {
	webhookUrl: env.DISCORD_LOGS_WEBHOOK_URL,
	name: "amel reporter",
};

export default dixtPluginLogsOptions;
