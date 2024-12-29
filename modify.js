import promptSync from 'prompt-sync';
import fs from 'fs';

export function modify(cmd, mssv, cpa){
    const filename = './dataStudent.json';
    const data = fs.readFileSync(filename, 'utf8');
    const arrSV = JSON.parse(data);
    const prompt = promptSync();
    console.clear();

    let found = false;
    let arrlength = arrSV.length;
    if (cmd != "cpa"){
        console.log("Lệnh không hợp lệ");
        command = prompt("Nhấn phím Enter để tiếp tục");
        return;
    };
    for (let i = 0; i < arrlength; i++){
        if (Number(arrSV[i].mssv) == mssv){
            arrSV[i].cpa = cpa;
            if (cpa <= 0.5) arrSV[i].canhcao = 3
            else if (0.5 < cpa && cpa <= 1.0) arrSV[i].canhcao = 2
            else if (1.0 < cpa && cpa <= 1.5) arrSV[i].canhcao = 1
            else arrSV[i].canhcao = 0;
            found = true;
            break;
        }
    };
    if (found){
        console.log("Cập nhật điểm CPA thành công");
        fs.writeFileSync(filename, JSON.stringify(arrSV),'utf-8', (err) => console.log(err? err:'Cập nhật điểm CPA thành công'));
    }
    else{
        console.log(`Không tìm thấy sinh viên có MSSV: ${mssv}`);
    };
    let command = prompt("Nhấn phím Enter để tiếp tục");
    return;
};