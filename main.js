//Js hoists all function declaration to the top of the scope so all function declarations can be
//grouped together at the end of the document


//Use of new ECMAScript Strict Mode that produces more exceptions and warnings
(function (document,window){
  "use strict";
  
  document.addEventListener ( "DOMContentLoaded",
                        function(){
                         const header = document.getElementById('header');
                         const headerHeight = header.offsetHeight;
                         let hidden = false;
                         window.addEventListener ("scroll", function(){
                                          if (window.pageYOffset > headerHeight && !hidden){
                                            header.style.display = "none";
                                            hidden = true;
                                          }else if (window.pageYOffset < headerHeight && hidden){
                                            header.style.display = "block";
                                            hidden = false;
                                          }
                                        }
                                       )
                      })
}(document,window));