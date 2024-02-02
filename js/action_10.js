// 数据
var data_10 = [
    [],
    ['C', 'B', 'A', 'AC', 'B', 'AC', 'ABC', 'AB', 'B'],
    ['B', 'AC', 'B', 'A', 'B', 'BC', 'C', 'AC', 'A'],
    ['ABC', 'AC', 'B', 'AC', 'B', 'BC', 'AB', 'C', 'C'],
];
var list_10 = [];
var count_10 = [0, 0, 0, 0];
var color_10 = ['空', '红', '蓝', '黑'];

// 按钮交互
function actFunc10(btn) {
    list_10.push(btn);
    count_10[btn]++;

    var prev_10 = document.getElementById('prev_10');
    var next_10 = document.getElementById('next_10');
    var result_10 = document.getElementById('result_10');

    next_10.innerHTML = '第 ' + (list_10.length + 1) + ' 根线的颜色是：';
    if (btn != 0) {
        prev_10.innerHTML = '第 ' + list_10.length + ' 根线的颜色是：' + color_10[btn];
        result_10.innerHTML = '操作：剪断 ' + data_10[btn][count_10[btn] - 1];
    } else {
        prev_10.innerHTML = '第 ' + list_10.length + ' 根线为空';
        result_10.innerHTML = '操作：';
    }
}

// 重置
function reset10() {
    list_10 = [];
    count_10 = [0, 0, 0, 0];

    var prev_10 = document.getElementById('prev_10');
    var next_10 = document.getElementById('next_10');
    var result_10 = document.getElementById('result_10');

    prev_10.innerHTML = '第 0 根线为空';
    next_10.innerHTML = '第 1 根线的颜色是：';
    result_10.innerHTML = '操作：';
}

// 撤销
function undo10() {
    if (list_10.length == 0) {
        return;
    }

    count_10[list_10.pop()]--;
    var last = list_10[list_10.length - 1];

    var prev_10 = document.getElementById('prev_10');
    var next_10 = document.getElementById('next_10');
    var result_10 = document.getElementById('result_10');

    next_10.innerHTML = '第 ' + (list_10.length + 1) + ' 根线的颜色是：';
    if (last == 0) {
        prev_10.innerHTML = '第 0 根线为空';
        result_10.innerHTML = '操作：';
    } else {
        prev_10.innerHTML = '第 ' + list_10.length + ' 根线的颜色是：' + color_10[last];
        result_10.innerHTML = '操作：剪断 ' + data_10[last][count_10[last] - 1];
    }
}
