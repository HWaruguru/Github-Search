export class Repository {
    name: string;
    description: string;
    stargazers_count: number;
    language: string;
    homepage: string;
    created_by: string;
    created_at: Date;
    constructor(
        name: string,
        description: string,
        stargazers_count: number,
        language: string,
        homepage: string,
        created_by: string,
        created_at: Date
    ) {
        this.name = name;
        this.description = description;
        this.stargazers_count = stargazers_count;
        this.homepage = homepage;
        this.language = language;
        this.created_by = created_by;
        this.created_at = created_at;
    }
}
