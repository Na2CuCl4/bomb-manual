// 数据
var wire_list_2 = [];
var btn_color_2 = [
    'w3-gray',
    'w3-pale-red w3-hover-pale-red',
    'w3-pale-blue w3-hover-pale-blue',
    'w3-pale-yellow w3-hover-pale-yellow',
    'w3-gray w3-hover-gray',
    'w3-light-gray w3-hover-light-gray',
];
var btn_color_active_2 = [
    'w3-gray',
    'w3-red w3-hover-red w3-card-4',
    'w3-blue w3-hover-blue w3-card-4',
    'w3-yellow w3-hover-yellow w3-card-4',
    'w3-black w3-hover-black w3-card-4',
    'w3-white w3-hover-white w3-card-4',
];

// 按钮交互
function actFunc2(pos, color) {
    if (wire_list_2.length <= pos) {
        wire_list_2.push(color);
    }
    else {
        wire_list_2[pos] = color;
    }

    // 更新颜色
    for (i = 1; i < 6; i++) {
        var btn_element = document.getElementById("btn_2_" + pos + '_' + i);
        if (color == i) {
            btn_element.className = btn_element.className.replace(btn_color_2[i], btn_color_active_2[i]);
        } else {
            btn_element.className = btn_element.className.replace(btn_color_active_2[i], btn_color_2[i]);
        }
    }

    // 更新显示
    if (wire_list_2.length <= 5) {
        var wire = document.getElementById("p_2_" + wire_list_2.length);
        wire.style.visibility = "visible";
        
        for (i = 1; i < 6; i++) {
            var btn_element = document.getElementById("btn_2_" + wire_list_2.length + '_' + i);
            btn_element.className = btn_element.className.replace(btn_color_active_2[i], btn_color_2[i]);
        }
    }

    var result_2 = document.getElementById("result_2");
    result_2.innerHTML = "操作：";
}

// 重置
function reset2() {
    wire_list_2 = [];

    for (i = 1; i < 6; i++) {
        var btn_element = document.getElementById("btn_2_0_" + i);
        btn_element.className = btn_element.className.replace(btn_color_active_2[i], btn_color_2[i]);
    }

    for (i = 1; i < 6; i++) {
        var wire = document.getElementById("p_2_" + i);
        wire.style.visibility = "hidden";
    }

    var result_2 = document.getElementById("result_2");
    result_2.innerHTML = "操作：";
}

// 撤销
function undo2() {
    if (wire_list_2.length > 0) {
        wire_list_2.pop();
        
        for (i = 1; i < 6; i++) {
            var btn_element = document.getElementById("btn_2_" + wire_list_2.length + '_' + i);
            btn_element.className = btn_element.className.replace(btn_color_active_2[i], btn_color_2[i]);
        }

        if (wire_list_2.length < 5) {
            var wire = document.getElementById("p_2_" + (wire_list_2.length + 1));
            wire.style.visibility = "hidden";
        }
    }
}

// 确认
function confirm2() {
    var result_2 = document.getElementById("result_2");
    
    if (wire_list_2.length < 3) {
        result_2.innerHTML = "操作：至少需要三根导线";
        return;
    }
    
    if (wire_list_2.length < 6) {
        var wire = document.getElementById("p_2_" + wire_list_2.length);
        wire.style.visibility = "hidden";
    }
    
    if (wire_list_2.length == 3) {
        if (wire_list_2.indexOf(1) == -1) {
            result_2.innerHTML = "操作：剪断第 2 根线";
        } else if (wire_list_2[2] == 5) {
            result_2.innerHTML = "操作：剪断第 3 根线";
        } else if (wire_list_2.filter(x => x == 2).length > 1) {
            wire_list_reverse = wire_list_2.slice().reverse();
            result_2.innerHTML = "操作：剪断第 " + (3 - wire_list_reverse.indexOf(2)) + " 根线";
        } else {
            result_2.innerHTML = "操作：剪断第 3 根线";
        }
    }

    else if (wire_list_2.length == 4) {
        if (wire_list_2.filter(x => x == 1).length > 1 && general_data.serial_last == 1) {
            wire_list_reverse = wire_list_2.slice().reverse();
            result_2.innerHTML = "操作：剪断第 " + (4 - wire_list_reverse.indexOf(1)) + " 根线";
        } else if (wire_list_2.indexOf(1) == -1 && wire_list_2[3] == 3) {
            result_2.innerHTML = "操作：剪断第 1 根线";
        } else if (wire_list_2.filter(x => x == 2).length == 1) {
            result_2.innerHTML = "操作：剪断第 1 根线";
        } else if (wire_list_2.filter(x => x == 3).length > 1) {
            result_2.innerHTML = "操作：剪断第 4 根线";
        } else {
            result_2.innerHTML = "操作：剪断第 2 根线";
        }
    }

    else if (wire_list_2.length == 5) {
        if (wire_list_2[4] == 4 && general_data.serial_last == 1) {
            result_2.innerHTML = "操作：剪断第 4 根线";
        } else if (wire_list_2.filter(x => x == 1).length == 1 && wire_list_2.filter(x => x == 3).length > 1) {
            result_2.innerHTML = "操作：剪断第 1 根线";
        } else if (wire_list_2.indexOf(4) == -1) {
            result_2.innerHTML = "操作：剪断第 2 根线";
        } else {
            result_2.innerHTML = "操作：剪断第 1 根线";
        }
    }

    else {
        if (wire_list_2.indexOf(3) == -1 && general_data.serial_last == 1) {
            result_2.innerHTML = "操作：剪断第 3 根线";
        } else if (wire_list_2.filter(x => x == 3).length == 1 && wire_list_2.filter(x => x == 5).length > 1) {
            result_2.innerHTML = "操作：剪断第 4 根线";
        } else if (wire_list_2.indexOf(1) == -1) {
            result_2.innerHTML = "操作：剪断第 6 根线";
        } else {
            result_2.innerHTML = "操作：剪断第 4 根线";
        }
    }
}
