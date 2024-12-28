import url from './url';

export const registerUser = async (data) => {
    const response = await fetch(`${url.URL}register`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                username: data.username,
                password: data.password,
                password_confirmation: data.password_confirmation,
            }),
        },
    );

    return await response.json();
};
