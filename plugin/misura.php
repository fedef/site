<?php
	$word = "misura";
	$styles_nr = "3";
	
	
	foreach (str_split($word, 1) as $parola){
		echo '<span ';
		echo 'class="misura'.rand(1,$styles_nr).'"';
		$letter_color = generate_color();
		echo ' style="color:'.$letter_color.'"';
		echo ' >';
		echo $parola;
		echo "</span>";
	}
	
	function generate_color(){
		
		$color_digit = rand(0,10);
		if ($color_digit%2!=0)
			$color_digit = 15;
		$hex_color_digit = dechex($color_digit);
		$color ='#';
		for($i=0; $i<6; $i++){
			$color.=$hex_color_digit;
		}
		return $color;
	}
	
?>