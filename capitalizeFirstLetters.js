
// WRITE THE ACTUAL FUNCTION HERE
function capitalizeFirstLetters(str) {
        let words = str.split(' ')
        let outputStr = '';
    if(str.length>0) {
    for(let i = 0; i < words.length; i++){

        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        outputStr = words.join(' ');
    }}
    return outputStr;
}
module.exports= capitalizeFirstLetters;