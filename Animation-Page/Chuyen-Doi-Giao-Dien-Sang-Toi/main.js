const toggleButton = document.querySelector(".dark-light");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

/*
const toggleButton = document.querySelector(".dark-light"); -- Lấy phần tử đầu tiên có class là "dark-light" trong HTML và gán nó vào biến toggleButton.

toggleButton.addEventListener("click",-- "Thêm một event listener cho sự kiện "click". Khi phần tử toggleButton được nhấp vào, hàm callback sẽ được gọi." 

() => { -- "Đây là một hàm callback được truyền vào addEventListener.
Hàm này không có tham số, được viết dưới dạng một hàm mũi tên (arrow function)."

  document.body.classList.toggle("dark-mode"); -- "Đoạn mã này thực hiện việc chuyển đổi (toggle) class "dark-mode" trên phần tử document.body.

  Nếu document.body đã có class "dark-mode", nó sẽ bị xóa bỏ. Ngược lại, nếu không có, nó sẽ được thêm vào.
  
Điều này cho phép chuyển đổi giữa chế độ giao diện tối (dark mode) và chế độ giao diện sáng (light mode) của trang web."
});*/
