// 数据
var data_4 = [
    [0, 1, 2, 3, 4, 5, 6],
    [7, 0, 6, 8, 9, 5, 10],
    [11, 12, 8, 13, 14, 2, 9],
    [15, 16, 17, 4, 13, 10, 18],
    [19, 18, 17, 20, 16, 21, 22],
    [15, 7, 23, 24, 19, 25, 26],
];
var click_color_4 = [
    'w3-red w3-hover-pale-red', 'w3-yellow w3-hover-pale-yellow', 'w3-green w3-hover-pale-green', 'w3-blue w3-hover-pale-blue'
];
var click_list_4 = [];  // 点击列表

// 按钮交互
function actFunc4(btn) {
    if (click_list_4.indexOf(btn) != -1) {
        return;
    }

    var btn_element = document.getElementById('btn_keyboard_' + btn);
    btn_element.className = btn_element.className.replace('w3-white', click_color_4[click_list_4.length]);
    click_list_4.push(btn);

    // 已经点击 4 个按钮
    if (click_list_4.length == 4) {
        var index_list = [];

        // 在 data_4 中寻找对应的值
        for (var i = 0; i < data_4.length; i++) {
            index_list = [];
            for (var j = 0; j < 4; j++) {
                var btn = click_list_4[j];
                var index = data_4[i].indexOf(btn);
                if (index == -1) {
                    break;
                }
                index_list.push(index);
            }

            // 如果找到
            if (index_list.length == 4) {
                // 对 index_list 排序
                var index_list_sort = index_list.slice().sort();
                var result_list = [];

                // 在 txt_keyboard 中显示索引
                for (var j = 0; j < click_list_4.length; j++) {
                    var txt_element = document.getElementById('txt_keyboard_' + click_list_4[j]);
                    result_list.push(index_list_sort.indexOf(index_list[j]) + 1);
                    txt_element.innerHTML = index_list_sort.indexOf(index_list[j]) + 1;
                }

                // 在 result_4 中显示按键顺序
                var result_4 = document.getElementById('result_4');
                result_4.innerHTML = '按键顺序：' + result_list.join(' ');

                break;
            }
        }

        // 如果没找到
        if (index_list.length != 4) {
            var result_4 = document.getElementById('result_4');
            result_4.innerHTML = '按键顺序：错误';
        }
    }
}

// 重置
function reset4() {
    for (var i = 0; i < click_list_4.length; i++) {
        var btn_element = document.getElementById('btn_keyboard_' + click_list_4[i]);
        for (var j = 0; j < click_color_4.length; j++) {
            btn_element.className = btn_element.className.replace(click_color_4[j], 'w3-white');
        }

        var txt_element = document.getElementById('txt_keyboard_' + click_list_4[i]);
        txt_element.innerHTML = '';
    }
    click_list_4 = [];

    var result_4 = document.getElementById('result_4');
    result_4.innerHTML = '按键顺序：';
}

// 撤销
function undo4() {
    if (click_list_4.length > 0) {
        for (var i = 0; i < click_list_4.length; i++) {
            var txt_element = document.getElementById('txt_keyboard_' + click_list_4[i]);
            txt_element.innerHTML = '';
        } 

        var btn = click_list_4.pop();
        var btn_element = document.getElementById('btn_keyboard_' + btn);
        for (var j = 0; j < click_color_4.length; j++) {
            btn_element.className = btn_element.className.replace(click_color_4[j], 'w3-white');
        }

        var result_4 = document.getElementById('result_4');
        result_4.innerHTML = '按键顺序：';
    }
}
