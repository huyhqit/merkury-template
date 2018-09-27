<!--@FIXED: Remove this -->
<!--@FIXED: Remove this -->
{% extends '../layouts/base-1.swig' %}

{% block bodyClass %}page-home{% endblock %}

{% block main %}
<div id="main">
        <div class="section" id="section_1">
                <div class="container">
                    <div class="list">
                        <div class="item" id="section_1__item_1">
                            <div class="thumbnail"><img src='../../assets/images/pages/home/section_1__item1.png' alt=''></div>
                            <div class="title">Manage Your Workflow</div>
                            <div class="description">Lorem ipsum dolor sit amet, consectetur
                                <br> adipisicing elit, sed do eiusmod tempor
                                <br> incididunt ut labore et dolore magna aliqua.
                            </div>
                            <a href="#" class="button" id="section_1__item_1__button">See more</a>
                        </div>

                        <div class="item" id="section_1__item_2">
                            <div class="thumbnail"><img src='../../assets/images/pages/home/section_1__item2.png' alt=''></div>
                            <div class="title">Analytics & Insights</div>
                            <div class="description">Lorem ipsum dolor sit amet, consectetur
                                <br> adipisicing elit, sed do eiusmod tempor
                                <br> incididunt ut labore et dolore magna aliqua.
                            </div>
                            <a href="#" class="button" id="section_1__item_2__button">See more</a>
                        </div>

                        <div class="item" id="section_1__item_3">
                            <div class="thumbnail"><img src='../../assets/images/pages/home/section_1__item3.png' alt=''></div>
                            <div class="title">Organize Your Deadlines</div>
                            <div class="description">Lorem ipsum dolor sit amet, consectetur
                                <br> adipisicing elit, sed do eiusmod tempor
                                <br> incididunt ut labore et dolore magna aliqua.
                            </div>
                            <a href="#" class="button" id="section_1__item_3__button">See more</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section" id="section_2">
                <div class="container">
                  <div class="list">
                    <div class="item"><div class="description"><!--@FIXED: If you want to use .list, it should wrap 2 text blocks with checkbox only-->
                      <div class="title">All You need is a browser!</div>
                      <div class="text" id="section_2__text_1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      <br>
                      tempor incididunt ut labore et dolore magna aliqua.
                      </div>
                      <div class="text" id="section_2__text_2">
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                          <br>
                          ut aliquip ex ea commodo consequat.
                      </div>
                      <div class="checkbox">
                          <img src='../../assets/images/pages/home/section_5__check_true.png' alt="">
                          <span> Lorem ipsum dolor sit amet consectetur</span>
                      </div>
                      <div class="checkbox">
                          <img src='../../assets/images/pages/home/section_5__check_true.png' alt="">
                          <span>Ut enim ad minim veniam quis nostrud</span>
                      </div>
                    </div>
                  </div>
                    <div class="item">
                      <div id="section_2__picture">
                          <img src='../../assets/images/pages/home/section_2__image.png' alt=''>
                      </div>
                    </div>
                  </div>
                </div>

            </div>

            <div class="section" id="section_3">
                <div class="container">
                    <div class="list">
                        <img class="line-item" src='../../assets/images/pages/home/section_3__line.png' alt=''>
                        <div class="item" id="section_3__item_1">
                            <img src='../../assets/images/pages/home/section_3__task.png' alt=''>
                        </div>

                        <div class="item" id="section_3__item_2">
                            <div class="title">Drag & Drop</div>
                            <div class="text" id="section_3__item_2__text_1">Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do
                                <br>
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                            <div class="text" id="section_3__item_2__text_2">Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco
                                <br>
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <div id="section_3__item_2__icon">
                                <img src='../../assets/images/pages/home/section_3__arrow_left.png'>
                                <img src='../../assets/images/pages/home/section_3__arrow_right.png' alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section" id="section_4">
                <div class="container">
                    <div class="title">Powerfull PSD Template</div>
                    <div class="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        <br>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <img id='section_4__picture' src='../../assets/images/pages/home/section_4__item_1.png' alt=''>
                    <div class="object" id="section_4__object_1">
                        <img src='../../assets/images/pages/home/section_4__line_left.png' alt="">
                        <div class="text">
                            <div class="title">Clean & modern layout</div>
                            <div class="description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            </div>
                        </div>
                    </div>
                    <div class="object" id="section_4__object_2">
                        <img src='../../assets/images/pages/home/section_4__line_right.png' alt=''>
                        <div class="text">
                            <div class="title">Easy to customize</div>
                            <div class="description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section" id="section_5">
                <div class="container">
                    <div class="title">Check our pricing!</div>
                    <div class="cards"><!--@FIXED: It's not semantic enough -->
                        <div class="card" id="section_5__card_1">
                            <!-- <img src='../../assets/images/pages/home/section_5__card.png' alt=''> -->
                            <div class="text">
                                <div class="title">BRONZE PLAN</div>
                                <div class="pricing">
                                    <span class="dollar">$</span><!--@FIXED: Typo: dollar-->
                                    <span class="number">19</span>
                                    <span class="period">/mon</span><!--@FIXED: It's not time, but period, or you don't need span here-->
                                </div>
                                <ul class="list">
                                    <li class="item do">
                                        <!-- <img src='../../assets/images/pages/home/section_5__check_true.png' alt=""> -->
                                      <span>Lorem ipsum dolor sit am</span></li>
                                    <li class="item do">
                                        <!-- <img src='../../assets/images/pages/home/section_5__check_true.png' alt=""> -->
                                      <span>Lorem ipsum dolor sit am</span></li>
                                    <li class="item dont">
                                        <!-- <img src='../../assets/images/pages/home/section_5__check_false.png' alt=""> -->
                                      <span>Lorem ipsum dolor sit am</span></li>
                                    <li class="item dont">
                                        <!-- <img src='../../assets/images/pages/home/section_5__check_false.png' alt=""> -->
                                      <span>Lorem ipsum dolor sit am</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card" id="section_5__card_2">
                            <!-- <img src='../../assets/images/pages/home/section_5__card.png' alt=''> -->
                            <div class="text">
                                <div class="title">SILVER PLAN</div>
                                <div class="pricing">
                                    <span class="dollar">$</span>
                                    <span class="number">49</span>
                                    <span class="period">/mon</span>
                                </div>
                                <ul class="list">
                                    <li class="item do"><!--@FIXED: The image here can be used as background image-->
                                        <!-- <img src='../../assets/images/pages/home/section_5__check_true.png' alt=""> -->
                                        <span>Lorem ipsum dolor sit am</span></li>
                                    <li class="item do">
                                        <!-- <img src='../../assets/images/pages/home/section_5__check_true.png' alt=""> -->
                                        <span>Lorem ipsum dolor sit am</span></li>
                                    <li class="item do">
                                        <!-- <img src='../../assets/images/pages/home/section_5__check_true.png' alt=""> -->
                                        <span>Lorem ipsum dolor sit am</span></li>
                                    <li class="item dont">
                                        <!-- <img src='../../assets/images/pages/home/section_5__check_false.png' alt=""> -->
                                        <span>Lorem ipsum dolor sit am</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card" id="section_5__card_3">
                            <!-- <img src='../../assets/images/pages/home/section_5__card.png' alt=''> -->
                            <div class="text">
                                <div class="title">GOLD PLAN</div>
                                <div class="pricing">
                                    <span class="dollar">$</span>
                                    <span class="number">99</span>
                                    <span class="period">/mon</span>
                                </div>
                                <ul class="list">
                                    <li class="item do">
                                        <!-- <img src='../../assets/images/pages/home/section_5__check_true.png' alt=""> -->
                                        <span>Lorem ipsum dolor sit am</span></li>
                                    <li class="item do">
                                        <!-- <img src='../../assets/images/pages/home/section_5__check_true.png' alt=""> -->
                                        <span>Lorem ipsum dolor sit am</span></li>
                                    <li class="item do">
                                        <!-- <img src='../../assets/images/pages/home/section_5__check_true.png' alt=""> -->
                                        <span>Lorem ipsum dolor sit am</span></li>
                                    <li class="item do">
                                        <!-- <img src='../../assets/images/pages/home/section_5__check_true.png' alt=""> -->
                                        <span>Lorem ipsum dolor sit am</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        <br>
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </div>
                    <a id="section_5__button" class="button" href="#">Join now!</a>
                </div>
            </div>
            <div id="overlay">
                <img src='./../../assets/images/demo/pages/home/overlay.png' />
            </div>
</div>
{% endblock %}
