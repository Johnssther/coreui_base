import url from './url';

export const getTotalExpensesMonths = async () => {
    const response = await fetch(`${url.URL}dashboard/totalexpensesmonths?api_token=${url.API_TOKEN}&user_id=${url.id}`)
    return await response.json();
};

export const getTotalExpensesMonth = async (data) => {
    const response = await fetch(`${url.URL}dashboard/totalexpensesmonth?api_token=${url.API_TOKEN}&user_id=${url.id}&tipogasto=${data}`)
    return await response.json();
};