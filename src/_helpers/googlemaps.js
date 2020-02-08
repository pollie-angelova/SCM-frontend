let googleMapsPromise = null;

export function getGoogleMaps() {

    if (window.google) {
        return Promise.resolve(window.google);
    }

    // If we haven't already defined the promise, define it
    if (!googleMapsPromise) {
        googleMapsPromise = new Promise((resolve) => {
            // Add a global handler for when the API finishes loading
            window.resolveGoogleMapsPromise = () => {
                // Resolve the promise
                resolve(window.google);

                // Tidy up
                delete window.resolveGoogleMapsPromise;
            };

            // Load the Google Maps API
            const script = document.createElement("script");
            const API = 'AIzaSyCXMiOHzz13PmiVlqXo34pYsi6hBrT98vY';
            script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=resolveGoogleMapsPromise`;
            script.async = true;
            document.body.appendChild(script);
        });
    }

    // Return a promise for the Google Maps API
    return googleMapsPromise;
}
