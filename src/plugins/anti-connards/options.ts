import type { AntiConnardPluginOptions } from ".";
import { env } from "../../env";

const antiConnardPluginOptions: AntiConnardPluginOptions = {
	restrictedWords: env.ANTI_CONNARD_RESTRICTED_WORDS.split(","),
	savedUsers: env.ANTI_CONNARD_SAVED_USERS.split(","),
};

export default antiConnardPluginOptions;
