
export const compareItems = (a, b) => {
    if (a === b)
        return 0;

    if (a > b)
        return 1;
    else
        return -1;
};
