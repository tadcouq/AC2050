import promptSync from 'prompt-sync';
import fs from 'fs';

export function findWarning(){
    const filename = './dataStudent.json';
    const data = fs.readFileSync(filename, 'utf8');
    const arrSV = JSON.parse(data);
    const prompt = promptSync();

    console.clear();
    console.log("Danh sách sinh viên có cảnh cáo: ");
    let arrlength = arrSV.length;
    for (let i = 0; i < arrlength; i++){
        if (arrSV[i].canhcao != 0){
            console.log(`MSSV: ${arrSV[i].mssv} - Tên: ${arrSV[i].name} - Cảnh cáo: ${arrSV[i].canhcao}`);
        }
    };
    let command = prompt("Nhấn phím Enter để tiếp tục");
    return;
};