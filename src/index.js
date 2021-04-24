import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Scroll function courtesy of Scott Dowding; http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
$(document).ready(function () {
    function isScrolledIntoView(elem, offset) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return elemBottom <= docViewBottom+offset && elemTop >= docViewTop-offset;
    }
    // If element is scrolled into view, fade it in
    $(window).scroll(function () {
        $(".scroll-animations .animated").each(function () {
            if (isScrolledIntoView(this, 0) === true) {
                $(this).addClass("fadeInLeft");
                $(".fadeInLeft").css("opacity", 1);
            }
        });
    });

    $(window).scroll(function () {
        $(".scroll-animations .animateL").each(function () {
            if (isScrolledIntoView(this, 50) === true) {
                $(this).addClass("animateLeft");
                $(".animateLeft").css("opacity", 1);
            }
        });
    });

    $(window).scroll(function () {
        $(".scroll-animations .animateR").each(function () {
            if (isScrolledIntoView(this, 50) === true) {
                $(this).addClass("animateRight");
                $(".animateRight").css("opacity", 1);
            }
        });
    });
});
