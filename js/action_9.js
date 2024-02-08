// 数据
var data_9 = 'CDCBSPDPSBCBSSPD';

// 按钮交互
function actFunc9(data) {    
    // 获取数据
    var action = -1;  // 0 表示不剪断，1 表示剪断
    var result_9 = document.getElementById('result_9');

    if (data.length == 4) {
        // 文本检查：是否只含有 0 和 1
        var reg = /^[01]+$/;
        if (!reg.test(data)) {
            result_9.innerHTML = '操作：输入错误';
            return;
        }

        data = parseInt(data, 2);
        switch (data_9[data]) {
            case 'C':
                action = 1;
                break;
            case 'D':
                action = 0;
                break;
            case 'B':
                action = general_data.battery_num.value == 2 ? 1 : 0;
                break;
            case 'S':
                action = general_data.serial_last.value == 0 ? 1 : 0;
                break;
            case 'P':
                action = general_data.parallel_port.value == 1 ? 1 : 0;
                break;
        }
        result_9.innerHTML = action == 1 ? '操作：剪断' : '操作：不剪断';
    }
    else {
        result_9.innerHTML = '操作：';
    }
}
