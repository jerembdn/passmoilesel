import type dixt from "dixt";
import type { DixtPlugin } from "dixt";
import { ChannelType } from "discord.js";

type CongratsPluginOptions = {
	usersId: string[];
};

const congratsPlugin: DixtPlugin = (instance: dixt, options) => {
	const { usersId } = options as CongratsPluginOptions;

	instance.client.on("messageCreate", (message) => {
		if (
			message.author.bot ||
			message.channel.type !== ChannelType.GuildText ||
			message.content.length < 10
		)
			return;

		if (usersId.includes(message.author.id)) {
			const rand = Math.floor(Math.random() * 10);

			if (rand === 0) {
				message.react("👏");
			}
		}
	});

	return {
		name: "congrats",
	};
};

export type { CongratsPluginOptions };

export default congratsPlugin;
