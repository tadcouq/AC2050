import promptSync from 'prompt-sync';
import fs from 'fs';

export function list(){
    const filename = './dataStudent.json';
    const data = fs.readFileSync(filename, 'utf8');
    const arrSV = JSON.parse(data);
    const prompt = promptSync();

    console.clear();
    console.log("Danh sách sinh viên: ");
    let arrlength = arrSV.length;
    for (let i = 0; i < arrlength; i++){
        console.log(`ID: ${arrSV[i].mssv} - Tên: ${arrSV[i].name}`);
    };

    let command = prompt("Nhấn phím Enter để tiếp tục");
    return;
};