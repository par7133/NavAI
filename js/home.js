/**
 * Copyright (c) 2016, 2024, 5 Mode
 * 
 * This file is part of BoxToBox.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
 * and associated documentation files (the "Software"), to deal in the Software 
 * without restriction, including without limitation the rights to use, copy, modify, merge, publish, 
 * distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or 
 * substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN 
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. *
 * 
 * home.js
 * 
 * JS for the Home page.
 *
 * @author Daniele Bonini <my25mb@aol.com>
 * @copyrights (c) 2016, 2024, 5 Mode     
 * @license https://opensource.org/licenses/BSD-3-Clause 
 */
 
 function NAVAIstartApp() {

 }			

 /*
  * call to startApp
  * 
  * @returns void
  */
 function _NAVAIstartApp() {
   
   setTimeout("NAVAIstartApp()", 1000);    
 }
 
function NAVAIreload() {
  //window.location.reload(); 
  document.getElementById("frmUpload").submit();
}

function NAVAIsetContentPos() {                    
  h=parseInt(window.innerHeight);
  w=parseInt(window.innerWidth);

  if (w>700) {
    myheight = parseInt(window.innerHeight - ($("#NAVAIheader").height()));
    $("#NAVAIsidebar").css("height", myheight+"px");
    $("#NAVAIcoding").css("height", myheight+"px");
    if (parseInt($("#NAVAIcoding").height()) < 850) {
      $("#NAVAIcoding").css("height", "850px");
    }
    $("#NAVAIcontent").css("height", myheight+"px");
    if (parseInt($("#NAVAIcontent").height()) < 850) {
      $("#NAVAIcontent").css("height", "850px");
    }
   
    $("#NAVAIresizeBanner").hide();
    $("#NAVAIcontent").show(); 
  } else {
    myheight = parseInt(window.innerHeight);
    $("#NAVAIresizeBanner").css("height", myheight+"px");
  
    $("#NAVAIcontent").hide();
    $("#NAVAIresizeBanner").show();
  }  
} 

function NAVAILeftSideBar() {
  $(".sidebar").css("float", "left");
  $(".content").css("float", "left");
}

function NAVAIRightSideBar() {
  $(".content").css("float", "right");
  $(".sidebar").css("float", "right");
}

var footerVisible = true;
function NAVAIShowFooter() {
   if (footerVisible) {
      $(".footer").hide();
   } else {
      $(".footer").show();
   }
   footerVisible = !footerVisible;
}

var fullscreen = true;
function NAVAIFullScreen() {
   h=window.innerHeight;
   if (fullscreen) {
      NAVAILeftSideBar();
      $(".spacer").hide(); 
      $(".footer").hide();
      $(".sidebar").hide();
      $(".content").css("max-width", "98%");
      $(".content").css("min-height", parseInt(h-75)+"px");
      $(".content").css("max-height", parseInt(h-75)+"px");
   } else {
      NAVAILeftSideBar();
      $(".spacer").show();       
      $(".sidebar").show();
      $(".content").css("max-width", "50%");
      $(".content").css("min-height", "650px");
      $(".content").css("max-height", "650px");
      $(".footer").show();
   }
   fullscreen = !fullscreen;
}

var sidebarVisible = true;
function NAVAIShowSideBar() {
   if (sidebarVisible) {
      NAVAILeftSideBar();
      $(".sidebar").hide();
   } else {
      NAVAILeftSideBar();
      $(".sidebar").show();
   }
   sidebarVisible = !sidebarVisible;
}

function NAVAIsetFooterPos() {
  if (document.getElementById("NAVAIfooterCont")) {
    tollerance = 16;
    $("#NAVAIfooterCont").css("top", parseInt( window.innerHeight - $("#footerCont").height() - tollerance ) + "px");
    $("#NAVAIfooter").css("top", parseInt( window.innerHeight - $("#footer").height() - tollerance - 8) + "px");
  }
}

window.addEventListener("load", function() {

  setTimeout("NAVAIsetContentPos()", 500);
  setTimeout("NAVAIsetFooterPos()", 1000);

  setTimeout("_NAVAIstartApp()", 10000);

}, true);

window.addEventListener("resize", function() {

  setTimeout("NAVAIsetContentPos()", 500);
  setTimeout("NAVAIsetFooterPos()", 1000);

}, true);
