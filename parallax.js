/**
 * Parallax scrolling.
 *
 * TODO: Remove jQuery dependency.
 */
(function (global) {

    'use strict';

    var define = global.define || function (deps, module) {
        if (!global.jQuery) {
            throw new Error('jsparallax requires jQuery.');
        }
        module(jQuery);
    };

    define(['jquery'], function ($) {
        var $window = $(window),
            $elements;

        /**
         * Handle window.onscroll
         */
        var onScroll = function onScroll(e) {
            // TODO: only handle visible elements
            var scrollTop = $window.scrollTop();

            $elements.each(function () {
                var $this = $(this),
                    speed = $this.data('parallaxSpeed') || 4,
                    ty = scrollTop / speed,
                    matrix = [1, 0, 0, 1, 0, ty].join(',');

                $this.css('transform', 'matrix(' + matrix + ')');
            });
        };

        $(function () {
            $elements = $('.js-parallax');
            $window.on('scroll', onScroll);
        });
    });

}(this));
