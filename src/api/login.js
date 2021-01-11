import url from './url';

export const onLogin = async (userLogin, passwordLogin) => {
    const response = await fetch(`${url.URL}login`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userLogin,
                password: passwordLogin,
            }),
        },
    );

    return await response.json();
};