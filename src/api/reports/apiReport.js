import url from '../url';

export const getGastosReport = async (data) => {
    let link = `${url.URL}gastosreport?api_token=${url.API_TOKEN}&user_id=${url.id}&filterDate_in=${data.filterDate_in}&filterDate_out=${data.filterDate_out}&filterTipogasto=${data.filterTipogasto}&type=${data.type}`;
        if (data.type === 'print') {
            window.open(link);
        }

    const response = await fetch(`${url.URL}gastosreport?api_token=${url.API_TOKEN}&user_id=${JSON.parse(localStorage.getItem('auth')).id}&filterDate_in=${data.filterDate_in}&filterDate_out=${data.filterDate_out}&filterTipogasto=${data.filterTipogasto}`)
    return await response.json();
};
