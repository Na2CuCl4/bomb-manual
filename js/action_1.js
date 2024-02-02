// 数据
var general_data = {
    serial_last: {  // 序列号末位：0 为偶数，1 为奇数
        value: 0,
        btn_list: ['btn_serial_last_0', 'btn_serial_last_1'],
        btn_color: 'w3-green w3-hover-light-green',
    },
    serial_vowel: {  // 序列号含元音：0 为不含，1 为含
        value: 0,
        btn_list: ['btn_serial_vowel_0', 'btn_serial_vowel_1'],
        btn_color: 'w3-blue w3-hover-light-blue',
    },
    battery_num: {  // 电池数量：0 为 0 个，1 为 1 个，2 为 2 个以上
        value: 0,
        btn_list: ['btn_battery_num_0', 'btn_battery_num_1', 'btn_battery_num_2'],
        btn_color: 'w3-green w3-hover-light-green',
    },
    car_light: {  // CAR 指示灯：0 为不亮，1 为亮
        value: 0,
        btn_list: ['btn_car_light_0', 'btn_car_light_1'],
        btn_color: 'w3-blue w3-hover-light-blue',
    },
    frk_light: {  // FRK 指示灯：0 为不亮，1 为亮
        value: 0,
        btn_list: ['btn_frk_light_0', 'btn_frk_light_1'],
        btn_color: 'w3-green w3-hover-light-green',
    },
    parallel_port: {  // Parallel 端口：0 为无，1 为有
        value: 0,
        btn_list: ['btn_parallel_port_0', 'btn_parallel_port_1'],
        btn_color: 'w3-blue w3-hover-light-blue',
    },
};

// 按钮交互
function actFunc(btn, value) {
    data = general_data[btn];
    data.value = value;

    for (var i = 0; i < data.btn_list.length; i++) {
        btn_element = document.getElementById(data.btn_list[i]);
        if (i == value) {
            btn_element.className = btn_element.className.replace('w3-gray', data.btn_color);
        } else {
            btn_element.className = btn_element.className.replace(data.btn_color, 'w3-gray');
        }
    }
}

// 重置
function reset1() {
    for (var key in general_data) {
        general_data[key].value = 0;
        for (var i = 0; i < general_data[key].btn_list.length; i++) {
            btn_element = document.getElementById(general_data[key].btn_list[i]);
            if (i == 0) {
                btn_element.className = btn_element.className.replace('w3-gray', general_data[key].btn_color);
            } else {
                btn_element.className = btn_element.className.replace(general_data[key].btn_color, 'w3-gray');
            }
        }
    }
}
