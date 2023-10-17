const solution = (n, results) => {
	const rangeN = [...Array(n).keys()].map((e) => e + 1);
	// key: winner, value : Set([losers])
	const wins = {};
	// key: loser, value : Set([winners])
	const loses = {};
	rangeN.map((key) => {
		wins[key] = new Set([]);
		loses[key] = new Set([]);
	});

	// 승패 결과 저장
	results.map((val) => {
		const [winner, loser] = val;
		wins[winner].add(loser);
		loses[loser].add(winner);
	});

	rangeN.map((i) => {
		// i 선수를 이긴 선수(losers[i])는 i 선수에게 패한 선수들(wins[i])도 이김
		for (const winner of [...loses[i]]) {
			if (!wins[winner]) continue;
			for (const loser of wins[i]) {
				wins[winner].add(loser);
			}
		}
		// i 선수에게 패한 선수는 i선수를 이긴 선수들에게도 패함
		for (const loser of [...wins[i]]) {
			if (!loses[loser]) continue;
			for (const winner of loses[i]) {
				loses[loser].add(winner);
			}
		}
	});

	return rangeN.reduce(
		(ans, i) => (wins[i].size + loses[i].size === n - 1 ? ans + 1 : ans),
		0
	);
};