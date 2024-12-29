import promptSync from 'prompt-sync';
import fs from 'fs';
export function find(mssv){
    const filename = './dataStudent.json';
    const prompt = promptSync();
    const data = fs.readFileSync(filename, 'utf8');
    const arrSV = JSON.parse(data);
    
    console.clear();
    const arrlength = arrSV.length;
    let found = false;
    for (let i = 0; i < arrlength; i++){
        if (parseInt(arrSV[i].mssv) == parseInt(mssv)){
            console.log(`MSSV: ${arrSV[i].mssv} - Tên: "${arrSV[i].name}" - CPA: ${arrSV[i].cpa} - Cảnh cáo: ${arrSV[i].canhcao}`);
            found = true;
        }   
    };
    if (found == false){
        console.log("undefined");
    }
    let command = prompt("Nhấn phím Enter để tiếp tục");
    return;
};