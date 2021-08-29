export class Repository {
    name: string;
    description: string;
    stargazers: number;
    language: string;
    homepage: string;
    created_by: string;
    created_at: Date;
    constructor(
        name: string,
        description: string,
        stargazers: number,
        language: string,
        homepage: string,
        created_by: string,
        created_at: Date
    ) {
        this.name = name;
        this.description = description;
        this.stargazers = stargazers;
        this.homepage = homepage;
        this.language = language;
        this.created_by = created_by;
        this.created_at = created_at;
    }
}
