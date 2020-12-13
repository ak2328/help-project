$(document).ready(function(){
	
  var preloadbg = document.createElement("img");
  preloadbg.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/timeline1.png";
  
	// $("#searchfield").focus(function(){
	// 	if($(this).val() == "Search contacts..."){
	// 		$(this).val("");
	// 	}
	// });
	// $("#searchfield").focusout(function(){
	// 	if($(this).val() == ""){
	// 		$(this).val("Search contacts...");
			
	// 	}
	// });
	
	$("#sendmessage_main input").focus(function(){
		if($(this).val() == "Send message..."){
			$(this).val("");
		}
	});
	$("#sendmessage_main input").focusout(function(){
		if($(this).val() == ""){
			$(this).val("Send message...");
			
		}
	});
		
	
	$(".friend_main").each(function(){		
		$(this).click(function(){
			var childOffset = $(this).offset();
			var parentOffset = $(this).parent().parent().offset();
			var childTop = childOffset.top - parentOffset.top;
			var clone = $(this).find('img').eq(0).clone();
			var top = childTop+12+"px";
			
			$(clone).css({'top': top}).addClass("floatingImg").appendTo("#chatbox_main");									
			
			setTimeout(function(){$("#profile_main p").addClass("animate");$("#profile_main").addClass("animate");}, 100);
			setTimeout(function(){
				$("#chat-messages-main").addClass("animate");
				$('.cx, .cy').addClass('s1');
				setTimeout(function(){$('.cx, .cy').addClass('s2');}, 100);
				setTimeout(function(){$('.cx, .cy').addClass('s3');}, 200);			
			}, 150);														
			
			$('.floatingImg').animate({
				'width': "68px",
				'left':'108px',
				'top':'20px'
			}, 200);
			
			var name = $(this).find("p strong").html();
			var email = $(this).find("p span").html();														
			$("#profile_main p").html(name);
			$("#profile_main span").html(email);			
			
			$(".message").not(".right").find("img").attr("src", $(clone).attr("src"));									
			$('#friendslist_main').fadeOut();
			$('#chatview_main').fadeIn();
		
			
			$('#close_main').unbind("click").click(function(){	
				window.location.reload();			
			});
			
		});
	});			
});