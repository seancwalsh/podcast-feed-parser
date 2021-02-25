declare module 'podparse' {
    export interface Podcast {
        meta: Meta;
        episodes: Episode[];
    }

    export interface Meta {
        title: string;
        description: string;
        language: string;
        author: Author;
        summary: string;
        type: string;

        category?: string[];
        keywords?: string[];

        owner: Owner;
        image: MetaImage;
        explicit: boolean;
        lastBuildDate: string;
        pubDate: string;
        link: string;
        links: Link[];

        managingEditor?: string;
        webMaster?: string;

        blocked?: boolean;
        complete?: boolean;

        countryOfOrigin?: string;

        limit?: number;
        showId?: string;
        showUrl?: string;
        episodeId?: string;
        episodeUrl?: string;

        person?: Person[];
        locked?: boolean;
        funding?: Funding;
        location?: Location;
    }

    export interface Episode {
        title: string;
        description: string;
        author: string;
        summary: string;
        episodeType: EpisodeType;
        guid: string;
        explicit?: boolean;

        duration: number;
        enclosure: Enclosure;

        season?: number;
        episode?: number;

        lastBuildDate: string;
        pubDate: string;
        link?: string;
        image?: EpisodeImage;
        subtitle?: string;

        point?: number[];
        lat?: number;
        long?: number;

        clipId?: string;

        person?: Person[];
        transcript?: Transcript[];
        chapters?: Chapter[];
        soundbite?: Soundbite[];
        location?: Location;
    }

    export interface Enclosure {
        url: string;
        type?: string;
        length?: number;
        title?: string;
        duration?: number;
    }

    export interface Person {
        name: string;
        role: string;
        group?: string;
        href?: string;
    }

    export interface Funding {
        url: string;
        name: string;
    }

    export interface Transcript {
        url: string;
        type: string;
    }

    export interface Chapter {
        url: string;
        type: string;
    }

    export interface Soundbite {
        name?: string;
        startTime: number;
        duration: number;
    }

    export interface Location {
        name: string;
        geo?: number[];
        osm?: string;
    }

    export interface Author {
        name?: string;
        email?: string;
        link?: string;
    }

    export interface Category {
        name?: string;
        domain?: string;
        scheme?: string;
        term?: string;
    }

    export interface Extension {
        name: string;
        objects: any;
    }

    export enum EpisodeType {
        Bonus = 'bonus',
        Full = 'full',
        Trailer = 'trailer',
    }

    export interface EpisodeImage {
        url: string;
    }

    export interface MetaImage {
        url: string;
        link: string;
        title: string;
    }

    export interface Link {
        rel: string;
        href: string;
        type: string;
    }

    export interface Owner {
        name: Author;
        email: string;
    }

    export interface CallArgs {
        includeEpisodes?: boolean;
    }

    export default function getPodcastFromFeed(feed: string, options?: CallArgs): Podcast;
}
