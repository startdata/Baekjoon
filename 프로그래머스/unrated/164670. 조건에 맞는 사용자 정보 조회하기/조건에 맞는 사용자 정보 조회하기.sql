SELECT 
    u2.user_id, 
    u2.nickname, 
    CONCAT_WS(' ', u2.city, u2.street_address1, u2.street_address2) 전체주소,
    CONCAT_WS('-', 
              SUBSTR(u2.tlno, 1, 3), 
              SUBSTR(u2.tlno, 4, LENGTH(u2.tlno) - 7), 
              SUBSTR(u2.tlno, -4, 4)) 전화번호
FROM used_goods_board u1
JOIN used_goods_user u2
ON u1.writer_id = u2.user_id
GROUP BY u2.user_id
HAVING count(u1.writer_id) >= 3
ORDER BY u2.user_id desc;