import { EventEmitter } from "node:events";
import { AoiClient } from "aoi.js";
import { KeyValue } from "@akarui/aoi.db";
import { Invite, GuildMember } from "discord.js";
import { Group } from "@akarui/structures";
import { InviterData } from "./interface.js";
import { InviteSystemEvents } from "./interface.js";
export default class InviteManager extends EventEmitter {
    #private;
    db: KeyValue;
    options: {
        fakeLimit: number;
    };
    invites: Group<string, Group<string, Invite>>;
    readyAt: number;
    constructor(client: AoiClient, dbOptions: {
        sk: string;
    });
    on<Event extends keyof InviteSystemEvents>(event: Event, listener: InviteSystemEvents[Event]): this;
    emit<Event extends keyof InviteSystemEvents>(event: Event, ...args: Parameters<InviteSystemEvents[Event]>): boolean;
    setFakeLimit(limit: number): void;
    fetchAllInvites(): Promise<void>;
    connect(): Promise<void>;
    generateinviterData(): InviterData;
    addMemberToDB({ member, inviter, code, guildId, }: {
        member: GuildMember;
        inviter: string;
        code: string;
        guildId: string;
    }): Promise<void>;
    isFakeMember(member: GuildMember): boolean;
    getInviterGuildData(inviter: string, guildId: string): Promise<InviterData | null>;
    getInviterData(inviter: string): Promise<InviterData[] | null>;
    getCodeData(code: string, guildId: string, inviter?: string): Promise<string[] | null>;
    memberJoin(member: GuildMember): Promise<void>;
    memberLeave(member: GuildMember, guildId: string): Promise<void>;
    getInviteeData(id: string, guildId: string): Promise<{
        code: string;
        inviter: string;
        isFake: boolean;
        join: number | null;
    } | null>;
    resetInvites(guildId: string, inviter: string): Promise<boolean>;
    resetGuildInvites(guildId: string): Promise<void>;
    setInviterData(inviter: string, guildId: string, data: InviterData): Promise<void>;
    getLeaderboard(guildId: string, page?: number, limit?: number, format?: string): Promise<any[] | null>;
}
//# sourceMappingURL=manager.d.ts.map