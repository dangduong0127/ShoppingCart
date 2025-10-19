function Register() {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const phone = document.getElementById("numberPhone").value;
  const pass = document.getElementById("password").value;
  const re_pass = document.getElementById("re_password").value;
  let acc = JSON.parse(localStorage.getItem("username")) || [];
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const numberRegex = /[0-9]/g;

  function Validate() {
    let isVal = true;
    if (email === "") {
      alert("Chưa nhập email!!!");
      return (isVal = false);
    }

    if (!emailRegex.test(email)) {
      alert("Email ko đúng định dạng!!");
      return (isVal = false);
    }
    if (phone === "") {
      alert("Chưa nhập số điện thoại!!!");
      return (isVal = false);
    }

    if (!numberRegex.test(phone)) {
      alert("Số điện thoại không đúng đinh dạnh!!!");
      return (isVal = false);
    }

    if (pass === "") {
      alert("Chưa nhập mật khẩu!!!");
      return (isVal = false);
    }

    if (!passRegex.test(pass)) {
      alert(
        "Mật khẩu phải có ký tự viết hoa, viết thường, số và ký tự đặc biệt"
      );
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
