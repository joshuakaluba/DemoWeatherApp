import StorageKeyEnum from "../enums/StorageKeyEnums";

const StorageUtility = {

    getPreviouslyStoredZipCode: (): string | null => {
        return localStorage.getItem(StorageKeyEnum.PreviousZipCode);
    },

    setStoredZipCode: (zipCode: string): void => {
        localStorage.setItem(StorageKeyEnum.PreviousZipCode, zipCode);
    }
};

export default StorageUtility;