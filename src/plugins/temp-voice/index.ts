import { Events } from "discord.js";
import type dixt from "dixt";
import type { DixtPlugin } from "dixt";

type TempVoicePluginOptions = {
	guildId: string;
	baseChannelId: string;
};

const tempVoicePlugin: DixtPlugin = async (instance: dixt, options) => {
	const { guildId, baseChannelId } = options as TempVoicePluginOptions;

	const guild = await instance.client.guilds.fetch(guildId);

	if (!guild) {
		throw new Error("Guild not found");
	}

  const baseChannel = await guild.channels.fetch(baseChannelId);

  if (!baseChannel || !baseChannel.isVoiceBased) {
    throw new Error("Base channel not found");
  }

	instance.client.on(Events.VoiceStateUpdate, async (oldMember, newMember) => {
		const newUserChannel = newMember.channelId;
		const oldUserChannel = oldMember.channelId;

		// - User joins a voice channel
		if (oldUserChannel === undefined && newUserChannel === baseChannelId) {
			const tempChannel = guild.channels.create({
				name: `${newMember.member?.displayName}'s channel`,
        permissionOverwrites: 
			});
			// - User leaves a voice channel
		} else if (newUserChannel === undefined) {
			// User leaves a voice channel
			console.log("Left vc");
		} else {
		}

		const newChannel = await instance.createVoiceChannel({
			name: `${member.user.username}'s channel`,
			parent: channel.parent,
		});

		await member.voice.setChannel(newChannel);
	});

	return {
		name: "temp-voice",
	};
};

export default tempVoicePlugin;
