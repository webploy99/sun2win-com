function OpenNav() {
    document.getElementById("Nav").style.width = "100%";
}
  function CloseNav() {
    document.getElementById("Nav").style.width = "0";
}
const header = document.querySelector("#header")
function head(){
  const headerContent = document.createElement("div")
  headerContent.innerHTML = `
        <div class="max-w-6xl m-auto flex flex-col md:flex-row justify-center md:justify-between items-center py-2 text-white relative">
            <div class="text-white text-3xl absolute left-[5%] top-8  md:hidden" >
                <ion-icon onclick="OpenNav()" name="menu-outline"></ion-icon>
            </div>
            <a href="/index.html">
                <div class="w-[100px]">
                    <img src="/image/logo.png" class="rounded-[24px]">
                </div>
            </a>
            
            <nav id="Nav" class="z-40  fixed top-0 left-0 w-0 md:w-auto h-full overflow-x-hidden md:relative md:h-auto duration-300 tracking-wide">
                <div class="md:hidden flex justify-end text-3xl text-white p-2 font-bold w-full h-full  opacity-80">
                    <ion-icon onclick="CloseNav()" name="close"></ion-icon>
                </div>
                <div class="h-full w-[300px] md:w-auto opacity-100 md:relative absolute top-0 flex flex-col bg-black md:bg-transparent">
                    <!-- menu item -->
                    <div class="max-w-6xl  px-5 pt-10  md:text-white md:m-auto md:px-0 md:pt-0 cursor-pointer">
                        <ul class=" font-semibold flex-col *:pt-5  flex md:flex-row md:*:pt-0 gap-5   md:border-none *: divide-y divide-slate-500 md:divide-y-0">
                            <li><a href="./index.html">HOME</a></li>
                            <li><a href="./Sun2win/blog/blog.html">BLOG</a></li>
                            <li><a href="./Sun2win/hotgame/hotgame.html">HOT GAME</a></li>
                            <li><a href="./Sun2win/gamebai/gamebai.html">GAME BÀI</a></li>
                            <li><a href="./Sun2win/huongdan/huongdan.html">HƯỚNG DẪN</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="flex justify-center gap-3 bg-yellow-600 md:bg-transparent py-1.5 mt-2 w-full md:w-auto *:border *:rounded *:px-3 *:py-1 *:shadow-md *:shadow-yellow-500/80 *:duration-300">
                <button class="bg-gray-800 hover:bg-white hover:text-gray-800">ĐĂNG KÝ</button>
                <button class="bg-orange-400 hover:bg-white hover:text-gray-800">ĐĂNG NHẬP</button>
            </div>
        </div>`;
    header.appendChild(headerContent)
}
head();

const footer = document.querySelector("#footer")
function foot (){
  const footerContent = document.createElement("section")
  footerContent.innerHTML = `
      <section class=" bg-[#1E0F08] py-10">
        <div class="max-w-6xl m-auto">
            <p class="text-[#bcbab9] text-[14px] font-bold text-center lg:text-left">BÀI VIẾT MỚI</p>
            <div class=" pt-5 w-full *: divide-y divide-white-950 *:py-2 px-5 lg:px-0 lg:w-2/5   ">
                <div>
                    <a href="./Sun2win/Chiase/Chiase.html">
                        <div class="flex gap-3 items-center">
                            <div>
                                <img class="w-[39px]" src="/image/footer1.jfif" alt="">
                            </div>
                            <p class="text-orange-400 hover:text-[#A97611]">Chia sẻ cách chơi Rồng hổ Sun2win “trăm trận trăm thắng”</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="./Sun2win/Cachchoi/Cachchoi.html">
                        <div class="flex gap-3 items-center">
                            <div>
                                <img class="w-[39px]" src="/image/footer2.webp" alt="">
                            </div>
                            <p class="text-orange-400 hover:text-[#A97611]">Cách Chơi Cờ Úp Sun2win Mới Nhất</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="./Sun2win/Tienlen/Tienlen.html">
                        <div class="flex gap-3 items-center">
                            <div>
                                <img class="w-[39px]" src="/image/footer3.jfif" alt="">
                            </div>
                            <p class="text-orange-400 hover:text-[#A97611]">Cách chơi Tiến Lên Miền Nam – Sun2win</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="./Sun2win/Keo/Keo.html">
                        <div class="flex gap-3 items-center">
                            <div>
                                <img class="w-[39px]" src="/image/footer4.jfif" alt="">
                            </div>
                            <p class="text-orange-400 hover:text-[#A97611]">Kèo chấp Sun2win và những điều bạn nên biết</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="./Sun2win/Dragon/Dragon.html">
                        <div class="flex gap-3 items-center">
                            <div>
                                <img class="w-[39px]" src="/image/footer5.jfif" alt="">
                            </div>
                            <p class="text-orange-400 hover:text-[#A97611]">DragonBall Z Sun2win – Game quay thưởng nổ hũ ăn khách nhất</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="text-[#ffffff80] text-[12px] text-center pt-5">
            <p>Copyright 2024 <strong> © Sun2winad.net</strong></p>
        </div>
    </section>`
    footer.appendChild(footerContent)
}
foot();