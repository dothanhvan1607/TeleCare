
# Phân tích hệ thống TeleCare

## 1. Phân tích đối tượng người dùng
## Trong tuần 3, em tiến hành phân tích đối tượng sử dụng hệ thống TeleCare nhằm xác định nhu cầu và các chức năng phù hợp trước khi thực hiện thiết kế giao diện.

## Đối tượng sử dụng chính của hệ thống là khách hàng có nhu cầu tra cứu thông tin gói cước viễn thông và gửi yêu cầu hỗ trợ. Người dùng cần có khả năng xem danh sách gói cước, tìm kiếm và lọc theo các tiêu chí phù hợp với nhu cầu, xem thông tin chi tiết và gửi yêu cầu hỗ trợ khi cần thiết.

## Bên cạnh đó, giao diện TeleCare cũng có thể hỗ trợ nhân viên tư vấn trong việc tra cứu nhanh thông tin gói cước để hướng dẫn khách hàng. Tuy nhiên, trong phạm vi dự án thực tập, hệ thống tập trung vào phía Frontend dành cho người dùng và không xây dựng các chức năng quản trị hoặc xử lý dữ liệu nội bộ.

## 2. Xác định các chức năng chính

## Các chức năng chính của hệ thống TeleCare gồm:

## - Trang chủ: giới thiệu hệ thống, hiển thị gói cước nổi bật và hỗ trợ điều hướng đến các chức năng chính.
## - Tra cứu gói cước: hiển thị danh sách gói cước với các thông tin như tên gói, giá, dung lượng và chu kỳ.
## - Tìm kiếm và lọc: cho phép người dùng tìm kiếm gói cước và lọc theo giá, dung lượng và chu kỳ.
## - Chi tiết gói cước: hiển thị thông tin chi tiết của gói cước được lựa chọn.
## - Gửi yêu cầu hỗ trợ: cho phép người dùng nhập thông tin liên hệ và nội dung cần hỗ trợ, đồng thời kiểm tra dữ liệu trước khi gửi.

# 3. Phân tích luồng sử dụng hệ thống

## Dựa trên các chức năng đã xác định, em tiến hành xây dựng các luồng sử dụng chính nhằm mô tả trình tự người dùng tương tác với hệ thống TeleCare.

### 3.1. Luồng tra cứu gói cước
#### Người dùng
##### → Trang chủ
##### → Trang gói cước
##### → Danh sách gói cước
##### → Chọn gói cước
##### → Xem chi tiết gói cước

### 3.2. Luồng tìm kiếm và lọc gói cước
#### Danh sách gói cước
##### → Nhập từ khóa hoặc chọn tiêu chí lọc
##### → Hệ thống xử lý dữ liệu
##### → Kiểm tra kết quả
##### → Hiển thị gói cước phù hợp hoặc trạng thái không có kết quả

### 3.3. Luồng gửi yêu cầu hỗ trợ
#### Người dùng
##### → Trang hỗ trợ
##### → Nhập thông tin
##### → Kiểm tra dữ liệu
##### → Nếu dữ liệu không hợp lệ: hiển thị lỗi
##### → Nếu dữ liệu hợp lệ: gửi yêu cầu
##### → Hiển thị thông báo kết quả và mã yêu cầu mô phỏng