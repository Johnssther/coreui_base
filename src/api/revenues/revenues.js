import url from '../url';

export const indexRevenues = async () => {
    const response = await fetch(`${url.URL}revenues?api_token=${url.API_TOKEN}&user_id=${url.id}`)
    return await response.json();
};

export const storeRevenue = async (data) => {
    const response = await fetch(`${url.URL}revenues`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_token: url.API_TOKEN,
                revenue_dt: data.revenue_dt,
                revenue_name: data.revenue_name,
                revenue_amount: data.revenue_amount,
                revenue_description: data.revenue_description,
                revenue_saving_percentaje: data.revenue_saving_percentaje,
                revenue_user: url.id,
            }),
        },
    );
    return await response.json();
};

export const updateRevenue = async (data) => {
    const response = await fetch(`${url.URL}revenues/${data.id}`,
        {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_token: url.API_TOKEN,
                revenue_dt: data.revenue_dt,
                revenue_name: data.revenue_name,
                revenue_amount: data.revenue_amount,
                revenue_description: data.revenue_description,
                revenue_saving_percentaje: data.revenue_saving_percentaje,
                revenue_user: url.id,
            }),
        },
    );
    return await response.json();
};

export const showRevenue = async (id) => {
    const response = await fetch(`${url.URL}revenues/${id}?api_token=${url.API_TOKEN}&user_id=${url.id}`)
    return await response.json();
};

export const destroyRevenue = async (id) => {
    const response = await fetch(`${url.URL}revenues/${id}?api_token=${url.API_TOKEN}`,
        {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        },
    );
    return await response.json();
};
