import {atom} from "recoil";

export const selectCategoryAtom = atom({
	key: "selectCategory",
	default: "",
})

export const goodsDataAtom = atom({
	key: "goodsDataKey",
	default: {},
})