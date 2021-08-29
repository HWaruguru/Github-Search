export class User {
    username: string;
        email: string;
        location: string;
        created_at: string;
        followers: number;
        following: number;
        repos: number;
        gists: number;
        bio: string;
        avatar: string;
        name?: string;
    constructor(
        username: string,
        email: string,
        location: string,
        created_at: string,
        followers: number,
        following: number,
        repos: number,
        gists: number,
        bio: string,
        avatar: string,
        name?: string,
    ) {
        this.username = username;
        this.email = email;
        this.location = location;
        this.created_at = created_at;
        this.followers = followers;
        this.following=following;
        this.repos = repos;
        this.bio = bio;
        this.gists = gists;
        this.avatar = avatar;
        this.name = name;
    }
}


