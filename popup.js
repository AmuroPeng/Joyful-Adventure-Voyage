$(function(){
    // 从存储中获取计数器值
    chrome.storage.local.get('count', function(data) {
        var count = data.count || 0;
        $('#input').val(count);
    });

    // 在存储中保存计数器值
    $('#btn').click(function() {
        chrome.storage.local.get('count', function(data) {
            var count = data.count || 0;
            chrome.storage.local.set({count: count + 1}, function() {
                $('#input').val(count + 1);
            });
        });
    });
});
