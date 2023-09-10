SELECT CONCAT("/home/grep/src/",f.board_id, "/",f.file_id,f.file_name,f.file_ext)
FROM USED_GOODS_FILE f
JOIN USED_GOODS_BOARD b ON f.board_id = b.board_id
WHERE b.views = (SELECT MAX(views) FROM USED_GOODS_BOARD)
ORDER BY f.file_id DESC;