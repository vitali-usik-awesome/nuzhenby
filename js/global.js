$(document).ready(function(){
    // shity nav
    $('.h_search a').click(function() {
       $('.h_search a').removeClass('h_active');
       $(this).addClass('h_active');
    });

    // tabs
    $('.tab_1').click(function() {
    	$(this).siblings().removeClass('market_nav_active');
		$(this).addClass('market_nav_active');
		$('.market_item_wrapper .itemTab_2').addClass('hidden');
		$('.market_item_wrapper .itemTab_3').addClass('hidden');
		$('.market_item_wrapper .itemTab_4').addClass('hidden');
		$('.market_item_wrapper .itemTab_1').removeClass('hidden');
    });
    $('.tab_2').click(function() {
		$(this).siblings().removeClass('market_nav_active');
		$(this).addClass('market_nav_active');
		$('.market_item_wrapper .itemTab_1').addClass('hidden');
		$('.market_item_wrapper .itemTab_3').addClass('hidden');
		$('.market_item_wrapper .itemTab_4').addClass('hidden');
		$('.market_item_wrapper .itemTab_2').removeClass('hidden');
    });
    $('.tab_3').click(function() {
		$(this).siblings().removeClass('market_nav_active');
		$(this).addClass('market_nav_active');
		$('.market_item_wrapper .itemTab_1').addClass('hidden');
		$('.market_item_wrapper .itemTab_2').addClass('hidden');
		$('.market_item_wrapper .itemTab_4').addClass('hidden');
		$('.market_item_wrapper .itemTab_3').removeClass('hidden');
    });
    $('.tab_4').click(function() {
		$(this).siblings().removeClass('market_nav_active');
		$(this).addClass('market_nav_active');
		$('.market_item_wrapper .itemTab_1').addClass('hidden');
		$('.market_item_wrapper .itemTab_2').addClass('hidden');
		$('.market_item_wrapper .itemTab_3').addClass('hidden');
		$('.market_item_wrapper .itemTab_4').removeClass('hidden');
    });
});