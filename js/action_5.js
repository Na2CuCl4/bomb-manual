var data_5_with_vowel = '<tr>\
    <td colspan=\"2\"></td>\
    <td class=\"w3-red w3-text-white\">红色闪光</td>\
    <td class=\"w3-blue w3-text-white\">蓝色闪光</td>\
    <td class=\"w3-green w3-text-white\">绿色闪光</td>\
    <td class=\"w3-yellow w3-text-black\">黄色闪光</td>\
</tr>\
<tr>\
    <td rowspan=\"3\">要按的<br>按钮：</td>\
    <td>无失误</td>\
    <td>蓝</td>\
    <td>红</td>\
    <td>黄</td>\
    <td>绿</td>\
</tr>\
<tr>\
    <td>1 次失误</td>\
    <td>黄</td>\
    <td>绿</td>\
    <td>蓝</td>\
    <td>红</td>\
</tr>\
<tr>\
    <td>2 次失误</td>\
    <td>绿</td>\
    <td>红</td>\
    <td>黄</td>\
    <td>蓝</td>\
</tr>';

var data_5_without_vowel = '<tr>\
    <td colspan=\"2\"></td>\
    <td class=\"w3-red w3-text-white\">红色闪光</td>\
    <td class=\"w3-blue w3-text-white\">蓝色闪光</td>\
    <td class=\"w3-green w3-text-white\">绿色闪光</td>\
    <td class=\"w3-yellow w3-text-black\">黄色闪光</td>\
</tr>\
<tr>\
    <td rowspan=\"3\">要按的<br>按钮：</td>\
    <td>无失误</td>\
    <td>蓝</td>\
    <td>黄</td>\
    <td>绿</td>\
    <td>红</td>\
</tr>\
<tr>\
    <td>1 次失误</td>\
    <td>红</td>\
    <td>蓝</td>\
    <td>黄</td>\
    <td>绿</td>\
</tr>\
<tr>\
    <td>2 次失误</td>\
    <td>蓝</td>\
    <td>红</td>\
    <td>黄</td>\
    <td>绿</td>\
</tr>';

function actFunc5(value) {
    if (value == 0) {
        result_5.innerHTML = data_5_without_vowel;
    } else {
        result_5.innerHTML = data_5_with_vowel;
    }
}
