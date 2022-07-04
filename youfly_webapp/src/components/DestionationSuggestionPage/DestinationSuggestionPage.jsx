import React from 'react';
import Picture from '../../assets/Vancouver_Image.jpg'

export const DestinationMatching = () => {
    return (
        <div id="destination-matching">
            <h3>
                Congratulations!!! You've been matched to:
            </h3>
            <h2>
                Vancouver, Canada
            </h2>
            <img src={Picture}></img>
            <h4>
                Vancouver, a bustling west coast seaport in British Columbia, is among Canada’s densest, most ethnically diverse
                cities. A popular filming location, it’s surrounded by mountains, and also has thriving art, theatre and music scenes.
                Vancouver Art Gallery is known for its works by regional artists, while the Museum of Anthropology houses preeminent First Nations collections.
                Retrieved from Google
            </h4>
        </div>
    );
}