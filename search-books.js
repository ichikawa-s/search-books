
/**
 * readyイベント関数
 * jQuery に実装されているイベント処理関数です。
 * HTMLドキュメントが全てロードされ、DOMにアクセスができる準備が完了した後に処理されます。
 * すなわち、 全てのロードが完了した後 に実行されます。
 */
$(function() {

    // 検索ボタン押下時
    $("#searchBtn").click(function() {
        // 検索ワード
        var keyWord = $('#keyWordText').val();

        // Google APIを使って検索ワードから本を検索して表示する
        searchBooks(keyWord);
    });

});

/**
 * Google Books APIを使って検索ワードから本を検索して表示する
 */
function searchBooks(keyWord) {

    var GBAPI_URL_CONST = 'https://www.googleapis.com/books/v1/volumes?q='

    var queryUrl = GBAPI_URL_CONST + keyWord;

    $.get( queryUrl, function( data ) {

        // 件数 data["totalItems"]
        $("#result").text( "検索結果 : " + data["totalItems"] + "件ヒット");

        // 取得したitemsの数だけ処理
        $.each( data["items"], function(i, item) {
            // リスト表示
            $("#items").append('<li>' + item["volumeInfo"]["title"] + '</li>');
        });

    });

}
