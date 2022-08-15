//forget password
// https://identitytoolkit.googleapis.com/v1/accounts:update?key=[API_KEY]

//key
// AIzaSyBKUzXswqnOZNILZCXb5Jm6sp4JW7waABg

export async function login ( inputData ) {
    const res = await fetch( 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBKUzXswqnOZNILZCXb5Jm6sp4JW7waABg', {
        method: "POST",
        body: JSON.stringify( {
            email: inputData.email,
            password: inputData.password,
            returnScureToken: true
        } ),
        headers: {
            'Content-Type': 'application/json'
        }
    } );

    const data = await res.json();

    if ( !res.ok )
    {
        console.log( data );
        throw new Error( data.error.message || 'Could not login!.' );
    }

    return data;
}

export async function signup ( inputData ) {
    const res = await fetch( 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBKUzXswqnOZNILZCXb5Jm6sp4JW7waABg', {
        method: "Post",
        body: JSON.stringify( {
            email: inputData.email,
            password: inputData.password,
            returnScureToken: true
        } ),
        headers: {
            'Content-Type': 'application/json'
        }
    } );

    const data = await res.json();

    if ( !res.ok )
    {
        console.log( data );
        throw new Error( data.error.message || 'Could not signup!.' );
    }

    return data;
}