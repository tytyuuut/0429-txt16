header =/*html*/`
<nav class="navbar navbar-expand-md navbar-fixed-top navbar-dark bg-dark main-nav">
            <div style="width: 1500px;position: relative;left: 100px;" class="container">
                <div class="navbar-collapse collapse nav-content order-2">
                    <ul class="nav navbar-nav meau nav-1">
                        <li class="nav-item">
                            <a class="nav-link n-1" href="index-2.html">首頁</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link n-1" href="about-1.html">關於店家</a>
                        </li>
                    </ul>
                </div>
                <ul class="nav navbar-nav text-nowrap flex-row mx-md-auto order-1 order-md-2">
                    <li class="nav-item aa">
                        <a class="nav-link" href="#">
                            <img class="logo" src="images/logo.png">
                        </a></li>
                    <button class="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target=".nav-content"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </ul>
                <div class="ml-auto navbar-collapse collapse nav-content order-3 order-md-3">
                    <ul class="ml-auto nav navbar-nav meau nav-2">
                        <li class="nav-item">
                            <a class="nav-link n-1" href="meau-1.html">菜單介紹</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link n-1" href="contact-1.html">聯絡我們</a>
                        </li>
                        <li class="nav-item btn-2">
                            <a class="nav-link s-1" href="#" data-toggle="modal" data-target="#exampleModalCenter">
                                <img src="images/user-2.png">
                            </a>
                            <a class="nav-link s-1" href="Transaction.html">
                                <img src="images/chat-car.png">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
`
// document.write(footer);
document.currentScript.insertAdjacentHTML('afterend',header);