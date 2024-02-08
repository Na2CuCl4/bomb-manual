var ChineseNumbers = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];

var input_7 = [];
var output_7 = [];

function actFunc7(event, inputNumber){
    if (event.key === "Enter") {
        event.preventDefault(); // 阻止默认的回车提交行为

        var input = document.getElementById("input_7_" + inputNumber);
        var value = input.value;

        // 聚焦到下一个输入框
        var nextInputNumber = inputNumber + 1;
        if (nextInputNumber <= 5) {
            var nextInput = document.getElementById("input_7_" + nextInputNumber);
            nextInput.focus();
        }

        input_7.push(value);
        var nums = value.split('');
        var stage = input_7.length;
        
        var output_pos = document.getElementById('result_7_' + stage + '_1');
        var output_num = document.getElementById('result_7_' + stage + '_2');
        switch (stage) {
            case 1:
                switch (nums[0]) {
                    case '1':
                        output_7.push(2 + nums[2]);
                        output_pos.innerHTML = '第二个';
                        output_num.innerHTML = '数字' + nums[2];
                        break;
                    case '2':
                        output_7.push(2 + nums[2]);
                        output_pos.innerHTML = '第二个';
                        output_num.innerHTML = '数字' + nums[2];
                        break;
                    case '3':
                        output_7.push(3 + nums[3]);
                        output_pos.innerHTML = '第三个';
                        output_num.innerHTML = '数字' + nums[3];
                        break;
                    case '4':
                        output_7.push(4 + nums[4]);
                        output_pos.innerHTML = '第四个';
                        output_num.innerHTML = '数字' + nums[4];
                        break;
                    default:
                        break;
                }
                break;
            case 2:
                switch (nums[0]) {
                    case '1':
                        var pos = nums.lastIndexOf('4');
                        output_7.push(pos + '4');
                        output_pos.innerHTML = '第' + ChineseNumbers[pos] + '个';
                        output_num.innerHTML = '数字 4';
                        break;
                    case '2':
                    case '4':
                        var pos = output_7[0][0];
                        var num = nums[parseInt(pos)];
                        output_7.push(pos + num);
                        output_pos.innerHTML = '第' + ChineseNumbers[pos] + '个';
                        output_num.innerHTML = '数字 ' + num;
                        break;
                    case '3':
                        output_7.push(1 + nums[1]);
                        output_pos.innerHTML = '第一个';
                        output_num.innerHTML = '数字' + nums[1];
                        break;
                    default:
                        break;
                }
                break;
            case 3:
                switch (nums[0]) {
                    case '1':
                        var num = output_7[1][1];
                        var pos = nums.lastIndexOf(num);
                        output_7.push(pos + num);
                        output_pos.innerHTML = '第' + ChineseNumbers[pos] + '个';
                        output_num.innerHTML = '数字 ' + num;
                        break;
                    case '2':
                        var num = output_7[0][1];
                        var pos = nums.lastIndexOf(num);
                        output_7.push(pos + num);
                        output_pos.innerHTML = '第' + ChineseNumbers[pos] + '个';
                        output_num.innerHTML = '数字 ' + num;
                        break;
                    case '3':
                        var num = nums[3];
                        output_7.push(3 + num);
                        output_pos.innerHTML = '第三个';
                        output_num.innerHTML = '数字 ' + num;
                        break;
                    case '4':
                        var pos = nums.lastIndexOf('4');
                        output_7.push(pos + '4');
                        output_pos.innerHTML = '第' + ChineseNumbers[pos] + '个';
                        output_num.innerHTML = '数字 4';
                        break;
                    default:
                        break;
                }
                break;
            case 4:
                switch (nums[0]) {
                    case '1':
                        var pos = output_7[0][0];
                        var num = nums[parseInt(pos)];
                        output_7.push(pos + num);
                        output_pos.innerHTML = '第' + ChineseNumbers[pos] + '个';
                        output_num.innerHTML = '数字 ' + num;
                        break;
                    case '2':
                        output_7.push(1 + nums[1]);
                        output_pos.innerHTML = '第一个';
                        output_num.innerHTML = '数字 ' + nums[1];
                        break;
                    case '3':
                    case '4':
                        var pos = output_7[1][0];
                        var num = nums[parseInt(pos)];
                        output_7.push(pos + num);
                        output_pos.innerHTML = '第' + ChineseNumbers[pos] + '个';
                        output_num.innerHTML = '数字 ' + num;
                        break;
                    default:
                        break;
                }
                break;
            case 5:
                switch (nums[0]) {
                    case '1':
                        var num = output_7[0][1];
                        var pos = nums.lastIndexOf(num);
                        output_7.push(pos + num);
                        output_pos.innerHTML = '第' + ChineseNumbers[pos] + '个';
                        output_num.innerHTML = '数字 ' + num;
                        break;
                    case '2':
                        var num = output_7[1][1];
                        var pos = nums.lastIndexOf(num);
                        output_7.push(pos + num);
                        output_pos.innerHTML = '第' + ChineseNumbers[pos] + '个';
                        output_num.innerHTML='数字'+num;
                        break;
                    case '3':
                        var num = output_7[3][1];
                        var pos = nums.lastIndexOf(num);
                        output_7.push(pos + num);
                        output_pos.innerHTML = '第' + ChineseNumbers[pos] + '个';
                        output_num.innerHTML = '数字 ' + num;
                        break;
                    case '4':
                        var num = output_7[2][1];
                        var pos = nums.lastIndexOf(num);
                        output_7.push(pos + num);
                        output_pos.innerHTML = '第' + ChineseNumbers[pos] + '个';
                        output_num.innerHTML = '数字 ' + num;
                        break;
                    default:
                        break;
                }
            default:
                break;
        }

    }
}

// 重置
function reset7() {
    input_7 = [];
    output_7 = [];

    for (let stage = 1; stage < 6; stage++) {
        var output_pos = document.getElementById('result_7_' + stage + '_1');
        var output_num = document.getElementById('result_7_' + stage + '_2');
        var input = document.getElementById('input_7_' + stage);
        output_pos.innerHTML = '';
        output_num.innerHTML = '';
        input.value = '';
    }
}

//撤销
function undo7() {
    stage = input_7.length;
    input_7.pop();
    output_7.pop();

    var output_pos = document.getElementById('result_7_' + stage + '_1');
    var output_num = document.getElementById('result_7_' + stage + '_2');
    var input = document.getElementById('input_7_' + stage);
    output_pos.innerHTML = '';
    output_num.innerHTML = '';
    input.value = '';

    if (stage >= 2) {
        var lastInput = document.getElementById("input_7_" + stage);
        lastInput.focus();
    }
    
}