export class User {
    login: string;
    email: string;
    location: string;
    created_at: Date;
    followers: number;
    following: number;
    repos: number;
    gists: number;
    bio: string;
    avatar_url: string;
    name?: string;
    constructor(
        login: string,
        email: string,
        location: string,
        created_at: Date,
        followers: number,
        following: number,
        repos: number,
        gists: number,
        bio: string,
        avatar_url: string,
        name?: string,
    ) {
        this.login = login;
        this.email = email;
        this.location = location;
        this.created_at = created_at;
        this.followers = followers;
        this.following=following;
        this.repos = repos;
        this.bio = bio;
        this.gists = gists;
        this.avatar_url = avatar_url;
        this.name = name;
    }
}


