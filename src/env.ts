import "dotenv-flow/config";

import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	server: {
		// - Environment
		NODE_ENV: z.enum(["development", "staging", "production"]),

		// - Dixt
		DIXT_APPLICATION_ID: z.string(),
		DIXT_BOT_TOKEN: z.string(),

		// - Discord
		DISCORD_LOGS_WEBHOOK_URL: z.string().url(),

		// - Congrats Plugin
		CONGRATS_USERS_ID: z.string(),

		// - Anti Connard Plugin
		ANTI_CONNARD_RESTRICTED_WORDS: z.string(),
		ANTI_CONNARD_SAVED_USERS: z.string(),
	},
	client: {},
	clientPrefix: "_",
	runtimeEnv: process.env,
	skipValidation: !!process.env.CI,
	emptyStringAsUndefined: true,
});
