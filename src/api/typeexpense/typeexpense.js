import url from '../url';

export const getExpensesTyped = async () => {
    const response = await fetch(`${url.URL}tipogastos?api_token=${url.API_TOKEN}&user_id=${url.id}`)
    return await response.json();
};
export const saveExpenseType = async (data) => {
    const response = await fetch(`${url.URL}tipogastos`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_token: url.API_TOKEN,
                tipogastos_name: data.tipogastos_name,
                tipogastos_active: data.tipogastos_active,
                tipogastos_usuario: data.tipogastos_usuario,
            }),
        },
    );

    return await response.json();
};
