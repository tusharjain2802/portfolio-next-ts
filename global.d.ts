// global.d.ts
declare global {
    namespace NodeJS {
        interface Global {
            mongoose: {
                conn: typeof import("mongoose") | null;
                promise: Promise<typeof import("mongoose")> | null;
            };
        }
    }
}

export { };
