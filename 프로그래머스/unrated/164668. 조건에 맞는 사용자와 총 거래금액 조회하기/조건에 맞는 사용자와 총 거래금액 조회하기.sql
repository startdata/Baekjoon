SELECT u.user_id, u.nickname, SUM(price)
FROM used_goods_board b, used_goods_user u
WHERE u.user_id = b.writer_id AND b.status = 'DONE'
GROUP BY u.user_id
HAVING SUM(price) >= 700000
ORDER BY SUM(price);