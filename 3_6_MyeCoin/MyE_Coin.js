

const navLinkBaseClass =
  'font-montserrat text-xl text-[#093A88] hover:text-[#FF7900] transition-colors duration-300 ease-out';

const headerHTML = `
  <div class="flex flex-col justify-center text-center h-27.75 p-3 px-60 w-full">
    <div class="flex items-center justify-between h-13 px-15">
      <a href="#" aria-label="Trang chủ">
        <img src="./Hinh_anh/logo_Mye.png" alt="Logo" class="h-16 w-21" />
      </a>

      <div class="flex items-center gap-x-6">
        <a href="/trang-chu" class="${navLinkBaseClass}"><h1>Trang Chủ</h1></a>
        <a href="/tro-choi" class="${navLinkBaseClass}"><h1>Trò Chơi</h1></a>
        <a href="/" class="${navLinkBaseClass}"><h1>Nạp Game</h1></a>
        <a href="/tin-tuc" class="${navLinkBaseClass}"><h1>Tin Tức</h1></a>
        <a href="/ho-tro" class="${navLinkBaseClass}"><h1>Hỗ Trợ</h1></a>
      </div>


      <button
        id="loginBtn"
        class=" mt-2.5 flex items-center justify-center w-36 h-9"
        type="button"
      >
        <img
          src="./Hinh_anh/Login/login_button.png"
          class="w-30 h-auto transition-all duration-300 ease-out hover:hue-rotate-90 hover:brightness-110 cursor-pointer flex items-center"
          alt="Login_Button"
        />
      </button>

      <button
        id="userBtn"
        type="button"
        class="hidden cursor-pointer"
      >
        <div class="ml-5 flex flex-row items-center justify-center gap-x-3">
          <div class="bg-yellow-300 rounded-full flex flex-row items-center justify-center">
            <span class="w-6 h-6 flex items-center text-center justify-center">😀</span>
          </div>
          <div class="flex flex-col justify-center text-left">
            <p class="font-montserrat font-semibold text-[12px] text-[#FF7900]">myepro01</p>
            <p class="font-montserrat text-[12px] text-[#093A88]">MyE ID: 00123</p>
          </div>
          <div class="flex flex-row items-center justify-center text-[#093A88] font-montserrat text-[12px] font-semibold">
            <img src="./Hinh_anh/MyE_Coin/coin_M.png" alt="MyE Coin" class="w-4 h-4 mr-1" />
            1000
          </div>
        </div>
      </button>

      <div class="relative">
        <div
          id="userDropdown"
          class="hidden absolute flex-col right-20 top-5 mt-2 z-50 w-48 rounded-xl bg-white shadow-[0_2px_10px_0_#0000004D] transition-all duration-500 ease-out"
        >
          <div class="flex flex-row items-center justify-center gap-x-3">
            <div class="bg-yellow-300 rounded-full flex flex-row items-center justify-center">
              <span class="w-4 h-4 flex items-center text-center justify-center text-[10px]">😀</span>
            </div>
            <div class="flex flex-col justify-center text-left">
              <p class="font-montserrat font-semibold text-[12px] text-[#FF7900]">myepro01</p>
              <p class="font-montserrat text-[12px] text-[#093A88]">MyE ID: 00123</p>
            </div>
          </div>

          <div class="shadow-[0_2px_10px_0_#0000004D] flex flex-row items-center justify-center w-full h-10 hover:text-[#FF7900] cursor-pointer">
            <i class="fa-regular fa-credit-card" style="hover:color:[#FF7900]; font-size:10px;"></i>
            <p class="ml-2 font-montserrat text-[12px] hover:text-[#FF7900]"> Quản lý thanh toán</p>
          </div>


        </div>
      </div>
    </div>

    <div class="flex grow text-left justify-start items-center pt-10 h-10 pl-5">
      <a href="/nap-game" class="">
        <h4 class="mb-5 font-montserrat font-semibold text-[14px] text-[#093A88]">Nạp Game >&nbsp;</h4>
      </a>
      <h4 class="mb-5 font-montserrat font-semibold text-[14px] text-[#FF7900]"> Mye Coin </h4>
    </div>
  </div>
`;

const footerHTML = `
  <div class="flex flex-col items-center justify-center bg-[#92929233] w-full p-5">
    <img src="./Hinh_anh/logo_Mye.png" alt="Logo" class="h-20 w-30 mb-3" />
    <p class="font-montserrat text-center text-[12px]">
      Email: hotro@mye.vn
      <br />Hotline: 0902 500 198
      <br /><b>CÔNG TY CỔ PHẦN MYE</b>
      <br />Chịu trách nhiệm quản lí nội dung: Ông Lâm Trung Hiệp
      <br />Địa chỉ: 477/22 Âu Cơ, Phường Phú Trung, Quận Tân Phú, Thành phố Hồ Chí Minh, Việt Nam
      <br />Giấy phép G1 số: Số 297/GP-BTTTT. Ngày cấp 14/07/2020, Nơi cấp Bộ Thông Tin và Truyền Thông
      <br />Điều khoản dịch vụ | Chính sách bảo mật
      <br />©Copyright © 2026 MYE. All Rights Reserved.
    </p>
  </div>
`;

document.getElementById('Header').innerHTML = headerHTML;
document.getElementById('Footer').innerHTML = footerHTML;

// Mock login + dropdown (no react)
const loginBtn = document.getElementById('loginBtn');
const userBtn = document.getElementById('userBtn');
const userDropdown = document.getElementById('userDropdown');

let isLoggedIn = false;
let isUserBoxOpen = false;

function setLoggedIn(next) {
  isLoggedIn = next;
  if (isLoggedIn) {
    loginBtn.classList.add('hidden');
    userBtn.classList.remove('hidden');
  } else {
    loginBtn.classList.remove('hidden');
    userBtn.classList.add('hidden');
    userDropdown.classList.add('hidden');
    isUserBoxOpen = false;
  }
}

function setDropdownOpen(next) {
  isUserBoxOpen = next;
  if (isUserBoxOpen) userDropdown.classList.remove('hidden');
  else userDropdown.classList.add('hidden');
}

if (loginBtn) {
  loginBtn.addEventListener('click', () => setLoggedIn(true));
}

if (userBtn) {
  userBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    setDropdownOpen(!isUserBoxOpen);
  });
}

if (userDropdown) {
  userDropdown.addEventListener('click', (e) => e.stopPropagation());
}

document.addEventListener('click', () => setDropdownOpen(false));

// Giữ style underline giống NavLink của React (click => active giữ underline)
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((a) => {
  // init theo URL
  // Normalize để so khớp URL (vì đôi khi pathname có/không có trailing slash)
  const href = (a.getAttribute('href') || '').replace(/\/$/, '');
  const path = window.location.pathname.replace(/\/$/, '');

  if (href === path) {
    a.classList.add('active');
  }


  a.addEventListener('click', () => {
    navLinks.forEach((x) => x.classList.remove('active'));
    a.classList.add('active');
  });
});


