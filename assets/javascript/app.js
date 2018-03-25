
var count = 60;

var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;

$(document).ready(function(){

	$("#mid_game_container").hide();
	$("#end_container").hide();
	
	window.scrollTo(0, 500);

	$("#start_button").on("click", function(){

		$("#opening").hide();

		$("#mid_game_container").show();

		startCountdown();
		return;

	});

	function countdown(){

		count--;

    	$('#timer_number').html(count + " Seconds");

			$("#done_button").on("click", function(){

			count = 0; 
			return;

			});

			if(count == -1){

				timeUp();

				$("#mid_game_container").hide();

			}

	}

	function startCountdown(){
		setInterval(countdown, 1000);
	}

	function timeUp(){

		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
		var Q10 = $('input:radio[name="q10"]:checked').val();

		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "noone"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "boots"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "lita"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "earth"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q5 == undefined){
			unansweredCount++;
		}
		else if(Q5 == "68"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q6 == undefined){
			unansweredCount++;
		}
		else if(Q6 == "sharon"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q7 == undefined){
			unansweredCount++;
		}
		else if(Q7 == "twosix"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q8 == undefined){
			unansweredCount++;
		}
		else if(Q8 == "nib"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q9 == undefined){
			unansweredCount++;
		}
		else if(Q9 == "toni"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q10 == undefined){
			unansweredCount++;
		}
		else if(Q10 == "million"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		$('#correct_answers').html(correctCount);
		$('#wrong_answers').html(wrongCount);
		$('#unanswered').html(unansweredCount);

		$("#end_container").show();

		window.scrollTo(0, 550);
	}

});


