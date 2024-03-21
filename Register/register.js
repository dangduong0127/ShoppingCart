function Register() {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const phone = document.getElementById("numberPhone").value;
  const pass = document.getElementById("password").value;
  const re_pass = document.getElementById("re_password").value;
  let acc = JSON.parse(localStorage.getItem("username")) || [];

  function Validate() {
    let isVal = true;
    if (email === "") {
      alert("Chưa nhập email!!!");
      return (isVal = false);
    }
    if (phone === "") {
      alert("Chưa nhập số điện thoại!!!");
      return (isVal = false);
    }
    if (pass === "") {
      alert("Chưa nhập mật khẩu!!!");
      return (isVal = false);
    }
    if (re_pass !== pass) {
      alert("Mật khẩu không khớp!!!");
      return (isVal = false);
    }
    return isVal;
  }

  if (Validate()) {
    let search;
    for (let i in acc) {
      if (acc[i].email === email) {
        search = acc[i].email;
      }
    }

    if (search) {
      alert("Email này đã được đăng ký vui lòng dùng email khác!!!");
    } else {
      acc.push({
        email: email,
        phoneNumber: phone,
        password: pass,
      });
      localStorage.setItem("username", JSON.stringify(acc));
      alert("Đăng ký thành công!!!");
      window.location.href = "../Login/login.html";
    }
  }
}
