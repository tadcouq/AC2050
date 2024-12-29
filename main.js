import { list } from './list.js';
import { find } from './find.js';
import { findTop } from './findTop.js';
import { findBottom } from './findBottom.js';
import { findWarning } from './findWarning.js';
import { count } from './count.js';
import { modify } from './modify.js';
import { suspension } from './suspension.js';
import { countSuspendedStudents } from './async_suspension.js';
import promptSync from 'prompt-sync';
const prompt = promptSync();
let exit = false;

function error(){
    // console.clear();
    console.log("Lệnh không hợp lệ");
    let command = prompt("Nhấn phím Enter để tiếp tục");
    return;
};

while (!exit){
    console.clear();
    console.log("Quản lý kết quả học tập của sinh viên ĐHBKHN");
    console.log("Các lệnh có thể dùng:");
    console.log("1.list: in ra danh sách sinh viên");
    console.log("2.find <mssv>: tìm sinh viên với mã số sinh viên");
    console.log("3.modify cpa <mssv> <cpa>: cập nhật điểm CPA của sinh viên");
    console.log("4.findtop n: tìm n sinh viên có CPA cao nhất");
    console.log("5.findbottom n: tìm n sinh viên có CPA thấp nhất");
    console.log("6.findcanhcao: tim các sinh viên đang bị cảnh cáo, kèm mức cảnh cáo, 1, 2, 3")
    console.log("7.cnt a b: đếm số sinh viên có điểm cpa nằm trong đoạn [a, b]");
    console.log("8.suspension: Tính số lượng sinh viên phải đình chỉ học. Điều kiện đình chỉ học là mức cảnh cáo dựa trên cpa và thời gian học tối đa cho phép (> 5 năm bị đình chỉ) (được tính dựa trên năm vào trường (dựa trên mssv) và thời điểm hiện tại mm/yyyy)")
    console.log("9.async_suspension: vẫn là suspension nhưng sử dụng async/await, chỉ trả data sau khi thoát chương trình, xịn chưa =))))");
    console.log("0.exit: thoát chương trình, có thể nhập 0 là được");
    let command = prompt("Nhập lệnh theo cú pháp như trên: ");
    
    let commandArr = command.split(" ");
    if (commandArr[0] === "exit" || commandArr[0] === "0") {
        exit = true;
        console.clear();
        break;
    } else {
        switch (commandArr[0]){
            case "list":
                    list();
                    break;
            case "find":
                    find(commandArr[1]);
                    break;
            case "modify":
                    modify(commandArr[1], commandArr[2], commandArr[3]);
                    break;
            case "findtop":
                    findTop(commandArr[1]);
                    break;
            case "findbottom":
                    findBottom(commandArr[1]);
                    break;
            case "findcanhcao":
                    findWarning();
                    break;
            case "cnt":
                    count(commandArr[1], commandArr[2]);
                    break;      
            case "suspension":
                    const filename = './dataStudent.json';
                    const currentMonthYear = '05/2025';
                    suspension(filename, currentMonthYear);
                    break;
            case "async_suspension":
                let command = prompt("Đã xong, sau khi đóng chương trình để trả kết quả, nhấn phím Enter để tiếp tục...");
                (async () => {
                        const filename = './dataStudent.json'; // Đường dẫn file dữ liệu
                        const currentMonthYear = '05/2025';
    
                        try {
                            const suspendedCount = await countSuspendedStudents(filename, currentMonthYear);
    
                            console.log(`Số lượng sinh viên bị đình chỉ: ${suspendedCount}`);
                        } catch (err) {
                            console.error("Đã xảy ra lỗi:", err.message);
                        }
                        prompt("Nhấn phím Enter để tiếp tục...");
                    })();
                    break;
            default:
                error();
                break;
        };
    };
};