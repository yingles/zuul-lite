!function($){wp.customize("blogname",function(t){t.bind(function(t){$(".site-title a").text(t)})}),wp.customize("blogdescription",function(t){t.bind(function(t){$(".site-description").text(t)})}),wp.customize("header_textcolor",function(t){t.bind(function(t){"blank"===t?$(".site-title, .site-description").css({clip:"rect(1px, 1px, 1px, 1px)",position:"absolute"}):($(".site-title, .site-description").css({clip:"auto",position:"relative"}),$(".site-title a, .site-description").css({color:t}))})}),wp.customize("zuul_footer_background",function(t){t.bind(function(t){$(".site-footer").css("background",t)})}),wp.customize("zuul_bg_opacity",function(t){t.bind(function(t){$(".site-header-bg").css("opacity",t)})})}(jQuery);