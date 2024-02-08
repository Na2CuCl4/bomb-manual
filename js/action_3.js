var data_3_color_list_initial = [
    "w3-circle w3-pale-red w3-hover-pale-red",
    "w3-circle w3-pale-blue w3-hover-pale-blue",
    "w3-circle w3-pale-yellow w3-hover-pale-yellow",
    "w3-circle w3-light-gray w3-hover-light-gray"
];
var data_3_color_list_active = [
    "w3-circle w3-red w3-hover-red",
    "w3-circle w3-blue w3-hover-blue",
    "w3-circle w3-yellow w3-hover-yellow",
    "w3-circle w3-white w3-hover-white"
];
var data_3_button_color = 0;
var data_3_button_text = 0;

var data_3_release = document.createElement('ul');
var data_3_li1 = document.createElement('li');
var data_3_li2 = document.createElement('li');
var data_3_li3 = document.createElement('li');

data_3_li1.textContent = '蓝色光条： 在计时器任意数位显示4时松开。';
data_3_li2.textContent = '黄色光条： 在计时器任意数位显示5时松开。';
data_3_li3.textContent = '其它颜色光条： 在计时器任意数位显示1时松开。';
data_3_release.appendChild(data_3_li1);
data_3_release.appendChild(data_3_li2);
data_3_release.appendChild(data_3_li3);

// 按钮交互
function actFunc3_1(value) {
    data_3_button_color = value;

    for (var i = 1; i < 5; i++) {
        var btn_element = document.getElementById("btn_3_1_" + i);
        if (i == value) {
            btn_element.className = data_3_color_list_active[value-1];
        }
        btn_element.disabled = true;
    }
    

    if (data_3_button_color != 0 && data_3_button_text != 0) {
        if (data_3_button_color == 2 && data_3_button_text == 1) {  //蓝色中止
            result_3.innerHTML = '操作：按住按钮，然后根据光条颜色松开';
            result_3.appendChild(data_3_release);
        }
        else if (general_data.battery_num.value > 0 && data_3_button_text == 2) {  //不止一个电池，引爆
            result_3.innerHTML = '操作：按下按钮并立即松开。';
        }
        else if (data_3_button_color == 3 && general_data.car_light == 1) {
            result_3.innerHTML = '操作：按住按钮，然后根据光条颜色松开';
            result_3.appendChild(data_3_release);
        }
        else if (general_data.battery_num.value == 2 && general_data.frk_light == 1) {
            result_3.innerHTML = '操作：按下按钮并立即松开。';
        }
        else if (data_3_button_color == 3) {
            result_3.innerHTML = '操作：按住按钮，然后根据光条颜色松开';
            result_3.appendChild(data_3_release);
        }
        else if (data_3_button_color == 1 && data_3_button_text == 3) {
            result_3.innerHTML = '操作：按下按钮并立即松开。';
        }
        else {
            result_3.innerHTML = '操作：按住按钮，然后根据光条颜色松开';
            result_3.appendChild(data_3_release);
        }
    }
}

function actFunc3_2(value) {
    data_3_button_text = value;

    for (var i = 1; i < 4; i++) {
        var btn_element = document.getElementById("btn_3_2_" + i);
        if (i == value) {
            btn_element.className = "w3-button w3-green w3-hover-green";
        } else {
            btn_element.disabled = true;
        }
    }

    if (data_3_button_color != 0 && data_3_button_text != 0) {
        if (data_3_button_color == 2 && data_3_button_text == 1) {  //蓝色中止
            result_3.innerHTML = '操作：按住按钮，然后根据光条颜色松开';
            result_3.appendChild(data_3_release);
        }
        else if (general_data.battery_num.value > 0 && data_3_button_text == 2) {  //不止一个电池，引爆
            result_3.innerHTML = '操作：按下按钮并立即松开。';
        }
        else if (data_3_button_color == 3 && general_data.car_light == 1) {
            result_3.innerHTML = '操作：按住按钮，然后根据光条颜色松开';
            result_3.appendChild(data_3_release);
        }
        else if (general_data.battery_num.value == 2 && general_data.frk_light == 1) {
            result_3.innerHTML = '操作：按下按钮并立即松开。';
        }
        else if (data_3_button_color == 3) {
            result_3.innerHTML = '操作：按住按钮，然后根据光条颜色松开';
            result_3.appendChild(data_3_release);
        }
        else if (data_3_button_color == 1 && data_3_button_text == 3) {
            result_3.innerHTML = '操作：按下按钮并立即松开。';
        }
        else {
            result_3.innerHTML = '操作：按住按钮，然后根据光条颜色松开';
            result_3.appendChild(data_3_release);
        }
    }
}

// 重置
function reset3() {
    data_3_button_color = 0;
    data_3_button_text = 0;
    for (var i = 1; i < 5; i++) {
        var btn_element = document.getElementById("btn_3_1_" + i);
        btn_element.disabled = false;
        btn_element.className = data_3_color_list_initial[i - 1];
    }
    for (var i = 1; i < 4; i++) {
        var btn_element = document.getElementById("btn_3_2_" + i);
        btn_element.disabled = false;
        btn_element.className = "w3-button w3-gray";
    }
    result_3.innerHTML = '操作：';
}
