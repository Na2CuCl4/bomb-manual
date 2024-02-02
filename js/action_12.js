// 数据
data_12 = ["about", "after", "again", "below", "could", "every", "first", 
    "found", "great", "house", "large", "learn", "never", "other",
    "place", "plant", "point", "right", "small", "sound", "spell",
    "still", "study", "their", "there", "these", "thing", "think",
    "three", "water", "where", "which", "world", "would", "write"];

// 按钮交互
function actFunc12() {
    // 每个单词是否可能出现
    var flag_12 = Array(data_12.length).fill(true);
    
    // 获取 5 个文本框的数据
    for (var i = 0; i < 5; i++) {
        var input_12 = document.getElementById('input_12_' + (i + 1)).value.toLowerCase();

        if (input_12 == '') {
            continue;
        }

        // 遍历单词表
        for (var j = 0; j < data_12.length; j++) {
            if (input_12.indexOf(data_12[j][i]) == -1) {
                flag_12[j] = false;
            }
        }
    }

    // 输出可能的单词
    var result_12 = document.getElementById('result_12');
    result_12.innerHTML = '结果：';
    for (var i = 0; i < data_12.length; i++) {
        if (flag_12[i]) {
            result_12.innerHTML += data_12[i] + ' ';
        }
    }
}

// 重置
function reset12() {
    for (var i = 0; i < 5; i++) {
        document.getElementById('input_12_' + (i + 1)).value = '';
    }
    document.getElementById('result_12').innerHTML = '结果：';
}
