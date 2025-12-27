export interface Service {
    id: number;
    attributes: {
        title: string;
        slug: string;
        description: any; // Rich text blocks
        icon: {
            data: {
                attributes: {
                    url: string;
                };
            };
        };
    };
}

export interface Project {
    id: number;
    attributes: {
        title: string;
        slug: string;
        client: string;
        description: any;
        coverImage: {
            data: {
                attributes: {
                    url: string;
                };
            };
        };
    };
}

export interface JobPosting {
    id: number;
    attributes: {
        title: string;
        department: string;
        location: string;
        description: any;
        applyLink: string;
    };
}
