const getHexCode = require('./src/getHexCode.js');

// Main
main("dark blue and spongebob");

// Methods
async function main(colorDescription) {

    /**
     * Extract a hex code color scheme from the color description.
     * If the color description exists in the colorMap.json file, we 
     * will return the hex code from the colorMap.json file. Otherwise,
     * we will send a message to the OpenAI API to derive a hex code color scheme
     * and then save the new color scheme result to the color map to save tokens.
     * @type {string[]}
     * @description The hex code color scheme derived from the color description
     * @example ['#009933', '#FF0000, '#FFFFFF', '#FFD700']
     */
    const hexCodeArray = await getHexCode(colorDescription);

    console.log(hexCodeArray);

    // Your code here
    
}