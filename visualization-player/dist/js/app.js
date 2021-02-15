Amplitude.init({
    bindings: {
        37: 'prev',
        39: 'next',
        32: 'play_pause'
    },
    debug: true,
    visualization: 'michaelbromley_visualization',
    songs: [
        {
            "name": "First Snow",
            "artist": "Emancipator",
            "album": "Soon It Will Be Cold Enough",
            "url": "../songs/FirstSnow-Emancipator.mp3",
            "cover_art_url": "../album-art/soon-it-will-be-cold-enough.jpg",
            "visualization": "michaelbromley_visualization"
        },
    ],
    visualizations: [
        {
            object: MichaelBromleyVisualization,
            params: {

            }
        }
    ]
});
  