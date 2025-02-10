import axios from "axios";

export default async function getAllTracks(token) {
    const baseUrl = 'https://api.spotify.com/v1/search';
    const currentYear = new Date().getFullYear();
    try {
        const response = await axios.get(baseUrl, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: `year:1970-${currentYear}`,
                type: 'track',
                limit: 50,
                market: 'FR'
            }
        });

        return response.data.tracks.items.map(track => ({
            name: track.name,
            artists: track.artists.map(artist => artist.name).join('; '),
            album: track.album.name,
            link: track.external_urls.spotify,
            preview_url: track.preview_url,
            image: track.album.images[0]?.url,
            release_date: track.album.release_date.split('-')[0],
            popularity: track.popularity
        }));
    } catch (error) {
        console.error('Erreur dans getAllTracks :', error.message);
        throw new Error('Impossible de récupérer les tracks.');
    }
}