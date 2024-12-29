import fs from 'fs';
import promptSync from 'prompt-sync';

export function suspension(filename, currentMonthYear) {
    const data = fs.readFileSync(filename, 'utf8');
    const students = JSON.parse(data);
    const prompt = promptSync();

    const [currentMonth, currentYear] = currentMonthYear.split('/').map(Number);

    const suspendedStudents = students.filter(student => {
        const yearEnrolled = Math.floor(student.mssv / 10000); // Năm nhập học từ MSSV
        const monthEnrolled = 8; // Tháng 8 là thời gian bắt đầu năm học

        const yearsStudied = currentYear - yearEnrolled;
        const monthsStudied = yearsStudied * 12 + (currentMonth - monthEnrolled);

        const overMaxYears = monthsStudied > 60; // Hơn 5 năm học
        // const highWarnings = student.canhcao > 0; // Có mức cảnh cáo cao, trường hợp bổ sung cho chuẩn quy chế

        return overMaxYears ;
        // return overMaxYears && highWarnings;
    });

    console.clear();
    console.log(`Số lượng sinh viên bị đình chỉ: ${suspendedStudents.length}`);
    
    suspendedStudents.forEach(student => {
        console.log(`MSSV: ${student.mssv} - Tên: ${student.name} - CPA: ${student.cpa} - Cảnh cáo: ${student.canhcao}`);
    });
    
    let command = prompt("Nhấn phím Enter để tiếp tục");
    return;
};