import url from '../url';

export const _getExpenses = async (data) => {
    const response = await fetch(`${url.URL}gastos?api_token=${url.API_TOKEN}&user_id=${url.id}&mes=${data.mes}`)
    return await response.json();
};
export const _saveExpenses = async (data) => {
    const response = await fetch(`${url.URL}gastos`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_token: url.API_TOKEN,
                gasto: data.gasto,
                cantidad: data.cantidad,
                precio_unidad: data.precio_unidad,
                precio_total: data.precio_total,
                fecha: data.fecha,
                user_id: data.user_id,
                tipogasto_id: data.tipogasto_id,
            }),
        },
    );

    return await response.json();
};
export const _updateExpense = async (data) => {
    const response = await fetch(`${url.URL}gastos/${data.id}`,
        {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_token: url.API_TOKEN,
                gasto: data.gasto,
                cantidad: data.cantidad,
                precio_unidad: data.precio_unidad,
                precio_total: data.precio_total,
                fecha: data.fecha,
                user_id: data.user_id,
                tipogasto_id: data.tipogasto_id,
            }),
        },
    );

    return await response.json();
};
export const _showExpense = async (data) => {
    const response = await fetch(`${url.URL}gastos/${data.id}?api_token=${url.API_TOKEN}&user_id=${url.id}`)
    return await response.json();
};
export const _deleteExpense = async (id) => {
    const response = await fetch(`${url.URL}gastos/${id}?api_token=${url.API_TOKEN}`,
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
export const _getExpensesType = async () => {
    const response = await fetch(`${url.URL}tipogastos?api_token=${url.API_TOKEN}&user_id=${url.id}`)
    return await response.json();
};