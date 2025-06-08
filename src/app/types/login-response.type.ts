export type LoginResponse = {
    token: string;
    user: {
        name: string;
        email: string;
    };
};