import promptSync from 'prompt-sync';
import fs from 'fs';
export function count(a,b){
    const filename = './dataStudent.json';
    const data = fs.readFileSync(filename, 'utf8');
    const arrSV = JSON.parse(data);
    const prompt = promptSync();    
    console.clear();
    let count = 0;
    for (let i = 0; i < arrSV.length; i++){
        if (arrSV[i].cpa >= a && arrSV[i].cpa <= b){
            count++;
        }
    }
    console.log(`Số sinh viên có CPA trong đoạn [${a},${b}]: ${count}`);
    let command = prompt("Nhấn phím Enter để tiếp tục");
}