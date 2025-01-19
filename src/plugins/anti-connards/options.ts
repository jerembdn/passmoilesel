import type { AntiConnardPluginOptions } from ".";
import { env } from "../../env";

const antiConnardPluginOptions: AntiConnardPluginOptions = {
	restrictedWords: env.ANTI_CONNARD_RESTRICTED_WORDS.split(","),
	savedUsers: [],
};

export default antiConnardPluginOptions;
