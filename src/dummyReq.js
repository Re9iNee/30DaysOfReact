export const dummyReq = () => {
    console.count("DUMMY REQUESTED");

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(JSON.stringify("FUCK YOU"));
        }, 1500);
    });
};
