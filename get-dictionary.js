import { ru } from "./dictionaries/ru.js";
import { en } from "./dictionaries/en.js";

const dictionaries = {
    en,
    ru,
};

export const getDictionary = (locale) => {
    return dictionaries[locale];
};
