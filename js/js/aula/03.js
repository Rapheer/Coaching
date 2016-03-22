	$(document).ready(function() {
		//5 seletores basicos/simples
				//seletor "*" = todos os elementos
				//$("*").css("color", "#0000FF");
				//seletor "#..." = apenas o elemento que tenha determinada ID
				$("#titulo").css("color", "green");
				//seletor "." = apenas uma classe especifica
				$(".outro").css("color", "black");
				//seletor "<a>" = buscar elemento tag (seja ela qual for)
				//$("a").css("color", "red");
				//seletor para grupo de elementos, separados sempre por virgula
				$("h1, a").css("backgroud-color", "yellow");
			});


