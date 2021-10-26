let arr = [
    ["Huy", 18, 200.0, "Giám Đốc"],
    ["Toan", 20, 500.0, "Chủ Tịch"],
    ["Khanh", 23, 900.0, "Nhân Viên"],
];
//đọc phần tử của mảng
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}
//thêm phần tử
arr[0].push("Giám đốc", "Vip");
console.log(arr[0]);
arr[2].push("Giám đốc", "Vip");
console.log(arr[1]);
arr[2].push("Giám đốc", "Vip");
console.log(arr[2]);
//xóa phần tử
arr[0].pop();
 
    for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log(arr[0]);
arr[1].pop();
console.log(arr[1]);
arr[2].pop();
console.log(arr[2]);
//update phần tử