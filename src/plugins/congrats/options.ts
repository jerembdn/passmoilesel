import type { CongratsPluginOptions } from ".";
import { env } from "../../env";

const congratsPluginOptions: CongratsPluginOptions = {
	usersId: env.CONGRATS_USERS_ID.split(","),
};

export default congratsPluginOptions;
