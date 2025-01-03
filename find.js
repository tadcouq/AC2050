import promptSync from 'prompt-sync';
import fs from 'fs';

export function find(mssv) {
    const filename = './dataStudent.json';
    const prompt = promptSync();
    const data = fs.readFileSync(filename, 'utf8');
    const arrSV = JSON.parse(data);

    console.clear();
    
    const jumpSearch = (arr, key) => {
        const n = arr.length;
        const step = Math.floor(Math.sqrt(n));
        let prev = 0;
        
        while (parseInt(arr[Math.min(step, n) - 1].mssv) < key) {
            prev = step;
            step += Math.floor(Math.sqrt(n));
            if (prev >= n) return -1;
        };

        while (parseInt(arr[prev].mssv) < key) {
            prev++;
            if (prev == Math.min(step, n)) return -1;
        };

        if (parseInt(arr[prev].mssv) == key) return prev;
        return -1;
    };

    const index = jumpSearch(arrSV, parseInt(mssv));
    if (index != -1) {
        console.log(`MSSV: ${arrSV[index].mssv} - Tên: "${arrSV[index].name}" - CPA: ${arrSV[index].cpa} - Cảnh cáo: ${arrSV[index].canhcao}`);
    } 
    else {
        console.log("undefined");
    };

    let command = prompt("Nhấn phím Enter để tiếp tục");
    return;
};

// Độ phức tạp: O(√n)