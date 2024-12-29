# AC2010 - Nhóm 5, AC2050 - Nhóm 4
## Mã lớp 155460, 155470
GVHD: Nguyễn Việt Tùng

## Thành viên:
1. Nguyễn Quốc Đạt 20231570 (Trưởng nhóm)
2. Trần Đình Tùng 20231646
3. Nguyễn Ngọc Hải 20231588
4. Trịnh Gia Hưng 20239646
5. Nguyễn Xuân Đại 20231568 (AC2050)

## Đề 2
Cho bài toán quản lý kết quả học tập của sinh viên ĐHBK Hà Nội, giới hạn chỉ xét trong 01 kì (kì 20232)
Thông tin của sinh viên bao gồm:
-	Mã số sinh viên: 8 kí tự
-	Họ và tên: (utf8)
-	Cpa: number
-	mức cảnh cáo: 1/2/3
Cho phép thực hiện một lệnh hoặc một chuỗi lệnh trên dữ liệu sinh viên. Các lệnh cho phép bao gồm:
1.	list: in ra danh sách sinh viên đang học, theo thứ tự lưu trữ, chỉ in mssv và tên (1đ)
2.	find <mssv>: tìm sinh viên có mssv. Ví dụ: find 20230108 là tìm sinh viên có mssv 20230108. Trả về đối tượng sinh viên nếu tìm thấy (in ra màn hình <mssv> “<hoten>” <cpa> <canhcao>, trả về undefine nếu không tìm thấy) (1đ)
3.	modify cpa <mssv> <cpa_mới>: thay đổi cpa của sinh viên (1đ)
4.	findtop n: tìm n sinh vien có cpa cao nhất, trả về mỗi mssv trên một dòng, mssv có cpa cao nhất đứng trước, n là số nguyên >=1 (1đ)
5.	findbottom n: tìm n sinh viên có cpa thấp nhất, trả về mỗi mssv trên một dòng, mssv có cpa thấp nhất đứng trước, n là số nguyên >=1 (1đ)
6.	find canhcao: tìm các sinh viên đang bị cảnh cáo, kèm mức cảnh cáo, 1, 2, 3. Việc tính cảnh cáo chỉ dựa trên điểm cpa hiện có, và sử dụng luật của ĐHBK Hà Nội, mức 3 cpa <= 0.5, mức 2: 0.5< cpa <= 1.0, mức 1: 1.0 < cpa <= 1.5. (1đ)
7.	cnt a b, đếm số sinh viên có điểm cpa là nằm trong đoạn [a b] (a<=cpa<=b), ví dụ: (1đ)
8.	Tính số lượng sinh viên phải đình chỉ học. Điều kiện đình chỉ học là mức cảnh cáo dựa trên cpa và thời gian học tối đa cho phép (> 5 năm bị đình chỉ) (được tính dựa trên năm vào trường (dựa trên mssv) và thời điểm hiện tại mm/yyyy) (1đ)
Báo cáo: rõ ràng, cẩn thận, đầy đủ yêu câu (1 điểm)
-	Có sử dụng lớp tự tạo (class), giải thích rõ trong báo cáo: +1đ
-	Có sử dụng async cho các thao tác chiếm nhiều tài nguyên:  +1đ

## Cấu trúc hoạt động
Toàn bộ code sẽ được hoàn thiện dưới dạng module hoá, mỗi câu ứng với mỗi lệnh sẽ được tách ra thành các file .js nhỏ, tất cả được đồng bộ call trên 1 file main.js tổng hợp và chạy các chức năng.
Các thao tác nhập data sẽ sử dụng prompt-sync.
Data sinh viên sẽ được tạo thành 1 file .json bằng cách dùng makeRdnStr và sẽ tách biệt thành 1 file js hoàn toàn riêng biệt, không nằm trong index.js.

## Sử dụng
Setup: `npm i`
Để khởi động chương trình: `node index.js`

