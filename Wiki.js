$(document).ready(function() {
    var WikiData = "";
    var ThumbPic = "";
    var SearchValue = "";
    $.support.cors = true;
    $("#WikiMe").on("click", function() {
        SearchValue = $("#SearchMe").val();

        console.log(SearchValue);


        var GETWIKISEARCH = 'https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&generator=search&origin=*&gsrsearch=' + SearchValue;

        $.ajax({
            url: GETWIKISEARCH,
            type: "GET",
            success: function(wiki) {



                console.log(wiki);
                var temp = wiki.query.pages;
                console.log(temp);
                $(".SearchResult").empty();
                for (var i in temp) {
                    var SearchTitle = (temp[i].title);
                    var ExtractInfo = (temp[i].extract);
                    console.log(ExtractInfo);

                    ThumbPic = (temp[i].thumbnail);
                    for (var j in ThumbPic) {
                        var ThumbSource = ThumbPic.source;
                        console.log(ThumbSource);
                    }

                    $(".SearchResult").append("<a href='https://en.wikipedia.org/wiki/" + SearchTitle + "'target=_blank' style='width: 750px;height: auto;auto;margin: 10px 0px 5px 31%;'>" + "<h4>*" + SearchTitle + "*</h4>" + "<p>" + ExtractInfo + "</p><img  src=" + ThumbSource + "></img></a>");

                }

            },
            error: function(wiki) {
                alert("Error retrieving search results, please refresh the page");
            }

        });



    })
})