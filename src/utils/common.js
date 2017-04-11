
export const compareItems = (a, b) => {
    if (a === b)
        return 0;

    if (a > b)
        return 1;
    else
        return -1;
};

export const compareStrItems = (a, b) => {
    return a.localeCompare(b);
};