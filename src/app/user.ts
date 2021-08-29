export class User {
    constructor(
        username: string,
        email: string,
        location: string,
        created_at: string,
        followers: string,
        public_repos: string,
        public_gists: string,
        bio: string,
        name?: string,
    ) {}
}


