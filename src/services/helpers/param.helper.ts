export const parseParamData = <T>(data: string | string[] | undefined): T | null => {
    if (typeof data === 'string') {
        try {
            return JSON.parse(data) as T;
        } catch (e) {
            console.error("Parsing error:", e);
            return null;
        }
    }
    return null;
};