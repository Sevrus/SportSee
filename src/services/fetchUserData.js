const useMockData = true;

const fetchUserData = async (endpoint, userId) => {
    if (useMockData) {
        const mockData = await import("../mocks/mockUserStats.json");
        switch (endpoint) {
            case 'USER_MAIN_DATA':
                return mockData.USER_MAIN_DATA.find(user => user["id"] === userId);
            case 'USER_ACTIVITY':
                return mockData.USER_ACTIVITY.find(activity => activity["userId"] === userId);
            case 'USER_AVERAGE_SESSIONS':
                return mockData.USER_AVERAGE_SESSIONS.find(avg => avg["userId"] === userId);
            case 'USER_PERFORMANCE':
                return mockData.USER_PERFORMANCE.find(performance => performance["userId"] === userId);
            default:
                throw new Error('Endpoint not found in mock data.');
        }
    } else {
        const URL_BASE = 'https://api.exemple.com/';
        const response = await fetch(`${URL_BASE}${endpoint}/${userId}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        return response.json();
    }
};

export default fetchUserData;
