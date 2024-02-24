export async function fetchData(url, method, body) {
    const headers = {
        'Content-Type': 'application/json',
    };

    const options = {
        method,
        headers,
        body: JSON.stringify(body),
    };

    try {
        const response = await fetch(url, options);

        // The fetch function returns a promise that resolves with a Response object. This Response object has a property called ok that indicates whether the HTTP response status code falls within the range of successful responses (i.e., between 200 and 299) or not.

        // When you perform fetch and the server responds with a status code like 404 (Not Found), 500 (Internal Server Error), or any other non-successful code, response.ok will be false. In such cases, the promise returned by fetch still resolves successfully, but you need to handle the non-successful response appropriately.

        // By checking !response.ok, you ensure that the fetch operation was successful (i.e., you received a response from the server with a valid HTTP status code). If it's not OK, you throw an error indicating that the fetch operation failed, along with the status text from the response.

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }


        // A status code of 204 means that the server successfully processed the request, but it's indicating that there is no content to return in the response body. In your original code, you were trying to parse JSON from a potentially empty response, which led to the "SyntaxError: Unexpected end of JSON input" error.

        // By checking response.status === 204, you identify this specific case and return null from the fetchData function. This indicates to the caller that the request was successful, but there's no data to process.

        if (response.status === 204) {
            // No content response (204)
            return null;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data');
    }
}