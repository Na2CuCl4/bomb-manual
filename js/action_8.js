// 摩斯电码
const morse_code = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--.."
};

// 词库和回复的频率
const data_8 = ['shell', 'halls', 'slick', 'trick', 'boxes', 'leaks', 'strobe', 'bistro', 'flick', 'bombs', 'break', 'brick', 'steak', 'sting', 'vector', 'beats'];
const freq_8 = [3.505, 3.515, 3.522, 3.532, 3.535, 3.542, 3.545, 3.552, 3.555, 3.565, 3.572, 3.575, 3.582, 3.592, 3.595, 3.600];

// 字体颜色
const morse_color = {
    G: "w3-text-black",
    R: "w3-text-red",
    B: "w3-text-red",
    Y: "w3-text-red"
};

// 两个字符串的最小编辑距离
function dist(str1, str2) {
    const m = str1.length;
    const n = str2.length;

    // Create a 2D array to store the distances
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    // Initialize the first row and column
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    // Calculate the distances
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1, // Deletion
                    dp[i][j - 1] + 1, // Insertion
                    dp[i - 1][j - 1] + 1 // Replacement
                );
            }
        }
    }

    // Return the minimum distance
    return dp[m][n];
}

// 根据两个字符串的最小编辑距离返回颜色
function distColor(str, ref) {
    let modifiedStr = "";
    let modifiedRef = "";
    let color = "";

    const m = str.length;
    const n = ref.length;

    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str[i - 1] === ref[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1, // Deletion
                    dp[i][j - 1] + 1, // Insertion
                    dp[i - 1][j - 1] + 1 // Replacement
                );
            }
        }
    }

    let i = m;
    let j = n;
    while (i > 0 && j > 0) {
        if (str[i - 1] === ref[j - 1]) {  // Match
            modifiedStr = str[i - 1] + modifiedStr;
            modifiedRef = ref[j - 1] + modifiedRef;
            color = "G" + color;
            i--;
            j--;
        } else if (dp[i][j] === dp[i - 1][j] + 1) {  // Deletion
            modifiedStr = str[i - 1] + modifiedStr;
            modifiedRef = " " + modifiedRef;
            color = "R" + color;
            i--;
        } else if (dp[i][j] === dp[i][j - 1] + 1) {  // Insertion
            modifiedStr = " " + modifiedStr;
            modifiedRef = ref[j - 1] + modifiedRef;
            color = "B" + color;
            j--;
        } else {  // Replacement
            modifiedStr = str[i - 1] + modifiedStr;
            modifiedRef = ref[j - 1] + modifiedRef;
            color = "Y" + color;
            i--;
            j--;
        }
    }

    while (i > 0) {  // Deletion
        modifiedStr = str[i - 1] + modifiedStr;
        modifiedRef = " " + modifiedRef;
        color = "R" + color;
        i--;
    }

    while (j > 0) {  // Insertion
        modifiedStr = " " + modifiedStr;
        modifiedRef = ref[j - 1] + modifiedRef;
        color = "Y" + color;
        j--;
    }

    return [modifiedStr, modifiedRef, color];
}

// 用 span 标签包装字符串
function wrapSpan(str) {
    return `<span>${str}</span>`;
}
function wrapSpanColor(str, color) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += `<span class="${morse_color[color[i]]}">${str[i]}</span>`;
    }
    return result;
}

// 将单词转换为 / 分割的摩斯电码
function toMorseCode(word) {
    let result = "";
    for (let i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            result += "/";
        } else {
            result += morse_code[word[i]] + "/";
        }
    }
    return result.substring(0, result.length - 1);
}

// 匹配
function actFunc8(input) {
    var result = [];
    for (var i = 1; i < 4; i++) {
        result.push(document.getElementById("result_8_" + i));
    }
    var distArrTotal = [];

    // 文本校验：不为空，且仅含 .-/ 字符
    var reg = /^[.\-\/]+$/;
    if (!reg.test(input)) {
        for (var i = 0; i < 3; i++) {
            result[i].innerHTML = `原文 ${i + 1}：输入错误<br>匹配 ${i + 1}：<br>译文 ${i + 1}：<br>回复 ${i + 1}：`;
        }
        return;
    }

    // 删除 input 末尾的 / 字符
    input = input.replace(/\/+$/, "");

    for (var i = 0; i < data_8.length; i++) {
        // 考虑模糊匹配和循环匹配，拼接字符串
        var ref = data_8[i] + " ";
        var inputLen = input.split("/").length;
        while (ref.length < input.length + data_8[i].length - 1) {
            ref += ref;
        }
        ref = ref.substring(0, ref.length - 1);

        // 遍历以 0 到 data_8[i].length - 1 为起点的所有子串
        var distArr = [];
        for (var j = 0; j < data_8[i].length; j++) {
            var temp = ref.substring(j, j + inputLen);
            tempMorse = toMorseCode(temp);
            distArr.push([dist(input, tempMorse), tempMorse, temp, i]);
        }

        // 对 distArr 按照第一个元素排序
        distArr.sort(function(a, b) {
            return a[0] - b[0];
        });

        // 将 distArr 的第一个加入 distArrTotal
        distArrTotal.push(distArr[0]);
    }

    // 对 distArrTotal 按照第一个元素排序
    distArrTotal.sort(function(a, b) {
        return a[0] - b[0];
    });

    // 输出结果：distArrTotal 的前三个元素
    for (var i = 0; i < 3; i++) {
        var temp = distArrTotal[i];
        var distCount = temp[0];
        var word = data_8[temp[3]];
        var freq = freq_8[temp[3]];

        var distRes = distColor(input, temp[1]);
        var inputMorse = distRes[0];
        var refMorse = distRes[1];
        var color = distRes[2];

        var ref = "";
        var arr = refMorse.split("/");
        for (var j = 0; j < arr.length; j++) {
            var spaceNum1 = parseInt((arr[j].length - 1) / 2);
            var spaceNum2 = arr[j].length - spaceNum1;
            ref += " ".repeat(spaceNum1) + temp[2][j] + " ".repeat(spaceNum2);
        }

        inputMorse = inputMorse.replace(/\s/g, "\xa0");
        refMorse = refMorse.replace(/\s/g, "\xa0");
        ref = ref.replace(/\s/g, "\xa0");

        result[i].innerHTML = `原文 ${i + 1}：${wrapSpanColor(inputMorse, color)}<br>匹配 ${i + 1}：${wrapSpan(refMorse)}<br>译文 ${i + 1}：${wrapSpan(ref)}<br>回复 ${i + 1}：${word}，总差别 ${distCount}，频率 ${freq} MHz`;
    }
}
