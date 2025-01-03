import promptSync from 'prompt-sync';
import fs from 'fs';

export function findBottom(n){
    const filename = './dataStudent.json';
    const data = fs.readFileSync(filename, 'utf8');
    const arrSV = JSON.parse(data);
    const prompt = promptSync();

    const quickSort = (arr, key) => {
        if (arr.length <= 1) return arr;

        const pivot = arr[Math.floor(arr.length / 2)][key];
        const left = [];
        const right = [];
        const equal = [];

        for (const item of arr) {
            if (item[key] < pivot) {
                left.push(item);
            } else if (item[key] > pivot) {
                right.push(item);
            } else {
                equal.push(item);
            }
        }

        return [...quickSort(left, key), ...equal, ...quickSort(right, key)];
    };

    if (n > arrSV.length) {
        n = arrSV.length
    };

    const sortedArr = quickSort(arrSV, 'cpa');
    
    console.clear();
    console.log(`Danh sách ${n} sinh viên có CPA thấp nhất: `);
    for (let i = 0; i < n; i++){
        console.log(`MSSV: ${sortedArr[i].mssv} - Tên: "${sortedArr[i].name}" - CPA: ${sortedArr[i].cpa} - Cảnh cáo: ${sortedArr[i].canhcao}`);
    };
    let command = prompt("Nhấn phím Enter để tiếp tục");
};