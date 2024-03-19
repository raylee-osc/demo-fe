export = global

declare global {
    namespace NodeJS {
        interface ProcessEnv extends Dict<string> {
            NODE_ENV: string | "local" | "development" | "production";
            [key: string]: string
        }
    }
}