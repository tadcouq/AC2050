import { promises as fsPromises } from 'fs';

export async function countSuspendedStudents(filename, currentMonthYear, minCPA = 2.0, maxWarnings = 3) {
    try {
        const data = await fsPromises.readFile(filename, 'utf8');
        const students = JSON.parse(data);

        const [currentMonth, currentYear] = currentMonthYear.split('/').map(Number);
        let suspendedCount = 0;

        students.forEach(student => {
            const yearEnrolled = Math.floor(student.mssv / 10000); // Năm nhập học từ MSSV
            const monthEnrolled = 8; // Tháng 8 là thời gian bắt đầu năm học

            const yearsStudied = currentYear - yearEnrolled;
            const monthsStudied = yearsStudied * 12 + (currentMonth - monthEnrolled);

            // Kiểm tra điều kiện bị đình chỉ
            const isOverTimeLimit = monthsStudied >= 60; // Hơn 5 năm học
            const isLowCPA = parseFloat(student.cpa) < minCPA;
            const isOverWarnings = student.canhcao == maxWarnings;

            if (isOverTimeLimit && (isLowCPA || isOverWarnings)) {
                suspendedCount++;
            }
        });

        return suspendedCount;

    }
    catch (err) {
        console.error('Đã xảy ra lỗi khi đọc dữ liệu:', err.message);
        return 0;
    };
};