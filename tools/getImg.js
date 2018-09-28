/**
 * Returns the url of the first img found with the given search term
 * @param {string} searchTerm with which to do the search
 */
async function getImgSrc(searchTerm) {
    let result;
    try {
        result = await $.ajax({
            type: "GET",
            url:  `http://photopin.com/free-photos/${searchTerm}`,
        });
    }
    catch(err) {
        console.error("Error processing the search request.");
        console.error("err");
        return null;
    }

    let doc = document.createElement('html');
    doc.innerHTML = result;

    let url = doc.querySelector('.image-link img').getAttribute('src');

    return url;
}