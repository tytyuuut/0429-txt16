modal =/*html*/`
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle"></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- 登入 -->
                        <div style="margin: 0px auto;" class="loginContainer row" id="content-1">
                            <div class="col-md-12">
                                <div class="p-3 ">
                                    <div class="titleDiv">
                                        <h2 class="pagetitle">會員專區</h2>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <section id="loginForm">
                                                <form autocomplete="off" class="form-horizontal" role="form">
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <!-- <label class="col-md-2 control-label" for="Email">信箱</label>
                                                            <input autocomplete="false" class="form-control valid"
                                                                id="Email" name="Email" type="text"> -->
                                                            <div style="font-size: 21px;"class="text">帳號:<span style="font-size: 17px;"> Abssrt123</span></div>
                                                        </div>
                                                    </div>
                                                    <!-- <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label class="col-md-2 control-label"
                                                                for="Password">密碼</label>
                                                            <input autocomplete="false" class="form-control valid"
                                                                id="Password" name="Password" type="password">
                                                        </div>
                                                    </div> -->
                                                    <!-- <div class="col-md-offset-2 col-md-10 hideRow">
                                                        <div class="form-group">
                                                            <div class="checkbox">
                                                                <input data-val="true" id="RememberMe" name="RememberMe"
                                                                    type="checkbox" value="true"><input
                                                                    name="RememberMe" type="hidden" value="false">
                                                                <label for="RememberMe">記住我</label>
                                                            </div>
                                                        </div>
                                                    </div> -->
                                                    <div class="form-group">
                                                        <div class=" col-md-12">
                                                            <a class="btn  w-100" href="index.html">
                                                                登出
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <!-- <p class="text-center">
                                                        <div class="center-item">
                                                        <div  class="t1"onclick="c1()">註冊新會員</div> | <div class="t2"onclick="c2()">忘記密碼</div>
                                                        </div>
                                                    </p> -->
                                                </form>
                                            </section>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 註冊 -->
                        <div style="margin: 0px auto;" class="loginContainer row" id="content-2">
                            <div class="col-md-12">
                                <div class="p-3 ">
                                    <div class="titleDiv">
                                        <h2 class="pagetitle">註冊新會員</h2>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <section id="loginForm">
                                                <form autocomplete="off" class="form-horizontal" role="form">
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label class="col-md-2 control-label" for="Email">信箱</label>
                                                            <input autocomplete="false" class="form-control valid"
                                                                id="Email" name="Email" type="text">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label class="col-md-2 control-label"
                                                                for="Password">密碼</label>
                                                            <input autocomplete="false" class="form-control valid"
                                                                id="Password" name="Password" type="password">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label class="col-md-3 control-label"
                                                                for="Password">確認密碼</label>
                                                            <input autocomplete="false" class="form-control valid"
                                                                id="Password" name="Password" type="password">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <div class=" col-md-12">
                                                            <input type="submit" value="確認"
                                                                class="btn btn-primary w-100">
                                                        </div>
                                                    </div>
                                                    <p class="text-center">
                                                        <div class="center-item">
                                                        <div class="t3" onclick="c3()">登入</div> | <div class="t2"
                                                            onclick="c2()">忘記密碼</div>
                                                        </div>
                                                    </p>
                                                </form>
                                            </section>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 註冊end -->
                         <!-- 忘記密碼 -->
                         <div style="margin: 0px auto;" class="loginContainer row" id="content-3">
                             <div class="col-md-12">
                                 <div class="p-3 ">
                                     <div class="titleDiv">
                                         <h2 class="pagetitle">忘記密碼</h2>
                                     </div>
                                     <div class="row">
                                         <div class="col-md-12">
                                             <section id="loginForm">
                                                 <form autocomplete="off" class="form-horizontal" role="form">
                                                     <div class="col-md-12">
                                                         <div class="form-group">
                                                             <label class="col-md-3 control-label"
                                                                 for="Email">重設密碼</label>
                                                             <input autocomplete="false" class="form-control valid"
                                                                 id="Email" name="Email" type="text">
                                                         </div>
                                                     </div>
                                                     <div class="col-md-12">
                                                         <div class="form-group">
                                                             <label class="col-md-3 control-label"
                                                                 for="Email">確認密碼</label>
                                                             <input autocomplete="false" class="form-control valid"
                                                                 id="Email" name="Email" type="text">
                                                         </div>
                                                     </div>
                                                     <div class="form-group">
                                                         <div class=" col-md-12">
                                                             <input type="submit" value="確認"
                                                                 class="btn btn-primary w-100">
                                                         </div>
                                                     </div>
                                                     <p class="text-center">
                                                         <div class="center-item">
                                                             <div class="t3" onclick="c3()">登入</div> | <div class="t1"
                                                                 onclick="c1()">註冊新會員</div>
                                                         </div>
                                                     </p>
                                                 </form>
                                             </section>
                                         </div>

                                     </div>
                                 </div>
                             </div>
                         </div>
                    </div>

                </div>
            </div>
        </div>
`
// document.write(footer);
document.currentScript.insertAdjacentHTML('afterend',modal);