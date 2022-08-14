// sign up
// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

// login
// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

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
        throw new Error( data.message || 'Could not login!.' );
    }

    return data;

}