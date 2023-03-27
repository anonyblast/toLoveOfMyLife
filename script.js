function startGame() {
	let name = prompt('Digite seu nome e aperte OK para continuar.')
	if (name.trim().toUpperCase() == 'AMANDA') {
		alert('Oii minha vida! kkk');
		alert('Esse aqui é um jogo que eu fiz pra te mostrar o quanto tu é especial, pra jogar é muito simples, basta ir apertando OK, e relaxa, você já ganhou. Fica até o final, lá tem uma coisa especial pra você.');
		let question_1 = confirm('Você sabia que você é a garota mais perfeita do mundo, né?');
		let question_2 = confirm('Você sabia que quando você se olha no espelho ele se sente honrado, pois, tu é a pessoa mais linda que ele já refletiu?');
		let question_3 = confirm('Você sabia que quando você começa a falar, tua voz, suas palavras, me deixam fascinado?')
		let question_4 = confirm('Você sabia que esse seu jeito único de ser é algo simplesmente e completamente maravilhoso?');
		let question_5 = confirm('Você sabia que todo santo dia tu é a primeira pessoa que eu penso quando eu acordo, a última quando vou dormir, e acredite, é o melhor pensamento de todos?');
		let question_6 = confirm('Você sabia que desde aquela noite de Agosto, você transformou minha vida pra melhor, e deu um significado único pra tudo isso?');
		let question_7 = confirm('E por último, você sabia que quando eu estava do seu lado, eu senti, com toda a certeza, que você é a melhor pessoa do universo, e que jamais ia passar um dia sem tentar te fazer feliz?');

		if (question_1 && question_2 && question_3 && question_4 && question_5 && question_6 && question_7) {
			let el = document.getElementById('loveyou');
			el.style.display = 'block';
		}
		else {
			alert('Para desbloquear a mensagem especial, aperte somente o botão OK.');
		}
	}
	else {
		alert('Esse site é dedicado somente para uma pessoa, se você não é ela, não tente.');
	}
}