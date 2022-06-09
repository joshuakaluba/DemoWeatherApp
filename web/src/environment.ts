const DEV = true;

const environment = {
    serverUrl: DEV ? 'http://localhost:5000' : process.env.serverUrl,
}

export default environment;