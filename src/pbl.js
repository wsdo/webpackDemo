/*
* @Author: wshudong
* @Date:   2016-04-27 13:59:09
* @Last Modified by:   wshudong
* @Last Modified time: 2016-04-27 14:08:37
*/

'use strict';
   window.onload = function() {
        var oUl = document.getElementById('pbl');
        var iPage = 1;
        var b = true;
        var zWin = $(window);
        var winWidth = zWin.width();
        var winHeight = zWin.height();
        console.log(winWidth);
        console.log(winHeight);
        //初始化数据处理
        getList();

        function getList() {
            ajax('get', 'getPics.php', 'cpage=' + iPage, function(data) {

                var data = JSON.parse(data);
                console.log(data);

                if (!data.length) {
                    //后续没有数据了
                    return;
                }

                for (var i = 0; i < data.length; i++) {

                    //获取高度最短的li
                    // var _index = getShort();
                    var oDiv = document.createElement('div');
                    var oImg = document.createElement('img');
                    oImg.src = data[i].preview;
                    console.log(oImg.src.width);
                    oImg.style.width = '100%';
                    // oImg.style.height = data[i].height * (225 / data[i].width) + 'px';
                    oImg.style.height = winWidth + 'px';
                    oDiv.appendChild(oImg);
                    var oP = document.createElement('p');
                    oP.innerHTML = data[i].title;
                    oDiv.appendChild(oP);
                    // aLi[_index].appendChild(oDiv);
                    oUl.appendChild(oDiv);
                    // console.log(_index);
                }

                b = true;

            });
        }

    }