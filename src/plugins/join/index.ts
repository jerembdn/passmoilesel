import type dixt from "dixt";
import { isString, Log, merge, type DixtPlugin } from "dixt";
import { env } from "../../env";
import { name } from "../../../package.json";
import {
	Events,
	type TextChannel,
	type GuildMember,
	type APIEmbed,
} from "discord.js";
import urlcat from "urlcat";
import convertHexColortoNumber from "../../utils/convert-hex-color-to-number";

type JoinPluginOptions = {
	channelId: string;
	color?: string;
	backgroundsFolderUrl?: string;
};

const optionsDefault: JoinPluginOptions = {
	channelId: env.JOIN_CHANNEL_ID,
	color: env.JOIN_WELCOME_COLOR,
	backgroundsFolderUrl: env.JOIN_WELCOME_BACKGROUNDS_FOLDER_URL,
};

const joinPlugin: DixtPlugin = async (instance: dixt, optionsValue) => {
	const options = merge({}, optionsDefault, optionsValue) as JoinPluginOptions;

	if (!options.channelId) {
		const message = `${name} - channelId is required`;
		Log.error(message);
		throw new Error(message);
	}

	/* const command = {
		data: new SlashCommandBuilder()
			.setName("ping")
			.setDescription("Replies with Pong!"),
		execute: async (interaction: CommandInteraction) => {
			await interaction.reply("Pong!");
		},
	};

	instance.client.commands = new Collection();
	// @ts-ignore
	instance.client.commands.set(command.data.name, command);

	const rest = new REST().setToken(env.DIXT_BOT_TOKEN);

	await rest.put(
		Routes.applicationGuildCommands(
			"1316792870325321818",
			"1308799935206002779",
		),
		{
			body: [command.data],
		},
	); */

	instance.client.on(Events.GuildMemberAdd, async (member: GuildMember) => {
		const channel = (await member.guild.channels.fetch(
			options.channelId,
		)) as TextChannel;

		const welcomeCard = urlcat("https://api.popcat.xyz/welcomecard", {
			background: options.backgroundsFolderUrl,
			avatar: member.user.displayAvatarURL(),
			text1: "Merci du follow la GOAT !",
			text2: "Bienvenue sur le serveur",
			text3: "dites lui bienvenue tout de suite ou alors ça va mal se passer",
		});

		const color: number = isString(options.color)
			? convertHexColortoNumber(options.color as unknown as `#${string}`)
			: // @ts-ignore
				(options.color as number);

		const embed: APIEmbed = {
			description: `Bienvenue sur le serveur, ${member.user} !`,
			image: {
				url: decodeURIComponent(welcomeCard),
			},
			footer: {
				text: instance.application?.name || "",
				icon_url: instance.application?.logo || "",
			},
			color,
		};

		channel.send({ embeds: [embed] });
	});

	return {
		name: "join",
	};
};

//getRandomBackgroundUrl = (backgroundsFolderGoogleId: string) => {}

export default joinPlugin;
