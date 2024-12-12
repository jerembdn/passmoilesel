import { ChannelType, Events, type Message } from "discord.js";
import type { DixtPlugin } from "dixt";
import type dixt from "dixt";

type AntiConnardPluginOptions = {
	restrictedWords: string[];
	savedUsers: string[];
};

const antiConnardPlugin: DixtPlugin = (instance: dixt, options) => {
	const { restrictedWords, savedUsers } = options as AntiConnardPluginOptions;

	instance.client.on(Events.MessageCreate, (message: Message) => {
		if (
			message.author.bot ||
			message.channel.type !== ChannelType.GuildText ||
			savedUsers.includes(message.author.id)
		)
			return;

		const rand = Math.floor(Math.random() * 5);

		if (rand === 0) {
			if (
				message.content
					.toLowerCase()
					.split(" ")
					.some((word) => restrictedWords.includes(word))
			)
				message.delete();

			if (message.content.endsWith("quoi")) message.reply("feur");
			if (message.content.endsWith("oui")) message.reply("stiti");
		}
	});

	return {
		name: "anti-connard",
		description:
			'Prevents users from saying "feur" ou les autres trucs comme ça (c\'est chiant en gros).',
	};
};

export type { AntiConnardPluginOptions };

export default antiConnardPlugin;
