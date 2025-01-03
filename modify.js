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

/* Độ phức tạp của thuật toán
- Độ phức tạp của thuật toán là O(n) với n là số lượng sinh viên trong file dataStudent.json

- Vòng lặp for chạy qua từng phần tử trong mảng arrSV có độ dài arrlength (o(n))
- Trong trường hợp tìm thấy sinh viên có mã số sinh viên mssv thì cập nhật điểm CPA và cảnh cáo của sinh viên đó (O(1))
- Nếu không tìm thấy sinh viên có mã số sinh viên mssv thì thông báo không tìm thấy (O(1))
- Ghi lại dữ liệu mới vào file dataStudent.json (O(1))
- Tổng cộng độ phức tạp của thuật toán là O(n)
*/