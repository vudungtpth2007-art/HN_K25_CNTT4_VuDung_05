let employees = [
{ employeeCode: "EMP-001", fullName: "Ngô Thanh Tùng",
    department: "Phòng Kỹ Thuật",
    age: 28, experienceYears: 5 },
{ employeeCode: "EMP-002", fullName: "Hồ Thị Thu",
    department: "Phòng Nhân Sự",
    age: 35, experienceYears: 10 },
{ employeeCode: "EMP-003", fullName: "Mai Quốc Việt",
    department: "Phòng Kỹ Thuật",
    age: 24, experienceYears: 1 }

];

// 1. Hiển thị danh sách nhân viên 
function showEmployees() {
    if (employees.length === 0) {
        console.log("Danh sách nhân viên trống.");
        return;
    }
    employees.forEach(displayEmployee);
}


// 2. Thêm nhân viên mới
function addEmployee() {
    let employeeCode = prompt("Nhập mã nhân viên (EMP-XXX):");
}
function displayEmployee(employee) {
    console.log(`Mã nhân viên: ${employee.employeeCode}`);
    console.log(`Họ và tên: ${employee.fullName}`);
    console.log(`Phòng ban: ${employee.department}`);
    console.log(`Tuổi: ${employee.age}`);
    console.log(`Số năm kinh nghiệm: ${employee.experienceYears}`);
    console.log("-----------------------------");
}


// 3. Cập nhật thông tin nhân viên
function updateEmployee() {
    let employeeCode = prompt("Nhập mã nhân viên cần cập nhật:");
    let employee = employees.find(emp => emp.employeeCode === employeeCode);

    if (employee) {
        let newFullName = prompt("Nhập họ và tên mới (để trống nếu không thay đổi):");
        let newDepartment = prompt("Nhập phòng ban mới (để trống nếu không thay đổi):");
        let newAge = prompt("Nhập tuổi mới (để trống nếu không thay đổi):");
        let newExperienceYears = prompt("Nhập số năm kinh nghiệm mới (để trống nếu không thay đổi):");

        if (newFullName) employee.fullName = newFullName;
        if (newDepartment) employee.department = newDepartment;
        if (newAge) employee.age = Number(newAge);
        if (newExperienceYears) employee.experienceYears = Number(newExperienceYears);

        console.log(`Thông tin nhân viên với mã ${employeeCode} đã được cập nhật.`);
    } else {
        console.log(`Không tìm thấy nhân viên với mã ${employeeCode}.`);
    }
}


// 4. Xóa nhân viên
function deleteEmployee() {
    let employeeCode = prompt("Nhập mã nhân viên cần xóa:");
    let index = employees.findIndex(emp => emp.employeeCode === employeeCode);
    if (index !== -1) {
        employees.splice(index, 1);
        console.log(`Nhân viên với mã ${employeeCode} đã được xóa.`);
    } else {
        console.log(`Không tìm thấy nhân viên với mã ${employeeCode}.`);
    }
} 

// Menu chính
function main() {
    let choice;
    do {
        let input = prompt(`
===================================================
    HỆ THỐNG QUẢN LÝ NHAN VIÊN CÔNG TY SKYTECH

1. Hiển thị danh sách nhân viên
2. Thêm nhân viên mới
3. Cập nhật thông tin nhân viên
4. Xóa nhân viên
5. Tìm kiếm nhân viên theo phòng ban
0. Thoát chương trình
===================================================

Vui lòng nhập lựa chọn của bạn (0 - 5):
`);

    if (input === null) {
        console.log("Vui lòng chọn 0 để thoát");
        continue;
    } 
      input = input.trim();

        if (!/^[0-5]$/.test(input)) {
            console.log("Lựa chọn không hợp lệ");
            continue;
        }

    choice = Number(input);

        switch (choice) {
            case 1:
                showEmployees();
                break;
            case 2:
                addEmployee();
                break;
            case 3:
                updateEmployee();
                break;
            case 4:
                deleteEmployee();
                break;
            case 5:
                searchEmployeeByDepartment();
                break;
            case 0:
                console.log("Cảm ơn bạn đã sử dụng chương trình!");
                break;
            default:
                console.log("Lựa chọn không hợp lệ");
                break;
        }
    } while (choice !== 0);
}
main();
