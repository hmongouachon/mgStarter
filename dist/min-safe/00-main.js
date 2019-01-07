/////////////////////////////

// var config 

/////////////////////////////

// utils get base url
var getUrl = window.location;
var baseUrl;
if (window.location.href.indexOf("localhost") > -1) {
    baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
} else {
    baseUrl = getUrl.protocol + "//" + getUrl.host; // online
}

// dom variables
var last_segment_url = window.location.pathname.split('/').pop();