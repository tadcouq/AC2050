import promptSync from 'prompt-sync';
import fs from 'fs';

export function findBottom(n){
    const filename = './dataStudent.json';
    const data = fs.readFileSync(filename, 'utf8');
    const arrSV = JSON.parse(data);
    const prompt = promptSync();

    arrSV.sort((a, b) => a.cpa - b.cpa);
    
    console.clear();
    console.log(`Danh sách ${n} sinh viên có CPA thấp nhất: `);
    for (let i = 0; i < n; i++){
        console.log(`MSSV: ${arrSV[i].mssv} - Tên: "${arrSV[i].name}" - CPA: ${arrSV[i].cpa} - Cảnh cáo: ${arrSV[i].canhcao}`);
    };
    let command = prompt("Nhấn phím Enter để tiếp tục");
};